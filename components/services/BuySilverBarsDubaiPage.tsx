'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const GOLD = '#C9982A'
const gr = (a: number) => `rgba(201,152,42,${a})`

function useReveal(margin = '-70px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

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
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Silver Bars · Dubai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.8rem,7vw,4.2rem)] font-bold leading-[1.02] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              Buy Silver Bars<br />
              <span className="text-[#C9982A]">in Dubai</span>
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
              Trusted Silver Bullion Solutions for Investors in Dubai. Explore Silver Bars in Dubai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.33, ease }}
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(201,152,42,0.32)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  Explore silver bars in Dubai <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right — images */}
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
              <Image src="/silver_bars.jpg" alt="Buy Silver Bars in Dubai" fill className="object-cover object-center" priority />
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]" />
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: gr(0.35) }} />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">Investment Grade · Dubai</p>
            </motion.div>

            {/* Second image */}
            <motion.div
              initial={{ opacity: 0, x: 28, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease }}
              className="absolute right-0 top-[22%] w-[42%] h-[48%] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.18)] border border-[#e8dfc8]"
            >
              <Image src="/silver_bars.jpg" alt="Silver bars investment Dubai" fill className="object-cover object-bottom" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="pointer-events-none absolute right-3 top-3 h-7 w-7 border-r-[1.5px] border-t-[1.5px] border-[#C9982A]" />
            </motion.div>

            {/* Floating Est. card */}
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

            {/* Floating badge */}
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
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">999.9 Fine Silver</p>
                  <p className="text-[8px] text-white/45 mt-0.5">Certified · LBMA</p>
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
   ABOUT — Investment-Grade Silver Bars for Every Portfolio
═══════════════════════════════════════════════════════════════════════════ */
function AboutSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <span className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none" style={{ color: gr(0.03) }}>01</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-5 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">About Silver Bars</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-[#111111] leading-[1.08] tracking-tight"
          >
            Investment-Grade Silver Bars <span className="text-[#C9982A]">for Every Portfolio</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            <p className="text-[1.12rem] font-medium text-[#333] leading-[1.92] border-l-[3px] pl-6" style={{ borderColor: gr(0.5) }}>
              The precious metal industry, where gold has always been the priority, is facing a change in its situation. Silver is showing a rise in its value in recent times, and the investment opportunities it is bringing to the table are immense. Like gold bars, silver bars are the form of silver in the highest purity in standardised bars. Being an option for the investment, silver bars are one of the first choices of the new investors to start their journey in the precious metals market.
            </p>
          </motion.div>

          <div>
            {[
              'Silver bullion in the UAE is becoming an easy way to enter bullion investing, as the price range of silver is much more affordable than that of gold bullions. The industry of physical precious metal ownership is becoming more keen on silver as the demand for silver is increasing internationally due to various reasons.',
              'Being a trusted silver bar dealer in Dubai, Tora Bullion has been providing high-quality silver bars for investment.',
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.18 + i * 0.1, ease }}
                className="text-[1rem] text-[#555] leading-[1.92] mb-6"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   COLLECTION — Explore Our Silver Bar Collection
═══════════════════════════════════════════════════════════════════════════ */
const collectionItems = [
  {
    num: '01',
    title: 'Small Silver Bars',
    body: 'The small bars are considered the entry-level investment silver bars, as they are the smallest forms of bars you can purchase. They are budget-friendly and ideal for the first-time investors in the field. As it is not expensive and concise, it is also easy to store and contribute to your accumulation strategy.',
    sizes: 'Tora Bullion is offering small silver bullions like 1 oz., 50 gram, and 100 gram silver bars.',
  },
  {
    num: '02',
    title: 'Medium Silver Bars',
    body: 'These silver bars are the most popular silver bullion among the regular investors. The medium silver bars in Dubai could be considered a perfect balance for the physical silver investment in the UAE. They are affordable silver bullions that also have value in the market. These can be the best silver bars to buy for the investors who are looking for a suitable product for their portfolio.',
    sizes: 'The 250 gram and 500 gram silver bars are the main medium silver bars offered by Tora Bullion.',
  },
  {
    num: '03',
    title: 'Large Silver Bars',
    body: 'One of the major advantages of buying large silver bars in Dubai is that it has a low premium per gram, helping you get the best value for your money. They are the ideal choice if you are looking for long-term silver bar holding. The large silver bars are often the primary choice for serious investors who are into bulk silver investments.',
    sizes: 'With Tora Bullion, you can purchase silver bars, like 1 kg silver bars, which are the popular large Dubai silver bars in the bullion market.',
  },
]

function CollectionSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#0c0c0c] py-16 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-[500px] w-[1000px] rounded-full blur-[160px]" style={{ backgroundColor: gr(0.06) }} />
      <span className="pointer-events-none select-none absolute left-[-1rem] top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none" style={{ color: gr(0.04) }}>02</span>

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
            Explore Our <span className="text-[#C9982A]">Silver Bar Collection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#888] max-w-[580px] leading-[1.82]"
          >
            Tora Bullion is offering silver bars in Dubai for investment. We provide silver bars of various sizes that can match all your investment needs.
          </motion.p>
        </div>

        <div className="space-y-0">
          {collectionItems.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease }}
              className="group relative border-b border-white/[0.08] py-7 lg:py-9"
            >
              <div className="absolute bottom-0 inset-x-0 h-px bg-[#C9982A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[100px_1fr_2fr] lg:grid-cols-[120px_1fr_2fr] gap-4 lg:gap-10 items-start">
                <span className="text-[2.8rem] sm:text-[3.4rem] font-bold leading-none text-white/[0.08] group-hover:text-[#C9982A]/20 transition-colors duration-500 select-none pt-1">
                  {item.num}
                </span>
                <div className="pt-1">
                  <h3 className="text-[1.1rem] lg:text-[1.25rem] font-bold text-white group-hover:text-[#C9982A] transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-8 group-hover:w-14 transition-all duration-400" style={{ backgroundColor: gr(0.5) }} />
                </div>
                <div className="pt-1 col-span-2 sm:col-span-1 space-y-3">
                  <p className="text-[0.9rem] text-[#999] leading-[1.88]">{item.body}</p>
                  <p className="text-[0.88rem] text-[#C9982A]/70 leading-[1.8]">{item.sizes}</p>
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
   WHY — Why Investors Choose Silver Bars
═══════════════════════════════════════════════════════════════════════════ */
const whyItems = [
  { num: '01', title: 'Affordable Precious Metals Investment', desc: 'While comparing to the gold bullion and products, silver has a lower entry cost.' },
  { num: '02', title: 'Strong Industrial Demand',              desc: 'The recent surge in the use of silver in electronics, solar energy, medical sectors, and more contributed to the demand.' },
  { num: '03', title: 'Physical Asset Ownership',             desc: 'Silver bars are also a reliable tangible investment that you can hold on to.' },
  { num: '04', title: 'Portfolio Diversification',            desc: 'Silver bars can bring the perfect addition to your portfolio to balance it alongside your traditional investments.' },
  { num: '05', title: 'Global Market Recognition',            desc: 'Being one of the most traded precious metals in the world, silver has international recognition.' },
  { num: '06', title: 'Long-Term Growth Potential',           desc: 'The demand for silver is growing as it continues to expand across the world in various industries.' },
]

function WhySection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#f5f3ef] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />
      <span className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none" style={{ color: gr(0.032) }}>03</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Why Silver Bars</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Why Investors Choose <span className="text-[#C9982A]">Silver Bars</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[600px] leading-[1.82]"
          >
            The question of how to invest in silver bars in the UAE is something everyone asks, but there should be consideration given to why you are choosing silver bars. There are many reasons for investors to choose silver as their go-to precious metal investment option.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyItems.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.07, ease }}
              className="group relative bg-white overflow-hidden cursor-default border border-[#e8e2d8] hover:shadow-[0_6px_40px_rgba(201,152,42,0.1)] transition-all duration-400"
            >
              <div className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: gr(0.03) }} />
              <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ background: `linear-gradient(to right, ${GOLD}, ${gr(0.3)})` }} />
              <div className="relative flex items-start gap-5 px-7 py-8">
                <span className="text-[2.6rem] font-bold leading-none flex-shrink-0" style={{ color: gr(0.2) }}>{r.num}</span>
                <div>
                  <h3 className="text-[1.05rem] font-bold text-[#111111] mb-2.5 group-hover:text-[#C9982A] transition-colors duration-300">{r.title}</h3>
                  <div className="mb-3 h-px w-8 group-hover:w-14 transition-all duration-400" style={{ backgroundColor: gr(0.4) }} />
                  <p className="text-[0.9rem] text-[#636363] leading-[1.85]">{r.desc}</p>
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
   GUIDANCE — Choosing the Right Silver Bar Size
═══════════════════════════════════════════════════════════════════════════ */
function GuidanceSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${gr(0.03)} 0%, transparent 70%)` }} />
      <span className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none" style={{ color: gr(0.03) }}>04</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-5 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Guidance</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.95, delay: 0.08, ease }}
              className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
            >
              Choosing the Right <span className="text-[#C9982A]">Silver Bar Size</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease }}
            className="lg:pt-16"
          >
            <p className="text-[1rem] text-[#555] leading-[1.92]">
              Finding the best place to buy silver bars for your investment needs might feel like a simple task. The truth is it is ideal to take the help of a trusted silver bullion dealer like Tora Bullion. To answer the question "which silver bar size should I buy", here is the advice from the experts. Your budget should be a primary consideration before buying any silver bullion in Dubai. The investment goals of each individual will be different, and it is important before any investment decisions. Since silver is affordable, you have to consider the storage requirements once you have purchased your silver bullion. When you are buying silver bullion in Dubai, there is no single approach that could work for all. The right silver bar will depend on your plans in investment and the role of silver in your portfolio. The team at Tora Bullion will help you navigate this with right guidance, helping you to make informed decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA — Invest in Certified Silver Bars with Confidence
═══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const { ref, inView } = useReveal('-40px')

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-16 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[280px] h-[700px] rotate-[16deg]" style={{ backgroundColor: gr(0.06) }} />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[280px] h-[700px] rotate-[16deg]" style={{ backgroundColor: gr(0.06) }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[860px] px-5 sm:px-6 lg:px-12 text-center">
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
          className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-6"
        >
          Invest in Certified Silver Bars <span className="text-[#C9982A]">with Confidence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="text-[1.02rem] leading-[1.9] text-[#636363] mb-10 max-w-[520px] mx-auto"
        >
          Make the right choices for your silver investment journey in Dubai with Tora Bullion. We will provide you with high-quality products and guidance to secure your future through silver bars.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.32, ease }}
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 52px rgba(201,152,42,0.32)' }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              Start your silver bar investment now <span className="text-sm">→</span>
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
    q: 'Are silver bars a good investment?',
    a: 'Yes, silver bars are considered a good investment asset, considering the increased demand and the role they play in diversifying the portfolio of investors.',
  },
  {
    q: 'What purity should silver bars have?',
    a: 'An investment-grade silver bar will have 99.99% purity, which is the finest form of silver available in the market.',
  },
  {
    q: 'Does Tora Bullion offer 1 kg silver bars?',
    a: 'Yes, Tora Bullion offers silver bars of various weightage, starting from 1 gram to 1 kg silver bars, in Dubai.',
  },
  {
    q: 'Where can I buy silver bars in the UAE?',
    a: 'You can purchase silver bars and bullion from trusted silver bullion dealers like Tora Bullion. You can visit our store or contact us directly for more information.',
  },
]

function FAQSection() {
  const { ref, inView } = useReveal()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative bg-[#f5f3ef] py-14 lg:py-20 overflow-hidden">
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
export default function BuySilverBarsDubaiPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <WhySection />
      <GuidanceSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
