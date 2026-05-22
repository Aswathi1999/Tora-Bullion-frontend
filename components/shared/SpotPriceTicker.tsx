'use client'

import { useState, useEffect, useCallback } from 'react'
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react'

type Metal = { gramAED: number; ozAED: number; trend: 'up' | 'down' | 'flat' }
type Prices = { gold: Metal; silver: Metal }

const REFRESH_MS = 60_000

export default function SpotPriceTicker({ theme = 'light' }) {
  const [prices, setPrices] = useState<Prices | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch('/api/spot-prices')
      if (!res.ok) throw new Error()
      const data = await res.json()

      setPrices(prev => ({
        gold: {
          gramAED: data.gold.gramAED,
          ozAED: data.gold.ozAED,
          trend: prev ? (data.gold.gramAED > prev.gold.gramAED ? 'up' : data.gold.gramAED < prev.gold.gramAED ? 'down' : 'flat') : 'flat',
        },
        silver: {
          gramAED: data.silver.gramAED,
          ozAED: data.silver.ozAED,
          trend: prev ? (data.silver.gramAED > prev.silver.gramAED ? 'up' : data.silver.gramAED < prev.silver.gramAED ? 'down' : 'flat') : 'flat',
        },
      }))
      setLastUpdated(data.updatedAt)
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

  const isDark = theme === 'dark'

  return (
    <div className={`w-full h-8 flex items-center justify-center gap-6 md:gap-12 text-xs font-mono ${
      isDark
        ? 'bg-[#0A0908] text-[#F0EDE6] border-b border-[#2E2B26]'
        : 'bg-[#1A1714] text-[#F5F3EE]'
    }`}>
      {loading || !prices ? (
        <span className="flex items-center gap-2 text-[#aaa]">
          <RefreshCw className="w-3 h-3 animate-spin" />
          Loading live prices…
        </span>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-500">GOLD</span>
            <span>AED {prices.gold.gramAED.toFixed(2)}/g</span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline">AED {prices.gold.ozAED.toFixed(2)}/oz</span>
            {prices.gold.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-400" />}
            {prices.gold.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-400" />}
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-400">SILVER</span>
            <span>AED {prices.silver.gramAED.toFixed(2)}/g</span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline">AED {prices.silver.ozAED.toFixed(2)}/oz</span>
            {prices.silver.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-400" />}
            {prices.silver.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-400" />}
          </div>
          <div className="hidden lg:flex items-center gap-1 text-gray-600">
            <RefreshCw className="w-2.5 h-2.5" />
            <span className="text-[10px]">Live</span>
          </div>
        </>
      )}
    </div>
  )
}
