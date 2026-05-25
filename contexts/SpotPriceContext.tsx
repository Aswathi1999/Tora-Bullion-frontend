'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type Metal = { gramAED: number; ozAED: number; trend: 'up' | 'down' | 'flat' }
export type Prices = { gold: Metal; silver: Metal }
export type DataPoint = { time: string; value: number }

interface SpotPriceContextType {
  prices: Prices | null
  loading: boolean
  lastUpdated: string | null
  goldHistory: DataPoint[]
  silverHistory: DataPoint[]
}

const SpotPriceContext = createContext<SpotPriceContextType>({
  prices: null,
  loading: true,
  lastUpdated: null,
  goldHistory: [],
  silverHistory: [],
})

export const useSpotPrice = () => useContext(SpotPriceContext)

const REFRESH_MS = 60_000
const MAX_POINTS = 20

function seedHistory(current: number, count = 8): DataPoint[] {
  const now = Date.now()
  return Array.from({ length: count }, (_, i) => {
    const t = new Date(now - (count - i) * 60_000)
    const jitter = (Math.random() - 0.5) * current * 0.003
    return {
      time: t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      value: +(current + jitter).toFixed(2),
    }
  })
}

export function SpotPriceProvider({ children }: { children: React.ReactNode }) {
  const [prices, setPrices] = useState<Prices | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const [goldHistory, setGoldHistory] = useState<DataPoint[]>([])
  const [silverHistory, setSilverHistory] = useState<DataPoint[]>([])

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch('/api/spot-prices')
      if (!res.ok) throw new Error()
      const data = await res.json()
      const timeLabel = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      setPrices(prev => ({
        gold: {
          gramAED: data.gold.gramAED,
          ozAED: data.gold.ozAED,
          trend: prev
            ? data.gold.gramAED > prev.gold.gramAED ? 'up'
            : data.gold.gramAED < prev.gold.gramAED ? 'down' : 'flat'
            : 'flat',
        },
        silver: {
          gramAED: data.silver.gramAED,
          ozAED: data.silver.ozAED,
          trend: prev
            ? data.silver.gramAED > prev.silver.gramAED ? 'up'
            : data.silver.gramAED < prev.silver.gramAED ? 'down' : 'flat'
            : 'flat',
        },
      }))
      setLastUpdated(data.updatedAt)
      setGoldHistory(prev => {
        const seed = prev.length === 0 ? seedHistory(data.gold.gramAED) : prev
        return [...seed, { time: timeLabel, value: data.gold.gramAED }].slice(-MAX_POINTS)
      })
      setSilverHistory(prev => {
        const seed = prev.length === 0 ? seedHistory(data.silver.gramAED) : prev
        return [...seed, { time: timeLabel, value: data.silver.gramAED }].slice(-MAX_POINTS)
      })
    } catch {
      // keep previous prices on error
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, REFRESH_MS)
    return () => clearInterval(interval)
  }, [fetchPrices])

  return (
    <SpotPriceContext.Provider value={{ prices, loading, lastUpdated, goldHistory, silverHistory }}>
      {children}
    </SpotPriceContext.Provider>
  )
}
