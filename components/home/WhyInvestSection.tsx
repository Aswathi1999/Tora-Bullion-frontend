'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, PieChart, Globe, Zap, Gem, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Inflation Protection',
    desc: 'Precious metals like gold and silver are powerful against currency fluctuations.',
  },
  {
    icon: PieChart,
    title: 'Portfolio Diversification',
    desc: 'Balance your portfolio with the security of gold and silver investments in the UAE.',
  },
  {
    icon: Globe,
    title: 'Global Market Value',
    desc: 'They are internationally recognised and valuable everywhere, unlike currency.',
  },
  {
    icon: Zap,
    title: 'High Liquidity',
    desc: 'Bullion could be easily traded and accessed anywhere in the world.',
  },
  {
    icon: Gem,
    title: 'Tangible Asset Ownership',
    desc: 'Physical gold and silver bullion investments offer intrinsic value unlike digital assets.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Stability',
    desc: 'For long-term financial stability, precious metals are the best choice.',
  },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export default function WhyInvestSection() {
  const headerRef    = useRef(null)
  const gridRef      = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const gridInView   = useInView(gridRef,   { once: true, margin: '-60px' })

  return (
    <section id="why-invest" className="py-16 bg-[#faf8f4]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          variants={stagger}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Why Invest</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#111]">
            A Smarter Approach to{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">
              Precious Metals Investment
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-[#666] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Precious metals in the UAE have always been considered a reliable asset for long-term
            investment. Among them, gold and silver bullion in Abu Dhabi have a specialised space in
            the market for portfolio diversification and managing wealth.
          </motion.p>
        </motion.div>

        {/* ── Card Grid ── */}
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group relative bg-white rounded-2xl p-7 border border-[#E8DFC8] shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:border-[#C9982A]/40 hover:shadow-[0_8px_32px_rgba(201,152,42,0.14)] transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Gold shimmer top bar */}
              <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-transparent rounded-full transition-all duration-500 ease-out" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#C9982A]/10 border border-[#C9982A]/20 flex items-center justify-center mb-5 group-hover:bg-[#C9982A]/20 group-hover:scale-110 transition-all duration-300">
                <r.icon className="w-5 h-5 text-[#C9982A]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#111] mb-2 group-hover:text-[#C9982A] transition-colors duration-300">{r.title}</h3>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
