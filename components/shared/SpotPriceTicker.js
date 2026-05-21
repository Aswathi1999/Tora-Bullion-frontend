'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function SpotPriceTicker({ theme = 'light' }) {
  const [prices, setPrices] = useState({
    gold: { gramAED: 312.50, ozAED: 9720.00, trend: 'up' },
    silver: { gramAED: 3.85, ozAED: 119.75, trend: 'up' }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => {
        const goldChange = (Math.random() - 0.5) * 0.4
        const silverChange = (Math.random() - 0.5) * 0.02
        return {
          gold: {
            gramAED: Math.max(300, prev.gold.gramAED + goldChange),
            ozAED: Math.max(9000, prev.gold.ozAED + goldChange * 31.1),
            trend: goldChange >= 0 ? 'up' : 'down'
          },
          silver: {
            gramAED: Math.max(3.5, prev.silver.gramAED + silverChange),
            ozAED: Math.max(110, prev.silver.ozAED + silverChange * 31.1),
            trend: silverChange >= 0 ? 'up' : 'down'
          }
        }
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const isDark = theme === 'dark'

  return (
    <div className={`w-full h-8 flex items-center justify-center gap-6 md:gap-12 text-xs font-mono ${
      isDark 
        ? 'bg-[#0A0908] text-[#F0EDE6] border-b border-[#2E2B26]' 
        : 'bg-[#1A1714] text-[#F5F3EE]'
    }`}>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-amber-500">GOLD</span>
        <span>AED {prices.gold.gramAED.toFixed(2)}/g</span>
        <span className="hidden md:inline text-gray-400">|</span>
        <span className="hidden md:inline">AED {prices.gold.ozAED.toFixed(2)}/oz</span>
        {prices.gold.trend === 'up' ? (
          <TrendingUp className="w-3 h-3 text-green-500" />
        ) : (
          <TrendingDown className="w-3 h-3 text-red-500" />
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-400">SILVER</span>
        <span>AED {prices.silver.gramAED.toFixed(2)}/g</span>
        <span className="hidden md:inline text-gray-400">|</span>
        <span className="hidden md:inline">AED {prices.silver.ozAED.toFixed(2)}/oz</span>
        {prices.silver.trend === 'up' ? (
          <TrendingUp className="w-3 h-3 text-green-500" />
        ) : (
          <TrendingDown className="w-3 h-3 text-red-500" />
        )}
      </div>
    </div>
  )
}
