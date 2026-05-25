'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, RefreshCw, Minus } from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { useSpotPrice } from '@/contexts/SpotPriceContext'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function fmt(n: number) {
  return n.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface CustomTooltipProps {
  active?: boolean
  payload?: { value: number }[]
  label?: string
  accent: string
}

function CustomTooltip({ active, payload, label, accent }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0A0800] border rounded-lg px-3 py-2 text-xs shadow-xl" style={{ borderColor: `${accent}40` }}>
      <p className="text-white/40 mb-0.5">{label}</p>
      <p className="font-bold" style={{ color: accent }}>AED {fmt(payload[0].value)}</p>
    </div>
  )
}

export default function LivePriceSection() {
  const { prices, loading, goldHistory, silverHistory } = useSpotPrice()

  const metals = prices ? [
    { label: 'Gold',   symbol: 'XAU', purity: '999.9', ...prices.gold,   accent: '#C9982A', gradId: 'goldGrad', history: goldHistory,   glow: 'rgba(201,152,42,0.18)' },
    { label: 'Silver', symbol: 'XAG', purity: '999',   ...prices.silver, accent: '#A0ADB5', gradId: 'silverGrad', history: silverHistory, glow: 'rgba(160,173,181,0.10)' },
  ] : []

  return (
    <section className="relative overflow-hidden bg-[#0A0800] py-16 lg:py-20">

      {/* Ambient blobs */}
      <motion.div
        animate={{ y: [0, -22, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-40 left-[15%] h-[500px] w-[600px] rounded-full bg-[#C9982A]/10 blur-[140px]"
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="pointer-events-none absolute -bottom-40 right-[-5%] h-[400px] w-[500px] rounded-full bg-[#C9982A]/8 blur-[120px]"
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(201,152,42,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C9982A]/35 bg-[#C9982A]/10 px-4 py-1.5 mb-4">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8C060] opacity-70 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-[#C9982A]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9982A]">Live Price</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Today&apos;s{' '}
              <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#B8871A] bg-clip-text text-transparent">
                Spot Price
              </span>
            </h2>
          </div>
          <p className="text-white/45 text-sm md:text-base max-w-xs md:text-right leading-relaxed">
            Catch the live price for gold and silver. Tora Bullion follows this international spot price for all our products with a transparent transaction process.
          </p>
        </motion.div>

        {/* Cards */}
        {loading ? (
          <div className="flex items-center justify-center gap-3 py-20">
            <RefreshCw className="w-5 h-5 animate-spin text-[#C9982A]" />
            <span className="text-white/40 text-sm">Fetching live prices…</span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {metals.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12, ease }}
                className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm"
                style={{ boxShadow: `0 0 60px ${m.glow}` }}
              >
                {/* Top accent bar */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${m.accent}, transparent)` }} />

                {/* Symbol watermark */}
                <span className="absolute -right-3 bottom-8 text-[8rem] font-black leading-none select-none pointer-events-none opacity-[0.04] text-white">
                  {m.symbol}
                </span>

                <div className="relative p-6 md:p-7">
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10" style={{ background: `${m.accent}18` }}>
                        <span className="text-xs font-black" style={{ color: m.accent }}>{m.symbol}</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-base">{m.label}</p>
                        <p className="text-white/35 text-[11px] tracking-widest">{m.purity} · Spot Price</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                      m.trend === 'up'   ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                      m.trend === 'down' ? 'bg-red-500/10  text-red-400  border-red-500/20'   :
                                          'bg-white/5     text-white/30 border-white/10'
                    }`}>
                      {m.trend === 'up'   && <TrendingUp className="w-3.5 h-3.5" />}
                      {m.trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
                      {m.trend === 'flat' && <Minus className="w-3.5 h-3.5" />}
                      {m.trend === 'up' ? 'Rising' : m.trend === 'down' ? 'Falling' : 'Stable'}
                    </div>
                  </div>

                  {/* Price numbers */}
                  <div className="grid grid-cols-2 gap-6 mb-7">
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">Per Gram</p>
                      <p className="text-[2.4rem] md:text-[2.8rem] font-black leading-none" style={{ color: m.accent }}>
                        {fmt(m.gramAED)}
                      </p>
                      <p className="text-white/30 text-xs mt-1.5">AED / gram</p>
                    </div>
                    <div className="border-l border-white/[0.06] pl-6">
                      <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">Per Troy Oz</p>
                      <p className="text-[2.4rem] md:text-[2.8rem] font-black leading-none text-white">
                        {fmt(m.ozAED)}
                      </p>
                      <p className="text-white/30 text-xs mt-1.5">AED / oz</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <motion.div
                    className="h-[120px] w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={m.history} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
                        <defs>
                          <linearGradient id={m.gradId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%"   stopColor={m.accent} stopOpacity={0.35} />
                            <stop offset="100%" stopColor={m.accent} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                        <XAxis
                          dataKey="time"
                          tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 9 }}
                          axisLine={false}
                          tickLine={false}
                          interval="preserveStartEnd"
                        />
                        <YAxis
                          domain={['auto', 'auto']}
                          tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 9 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip accent={m.accent} />} />
                        <Area
                          type="basis"
                          dataKey="value"
                          stroke={m.accent}
                          strokeWidth={2.5}
                          fill={`url(#${m.gradId})`}
                          dot={false}
                          activeDot={{ r: 5, fill: m.accent, strokeWidth: 2, stroke: 'rgba(255,255,255,0.2)' }}
                          isAnimationActive={true}
                          animationDuration={1400}
                          animationEasing="ease-in-out"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </motion.div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[10px] text-white/20">
                      <RefreshCw className="w-2.5 h-2.5" />
                      Updates every 60s
                    </span>
                    <span className="text-[10px] text-white/20">1 USD = 3.6725 AED</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
