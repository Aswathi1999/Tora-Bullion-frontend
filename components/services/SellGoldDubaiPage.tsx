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
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Sell Gold · Dubai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.8rem,7vw,4.2rem)] font-bold leading-[1.02] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              Sell Gold Bullion<br />
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
              Get Competitive Market-Based Rates for Your Gold. Check the live gold price in Dubai!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.33, ease }}
            >
              <Link href="/gold-price">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(201,152,42,0.32)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  Check Live Gold Price <span className="text-sm">→</span>
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
              <Image src="/gold_bars.jpg" alt="Sell Gold Bullion in Dubai" fill className="object-cover object-center" priority />
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]" />
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: gr(0.35) }} />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">Best Rates · Dubai</p>
            </motion.div>

            {/* Second image */}
            <motion.div
              initial={{ opacity: 0, x: 28, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease }}
              className="absolute right-0 top-[22%] w-[42%] h-[48%] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.18)] border border-[#e8dfc8]"
            >
              <Image src="/gold_main.jpg" alt="Sell gold bars Dubai" fill className="object-cover object-center" />
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
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">Live Market Rates</p>
                  <p className="text-[8px] text-white/45 mt-0.5">Transparent · Trusted</p>
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
   ABOUT — Looking to Sell Gold in Dubai
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Sell Gold Dubai</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-[#111111] leading-[1.08] tracking-tight"
          >
            Looking to Sell Gold <span className="text-[#C9982A]">in Dubai</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            <p className="text-[1.12rem] font-medium text-[#333] leading-[1.92] border-l-[3px] pl-6" style={{ borderColor: gr(0.5) }}>
              Known as the "City of Gold", Dubai is a paradise for physical gold investment in the UAE. When the buying of gold in Dubai is overly focused on by the bullion shops and jewelleries, there is much less focus given to the selling aspect of gold bullions. The care you take when you sell gold bullion must be as strong as the care for buying.
            </p>
          </motion.div>

          <div>
            {[
              'The shop and trader you choose to sell your gold bullion in Dubai should be reliable for you to get the best price and the most value of your product. Hence, you need a reputed trader that has extensive experience in the Dubai bullion landscape.',
              'Tora Bullion, with more than ten years of active industry experience from the heart of Dubai\'s Gold Souk, can help you get the best offer for your gold bullions.',
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
   WHAT GOLD — What Gold Can You Sell?
═══════════════════════════════════════════════════════════════════════════ */
const goldTypes = [
  { num: '01', title: 'Gold Bars',             body: 'You can bring your gold bars of any size to Tora Bullion for selling them to us. We will accept any gold bars with the right certification and purity assurance.' },
  { num: '02', title: 'Gold Coins',            body: 'Gold coins of any size and weightage will be accepted at Tora Bullion. You will get the best value of your gold aligning with the international spot price.' },
  { num: '03', title: 'Gold Bullions',         body: 'Special edition gold bullions with certification are accepted by our team. The price will be according to the value of the bullion and the live prices.' },
  { num: '04', title: 'Investment-Grade Gold', body: 'Any investment-grade gold is also accepted here with the right authentication of the purity and compliance.' },
]

function WhatGoldSection() {
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">We Accept</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            What Gold Can <span className="text-[#C9982A]">You Sell?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#888] max-w-[580px] leading-[1.82]"
          >
            Even though Tora Bullion is the best place for you to sell your gold in Dubai, there are certain forms of gold that we accept.
          </motion.p>
        </div>

        <div className="space-y-0">
          {goldTypes.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease }}
              className="group relative border-b border-white/[0.08] py-7 lg:py-8"
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
                <div className="pt-1 col-span-2 sm:col-span-1">
                  <p className="text-[0.9rem] text-[#999] leading-[1.88]">{item.body}</p>
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
   PROCESS — How Our Gold Selling Process Works
═══════════════════════════════════════════════════════════════════════════ */
const processSteps = [
  { num: '01', title: 'Bring Your Gold for Evaluation',  body: 'You need to bring in the gold you intend to sell physically to our store to have a thorough evaluation.' },
  { num: '02', title: 'Purity & Weight Assessment',       body: 'We will check the accurate purity and weight of your gold bullion to ensure the quality and compliance.' },
  { num: '03', title: 'Market-Based Valuation',           body: 'The purity and weight of the gold bullion you brought will go through the market-based valuation to finalise the rates and standards.' },
  { num: '04', title: 'Receive Your Offer',               body: 'After considering the market value and the quality of your gold bullion, we will offer a price to you.' },
  { num: '05', title: 'Complete the Transaction',         body: 'The transactions will be completed when you approve the price we put forward; we can complete the transaction.' },
]

function ProcessSection() {
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            How Our Gold Selling <span className="text-[#C9982A]">Process Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[600px] leading-[1.82]"
          >
            Here is a step-by-step process of how you can sell your gold bullion with Tora Bullion without any confusion.
          </motion.p>
        </div>

        <div className="space-y-0">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease }}
              className="group relative border-b border-[#e8e2d8] py-7 lg:py-8"
            >
              <div className="absolute bottom-0 inset-x-0 h-px bg-[#C9982A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[100px_1fr_2fr] lg:grid-cols-[120px_1fr_2fr] gap-4 lg:gap-10 items-start">
                <span className="text-[2.8rem] sm:text-[3.4rem] font-bold leading-none text-[#111]/[0.06] group-hover:text-[#C9982A]/20 transition-colors duration-500 select-none pt-1">
                  {item.num}
                </span>
                <div className="pt-1">
                  <h3 className="text-[1.1rem] lg:text-[1.25rem] font-bold text-[#111111] group-hover:text-[#C9982A] transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-8 group-hover:w-14 transition-all duration-400" style={{ backgroundColor: gr(0.5) }} />
                </div>
                <div className="pt-1 col-span-2 sm:col-span-1">
                  <p className="text-[0.9rem] text-[#636363] leading-[1.88]">{item.body}</p>
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
   WHY — Why Sell Your Gold to Tora Bullion?
═══════════════════════════════════════════════════════════════════════════ */
const whyItems = [
  { num: '01', title: 'Transparent Pricing',          desc: 'We offer you the best offer with the international spot price and no hidden charges to ensure your satisfaction.' },
  { num: '02', title: 'Live Market Valuation',         desc: 'All the products that we buy will be valued based on the market value of that time, not with a fixed price.' },
  { num: '03', title: 'Professional Assessment',       desc: 'Our experts will give your products a thorough professional assessment to determine the accurate value without any flaws.' },
  { num: '04', title: 'Trusted Precious Metals Expertise', desc: 'With more than 10 years of experience in the bullion market, we will provide you with guidance and suggestions too.' },
  { num: '05', title: 'Customer-Focused Service',     desc: 'We always put our customers first and provide services prioritising your satisfaction and enriching your gold bullion experience with us.' },
]

function WhySection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${gr(0.03)} 0%, transparent 70%)` }} />
      <span className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none" style={{ color: gr(0.03) }}>04</span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Why Tora Bullion</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Why Sell Your Gold to <span className="text-[#C9982A]">Tora Bullion?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 text-[1rem] text-[#636363] max-w-[600px] leading-[1.82]"
          >
            Gold bullion could be sold anywhere in Dubai, but only a trusted gold bullion dealer in Dubai can give you the right value for your products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyItems.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease }}
              className="group relative bg-[#faf8f4] overflow-hidden cursor-default border border-[#e8e2d8] hover:shadow-[0_6px_40px_rgba(201,152,42,0.1)] transition-all duration-400"
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
   CTA — Ready to Sell Your Gold?
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
          Ready to Sell <span className="text-[#C9982A]">Your Gold?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="text-[1.02rem] leading-[1.9] text-[#636363] mb-10 max-w-[520px] mx-auto"
        >
          Are you looking for a reliable gold trader in Dubai to get the best price for your gold bullions? Tora Bullion is here to help you with that. We will provide you with the best gold buyback offers and expert guidance, helping you make informed investment decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.32, ease }}
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 52px rgba(201,152,42,0.32)' }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              Sell your gold with Tora Bullion today <span className="text-sm">→</span>
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
    q: 'Where can I sell my gold coins for the best price?',
    a: 'You can sell your gold coins and bullion at Tora Bullion for the best price, as we follow the international spot prices to ensure transparent pricing for your product.',
  },
  {
    q: 'Where to sell gold bars in Dubai?',
    a: 'Like buying, selling gold bars also could be done easily in the Dubai Gold Souk. With the help of trusted gold buyers like Tora Bullion.',
  },
  {
    q: 'Does Tora Bullion accept gold jewellery?',
    a: 'No, we do not accept gold jewellery. Tora Bullion only accepts investment-grade gold bullions.',
  },
  {
    q: 'Will it take a lot of time to sell my gold at Tora Bullion?',
    a: 'The time you would take to complete the process of selling your gold at Tora Bullion depends on the quantity and quality of the gold you bring.',
  },
  {
    q: 'Is the certification of gold bullion necessary to sell it in Dubai?',
    a: 'Yes. The certification to prove the quality and invoice of the purchase of the gold bullion are necessary to sell them in Dubai.',
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
export default function SellGoldDubaiPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhatGoldSection />
      <ProcessSection />
      <WhySection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
