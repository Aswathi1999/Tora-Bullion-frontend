'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const GOLD = '#C9982A'
const gr = (a: number) => `rgba(201,152,42,${a})`

function useReveal(margin = '-60px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

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
   HERO — Dark, editorial, parallelogram-clipped image
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] bg-[#faf8f4] overflow-hidden flex items-center">
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.15, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 h-[760px] w-[760px] rounded-full blur-[160px]"
        style={{ backgroundColor: gr(0.55) }}
      />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-12 pt-4 pb-4 lg:pt-6 lg:pb-6">
        <div className="grid lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_580px] gap-10 lg:gap-8 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-8 inline-flex items-center gap-2.5 border px-5 py-2"
              style={{ borderColor: gr(0.3), backgroundColor: gr(0.08) }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.36em] text-[#C9982A]">Certified Bullion Dealer · UAE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60, filter: 'blur(16px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.06, ease }}
              className="font-bold leading-[1.0] tracking-tight text-[#111111] mb-8"
            >
              <span className="block text-[clamp(2rem,5.5vw,3.4rem)] text-[#555] font-medium mb-3">Gold Bullion in</span>
              <span className="block text-[clamp(3.4rem,9vw,6rem)] text-[#C9982A]">Abu Dhabi</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="origin-left mb-8 flex items-center gap-2"
            >
              <div className="h-[2px] w-20 bg-[#C9982A]" />
              <div className="h-[2px] w-8" style={{ backgroundColor: gr(0.4) }} />
              <div className="h-[2px] w-4" style={{ backgroundColor: gr(0.2) }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
              className="text-[1.05rem] sm:text-[1.15rem] text-[#555] leading-[1.9] mb-10 max-w-[500px]"
            >
              Secured and Trusted Gold Bullion Investments in Abu Dhabi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease }}
            >
              <Link href="/gold-price">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 52px rgba(201,152,42,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em]"
                >
                  Check Live Rates <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right — parallelogram-clipped image */}
          <div className="relative h-[460px] sm:h-[560px] lg:h-[680px] select-none flex-shrink-0">
            {/* Glow */}
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.1, 0.22, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-[15%] rounded-full bg-[#C9982A] blur-[100px]"
            />

            {/* Clipped image — parallelogram */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease }}
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}
            >
              <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.12]">
                <Image src="/hero_image_3.jpg" alt="Gold Bullion in Abu Dhabi" fill className="object-cover object-center" priority />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>

            {/* Corner accents */}
            <div className="pointer-events-none absolute right-0 top-0 h-16 w-12 border-r-[2px] border-t-[2px] border-[#C9982A]/50" />
            <div className="pointer-events-none absolute left-[12%] bottom-0 h-12 w-12 border-l-[2px] border-b-[2px]" style={{ borderColor: gr(0.35) }} />

            {/* Floating label — gold band */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease }}
              className="absolute bottom-8 left-[20%]"
            >
              <div className="bg-[#C9982A] px-5 py-3 shadow-[0_8px_32px_rgba(201,152,42,0.35)]">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/75">Investment Grade</p>
                <p className="text-white font-bold text-sm mt-0.5">Abu Dhabi · UAE</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT — Gold Investments Backed by Purity & Trust
   Asymmetric 2-column: sticky heading left, paragraphs right
═══════════════════════════════════════════════════════════════════════════ */
function AboutSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      {/* Decorative watermark */}
      <span className="pointer-events-none select-none absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[22rem] font-bold leading-none" style={{ color: gr(0.035) }}>01</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-24 items-start">

          {/* Left: heading (sticky on scroll) */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">About</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.95, delay: 0.08, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-[#111111] leading-[1.1] tracking-tight"
            >
              Gold Investments<br />
              <span className="text-[#C9982A]">Backed by</span><br />
              Purity & Trust
            </motion.h2>

            {/* Gold diamond decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }} animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="mt-10 hidden lg:flex items-center gap-4"
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-[2px] rotate-45 rounded-sm" style={{ borderColor: gr(0.5) }} />
                <div className="absolute inset-[5px] border rotate-[30deg] rounded-sm" style={{ borderColor: gr(0.28) }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#C9982A] text-xl">◆</span>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: gr(0.6) }}>Pure · Trusted</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: gr(0.4) }}>Abu Dhabi</p>
              </div>
            </motion.div>
          </div>

          {/* Right: paragraphs */}
          <div>
            {[
              {
                text: 'Financial security is one of the important aspects of a quality human life. This trend is leading the investors to find a right way to secure their wealth. The trend of gold investment in the UAE is becoming popular as the population is understanding the value of gold in wealth preservation. The historical performance of gold is observed and recorded by all, and hence, there is a visible change in gold investing strategy.',
                large: true,
              },
              {
                text: 'Owning gold has always been associated with financial stability and security. Being one of the secured assets that can withstand the unpredictable market trends, the value of gold bullion in Abu Dhabi is increasing each day. It is important to find a trusted bullion partner in the UAE that can help the investors to make the right decision for their investment journey.',
                large: false,
              },
              {
                text: 'Tora Bullion is opening the right opportunity to buy gold bullion in Abu Dhabi by providing pure 24K gold bullions for investment.',
                large: false,
              },
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease }}
                className={`leading-[1.95] mb-7 ${p.large ? 'text-[1.1rem] text-[#333] font-medium border-l-[3px] pl-5' : 'text-[1rem] text-[#555]'}`}
                style={p.large ? { borderColor: gr(0.45) } : {}}
              >
                {p.text}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRODUCTS — Full-width horizontal split cards
═══════════════════════════════════════════════════════════════════════════ */
const products = [
  {
    num: '01',
    tag: '24K · 999.9 Fine · 1g – 1kg',
    title: 'Certified Gold Bars',
    body: 'Gold bars are the most popular form of gold bullion for long-term protection. From 1 gram to 1 kilogram, Tora Bullion is offering gold bars with unmatched purity of 24K or 999.9 for precious metal investment in the UAE. Giving importance to wealth preservation and sacred ownership, all the gold bars we are providing are carefully checked and ensured certification for compliance and easy traceability.',
    cta: 'Find your gold bars',
    href: '/services/buy-gold-bars-abu-dhabi',
    image: '/gold_bars.jpg',
    flip: false,
  },
  {
    num: '02',
    tag: 'Global · Certified · Flexible',
    title: 'Investment Gold Coins',
    body: 'We provide gold coins that are globally trusted with proper certification and compliance to ensure that you have the value of your physical gold investment. Our highly pure gold coins offer flexibility and accessibility anywhere in the world, making it perfect even for the tourists. The gold coins can be the right investment opening for balancing your portfolio and investment options.',
    cta: 'Explore our gold coins',
    href: '/services/buy-gold-coins-abu-dhabi',
    image: '/gold_coins.jpg',
    flip: true,
  },
]

function ProductsSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#0c0c0c] py-16 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 h-[400px] w-[900px] blur-[160px] rounded-full" style={{ backgroundColor: gr(0.06) }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Our Products</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            Investment-Grade <span className="text-[#C9982A]">Gold Bullion Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#888] max-w-[540px] leading-[1.82]"
          >
            Tora Bullion understands the pulse of the investors, and the needs of each investor are different. That&apos;s why we have a wide range of gold bullion products for you.
          </motion.p>
        </div>

        {/* Products — full-width split rows */}
        <div className="space-y-5">
          {products.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12 + i * 0.14, ease }}
              className={`group relative flex flex-col ${p.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden border border-white/[0.08]`}
            >
              {/* Image side */}
              <div className="relative w-full lg:w-[48%] h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/70 via-black/20 to-transparent" />
                <div className={`absolute inset-0 ${p.flip ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-[#0c0c0c]/50`} />
                {/* Watermark number on image */}
                <span className="absolute bottom-5 right-6 text-[5rem] font-bold leading-none text-white/[0.08] select-none">{p.num}</span>
              </div>

              {/* Text side */}
              <div className="relative flex-1 flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
                {/* Accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ background: p.flip ? `linear-gradient(to left, ${GOLD}, transparent)` : `linear-gradient(to right, ${GOLD}, transparent)` }}
                />

                <div className="mb-4 inline-flex items-center border px-3 py-1 w-fit" style={{ borderColor: gr(0.32), backgroundColor: gr(0.08) }}>
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#C9982A]">{p.tag}</span>
                </div>

                <h3 className="text-[1.9rem] lg:text-[2.3rem] font-bold text-white mb-4 leading-tight group-hover:text-[#C9982A] transition-colors duration-300">
                  {p.title}
                </h3>
                <div className="mb-5 h-[2px] w-14" style={{ backgroundColor: gr(0.5) }} />
                <p className="text-[0.93rem] text-[#999] leading-[1.9] mb-8 max-w-[460px]">{p.body}</p>

                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2.5 border border-[#C9982A]/50 text-[#C9982A] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.24em] hover:bg-[#C9982A] hover:text-[#0c0c0c] transition-all duration-300 w-fit"
                >
                  {p.cta} <span className="text-sm">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHY INVEST — 6 reasons, left-bordered 2-col grid
═══════════════════════════════════════════════════════════════════════════ */
const whyItems = [
  { num: '01', title: 'Stability during economic uncertainty', desc: 'Historically, gold has a record of not being heavily influenced during the economic crises. They have withstood unpredictable market crashes with ease.' },
  { num: '02', title: 'Protection against inflation',          desc: 'One of the important plus points of gold is that it is not affected by inflation. This sets gold apart from other investment options.' },
  { num: '03', title: 'Physical asset ownership',             desc: 'Gold bullions are a physical asset, so the ownership is much more secure to manage and use them.' },
  { num: '04', title: 'Long-term financial confidence',       desc: 'As the value of gold increases as time passes, it is opted for by the investors who want long-term financial security.' },
  { num: '05', title: 'Globally recognised value',           desc: 'When the currencies and other assets lose their value when crossing country borders, gold stays valid internationally.' },
  { num: '06', title: 'Portfolio protection',                  desc: 'In the current era, securing your investment portfolio is very important, and with gold, you can easily achieve it.' },
]

function WhyInvestSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#f5f3ef] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />
      <span className="pointer-events-none select-none absolute left-[-2rem] top-1/2 -translate-y-1/2 text-[22rem] font-bold leading-none" style={{ color: gr(0.035) }}>02</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Why Gold</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Why Invest in Gold Bullion <span className="text-[#C9982A]">in the UAE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[600px] leading-[1.82]"
          >
            Being one of the most trusted investment assets in the world, gold bullion has always had a high position on the investment ladder. To go into the topic a bit deeper, here are some of the major reasons why gold bullions are the favourites of investors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.1 + i * 0.07, ease }}
              className="group relative bg-white border-l-[3px] pl-6 pr-6 py-7 overflow-hidden hover:shadow-[0_4px_32px_rgba(201,152,42,0.1)] transition-all duration-400 cursor-default"
              style={{ borderLeftColor: gr(0.35) }}
            >
              {/* Left border hover fill */}
              <div className="absolute left-0 top-0 w-[3px] h-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 bg-[#C9982A]" />
              <div className="flex items-start gap-4">
                <span className="text-[2.2rem] font-bold leading-none flex-shrink-0 mt-0.5 transition-colors duration-300" style={{ color: gr(0.28) }}>
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[1rem] font-bold text-[#111111] mb-2.5 group-hover:text-[#C9982A] transition-colors duration-300">{item.title}</h3>
                  <div className="mb-3 h-px w-8 group-hover:w-12 transition-all duration-400" style={{ backgroundColor: gr(0.35) }} />
                  <p className="text-[0.875rem] text-[#636363] leading-[1.85]">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SOLUTIONS — Trusted Gold Bullion Solutions in Abu Dhabi
   Horizontal animated rows (distinct from Dubai's vertical list)
═══════════════════════════════════════════════════════════════════════════ */
const solutions = [
  { num: '01', title: 'Market Insights & Updates',     desc: 'We provide our customers with the latest updates and important information that helps them make the right investment choices.' },
  { num: '02', title: 'Trusted Investment Support',     desc: 'Our team supports your investment journey, helping you navigate the gold bullion market with clarity.' },
  { num: '03', title: 'Certified & Authentic Products', desc: 'Authenticity of the products is primary for Tora Bullion. All the products should meet recognised purity standards.' },
  { num: '04', title: 'Secure Transactions',            desc: 'Every purchase is handled with care, professionalism, and security to ensure peace of mind.' },
  { num: '05', title: 'Built on Trust',                 desc: 'We value the trust that our clients have on us and provide the right guidance to everyone coming to us.' },
]

function SolutionsSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 80% 50%, ${gr(0.03)} 0%, transparent 70%)` }} />
      <span className="pointer-events-none select-none absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[22rem] font-bold leading-none" style={{ color: gr(0.032) }}>03</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Our Approach</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Trusted Gold Bullion Solutions <span className="text-[#C9982A]">in Abu Dhabi</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[560px] leading-[1.82]"
          >
            Tora Bullion understands the struggle of each bullion investor in Abu Dhabi. We put the needs of our clients first. With authentic and compiled products, Tora Bullion processes secure transactions.
          </motion.p>
        </div>

        {/* Animated horizontal rows */}
        <div className="border-t border-[#111]/[0.07]">
          {solutions.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, delay: 0.1 + i * 0.07, ease }}
              className="group relative border-b border-[#111]/[0.07] py-7 lg:py-9 cursor-default overflow-hidden"
            >
              {/* Gold slide-in underline */}
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 bg-[#C9982A]" />
              {/* Subtle bg fill on hover */}
              <div className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: gr(0.02) }} />

              <div className="relative grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] lg:grid-cols-[110px_1fr_1fr] gap-4 lg:gap-12 items-center">
                <span
                  className="text-[2.8rem] sm:text-[3.5rem] font-bold leading-none select-none transition-colors duration-300"
                  style={{ color: gr(0.18) }}
                >
                  {s.num}
                </span>
                <h3 className="text-[1.05rem] sm:text-[1.3rem] lg:text-[1.65rem] font-bold text-[#111111] group-hover:text-[#C9982A] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="hidden lg:block text-[#777] leading-[1.78] text-[0.93rem]">{s.desc}</p>
              </div>
              <p className="lg:hidden mt-3 pl-[60px] sm:pl-[84px] text-[#777] leading-[1.78] text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   LIVE PRICE — International Spot Price (dark section)
═══════════════════════════════════════════════════════════════════════════ */
function LivePriceSection() {
  const { ref, inView } = useReveal()
  const price = useGoldSpot()

  return (
    <section ref={ref} className="relative bg-[#0c0c0c] py-14 lg:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full blur-[150px]" style={{ backgroundColor: gr(0.07) }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/15 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-5 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Live Rates</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              International <span className="text-[#C9982A]">Spot Price</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="text-[0.97rem] text-[#888] leading-[1.9] mb-8 max-w-[460px]"
            >
              Track the live gold price in Abu Dhabi to make sure that all your gold bullion investments are backed with real updates and confident purchases.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              <Link href="/gold-price">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 border border-[#C9982A] text-[#C9982A] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C9982A] hover:text-[#0c0c0c] transition-all duration-300"
                >
                  View All Prices <span className="text-sm">→</span>
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
              { label: 'Spot Price · USD / oz', value: price ? `$${fmt(price.ozUSD)}` : null, wide: true },
              { label: 'AED / gram',            value: price ? `AED ${fmt(price.gramAED)}` : null, wide: false },
            ].map((c, i) => (
              <div
                key={c.label}
                className={`relative border overflow-hidden px-5 py-6 ${i === 0 ? 'col-span-2' : ''}`}
                style={{ borderColor: gr(0.25), backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ background: i === 0 ? `linear-gradient(to right, ${GOLD}, ${gr(0.3)})` : `linear-gradient(to right, ${gr(0.4)}, transparent)` }}
                />
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C9982A]">{c.label}</p>
                </div>
                {price ? (
                  <p className={`font-bold text-white leading-none ${i === 0 ? 'text-[2.4rem] sm:text-[3rem]' : 'text-[1.6rem]'}`}>{c.value}</p>
                ) : (
                  <div className={`rounded animate-pulse ${i === 0 ? 'h-10 w-40' : 'h-8 w-28'}`} style={{ backgroundColor: gr(0.12) }} />
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
   GUIDANCE — Asymmetric 2-col with chevron accordion
═══════════════════════════════════════════════════════════════════════════ */
const guidanceItems = [
  { num: '01', title: 'Balancing investment goals',  desc: "A person's investment goals should be taken into consideration, and balancing it with the right gold bullion is important." },
  { num: '02', title: 'Understanding purity',         desc: 'The different purity levels of gold should be deeply understood. The investment-grade gold bullion will be of 24K or 999.9 purity.' },
  { num: '03', title: 'Choosing investment products', desc: 'The products you choose for your gold investment are crucial for the right results. You should choose from a different range of gold bars and coins.' },
  { num: '04', title: 'Long-term asset planning',     desc: 'With gold bullion, you can actually have a solid asset plan for your future if you do it with vision.' },
  { num: '05', title: 'Beginner-friendly guidance',   desc: 'If you are a beginner in precious metal investment, there are many basic points that you should know before investing.' },
]

function GuidanceSection() {
  const { ref, inView } = useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative bg-[#f5f3ef] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />
      <span className="pointer-events-none select-none absolute left-[-2rem] top-1/2 -translate-y-1/2 text-[22rem] font-bold leading-none" style={{ color: gr(0.035) }}>04</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-20 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-4 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Guidance</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.95, delay: 0.08, ease }}
              className="text-[clamp(1.9rem,4vw,2.8rem)] font-bold text-[#111111] leading-[1.1] tracking-tight"
            >
              Guidance for Your<br />
              <span className="text-[#C9982A]">Gold Investment</span><br />
              in UAE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-5 text-[0.95rem] text-[#636363] leading-[1.85]"
            >
              Investing in gold takes a lot of research and the right information. Being a reputed bullion trader in the UAE, Tora Bullion can provide you with the right guidance that can help you with your gold investment journey.
            </motion.p>
          </div>

          {/* Right: chevron accordion */}
          <div className="space-y-2">
            {guidanceItems.map((g, i) => {
              const isOpen = open === i
              return (
                <motion.div
                  key={g.num}
                  initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease }}
                  className="overflow-hidden bg-white border border-[#e8e2d8]"
                >
                  <button
                    className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span
                      className="text-[1.7rem] font-bold leading-none flex-shrink-0 transition-colors duration-300"
                      style={{ color: isOpen ? GOLD : gr(0.22) }}
                    >
                      {g.num}
                    </span>
                    <span className="flex-1 text-[0.97rem] font-bold text-[#111111] group-hover:text-[#C9982A] transition-colors duration-200">
                      {g.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 flex items-center justify-center h-7 w-7 border transition-all duration-300"
                      style={{ borderColor: isOpen ? GOLD : gr(0.25), backgroundColor: isOpen ? gr(0.08) : 'transparent' }}
                    >
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke={isOpen ? GOLD : '#999'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 border-t" style={{ borderColor: gr(0.15) }}>
                          <p className="text-[0.92rem] text-[#555] leading-[1.88] pl-[3.2rem]">{g.desc}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA — Dark with diagonal gold stripes
═══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const { ref, inView } = useReveal('-40px')

  return (
    <section ref={ref} className="relative bg-[#0c0c0c] py-16 lg:py-24 overflow-hidden">
      {/* Diagonal decorative stripes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[250px] h-[700px] rotate-[18deg]" style={{ backgroundColor: gr(0.04) }} />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[250px] h-[700px] rotate-[18deg]" style={{ backgroundColor: gr(0.04) }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[3px] h-full" style={{ backgroundColor: gr(0.06) }} />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/35 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full blur-[160px]" style={{ backgroundColor: gr(0.07) }} />

      <div className="relative mx-auto max-w-[900px] px-5 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-8 flex items-center justify-center gap-5"
        >
          <div className="h-px w-16" style={{ backgroundColor: gr(0.4) }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.38em] text-[#C9982A]">Tora Bullion</span>
          <div className="h-px w-16" style={{ backgroundColor: gr(0.4) }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 36, filter: 'blur(12px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.05, delay: 0.1, ease }}
          className="text-[clamp(2rem,5vw,3.4rem)] font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Secure Your Wealth the<br />
          <span className="text-[#C9982A]">Right Way with Tora Bullion</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="text-[1.02rem] leading-[1.9] text-[#888] mb-10 max-w-[520px] mx-auto"
        >
          Do not be confused on where to start your gold investment in Abu Dhabi; Tora Bullion is here to guide you through each and every step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.32, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/shop" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 52px rgba(201,152,42,0.32)' }} whileTap={{ scale: 0.97 }}
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
    q: 'Is gold bullion a safe long-term investment?',
    a: 'Historically, gold has always shown stability during times of market instability and inflation, making it one of the most apt long-term investments.',
  },
  {
    q: 'Is a 24K gold bar suitable for investment?',
    a: 'Yes, 24K gold bars are the investment-grade gold bullion that is specially designed for investment purposes.',
  },
  {
    q: 'How do I choose the right gold bullion for investment?',
    a: 'To find the right gold bullion for investment, you need to take a lot of points into consideration. Your investment goals, budgets, and preference will determine the best bullion for you. If you are interested in larger investments that carry lower premiums and better value per gram, you should consider gold bars. You should choose gold coins if you are looking for flexibility and ease of trading in smaller quantities.',
  },
]

function FAQSection() {
  const { ref, inView } = useReveal()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative bg-white py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/10 to-transparent" />

      <div className="relative mx-auto max-w-[900px] px-5 sm:px-6 lg:px-12">
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
                className="border border-[#e8e2d8] overflow-hidden"
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
export default function GoldBullionAbuDhabiPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyInvestSection />
      <SolutionsSection />
      <LivePriceSection />
      <GuidanceSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
