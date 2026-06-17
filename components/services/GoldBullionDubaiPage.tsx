'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const GOLD = '#C9982A'
const gr = (a: number) => `rgba(201,152,42,${a})`

function useReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

/* ─── Live price mini-hook ────────────────────────────────────────────────── */
function useGoldSpot() {
  const [price, setPrice] = useState<{ ozUSD: number; gramAED: number } | null>(null)
  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/spot-prices')
      if (res.ok) { const j = await res.json(); if (!j.error) setPrice({ ozUSD: j.gold.ozUSD, gramAED: j.gold.gramAED }) }
    } catch {}
  }, [])
  useEffect(() => { load(); const iv = setInterval(load, 60_000); return () => clearInterval(iv) }, [load])
  return price
}

const fmt = (n: number, d = 2) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0px', '-52px'])

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] bg-[#faf8f4] overflow-hidden flex items-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.15, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 h-[760px] w-[760px] rounded-full blur-[160px]"
        style={{ backgroundColor: gr(0.55) }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-12 pt-8 pb-8 lg:pt-10 lg:pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-9 inline-flex items-center gap-2.5 border px-5 py-2"
              style={{ borderColor: gr(0.3), backgroundColor: gr(0.08) }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">
                Certified Bullion Dealer · Dubai
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.8rem,7vw,4.2rem)] font-bold leading-[1.02] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              Gold Bullion<br />
              in <span className="text-[#C9982A]">Dubai</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="origin-left mb-8 flex items-center gap-2"
            >
              <div className="h-[2px] w-16 bg-[#C9982A]" />
              <div className="h-[2px] w-7" style={{ backgroundColor: gr(0.4) }} />
              <div className="h-[2px] w-3" style={{ backgroundColor: gr(0.2) }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="text-[1.05rem] sm:text-[1.12rem] text-[#555] leading-[1.88] mb-10 max-w-[500px]"
            >
              Buy certified gold bullions from the trusted dealers in Dubai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.33, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(201,152,42,0.32)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  Explore Gold Bullion <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 border border-[#111111]/22 text-[#111111] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Contact Us <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right — image */}
          <div className="relative h-[420px] sm:h-[540px] lg:h-[680px] select-none">
            <motion.div
              animate={{ scale: [1, 1.24, 1], opacity: [0.14, 0.28, 0.14] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[28%] top-[43%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#C9982A] blur-[88px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.12, ease }}
              style={{ y: imgY }}
              className="absolute left-0 top-[5%] w-[60%] h-[86%] overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.20)]"
            >
              <Image src="/gold_coins.jpg" alt="Gold Bullion in Dubai" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/32" />
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]" />
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: gr(0.35) }} />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">Investment Grade · Dubai</p>
            </motion.div>

            {/* Second gold image */}
            <motion.div
              initial={{ opacity: 0, x: 28, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease }}
              className="absolute right-0 top-[22%] w-[42%] h-[48%] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.18)] border border-[#e8dfc8]"
            >
              <Image src="/gold_bars.jpg" alt="Gold bars Dubai" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="pointer-events-none absolute right-3 top-3 h-7 w-7 border-r-[1.5px] border-t-[1.5px] border-[#C9982A]" />
            </motion.div>

            {/* Est. card */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.86 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.54, ease }}
              className="hidden sm:block absolute right-0 top-[7%]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="bg-white/96 backdrop-blur-sm border border-[#e6ddd0] px-5 py-4 shadow-[0_12px_50px_rgba(0,0,0,0.09)]"
              >
                <p className="text-[9px] text-[#aaa] uppercase tracking-[0.26em] font-semibold">Est.</p>
                <p className="mt-1 text-[2.6rem] font-bold text-[#C9982A] leading-none">2016</p>
                <div className="mt-2 h-px w-full" style={{ backgroundColor: gr(0.16) }} />
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.24em] text-[#bbb]">Dubai · Gold Souk</p>
              </motion.div>
            </motion.div>

            {/* DET badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.70, ease }}
              className="hidden sm:block absolute left-[54%] bottom-[18%]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="flex items-center gap-3 bg-[#111111]/92 backdrop-blur-sm border px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
                style={{ borderColor: gr(0.28) }}
              >
                <div className="h-8 w-8 border flex items-center justify-center" style={{ borderColor: gr(0.5) }}>
                  <span className="text-[#C9982A] text-sm">✦</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">DET Licensed</p>
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
   ABOUT — what is gold bullion
═══════════════════════════════════════════════════════════════════════════ */
function AboutSection() {
  const { ref, inView } = useReveal()
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${gr(0.03)} 0%, transparent 70%)` }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-5 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">About Gold Bullion</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.95, delay: 0.08, ease }}
              className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight mb-8"
            >
              Investment-Grade Gold Bullion<br />
              for <span className="text-[#C9982A]">Modern Investors</span>
            </motion.h2>

            {[
              'Gold bullion is not a new term for Dubai residents and tourists. If you have a slight interest in the investment world, bullion is a common word for you. But as we are starting from the basics, it is important to define what gold bullion is. Gold bullion is the purest form of investment-grade gold. They are usually available in the form of bars and coins.',
              'The physical gold investment in the UAE is primarily surrounded by 24K gold bullions. The investors are opting for gold bullion rather than gold jewellery because jewellery will not be pure gold. And the making charges of jewellery are much higher than those of gold bullion in the UAE. Investors looking for perfect long-term protection for their wealth that can survive the inflation prefer gold bullions.',
              'Understanding the needs of the modern investors in the UAE, Tora Bullion is offering high-quality investment-grade gold bullion in Dubai.',
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.16 + i * 0.1, ease }}
                className="text-[1rem] text-[#555] leading-[1.92] mb-5"
              >
                {p}
              </motion.p>
            ))}

          </div>

          {/* Right: image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.12, ease }}
            className="relative h-[400px] sm:h-[500px] overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.14)]"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.08]">
              <Image src="/hero_image_3.jpg" alt="Tora Bullion Dubai showroom" fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]" />
            <div className="pointer-events-none absolute right-5 bottom-5 h-10 w-10 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: gr(0.4) }} />
            <div className="absolute bottom-0 inset-x-0 px-6 py-5" style={{ background: `linear-gradient(to top, ${gr(0.9)}, transparent)` }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/70">Tora Bullion · Deira Gold Souk</p>
              <p className="text-white font-semibold text-sm mt-0.5">Dubai's Trusted Bullion Dealer Since 2016</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   COLLECTION — gold bars + gold coins
═══════════════════════════════════════════════════════════════════════════ */
const collection = [
  {
    icon: '◈',
    title: 'Gold Bars',
    body: 'We offer gold bars with 24K or 999.9 purity, which are the highest quality of gold bars perfect for investment. These investment-grade gold bars are available in various sizes, starting from 1 gram to 1 kilogram. The products Tora Bullion is offering are carefully selected from the reputed refineries with proper certification to ensure compliance with local and international standards.',
    cta: 'Buy gold bars with Tora Bullion',
    href: '/services/buy-gold-bars-dubai',
    tag: '1g – 1kg · 999.9 Fine',
  },
  {
    icon: '◎',
    title: 'Gold Coins',
    body: "Gold coins were always popular in Dubai. As gold coins have high collector value, they are the favourite of many sections of the audience. Gold coins are always the first choice for many investors because of the liquidity and flexibility they offer. With Tora Bullion, you would get the premium gold coins that have recognition all over the world.",
    cta: 'Explore gold coins with us',
    href: '/services/buy-gold-coins-dubai',
    tag: 'Legal Tender · World Mints',
  },
]

function CollectionSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#111111] py-16 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 h-[500px] w-[900px] rounded-full blur-[140px]" style={{ backgroundColor: gr(0.07) }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Our Collection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            Explore Our <span className="text-[#C9982A]">Gold Bullion Collection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#999] max-w-[560px] leading-[1.82]"
          >
            As a gold bullion trader in Dubai active in the industry for the past 10 years, Tora Bullion is offering a wide range of gold bullion collections for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collection.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1 + i * 0.12, ease }}
              className="group relative border border-white/10 overflow-hidden"
            >
              <div className="h-[2px] bg-gradient-to-r from-[#C9982A] to-transparent" />

              {/* Large watermark */}
              <span className="pointer-events-none absolute right-5 bottom-5 text-[7rem] font-bold leading-none text-white/[0.03] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="p-8 lg:p-10">
                <div className="mb-2 inline-flex items-center gap-2 border px-3 py-1" style={{ borderColor: gr(0.3), backgroundColor: gr(0.08) }}>
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9982A]">{c.tag}</span>
                </div>

                <div className="mt-6 mb-3 inline-flex h-12 w-12 items-center justify-center border border-[#C9982A]/40 group-hover:border-[#C9982A] group-hover:bg-[#C9982A]/10 transition-all duration-300">
                  <span className="text-[#C9982A] text-lg">{c.icon}</span>
                </div>

                <h3 className="text-[1.5rem] lg:text-[1.8rem] font-bold text-white mb-4 group-hover:text-[#C9982A] transition-colors duration-300">{c.title}</h3>
                <div className="h-px w-10 bg-[#C9982A]/40 group-hover:w-16 group-hover:bg-[#C9982A]/70 transition-all duration-400 mb-5" />
                <p className="text-[0.92rem] text-[#999] leading-[1.85] mb-8">{c.body}</p>

                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2.5 border border-[#C9982A]/50 text-[#C9982A] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.24em] hover:bg-[#C9982A] hover:text-[#111] transition-all duration-300"
                >
                  {c.cta} <span className="text-sm">→</span>
                </Link>
              </div>

              <div className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full bg-[#C9982A] blur-[60px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHY INVEST — 6 reasons
═══════════════════════════════════════════════════════════════════════════ */
const investReasons = [
  { icon: '◈', title: 'Inflation Protection',        desc: 'Unlike other major investment options, gold is not affected by inflation and market issues.' },
  { icon: '◎', title: 'Long-Term Wealth Preservation', desc: 'With gold bullion, you can preserve your wealth for a long term without much additional expense.' },
  { icon: '◇', title: 'Portfolio Diversification',   desc: 'Gold bullion can be the right addition to your portfolio to bring in the balance of your assets.' },
  { icon: '○', title: 'Tangible Asset Ownership',    desc: 'As gold can be physically owned, the ownership of the asset is easier and transferable.' },
  { icon: '◉', title: 'Global Liquidity',             desc: 'Gold is one of the assets that do not change their value in a global market. It has its value beyond the boundaries of a country.' },
  { icon: '✦', title: 'Safe-Haven Investment',        desc: 'Being a safe haven, the market imbalance does not affect your investment and wealth by investing in gold bullion.' },
]

function WhyInvestSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Investment Value</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Why Investors Choose <span className="text-[#C9982A]">Gold Bullion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[560px] leading-[1.82]"
          >
            There are many reasons why modern investments are choosing gold bullion as their investment choice. Some of them are:
          </motion.p>
        </div>

        <div className="h-px bg-[#111]/[0.08]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]/[0.07]">
          {investReasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, delay: 0.12 + i * 0.07, ease }}
              className="group relative bg-[#faf8f4] px-7 py-9 overflow-hidden cursor-default hover:bg-white transition-colors duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${GOLD}, ${gr(0.3)})` }} />
              <span className="pointer-events-none absolute right-5 top-3 text-[4rem] font-bold leading-none text-[#111]/[0.05] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border transition-all duration-300" style={{ borderColor: gr(0.4) }}>
                <span className="text-[1rem] text-[#C9982A]">{r.icon}</span>
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#111111] mb-2.5 group-hover:text-[#C9982A] transition-colors duration-300">{r.title}</h3>
              <div className="mb-4 h-px w-8 group-hover:w-12 transition-all duration-400" style={{ backgroundColor: gr(0.4) }} />
              <p className="text-[0.875rem] text-[#636363] leading-[1.85]">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="h-px bg-[#111]/[0.08]" />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHY TORA — 5 differentiators
═══════════════════════════════════════════════════════════════════════════ */
const toraDiff = [
  { num: '01', title: 'Expert Investment Guidance',    desc: 'Our experts will provide professional insights and personalised recommendations to make the right investment choices.' },
  { num: '02', title: 'Certified & Authentic Products', desc: 'All the products we are providing undergo strict quality checks and meet all the necessary standards.' },
  { num: '03', title: 'Transparent Pricing',            desc: 'We provide fair and transparent pricing, following the international spot price and live market rates.' },
  { num: '04', title: 'Customer-First Approach',        desc: 'We focus on understanding the goals of each investor and give support according to their needs.' },
  { num: '05', title: 'Commitment to Excellence',       desc: 'Every aspect of our products and services is ensured to have quality, delivering satisfaction to our customers.' },
]

function WhyToraSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#111111] py-16 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[130px]" style={{ backgroundColor: gr(0.07) }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">The Difference</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            Why Choose <span className="text-[#C9982A]">Tora Bullion</span> in Dubai
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#888] max-w-[560px] leading-[1.82]"
          >
            Tora Bullion is one of the trusted gold bullion dealers in Dubai that offers the finest quality gold bullions. Knowing the heart of every client that is coming to us, we want to be much more than a bullion dealer.
          </motion.p>
        </div>

        <div className="border-t border-white/10">
          {toraDiff.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12 + i * 0.08, ease }}
              className="group relative border-b border-white/10 py-7 lg:py-8 cursor-default"
            >
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C9982A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] lg:grid-cols-[110px_1fr_1fr] gap-4 lg:gap-12 items-center">
                <span className="text-[2.5rem] sm:text-[3.2rem] lg:text-[4rem] font-bold leading-none text-white/[0.08] group-hover:text-[#C9982A]/20 transition-colors duration-500 select-none">{d.num}</span>
                <h3 className="text-[1.1rem] sm:text-[1.4rem] lg:text-[1.8rem] font-bold text-white group-hover:text-[#C9982A] transition-colors duration-300">{d.title}</h3>
                <p className="hidden lg:block text-[#888] leading-[1.78] text-[0.92rem]">{d.desc}</p>
              </div>
              <p className="lg:hidden mt-3 pl-[60px] sm:pl-[84px] text-[#888] leading-[1.78] text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   LIVE GOLD PRICE teaser
═══════════════════════════════════════════════════════════════════════════ */
function LivePriceSection() {
  const { ref, inView } = useReveal()
  const price = useGoldSpot()

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-5 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Live Gold Price</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-6"
            >
              Live <span className="text-[#C9982A]">Gold Price</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="text-[0.97rem] text-[#555] leading-[1.9] mb-8 max-w-[480px]"
            >
              Find the live and updated price of gold bullion that Tora Bullion follows strictly. Be aware of the international spot price before your gold bullion purchases.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              <Link href="/gold-price">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  View Gold Price <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Price cards */}
          <motion.div
            initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.14, ease }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Spot Price · USD / oz', value: price ? `$${fmt(price.ozUSD)}` : null, large: true },
              { label: 'AED / gram',             value: price ? `AED ${fmt(price.gramAED)}` : null, large: false },
            ].map((c, i) => (
              <div
                key={c.label}
                className={`relative bg-white border overflow-hidden px-5 py-6 shadow-[0_4px_30px_rgba(201,152,42,0.08)] ${i === 0 ? 'col-span-2' : ''}`}
                style={{ borderColor: gr(0.22) }}
              >
                <div className="absolute inset-x-0 top-0 h-[2.5px]" style={{ background: i === 0 ? `linear-gradient(to right, ${GOLD}, ${gr(0.4)})` : `linear-gradient(to right, ${gr(0.4)}, transparent)` }} />
                {/* Live dot */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C9982A]">{c.label}</p>
                </div>
                {price ? (
                  <p className={`font-bold text-[#111111] leading-none ${i === 0 ? 'text-[2.4rem] sm:text-[3rem]' : 'text-[1.6rem]'}`}>
                    {c.value}
                  </p>
                ) : (
                  <div className={`rounded animate-pulse ${i === 0 ? 'h-10 w-40' : 'h-8 w-28'}`} style={{ backgroundColor: gr(0.1) }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   GUIDANCE — 4 tips
═══════════════════════════════════════════════════════════════════════════ */
const guidance = [
  { num: '01', title: 'Choosing Between Gold Bars & Gold Coins',  desc: "If you are looking for long-term investment and higher value per gram, then gold bars are the best option. At the same time, if your priority is liquidity and flexibility, you should choose coins." },
  { num: '02', title: 'Understanding Gold Purity',            desc: 'Gold has multiple purities. The highest is the investment-grade gold with 999.9 24K purity. Ensure that the gold you are buying has proper certification to verify the authenticity of the product.' },
  { num: '03', title: 'Selecting the Right Bullion Size',     desc: 'Since there are bullion sizes starting from 1 gram to 1 kilogram, it is important to know which size is suitable for you. By considering your budget and your investment goals, the right size should be finalised.' },
  { num: '04', title: 'Investing With Long-Term Confidence',  desc: 'It is important to know the market trends and status before investing in gold bullion. This will help you to make informed decisions with your gold bullion ownership with confidence.' },
]

function GuidanceSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${gr(0.03)} 0%, transparent 70%)` }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Investor Guidance</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Gold Investment in Dubai:<br />
            <span className="text-[#C9982A]">Guidance for Every Investor</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[560px] leading-[1.82]"
          >
            Everyone is interested in the best gold bullion for investment, but before you buy gold there are certain points that you should take into consideration. With Tora Bullion, you will get the correct guidance on how to invest in gold bullion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {guidance.map((g, i) => (
            <motion.div
              key={g.num}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease }}
              className="group relative bg-[#faf8f4] border border-[#e8e2d8] px-7 py-8 overflow-hidden hover:bg-white hover:shadow-[0_6px_36px_rgba(201,152,42,0.1)] transition-all duration-400 cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${GOLD}, ${gr(0.3)})` }} />
              <div className="flex items-start gap-5">
                <span className="text-[2.8rem] font-bold leading-none text-[#C9982A]/20 group-hover:text-[#C9982A]/30 transition-colors duration-300 select-none flex-shrink-0 mt-1">{g.num}</span>
                <div>
                  <h3 className="text-[1.05rem] font-bold text-[#111111] mb-3 group-hover:text-[#C9982A] transition-colors duration-300">{g.title}</h3>
                  <div className="mb-3 h-px w-8 group-hover:w-12 transition-all duration-400" style={{ backgroundColor: gr(0.4) }} />
                  <p className="text-[0.88rem] text-[#636363] leading-[1.85]">{g.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-center text-[0.92rem] text-[#888]"
        >
          If you need guidance on any of the abovementioned points,{' '}
          <Link href="/contact" className="text-[#C9982A] font-semibold hover:underline underline-offset-2">
            our team will be happy to help you through the process →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const { ref, inView } = useReveal('-40px')

  return (
    <section ref={ref} className="relative bg-[#111111] py-14 lg:py-20 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full blur-[140px]" style={{ backgroundColor: gr(0.08) }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/30 to-transparent" />

      <div className="relative mx-auto max-w-[900px] px-5 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-8 flex items-center justify-center gap-5"
        >
          <div className="h-px w-16" style={{ backgroundColor: gr(0.4) }} />
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#C9982A]">Start Today</span>
          <div className="h-px w-16" style={{ backgroundColor: gr(0.4) }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.0, delay: 0.1, ease }}
          className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Ready to Start Your<br />
          <span className="text-[#C9982A]">Gold Bullion Journey?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="text-[1.02rem] leading-[1.9] text-[#888] mb-10 max-w-[520px] mx-auto"
        >
          Tora Bullion is here to help you build your secure precious metal investment journey in Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.32, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/shop" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(201,152,42,0.32)' }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C9982A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              Buy Gold Bullion <span className="text-sm">→</span>
            </motion.button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
            >
              Contact Us <span className="text-sm">→</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════════════════════════════════ */
const faqs = [
  {
    q: 'Where to buy gold bullion in Dubai?',
    a: "There are many prominent places to buy gold bullion in Dubai, but a trusted dealer like Tora Bullion is the safest gold investment choice.",
  },
  {
    q: 'Is gold bullion tax-free in Dubai?',
    a: 'Yes. Investment-grade gold bullion in Dubai is not subjected to VAT.',
  },
  {
    q: 'How can I verify the authenticity of the bullion I buy?',
    a: 'In order to verify the authenticity of the gold bullion you buy in Dubai, you need to buy certified products and ensure that the bullion trader you choose has valid compliance certification from local authorities.',
  },
]

function FAQSection() {
  const { ref, inView } = useReveal()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[860px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#111111] leading-[1.1] tracking-tight"
          >
            Frequently Asked <span className="text-[#C9982A]">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease }}
                className="border border-[#e8e2d8] bg-white overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="text-[0.97rem] font-semibold text-[#111111] group-hover:text-[#C9982A] transition-colors duration-200 pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center h-7 w-7 border transition-all duration-300"
                    style={{ borderColor: isOpen ? GOLD : gr(0.3), backgroundColor: isOpen ? gr(0.1) : 'transparent' }}
                  >
                    {isOpen
                      ? <Minus className="w-3.5 h-3.5 text-[#C9982A]" />
                      : <Plus className="w-3.5 h-3.5" style={{ color: GOLD }} />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t" style={{ borderColor: gr(0.15) }}>
                        <p className="text-[0.92rem] text-[#555] leading-[1.88]">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════════════════════════ */
export default function GoldBullionDubaiPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <WhyInvestSection />
      <WhyToraSection />
      <LivePriceSection />
      <GuidanceSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
