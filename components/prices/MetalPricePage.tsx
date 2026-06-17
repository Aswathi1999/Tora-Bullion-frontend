'use client'

import Link from 'next/link'
import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

function useReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

/* ─── Live price hook ─────────────────────────────────────────────────────── */
interface Prices { ozUSD: number; ozAED: number; gramAED: number }

function useLivePrices(key: 'gold' | 'silver') {
  const [prices, setPrices]       = useState<Prices | null>(null)
  const [loading, setLoading]     = useState(true)
  const [fetchedAt, setFetchedAt] = useState<number | null>(null)
  const [now, setNow]             = useState(0)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/spot-prices')
      if (res.ok) {
        const json = await res.json()
        if (!json.error) { setPrices(json[key]); setFetchedAt(Date.now()) }
      }
    } catch {}
    setLoading(false)
  }, [key])

  useEffect(() => { load(); const iv = setInterval(load, 60_000); return () => clearInterval(iv) }, [load])
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])

  const secondsSince = fetchedAt ? Math.floor((now - fetchedAt) / 1000) : null
  return { prices, loading, secondsSince }
}

const fmt = (n: number, d = 2) =>
  n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })

/* ─── Config ──────────────────────────────────────────────────────────────── */
const GOLD       = '#C9982A'
const SILVER     = '#7A7A7A'
const goldRgba   = (a: number) => `rgba(201,152,42,${a})`
const silverRgba = (a: number) => `rgba(122,122,122,${a})`

interface MetalConfig {
  key:         'gold' | 'silver'
  accent:      string
  ar:          (a: number) => string
  badge:       string
  name:        string
  desc:        string
  buyHref:     string
  sellHref:    string
  factors:     { icon: string; title: string; desc: string }[]
  aboutTitle:  string
  aboutBody:   string[]
}

const configs: Record<'gold' | 'silver', MetalConfig> = {
  gold: {
    key: 'gold', accent: GOLD, ar: goldRgba,
    badge: 'Live Gold Price · UAE',
    name:  'Gold',
    desc:  'Real-time gold spot price in AED and USD, updated every minute from international markets. Track gold per gram and per troy ounce in the UAE.',
    buyHref:  '/gold-bullion',
    sellHref: '/services/sell-gold-dubai',
    factors: [
      { icon: '◈', title: 'US Dollar Strength',      desc: 'Gold is priced globally in USD. When the dollar weakens, gold becomes cheaper for foreign buyers, boosting demand and lifting the price.' },
      { icon: '◎', title: 'Central Bank Policy',      desc: 'Interest rate decisions by the Federal Reserve and other central banks affect gold\'s appeal as a non-yielding safe-haven asset.' },
      { icon: '◇', title: 'Geopolitical Uncertainty', desc: 'Political instability, conflicts, and global tensions historically drive safe-haven demand for gold, pushing prices higher.' },
      { icon: '○', title: 'Supply & Mining',           desc: 'Annual mine production and recycling volumes affect the long-term gold supply. Disruptions in major producing regions can tighten supply and support prices.' },
    ],
    aboutTitle: 'Understanding the Gold Spot Price',
    aboutBody: [
      'The gold spot price is the current market price at which gold can be bought or sold for immediate delivery. It is quoted in US dollars per troy ounce (31.1035 g) and changes continuously throughout global trading hours.',
      'At Tora Bullion, our gold bar and coin prices are benchmarked against the live international spot price, ensuring you always receive transparent and fair market rates. The AED price is derived using the official USD/AED exchange rate of 3.6725.',
    ],
  },
  silver: {
    key: 'silver', accent: SILVER, ar: silverRgba,
    badge: 'Live Silver Price · UAE',
    name:  'Silver',
    desc:  'Real-time silver spot price in AED and USD, updated every minute from international markets. Track silver per gram and per troy ounce in the UAE.',
    buyHref:  '/silver-bullion',
    sellHref: '/services/sell-silver-dubai',
    factors: [
      { icon: '◈', title: 'Industrial Demand',       desc: 'Over 50% of annual silver demand comes from industry — solar panels, electronics, EV batteries, and medical devices — creating strong fundamental demand.' },
      { icon: '◎', title: 'Gold Correlation',         desc: 'Silver often moves in correlation with gold. During precious metals bull markets, silver can outperform gold due to its smaller market and dual monetary-industrial nature.' },
      { icon: '◇', title: 'Investor Sentiment',       desc: 'Silver\'s smaller market makes it more sensitive to investment flows. Strong investor interest can amplify price moves significantly in both directions.' },
      { icon: '○', title: 'Supply Dynamics',           desc: 'Most silver is produced as a by-product of copper, lead, and zinc mining. Slowdowns in base metal production can constrain silver supply and support prices.' },
    ],
    aboutTitle: 'Understanding the Silver Spot Price',
    aboutBody: [
      'The silver spot price is the current market price for immediate delivery of silver, quoted in US dollars per troy ounce (31.1035 g). It is determined continuously by global commodity exchanges including COMEX and the London Bullion Market.',
      'At Tora Bullion, our silver bar and coin prices are benchmarked against the live international spot price, ensuring transparent and fair market rates. The AED price is calculated using the official USD/AED exchange rate of 3.6725.',
    ],
  },
}

const GRAMS_PER_OZ = 31.1035

const weightRows = [
  { label: '1 gram',    grams: 1 },
  { label: '2 grams',   grams: 2 },
  { label: '5 grams',   grams: 5 },
  { label: '10 grams',  grams: 10 },
  { label: '20 grams',  grams: 20 },
  { label: '50 grams',  grams: 50 },
  { label: '100 grams', grams: 100 },
  { label: '1 troy oz', grams: GRAMS_PER_OZ },
]

/* ═══════════════════════════════════════════════════════════════════════════
   HERO — live price display
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection({ c, prices, loading, secondsSince }: {
  c: MetalConfig; prices: Prices | null; loading: boolean; secondsSince: number | null
}) {
  const { accent, ar } = c

  return (
    <section className="relative bg-[#faf8f4] overflow-hidden py-16 lg:py-24">
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[150px]"
        style={{ backgroundColor: ar(0.5) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-8 inline-flex items-center gap-3 border px-5 py-2"
              style={{ borderColor: ar(0.3), backgroundColor: ar(0.08) }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>{c.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.6rem,7vw,4rem)] font-bold leading-[1.02] tracking-tight text-[#111111] mb-6"
            >
              Live <span style={{ color: accent }}>{c.name}</span> Price<br />in the UAE
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="origin-left mb-8 flex items-center gap-2"
            >
              <div className="h-[2px] w-16" style={{ backgroundColor: accent }} />
              <div className="h-[2px] w-7" style={{ backgroundColor: ar(0.4) }} />
              <div className="h-[2px] w-3" style={{ backgroundColor: ar(0.2) }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="text-[1rem] text-[#585858] leading-[1.88] mb-5 max-w-[480px]"
            >
              {c.desc}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-[11px] text-[#999] mb-9"
            >
              {loading ? 'Fetching live prices…' : secondsSince !== null ? `Prices updated ${secondsSince}s ago · Refreshes every 60s` : ''}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link href={c.buyHref}>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: accent }}
                >
                  Buy {c.name} <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href={c.sellHref}>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 border border-[#111111]/22 text-[#111111] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Sell {c.name} <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right — price cards */}
          <div className="space-y-4">
            {/* Primary — USD/oz */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.14, ease }}
              className="relative bg-white border overflow-hidden shadow-[0_8px_60px_rgba(201,152,42,0.10)] px-7 py-7"
              style={{ borderColor: ar(0.25) }}
            >
              <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(to right, ${accent}, ${ar(0.35)})` }} />
              <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: ar(0.3) }} />
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] mb-3" style={{ color: accent }}>
                Spot Price · USD / troy oz
              </p>
              {loading ? (
                <div className="h-16 w-52 rounded animate-pulse" style={{ backgroundColor: ar(0.08) }} />
              ) : (
                <p className="text-[3.6rem] sm:text-[4.2rem] font-bold leading-none tracking-tight text-[#111111]">
                  {prices ? `$${fmt(prices.ozUSD)}` : '—'}
                </p>
              )}
            </motion.div>

            {/* Secondary — AED/oz + AED/gram */}
            <div className="grid grid-cols-2 gap-4">
              {([
                { label: 'AED / troy oz', val: prices?.ozAED },
                { label: 'AED / gram',    val: prices?.gramAED },
              ] as const).map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.85, delay: 0.22 + i * 0.08, ease }}
                  className="relative bg-white border overflow-hidden px-5 py-5"
                  style={{ borderColor: ar(0.2) }}
                >
                  <div className="absolute inset-x-0 top-0 h-[2px]" style={{ backgroundColor: ar(0.35) }} />
                  <p className="text-[9px] font-bold uppercase tracking-[0.26em] mb-2" style={{ color: accent }}>{card.label}</p>
                  {loading ? (
                    <div className="h-8 w-28 rounded animate-pulse" style={{ backgroundColor: ar(0.08) }} />
                  ) : (
                    <p className="text-[1.55rem] sm:text-[1.8rem] font-bold leading-tight text-[#111111]">
                      {card.val != null ? `AED ${fmt(card.val)}` : '—'}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WEIGHT TABLE
═══════════════════════════════════════════════════════════════════════════ */
function WeightTableSection({ c, prices, loading }: { c: MetalConfig; prices: Prices | null; loading: boolean }) {
  const { ref, inView } = useReveal()
  const { accent, ar } = c

  return (
    <section ref={ref} className="relative bg-[#111111] py-14 lg:py-20 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 h-[400px] w-[800px] rounded-full blur-[130px]" style={{ backgroundColor: ar(0.07) }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12" style={{ backgroundColor: accent }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>Price Table</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            {c.name} Price in <span style={{ color: accent }}>AED by Weight</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="overflow-hidden border border-white/10"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/10 px-6 py-3" style={{ backgroundColor: ar(0.1) }}>
            {(['Weight', 'AED', 'USD'] as const).map((h, hi) => (
              <span key={h} className={`text-[10px] font-bold uppercase tracking-[0.28em] ${hi === 1 ? 'text-center' : hi === 2 ? 'text-right' : ''}`} style={{ color: accent }}>{h}</span>
            ))}
          </div>

          {weightRows.map((w, i) => {
            const aed = prices ? prices.gramAED * w.grams : null
            const usd = prices ? (prices.ozUSD / GRAMS_PER_OZ) * w.grams : null
            const isOz = w.label === '1 troy oz'

            return (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.04, ease }}
                className={`grid grid-cols-3 px-6 py-4 border-b border-white/[0.06] last:border-0 transition-colors duration-150 hover:bg-white/[0.03] ${isOz ? 'bg-white/[0.04]' : ''}`}
              >
                <span className={`text-[0.9rem] font-medium ${isOz ? 'text-white' : 'text-[#aaa]'}`}>
                  {w.label}
                  {isOz && <span className="ml-2 text-[9px] uppercase tracking-wider" style={{ color: accent }}>· 31.1 g</span>}
                </span>
                <span className={`text-[0.9rem] font-bold tabular-nums text-center`} style={{ color: isOz ? accent : '#e0e0e0' }}>
                  {loading ? <span className="inline-block w-24 h-3 bg-white/10 rounded animate-pulse" /> : aed ? `AED ${fmt(aed)}` : '—'}
                </span>
                <span className="text-[0.88rem] tabular-nums text-right text-[#777]">
                  {loading ? <span className="inline-block w-16 h-3 bg-white/10 rounded animate-pulse" /> : usd ? `$${fmt(usd)}` : '—'}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        <p className="mt-3 text-[10px] text-white/20 text-right">
          Indicative prices · Based on live spot rate · AED/USD fixed at 3.6725
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   FACTORS
═══════════════════════════════════════════════════════════════════════════ */
function FactorsSection({ c }: { c: MetalConfig }) {
  const { ref, inView } = useReveal()
  const { accent, ar, factors } = c

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12" style={{ backgroundColor: accent }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>Market Drivers</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            What Drives the <span style={{ color: accent }}>{c.name} Price?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {factors.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.1 + i * 0.08, ease }}
              className="group relative bg-white border border-[#e8e2d8] px-6 py-7 overflow-hidden hover:shadow-[0_6px_36px_rgba(201,152,42,0.1)] transition-shadow duration-400 cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${accent}, ${ar(0.3)})` }} />
              <span className="pointer-events-none absolute right-4 top-2 text-[3.5rem] font-bold leading-none text-[#111]/[0.05] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border" style={{ borderColor: ar(0.4) }}>
                <span className="text-[0.95rem]" style={{ color: accent }}>{f.icon}</span>
              </div>
              <h3 className="text-[1rem] font-bold text-[#111111] mb-2.5">{f.title}</h3>
              <div className="mb-3.5 h-px w-7 group-hover:w-12 transition-all duration-400" style={{ backgroundColor: ar(0.4) }} />
              <p className="text-[0.84rem] text-[#636363] leading-[1.82]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT SPOT PRICE
═══════════════════════════════════════════════════════════════════════════ */
function AboutSection({ c }: { c: MetalConfig }) {
  const { ref, inView } = useReveal()
  const { accent, ar } = c

  return (
    <section ref={ref} className="relative bg-white py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${ar(0.03)} 0%, transparent 70%)` }} />

      <div className="relative mx-auto max-w-[860px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-5 flex items-center gap-4"
        >
          <div className="h-px w-12" style={{ backgroundColor: accent }} />
          <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>About Spot Price</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-8"
        >
          {c.aboutTitle}
        </motion.h2>

        {c.aboutBody.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease }}
            className="text-[1rem] text-[#555] leading-[1.9] mb-5"
          >
            {para}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════════════════════ */
function CTASection({ c }: { c: MetalConfig }) {
  const { ref, inView } = useReveal('-40px')
  const { accent, ar } = c

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-10 lg:py-14 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full blur-[130px]" style={{ backgroundColor: ar(0.07) }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/15 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease }}
          className="relative mx-auto max-w-[1000px] bg-white overflow-hidden border shadow-[0_8px_60px_rgba(201,152,42,0.08)]"
          style={{ borderColor: ar(0.25) }}
        >
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(to right, ${accent}, ${ar(0.4)})` }} />
          <div className="pointer-events-none absolute left-5 top-6 h-6 w-6 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: ar(0.5) }} />
          <div className="pointer-events-none absolute right-5 top-6 h-6 w-6 border-r-[1.5px] border-t-[1.5px]" style={{ borderColor: ar(0.5) }} />
          <div className="pointer-events-none absolute left-5 bottom-5 h-6 w-6 border-l-[1.5px] border-b-[1.5px]" style={{ borderColor: ar(0.28) }} />
          <div className="pointer-events-none absolute right-5 bottom-5 h-6 w-6 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: ar(0.28) }} />

          <div className="px-8 pt-10 pb-10 sm:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold text-[#111111] leading-[1.15] tracking-tight mb-5"
            >
              Ready to Buy or Sell <span style={{ color: accent }}>{c.name} Bullion?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-[0.97rem] leading-[1.88] text-[#636363] mb-8 max-w-[520px] mx-auto"
            >
              Tora Bullion offers certified {c.name.toLowerCase()} bars and coins at live spot prices in Dubai and Abu Dhabi. DET-licensed, LBMA-certified, same-day collection.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.28, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href={c.buyHref} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ backgroundColor: accent }}
                >
                  Buy {c.name} <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#111111]/20 text-[#111111] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Contact Us <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════════════════════════ */
export default function MetalPricePage({ metal }: { metal: 'gold' | 'silver' }) {
  const c = configs[metal]
  const { prices, loading, secondsSince } = useLivePrices(metal)

  return (
    <main className="overflow-x-hidden">
      <HeroSection    c={c} prices={prices} loading={loading} secondsSince={secondsSince} />
      <WeightTableSection c={c} prices={prices} loading={loading} />
      <FactorsSection c={c} />
      <AboutSection   c={c} />
      <CTASection     c={c} />
    </main>
  )
}
