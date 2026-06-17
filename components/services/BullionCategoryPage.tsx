'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

function useReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface BullionConfig {
  accent: string
  accentRgba: (a: number) => string
  hero: {
    badge: string
    titlePre: string
    titleAccent: string
    titlePost: string
    titleLine2: string
    desc: string
    image: string
    stats: { value: string; label: string }[]
  }
  cityServices: {
    city: string
    desc: string
    items: { label: string; href: string }[]
  }[]
  investReasons: { icon: string; title: string; desc: string }[]
  about: {
    title: string
    titleAccent: string
    body: string[]
    specs: { label: string; value: string }[]
  }
}

/* ─── Config data ─────────────────────────────────────────────────────────── */
const GOLD = '#C9982A'
const SILVER = '#7A7A7A'
const goldRgba = (a: number) => `rgba(201,152,42,${a})`
const silverRgba = (a: number) => `rgba(122,122,122,${a})`

export const bullionConfigs: Record<'gold' | 'silver', BullionConfig> = {
  gold: {
    accent: GOLD,
    accentRgba: goldRgba,
    hero: {
      badge: 'Gold Bullion · UAE Premier Dealer',
      titlePre: 'Premium ',
      titleAccent: 'Gold',
      titlePost: ' Bullion',
      titleLine2: 'in the UAE',
      desc: "Buy and sell investment-grade gold bars and coins across Dubai and Abu Dhabi. DET-licensed, LBMA-certified, and priced at live spot rates — Tora Bullion is the UAE's trusted name in precious metals.",
      image: '/gold_coins.jpg',
      stats: [
        { value: '2016', label: 'Est.' },
        { value: 'DET', label: 'Licensed' },
        { value: 'LBMA', label: 'Certified' },
      ],
    },
    cityServices: [
      {
        city: 'Gold Bullion in Dubai',
        desc: 'Visit our Dubai showroom for same-day access to investment-grade gold bars and coins, with live spot pricing and full DET compliance.',
        items: [
          { label: 'Buy Gold Bars Dubai',  href: '/services/buy-gold-bars-dubai' },
          { label: 'Buy Gold Coins Dubai', href: '/services/buy-gold-coins-dubai' },
          { label: 'Sell Gold Dubai',      href: '/services/sell-gold-dubai' },
        ],
      },
      {
        city: 'Gold Bullion in Abu Dhabi',
        desc: 'Serving Abu Dhabi investors with the same certified gold bullion range, transparent pricing, and expert guidance available in Dubai.',
        items: [
          { label: 'Buy Gold Bars Abu Dhabi',  href: '/services/buy-gold-bars-abu-dhabi' },
          { label: 'Buy Gold Coins Abu Dhabi', href: '/services/buy-gold-coins-abu-dhabi' },
          { label: 'Sell Gold Abu Dhabi',      href: '/services/sell-gold-abu-dhabi' },
        ],
      },
    ],
    investReasons: [
      {
        icon: '◈',
        title: 'Store of Value',
        desc: 'Gold has preserved wealth for thousands of years. As a tangible asset with intrinsic value, it protects your purchasing power against inflation and currency devaluation over time.',
      },
      {
        icon: '◎',
        title: 'Portfolio Diversification',
        desc: 'Gold holds a low or negative correlation to traditional financial assets. Adding physical gold reduces overall portfolio risk and smooths out volatility in uncertain markets.',
      },
      {
        icon: '◇',
        title: 'Safe-Haven Asset',
        desc: "During geopolitical uncertainty or market downturns, gold consistently maintains or increases in value — making it the world's most trusted crisis hedge and wealth preserver.",
      },
    ],
    about: {
      title: 'What is ',
      titleAccent: 'Gold Bullion?',
      body: [
        'Gold bullion refers to investment-grade gold in the form of bars or coins with a minimum purity of 999.9 fine. Unlike jewellery, bullion is valued purely for its precious metal content — not craftsmanship or design — making it the purest form of gold investment.',
        'At Tora Bullion, we stock a comprehensive range of LBMA-certified gold bars from 1g to 1kg, and gold coins from leading world mints including the Royal Mint, US Mint, and Perth Mint. Every product is fully authenticated and sourced from internationally accredited refineries.',
      ],
      specs: [
        { label: 'Purity', value: '999.9 Fine Gold' },
        { label: 'Forms', value: 'Bars (1g – 1kg) & Coins' },
        { label: 'Certification', value: 'LBMA Accredited' },
        { label: 'Licensed by', value: 'Dubai Economy & Tourism' },
      ],
    },
  },

  silver: {
    accent: SILVER,
    accentRgba: silverRgba,
    hero: {
      badge: 'Silver Bullion · UAE Premier Dealer',
      titlePre: 'Premium ',
      titleAccent: 'Silver',
      titlePost: ' Bullion',
      titleLine2: 'in the UAE',
      desc: "Buy and sell investment-grade silver bars and coins across Dubai and Abu Dhabi. DET-licensed, certified, and priced at live spot rates — Tora Bullion is the UAE's trusted name in silver investment.",
      image: '/silver_bars.jpg',
      stats: [
        { value: '2016', label: 'Est.' },
        { value: 'DET', label: 'Licensed' },
        { value: '999', label: 'Fine Silver' },
      ],
    },
    cityServices: [
      {
        city: 'Silver Bullion in Dubai',
        desc: 'Visit our Dubai showroom for same-day access to investment-grade silver bars and coins, with live spot pricing and full DET compliance.',
        items: [
          { label: 'Buy Silver Bars Dubai',  href: '/services/buy-silver-bars-dubai' },
          { label: 'Buy Silver Coins Dubai', href: '/services/buy-silver-coins-dubai' },
          { label: 'Sell Silver Dubai',      href: '/services/sell-silver-dubai' },
        ],
      },
      {
        city: 'Silver Bullion in Abu Dhabi',
        desc: 'Serving Abu Dhabi investors with the same certified silver bullion range, transparent pricing, and expert guidance as our Dubai showroom.',
        items: [
          { label: 'Buy Silver Bars Abu Dhabi',  href: '/services/buy-silver-bars-abu-dhabi' },
          { label: 'Buy Silver Coins Abu Dhabi', href: '/services/buy-silver-coins-abu-dhabi' },
          { label: 'Sell Silver Abu Dhabi',      href: '/services/sell-silver-abu-dhabi' },
        ],
      },
    ],
    investReasons: [
      {
        icon: '◈',
        title: 'Affordable Entry Point',
        desc: 'Silver delivers the benefits of a precious metals investment at a fraction of the cost of gold, making it the ideal starting point for first-time investors and accessible for any budget.',
      },
      {
        icon: '◎',
        title: 'Industrial & Monetary Demand',
        desc: 'Silver is indispensable in solar panels, electronics, and medical technology — creating sustained fundamental demand that goes far beyond investment sentiment and monetary value.',
      },
      {
        icon: '◇',
        title: 'Inflation Hedge',
        desc: 'Like gold, silver acts as a reliable store of value against currency devaluation and inflation, providing tangible protection for your wealth through economic uncertainty.',
      },
    ],
    about: {
      title: 'What is ',
      titleAccent: 'Silver Bullion?',
      body: [
        'Silver bullion refers to investment-grade silver in bar or coin form with a minimum purity of 999 fine. It is one of the most accessible entry points into precious metals investing, combining the monetary store-of-value properties of gold with strong industrial demand fundamentals.',
        "Tora Bullion stocks a full range of certified silver bars from 100g to 1kg, and silver coins from the world's leading mints. All products are sourced from certified refineries and supplied with complete authentication documentation.",
      ],
      specs: [
        { label: 'Purity', value: '999 Fine Silver' },
        { label: 'Forms', value: 'Bars (100g – 1kg) & Coins' },
        { label: 'Certification', value: 'Certified Refineries' },
        { label: 'Licensed by', value: 'Dubai Economy & Tourism' },
      ],
    },
  },
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection({ c }: { c: BullionConfig }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgParallax = useTransform(scrollYProgress, [0, 1], ['0px', '-52px'])
  const { accent, accentRgba, hero } = c

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#faf8f4] overflow-hidden flex items-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2 h-[760px] w-[760px] rounded-full blur-[160px]"
        style={{ backgroundColor: accentRgba(0.55) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-12 pt-14 pb-12 lg:pt-20 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-9 inline-flex items-center gap-2.5 border px-5 py-2"
              style={{ borderColor: accentRgba(0.3), backgroundColor: accentRgba(0.08) }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.6rem,7vw,4rem)] font-bold leading-[1.02] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              {hero.titlePre}
              <span style={{ color: accent }}>{hero.titleAccent}</span>
              {hero.titlePost}
              <br />
              {hero.titleLine2}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="origin-left mb-9 flex items-center gap-2"
            >
              <div className="h-[2px] w-16" style={{ backgroundColor: accent }} />
              <div className="h-[2px] w-7" style={{ backgroundColor: accentRgba(0.4) }} />
              <div className="h-[2px] w-3" style={{ backgroundColor: accentRgba(0.2) }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="text-[0.95rem] sm:text-[1.05rem] text-[#585858] leading-[1.88] mb-10 max-w-[520px]"
            >
              {hero.desc}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease }}
              className="flex items-center gap-6 mb-10"
            >
              {hero.stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[1.6rem] font-bold leading-none" style={{ color: accent }}>{s.value}</span>
                  <span className="text-[9px] uppercase tracking-[0.28em] text-[#888] mt-1">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.36, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: accent }}
                >
                  Shop Now <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 border border-[#111111]/22 text-[#111111] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Contact Us <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right – image composition */}
          <div className="relative h-[440px] sm:h-[540px] lg:h-[680px] select-none">
            <motion.div
              animate={{ scale: [1, 1.24, 1], opacity: [0.14, 0.28, 0.14] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[28%] top-[43%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full blur-[88px]"
              style={{ backgroundColor: accent }}
            />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.12, ease }}
              style={{ y: imgParallax }}
              className="absolute left-0 top-[5%] w-[60%] h-[86%] overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.20)]"
            >
              <Image src={hero.image} alt={hero.titleAccent + ' bullion'} fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/32" />
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: accent }} />
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: accentRgba(0.35) }} />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">
                Investment Grade Bullion
              </p>
            </motion.div>

            {/* Est. card */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.54, ease }}
              className="hidden sm:block absolute right-0 top-[7%]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="bg-white/96 backdrop-blur-sm border border-[#e6ddd0] px-5 sm:px-6 py-4 sm:py-5 shadow-[0_12px_50px_rgba(0,0,0,0.09)]"
              >
                <p className="text-[9px] text-[#aaa] uppercase tracking-[0.26em] font-semibold leading-none">Est.</p>
                <p className="mt-1 text-[2.4rem] sm:text-[3rem] font-bold leading-[1.0]" style={{ color: accent }}>2016</p>
                <div className="mt-2 h-px w-full" style={{ backgroundColor: accentRgba(0.16) }} />
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.24em] text-[#bbb]">Dubai · Gold Souk</p>
              </motion.div>
            </motion.div>

            {/* DET badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.70, ease }}
              className="hidden sm:block absolute left-[54%] bottom-[18%]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="flex items-center gap-3 bg-[#111111]/92 backdrop-blur-sm border px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
                style={{ borderColor: accentRgba(0.28) }}
              >
                <div className="h-8 w-8 flex-shrink-0 border flex items-center justify-center" style={{ borderColor: accentRgba(0.5) }}>
                  <span className="text-sm" style={{ color: accent }}>✦</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">DET Licensed</p>
                  <p className="text-[8px] text-white/45 mt-0.5">Certified Bullion Dealer</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES BY CITY
═══════════════════════════════════════════════════════════════════════════ */
function ServicesSection({ c }: { c: BullionConfig }) {
  const { ref, inView } = useReveal()
  const { accent, accentRgba, cityServices } = c

  return (
    <section ref={ref} className="relative bg-[#111111] py-16 lg:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 h-[500px] w-[900px] rounded-full blur-[140px]"
        style={{ backgroundColor: accentRgba(0.07) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.026]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12" style={{ backgroundColor: accent }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>Our Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            Serving Dubai &{' '}
            <span style={{ color: accent }}>Abu Dhabi</span>
          </motion.h2>
        </div>

        {/* Two city columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cityServices.map((col, ci) => (
            <motion.div
              key={col.city}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1 + ci * 0.12, ease }}
              className="relative border border-white/10 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="h-[2px] w-full" style={{ background: `linear-gradient(to right, ${accent}, ${accentRgba(0.2)}, transparent)` }} />

              {/* City header */}
              <div className="px-7 pt-7 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm" style={{ color: accent }}>◉</span>
                  <h3 className="text-[1.1rem] font-bold text-white">{col.city}</h3>
                </div>
                <p className="text-[0.84rem] text-[#888] leading-[1.75]">{col.desc}</p>
              </div>

              {/* Service links */}
              <div className="px-4 py-4 space-y-1">
                {col.items.map((item, ii) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.22 + ci * 0.1 + ii * 0.06, ease }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between px-4 py-3.5 rounded hover:bg-white/[0.05] transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-1 w-1 rounded-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: accent }}
                        />
                        <span className="text-[0.92rem] font-medium text-[#ccc] group-hover:text-white transition-colors duration-150">
                          {item.label}
                        </span>
                      </div>
                      <span
                        className="text-sm opacity-0 group-hover:opacity-100 translate-x-[-6px] group-hover:translate-x-0 transition-all duration-200"
                        style={{ color: accent }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Corner bracket decoration */}
              <div className="pointer-events-none absolute right-5 bottom-5 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: accentRgba(0.25) }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHY INVEST
═══════════════════════════════════════════════════════════════════════════ */
function WhyInvestSection({ c }: { c: BullionConfig }) {
  const { ref, inView } = useReveal()
  const { accent, accentRgba, investReasons } = c
  const metalName = accentRgba === goldRgba ? 'Gold' : 'Silver'

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-16 lg:py-22 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12" style={{ backgroundColor: accent }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>Investment Value</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Why Invest in{' '}
            <span style={{ color: accent }}>{metalName} Bullion?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {investReasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease }}
              className="group relative bg-white border border-[#e8e2d8] px-7 py-8 overflow-hidden hover:shadow-[0_8px_48px_rgba(201,152,42,0.12)] transition-shadow duration-500 cursor-default"
            >
              {/* Top accent sweep */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(to right, ${accent}, ${accentRgba(0.3)})` }}
              />

              {/* Watermark number */}
              <span className="pointer-events-none absolute right-5 top-3 text-[4rem] font-bold leading-none text-[#111]/[0.05] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div
                className="mb-5 inline-flex h-11 w-11 items-center justify-center border transition-all duration-300"
                style={{ borderColor: accentRgba(0.4) }}
              >
                <span className="text-[1.05rem]" style={{ color: accent }}>{r.icon}</span>
              </div>

              <h3 className="text-[1.1rem] font-bold text-[#111111] mb-3">{r.title}</h3>
              <div className="mb-4 h-px w-8 group-hover:w-12 transition-all duration-400" style={{ backgroundColor: accentRgba(0.4) }} />
              <p className="text-[0.875rem] text-[#636363] leading-[1.85]">{r.desc}</p>

              <div
                className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full blur-[50px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
                style={{ backgroundColor: accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT THE METAL
═══════════════════════════════════════════════════════════════════════════ */
function AboutMetalSection({ c }: { c: BullionConfig }) {
  const { ref, inView } = useReveal()
  const { accent, accentRgba, about } = c

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-22 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${accentRgba(0.03)} 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-4 flex items-center gap-4"
            >
              <div className="h-px w-12" style={{ backgroundColor: accent }} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>About Bullion</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.95, delay: 0.1, ease }}
              className="text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#111111] leading-[1.08] tracking-tight mb-8"
            >
              {about.title}
              <span style={{ color: accent }}>{about.titleAccent}</span>
            </motion.h2>

            {about.body.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.18 + i * 0.1, ease }}
                className="text-[0.97rem] text-[#555] leading-[1.9] mb-5"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.38, ease }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: accent }}
                >
                  Browse Products <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: specs card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.22, ease }}
            className="relative"
          >
            <div
              className="border overflow-hidden shadow-[0_8px_60px_rgba(201,152,42,0.1)]"
              style={{ borderColor: accentRgba(0.25) }}
            >
              {/* Card top accent */}
              <div className="h-[3px]" style={{ background: `linear-gradient(to right, ${accent}, ${accentRgba(0.4)})` }} />

              {/* Corner brackets */}
              <div className="pointer-events-none absolute left-5 top-6 h-7 w-7 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: accentRgba(0.5) }} />
              <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: accentRgba(0.28) }} />

              <div className="px-8 pt-10 pb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.38em] mb-6" style={{ color: accent }}>Key Specifications</p>
                <div className="space-y-0">
                  {about.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between py-4 border-b last:border-0"
                      style={{ borderColor: accentRgba(0.12) }}
                    >
                      <span className="text-[0.82rem] font-semibold uppercase tracking-wider text-[#999]">{spec.label}</span>
                      <span className="text-[0.9rem] font-bold text-[#111111] text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${accentRgba(0.12)}` }}>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1" style={{ backgroundColor: accentRgba(0.25) }} />
                    <span className="text-[9px] uppercase tracking-[0.3em] font-semibold" style={{ color: accent }}>Tora Bullion</span>
                    <div className="h-px flex-1" style={{ backgroundColor: accentRgba(0.25) }} />
                  </div>
                  <p className="mt-4 text-[0.82rem] text-[#888] leading-[1.8] text-center">
                    Every product is authenticated, certified, and sourced from internationally accredited refineries.
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient glow behind card */}
            <div
              className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full blur-[80px] -z-10"
              style={{ backgroundColor: accentRgba(0.08) }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════════════════════ */
function CTASection({ c }: { c: BullionConfig }) {
  const { ref, inView } = useReveal('-40px')
  const { accent, accentRgba } = c

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-10 lg:py-14 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full blur-[130px]"
        style={{ backgroundColor: accentRgba(0.07) }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/15 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease }}
          className="relative mx-auto max-w-[1100px] bg-white overflow-hidden border shadow-[0_8px_80px_rgba(201,152,42,0.10)]"
          style={{ borderColor: accentRgba(0.25) }}
        >
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(to right, ${accent}, ${accentRgba(0.5)})` }} />
          <div className="pointer-events-none absolute left-5 top-6 h-7 w-7 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: accentRgba(0.5) }} />
          <div className="pointer-events-none absolute right-5 top-6 h-7 w-7 border-r-[1.5px] border-t-[1.5px]" style={{ borderColor: accentRgba(0.5) }} />
          <div className="pointer-events-none absolute left-5 bottom-5 h-7 w-7 border-l-[1.5px] border-b-[1.5px]" style={{ borderColor: accentRgba(0.28) }} />
          <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: accentRgba(0.28) }} />

          <div className="relative px-8 pt-10 pb-10 sm:px-12 lg:px-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.0, delay: 0.1, ease }}
              className="text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-6"
            >
              Start Your Precious Metals<br />
              Journey <span style={{ color: accent }}>With Confidence</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.26 }}
              className="mx-auto mb-8 origin-center flex items-center justify-center gap-2.5"
            >
              <div className="h-px w-12" style={{ backgroundColor: accentRgba(0.45) }} />
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <div className="h-px w-12" style={{ backgroundColor: accentRgba(0.45) }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.22, ease }}
              className="text-[1.02rem] leading-[1.9] text-[#636363] mb-10 max-w-[560px] mx-auto"
            >
              Connect with Tora Bullion for certified bullion and expert investment guidance across the UAE. Whether you are buying or selling — we are here to help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.78, delay: 0.32, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white px-10 py-[1.05rem] text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ backgroundColor: accent }}
                >
                  Contact Us <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/shop" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#111111]/20 text-[#111111] px-10 py-[1.05rem] text-[11px] font-bold uppercase tracking-[0.22em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Shop Now <span className="text-sm">→</span>
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
export default function BullionCategoryPage({ metal }: { metal: 'gold' | 'silver' }) {
  const c = bullionConfigs[metal]
  return (
    <main className="overflow-x-hidden">
      <HeroSection c={c} />
      <ServicesSection c={c} />
      <WhyInvestSection c={c} />
      <AboutMetalSection c={c} />
      <CTASection c={c} />
    </main>
  )
}
