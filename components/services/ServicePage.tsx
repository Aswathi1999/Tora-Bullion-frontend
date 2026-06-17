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
interface ServiceConfig {
  accent: string
  accentRgba: (a: number) => string
  hero: { badge: string; title: string; accentWord: string; subtitle: string; image: string }
  benefits: { icon: string; title: string; desc: string }[]
  steps: { num: string; title: string; desc: string }[]
  related: { label: string; href: string }[]
}

/* ─── Content factory ─────────────────────────────────────────────────────── */
const GOLD = '#C9982A'
const SILVER = '#7A7A7A'
const goldRgba = (a: number) => `rgba(201,152,42,${a})`
const silverRgba = (a: number) => `rgba(122,122,122,${a})`

function buildConfig(
  metal: 'gold' | 'silver',
  action: 'buy' | 'sell',
  product: 'bars' | 'coins' | null,
  location: 'Dubai' | 'Abu Dhabi',
): ServiceConfig {
  const accent = metal === 'gold' ? GOLD : SILVER
  const accentRgba = metal === 'gold' ? goldRgba : silverRgba
  const M = metal === 'gold' ? 'Gold' : 'Silver'
  const P = product === 'bars' ? 'Bars' : product === 'coins' ? 'Coins' : ''

  const title = action === 'buy' ? `Buy ${M} ${P} in ${location}` : `Sell ${M} in ${location}`
  const accentWord = action === 'buy' ? `${M} ${P}` : M
  const badge = action === 'buy' ? `${M} Bullion · ${location}` : `${M} Buyback · ${location}`
  const subtitle =
    action === 'buy'
      ? `Purchase investment-grade ${metal} ${product} in ${location} at live spot prices. Tora Bullion offers DET-licensed, certified ${metal} ${product} from internationally accredited refineries — with expert guidance and same-day collection.`
      : `Get the best live market price when you sell your ${metal} in ${location}. Our certified experts provide transparent assessment, instant payment, and full documentation.`

  const image =
    metal === 'gold'
      ? product === 'coins' ? '/gold_coins.jpg' : '/hero_image_3.jpg'
      : '/silver_bars.jpg'

  /* ── Benefits ── */
  const benefits =
    action === 'buy'
      ? [
          { icon: '◈', title: 'Investment Grade Purity', desc: `All our ${metal} ${product} are ${metal === 'gold' ? '999.9' : '999'} fine, sourced from LBMA-accredited refineries and supplied with full authentication certificates.` },
          { icon: '◎', title: 'Live Spot Pricing', desc: `Every ${product === 'bars' ? 'bar' : 'coin'} is priced against the real-time international spot rate — fully transparent, no hidden premiums.` },
          { icon: '◇', title: 'DET Licensed Dealer', desc: `Tora Bullion is fully licensed by Dubai Economy & Tourism, giving you regulatory assurance on every transaction.` },
          { icon: '○', title: product === 'bars' ? 'Full Weight Range' : 'Wide Coin Selection', desc: product === 'bars' ? `We stock ${metal} bars from 1g to 1kg, covering every budget from gifting to large-scale portfolio investment.` : `Our selection covers globally recognised legal-tender ${metal} coins from the world's leading mints.` },
          { icon: '◉', title: 'Same-Day Collection', desc: `Visit our ${location} showroom and take your ${metal} home the same day, fully authenticated and securely packaged.` },
          { icon: '✦', title: 'Expert Guidance', desc: `Our specialists advise on denominations, market timing, and portfolio strategy to maximise your ${metal} investment.` },
        ]
      : [
          { icon: '◈', title: 'Best Market Price', desc: `Our buyback rates are benchmarked against the live international spot price — competitive and fair every time.` },
          { icon: '◎', title: 'Transparent Assessment', desc: `Our certified experts evaluate your ${metal} openly, clearly explaining purity testing and valuation at every step.` },
          { icon: '◇', title: 'Instant Payment', desc: `Once agreed, payment is immediate — cash or bank transfer — with full documentation provided on the spot.` },
          { icon: '○', title: 'DET Licensed', desc: `All buyback transactions are executed under DET licence, ensuring full regulatory compliance and trust.` },
          { icon: '◉', title: 'All Formats Accepted', desc: `We buy ${metal} bars, coins, and other investment-grade products. Bring available certificates for the best valuation.` },
          { icon: '✦', title: 'No Hidden Deductions', desc: `The price you are quoted is the price you receive. Complete transparency — no surprise charges at any stage.` },
        ]

  /* ── Steps ── */
  const steps =
    action === 'buy'
      ? [
          { num: '01', title: 'Browse & Select', desc: `Visit our ${location} showroom or contact us to check current ${metal} ${product} stock and live prices.` },
          { num: '02', title: 'Verify Certification', desc: `Review the authentication certificates and confirm the live spot price before committing to your purchase.` },
          { num: '03', title: 'Complete Payment', desc: `Pay securely by cash or bank transfer. A receipted invoice is issued for every transaction.` },
          { num: '04', title: 'Collect Your Purchase', desc: `Take your ${metal} ${product} home same-day in secure packaging, or explore vault storage with our trusted partners.` },
        ]
      : [
          { num: '01', title: 'Get in Touch', desc: `Contact us via WhatsApp, phone, or visit our ${location} showroom with your ${metal} and any available paperwork.` },
          { num: '02', title: 'Expert Assessment', desc: `Our certified specialists assess purity and weight in full view, with clear explanation throughout the valuation.` },
          { num: '03', title: 'Agree on Price', desc: `We present a live-rate offer. You are under no obligation and can take the time you need to decide.` },
          { num: '04', title: 'Receive Payment', desc: `Once agreed, payment is immediate — cash or bank transfer — fully documented for your records.` },
        ]

  /* ── Related ── */
  const allServices = [
    { label: 'Buy Gold Bars Dubai',        href: '/services/buy-gold-bars-dubai' },
    { label: 'Buy Gold Coins Dubai',       href: '/services/buy-gold-coins-dubai' },
    { label: 'Buy Gold Bars Abu Dhabi',    href: '/services/buy-gold-bars-abu-dhabi' },
    { label: 'Buy Gold Coins Abu Dhabi',   href: '/services/buy-gold-coins-abu-dhabi' },
    { label: 'Sell Gold Dubai',            href: '/services/sell-gold-dubai' },
    { label: 'Sell Gold Abu Dhabi',        href: '/services/sell-gold-abu-dhabi' },
    { label: 'Buy Silver Bars Dubai',      href: '/services/buy-silver-bars-dubai' },
    { label: 'Buy Silver Coins Dubai',     href: '/services/buy-silver-coins-dubai' },
    { label: 'Buy Silver Bars Abu Dhabi',  href: '/services/buy-silver-bars-abu-dhabi' },
    { label: 'Buy Silver Coins Abu Dhabi', href: '/services/buy-silver-coins-abu-dhabi' },
    { label: 'Sell Silver Dubai',          href: '/services/sell-silver-dubai' },
    { label: 'Sell Silver Abu Dhabi',      href: '/services/sell-silver-abu-dhabi' },
  ]
  const currentHref =
    action === 'sell'
      ? `/services/sell-${metal}-${location.toLowerCase().replace(' ', '-')}`
      : `/services/buy-${metal}-${product}-${location.toLowerCase().replace(' ', '-')}`

  const related = allServices.filter(s => s.href !== currentHref && s.href.includes(metal)).slice(0, 3)

  return { accent, accentRgba, hero: { badge, title, accentWord, subtitle, image }, benefits, steps, related }
}

/* ─── Service map ─────────────────────────────────────────────────────────── */
const serviceMap: Record<string, ServiceConfig> = {
  'buy-gold-bars-dubai':        buildConfig('gold',   'buy',  'bars',  'Dubai'),
  'buy-gold-coins-dubai':       buildConfig('gold',   'buy',  'coins', 'Dubai'),
  'buy-gold-bars-abu-dhabi':    buildConfig('gold',   'buy',  'bars',  'Abu Dhabi'),
  'buy-gold-coins-abu-dhabi':   buildConfig('gold',   'buy',  'coins', 'Abu Dhabi'),
  'sell-gold-dubai':            buildConfig('gold',   'sell', null,    'Dubai'),
  'sell-gold-abu-dhabi':        buildConfig('gold',   'sell', null,    'Abu Dhabi'),
  'buy-silver-bars-dubai':      buildConfig('silver', 'buy',  'bars',  'Dubai'),
  'buy-silver-coins-dubai':     buildConfig('silver', 'buy',  'coins', 'Dubai'),
  'buy-silver-bars-abu-dhabi':  buildConfig('silver', 'buy',  'bars',  'Abu Dhabi'),
  'buy-silver-coins-abu-dhabi': buildConfig('silver', 'buy',  'coins', 'Abu Dhabi'),
  'sell-silver-dubai':          buildConfig('silver', 'sell', null,    'Dubai'),
  'sell-silver-abu-dhabi':      buildConfig('silver', 'sell', null,    'Abu Dhabi'),
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection({ config }: { config: ServiceConfig }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgParallax = useTransform(scrollYProgress, [0, 1], ['0px', '-52px'])
  const { accent, accentRgba, hero } = config
  const [before, after = ''] = hero.title.split(hero.accentWord)

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] bg-[#faf8f4] overflow-hidden flex items-center">
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full blur-[150px]"
        style={{ backgroundColor: accentRgba(0.5) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-12 pt-14 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left – text */}
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
              className="text-[clamp(2.4rem,6vw,3.2rem)] font-bold leading-[1.05] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              {before}<span style={{ color: accent }}>{hero.accentWord}</span>{after}
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
              className="text-[0.95rem] sm:text-[1.05rem] text-[#585858] leading-[1.88] mb-10 max-w-[500px]"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.33, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-white px-8 sm:px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-shadow duration-300"
                  style={{ backgroundColor: accent }}
                >
                  Shop Now <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 border border-[#111111]/22 text-[#111111] px-8 sm:px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Contact Us <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right – image composition */}
          <div className="relative h-[400px] sm:h-[520px] lg:h-[640px] select-none">
            <motion.div
              animate={{ scale: [1, 1.24, 1], opacity: [0.14, 0.28, 0.14] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[28%] top-[43%] -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] rounded-full blur-[88px]"
              style={{ backgroundColor: accent }}
            />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.12, ease }}
              style={{ y: imgParallax }}
              className="absolute left-0 top-[5%] w-[62%] h-[90%] overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.18)]"
            >
              <Image src={hero.image} alt={hero.title} fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: accent }} />
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: accentRgba(0.35) }} />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">
                Investment Grade Bullion
              </p>
            </motion.div>

            {/* DET card */}
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
                <p className="text-[9px] text-[#aaa] uppercase tracking-[0.26em] font-semibold leading-none">Licensed</p>
                <p className="mt-1 text-[2rem] sm:text-[2.4rem] font-bold leading-[1.0]" style={{ color: accent }}>DET</p>
                <div className="mt-2 h-px w-full" style={{ backgroundColor: accentRgba(0.16) }} />
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.24em] text-[#bbb]">Dubai · UAE</p>
              </motion.div>
            </motion.div>

            {/* Since badge */}
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
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">Since 2016</p>
                  <p className="text-[8px] text-white/45 mt-0.5">Trusted Bullion Dealer</p>
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
   BENEFITS
═══════════════════════════════════════════════════════════════════════════ */
function BenefitsSection({ config }: { config: ServiceConfig }) {
  const { ref, inView } = useReveal()
  const { accent, accentRgba, benefits } = config

  return (
    <section ref={ref} className="relative bg-[#111111] py-14 lg:py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 h-[420px] w-[860px] rounded-full blur-[130px]"
        style={{ backgroundColor: accentRgba(0.07) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.026]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12" style={{ backgroundColor: accent }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>Why Choose Tora</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2rem,5vw,2.8rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            The Tora Bullion{' '}
            <span style={{ color: accent }}>Advantage</span>
          </motion.h2>
        </div>

        <div className="h-px bg-white/10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, delay: 0.18 + i * 0.07, ease }}
              className="group relative bg-[#111111] px-6 py-8 lg:px-8 lg:py-9 overflow-hidden cursor-default"
            >
              <div
                className="absolute inset-x-0 top-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
              />
              <span className="pointer-events-none absolute right-4 top-2 text-[4.5rem] font-bold leading-none text-white/[0.05] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div
                className="mb-5 inline-flex h-10 w-10 items-center justify-center border transition-all duration-300"
                style={{ borderColor: accentRgba(0.4) }}
              >
                <span className="text-[1rem] leading-none" style={{ color: accent }}>{b.icon}</span>
              </div>
              <h3 className="text-[1.05rem] lg:text-[1.15rem] font-bold text-white leading-snug mb-2">
                {b.title}
              </h3>
              <div
                className="mb-4 h-px w-8 group-hover:w-14 transition-all duration-400 ease-out"
                style={{ backgroundColor: accentRgba(0.4) }}
              />
              <p className="text-[#a0a0a0] leading-[1.82] text-[0.875rem] lg:text-[0.9rem]">{b.desc}</p>
              <div
                className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full blur-[55px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500"
                style={{ backgroundColor: accent }}
              />
            </motion.div>
          ))}
        </div>
        <div className="h-px bg-white/10" />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROCESS STEPS
═══════════════════════════════════════════════════════════════════════════ */
function ProcessSection({ config }: { config: ServiceConfig }) {
  const { ref, inView } = useReveal()
  const { accent, accentRgba, steps } = config

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12" style={{ backgroundColor: accent }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: accent }}>How It Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            A Simple <span style={{ color: accent }}>4-Step Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease }}
              className="relative"
            >
              {/* Connector line (not on last item) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(100%+8px)] right-[-8px] h-px"
                  style={{ background: `linear-gradient(to right, ${accent}, ${accentRgba(0.15)})` }}
                />
              )}

              {/* Step number circle */}
              <div
                className="mb-5 inline-flex h-14 w-14 items-center justify-center border-2 text-xl font-bold"
                style={{ borderColor: accent, color: accent }}
              >
                {step.num}
              </div>
              <h3 className="text-[1.1rem] font-bold text-[#111111] mb-3">{step.title}</h3>
              <div className="mb-3 h-px w-8" style={{ backgroundColor: accentRgba(0.4) }} />
              <p className="text-[0.88rem] text-[#636363] leading-[1.82]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   RELATED SERVICES
═══════════════════════════════════════════════════════════════════════════ */
function RelatedSection({ config }: { config: ServiceConfig }) {
  const { ref, inView } = useReveal()
  const { accent, accentRgba, related } = config

  return (
    <section ref={ref} className="relative bg-white py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center justify-center gap-5"
        >
          <div className="h-px w-14" style={{ backgroundColor: accentRgba(0.45) }} />
          <span className="text-[12px] font-semibold uppercase tracking-[0.35em]" style={{ color: accent }}>Related Services</span>
          <div className="h-px w-14" style={{ backgroundColor: accentRgba(0.45) }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease }}
            >
              <Link
                href={item.href}
                className="group flex items-center justify-between border border-[#e8e2d8] px-6 py-5 hover:border-[#C9982A]/50 hover:shadow-[0_4px_24px_rgba(201,152,42,0.1)] transition-all duration-300"
              >
                <span className="text-sm font-semibold text-[#333] group-hover:text-[#111]">{item.label}</span>
                <span className="text-[#C9982A] text-sm opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════════════════════ */
function CTASection({ config }: { config: ServiceConfig }) {
  const { ref, inView } = useReveal('-40px')
  const { accent, accentRgba } = config

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
              Connect with Tora Bullion for quality gold and silver bullion and expert investment guidance in the UAE. Whether you're a seasoned investor or just starting — we are here for you.
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
                  Explore Bullion <span className="text-sm">→</span>
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
export default function ServicePage({ slug }: { slug: string }) {
  const config = serviceMap[slug]
  if (!config) return null

  return (
    <main className="overflow-x-hidden">
      <HeroSection config={config} />
      <BenefitsSection config={config} />
      <ProcessSection config={config} />
      <RelatedSection config={config} />
      <CTASection config={config} />
    </main>
  )
}
