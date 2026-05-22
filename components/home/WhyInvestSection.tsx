'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, PieChart, Globe, Zap, Gem, TrendingUp } from 'lucide-react'

const reasons = [
  {
    num: '01',
    icon: ShieldCheck,
    title: 'Inflation Protection',
    desc: 'Precious metals like gold and silver are powerful against currency fluctuations.',
    accent: 'gold',
  },
  {
    num: '02',
    icon: PieChart,
    title: 'Portfolio Diversification',
    desc: 'Balance your portfolio with the security of gold and silver investments in the UAE.',
    accent: 'silver',
  },
  {
    num: '03',
    icon: Globe,
    title: 'Global Market Value',
    desc: 'They are internationally recognised and valuable everywhere, unlike currency.',
    accent: 'gold',
  },
  {
    num: '04',
    icon: Zap,
    title: 'High Liquidity',
    desc: 'Bullion could be easily traded and accessed anywhere in the world.',
    accent: 'silver',
  },
  {
    num: '05',
    icon: Gem,
    title: 'Tangible Asset Ownership',
    desc: 'Physical gold and silver bullion investments offer intrinsic value unlike digital assets.',
    accent: 'gold',
  },
  {
    num: '06',
    icon: TrendingUp,
    title: 'Financial Stability',
    desc: 'For long-term financial stability, precious metals are the best choice.',
    accent: 'silver',
  },
]

const GOLD = {
  color:       '#C9982A',
  rgb:         '201,152,42',
  titleGrad:   'linear-gradient(to right, #96700F, #C9982A, #E8C060)',
  barGrad:     'linear-gradient(to right, #C9982A, #E8C060, transparent)',
  iconBg:      'linear-gradient(135deg, rgba(201,152,42,0.18), rgba(232,192,96,0.08))',
  iconBorder:  'rgba(201,152,42,0.30)',
  iconGlow:    '0 4px 24px rgba(201,152,42,0.30)',
  hoverShadow: '0 24px 64px rgba(201,152,42,0.18)',
  hoverBorder: 'rgba(201,152,42,0.40)',
  shimmer:     'linear-gradient(105deg, transparent 40%, rgba(201,152,42,0.08) 50%, transparent 60%)',
  numColor:    'rgba(201,152,42,0.08)',
}

const SILVER = {
  color:       '#6B7C84',
  rgb:         '107,124,132',
  titleGrad:   'linear-gradient(to right, #3a4f58, #6B7C84, #9EA8B0)',
  barGrad:     'linear-gradient(to right, #8B95A0, #C0CBD4, transparent)',
  iconBg:      'linear-gradient(135deg, rgba(107,124,132,0.15), rgba(192,203,212,0.07))',
  iconBorder:  'rgba(107,124,132,0.28)',
  iconGlow:    '0 4px 24px rgba(107,124,132,0.22)',
  hoverShadow: '0 24px 64px rgba(107,124,132,0.16)',
  hoverBorder: 'rgba(107,124,132,0.40)',
  shimmer:     'linear-gradient(105deg, transparent 40%, rgba(107,124,132,0.07) 50%, transparent 60%)',
  numColor:    'rgba(107,124,132,0.07)',
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
}

const headerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease } },
}

export default function WhyInvestSection() {
  const headerRef    = useRef(null)
  const gridRef      = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const gridInView   = useInView(gridRef,   { once: true, margin: '-60px' })

  return (
    <section id="why-invest" className="relative overflow-hidden bg-[#faf8f4] py-8 lg:py-12">

      {/* ── Fine dot texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,152,42,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Slow-drifting gradient wash ── */}
      <motion.div
        animate={{ x: ['0%', '30%', '0%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-y-0 left-[-30%] w-[160%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(201,152,42,0.07) 0%, transparent 50%)' }}
      />

      {/* ── Oversized ambient blobs ── */}
      <motion.div
        animate={{ y: [0, -28, 0], scale: [1, 1.06, 1], opacity: [1, 1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-20 w-[700px] h-[500px] bg-[#C9982A]/10 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 22, 0], scale: [1, 1.08, 1], opacity: [1, 1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute -bottom-40 -right-20 w-[600px] h-[500px] bg-[#8B95A0]/10 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[40%] left-[40%] w-[400px] h-[300px] bg-[#C9982A]/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* ── Hairlines ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B95A0]/25 to-transparent" />

      {/* ── Faint watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="text-[20vw] font-black uppercase tracking-tighter leading-none"
          style={{ color: 'rgba(17,17,17,0.025)' }}>
          INVEST
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">

        {/* ════════════════════════════════
            HEADER
        ════════════════════════════════ */}
        <motion.div
          ref={headerRef}
          variants={headerStagger}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          {/* Badge with glassmorphism and glow */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={headerInView ? { width: 48, opacity: 1 } : {}}
              transition={{ duration: 1, ease, delay: 0.45 }}
              className="h-px bg-gradient-to-r from-transparent to-[#C9982A]/65"
            />
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(201,152,42,0.12), rgba(139,149,160,0.06))',
                borderColor: 'rgba(201,152,42,0.28)',
                boxShadow: '0 2px 20px rgba(201,152,42,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
              }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9982A] opacity-60 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-[#C9982A]" />
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.32em]"
                style={{ background: 'linear-gradient(to right, #C9982A, #B8871A, #6B7C84)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Why Invest
              </span>
            </div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={headerInView ? { width: 48, opacity: 1 } : {}}
              transition={{ duration: 1, ease, delay: 0.45 }}
              className="h-px bg-gradient-to-l from-transparent to-[#8B95A0]/65"
            />
          </motion.div>

          {/* Cinematic heading */}
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] mb-4">
            <span className="text-[#111111]">Why Invest in </span>
            <br className="hidden sm:block" />
            <span
              style={{ background: 'linear-gradient(to right, #C9982A, #E8C060, #B8871A, #8B95A0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Precious Metals
            </span>
          </motion.h2>

          {/* Animated dual divider */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={headerInView ? { width: 52 } : {}}
              transition={{ duration: 1, ease, delay: 0.35 }}
              className="h-px"
              style={{ background: 'linear-gradient(to right, transparent, #C9982A)' }}
            />
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full border border-[#C9982A]/70"
                style={{ boxShadow: '0 0 6px rgba(201,152,42,0.4)' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9982A]/30" />
              <div className="w-1.5 h-1.5 rounded-full border border-[#8B95A0]/60" />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={headerInView ? { width: 52 } : {}}
              transition={{ duration: 1, ease, delay: 0.35 }}
              className="h-px"
              style={{ background: 'linear-gradient(to left, transparent, #8B95A0)' }}
            />
          </motion.div>

          {/* Intro paragraph */}
          <motion.p variants={fadeUp} className="text-[#555] text-base md:text-[17px] leading-[1.95]">
            Precious metals in the UAE have always been considered a reliable asset for long-term
            investment. Among them, gold and silver bullion in Abu Dhabi have a specialised space in
            the market for portfolio diversification and managing wealth.
          </motion.p>
        </motion.div>

        {/* ════════════════════════════════
            3 × 2 CARD GRID
        ════════════════════════════════ */}
        <motion.div
          ref={gridRef}
          variants={cardStagger}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reasons.map((r, i) => {
            const p = r.accent === 'gold' ? GOLD : SILVER
            const isMidCol = i === 1 || i === 4

            return (
              <motion.div
                key={i}
                variants={cardItem}
                style={{
                  translateY: isMidCol ? 16 : 0,
                  background: 'linear-gradient(160deg, #ffffff 60%, rgba(250,248,244,0.8))',
                  border: `1px solid rgba(${p.rgb},0.15)`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
                whileHover={{
                  y: isMidCol ? 10 : -6,
                  boxShadow: p.hoverShadow,
                  borderColor: p.hoverBorder,
                  transition: { duration: 0.28 },
                }}
                className="group relative flex flex-col rounded-2xl overflow-hidden cursor-default"
              >
                {/* Top metallic accent bar */}
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.1 + i * 0.07 }}
                  className="h-[3px] absolute top-0 left-0"
                  style={{ background: p.barGrad }}
                />

                {/* Hover shimmer sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-0"
                  initial={{ x: '-120%' }}
                  whileHover={{ x: '120%' }}
                  transition={{ duration: 0.65, ease: 'easeInOut' }}
                  style={{ background: p.shimmer }}
                />

                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(${p.rgb},0.06) 0%, transparent 60%)` }}
                />

                {/* Card body */}
                <div className="relative z-10 p-5 flex flex-col h-full">

                  {/* Number watermark — top right */}
                  <span
                    className="absolute top-3 right-4 text-[64px] font-black leading-none pointer-events-none select-none"
                    style={{ color: p.numColor }}
                  >
                    {r.num}
                  </span>

                  {/* Icon with glow */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 10 }}
                    transition={{ duration: 0.25 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 border"
                    style={{
                      background: p.iconBg,
                      borderColor: p.iconBorder,
                      boxShadow: p.iconGlow,
                    }}
                  >
                    <r.icon className="w-5 h-5" style={{ color: p.color }} />
                  </motion.div>

                  {/* Title with metallic gradient */}
                  <h3
                    className="text-[15px] font-bold mb-2 leading-snug"
                    style={{ background: p.titleGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {r.title}
                  </h3>

                  {/* Thin separator */}
                  <div
                    className="w-8 h-px mb-2 rounded-full"
                    style={{ background: `rgba(${p.rgb},0.35)` }}
                  />

                  {/* Description */}
                  <p className="text-[#666] text-sm leading-[1.75] flex-1">
                    {r.desc}
                  </p>

                  {/* Bottom accent line — width-reveals on scroll */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '38%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease, delay: 0.18 + i * 0.06 }}
                    className="mt-4 h-px rounded-full"
                    style={{ background: `linear-gradient(to right, rgba(${p.rgb},0.55), transparent)` }}
                  />
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
