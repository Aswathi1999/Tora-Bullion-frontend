'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Award, Wallet, PieChart, Lock, Globe, TrendingUp } from 'lucide-react'

const features = [
  { icon: Award,      text: 'Certified silver bullion products' },
  { icon: Wallet,     text: 'Easy entry point for precious metal investments' },
  { icon: PieChart,   text: 'Portfolio diversification with silver bullion' },
  { icon: Lock,       text: 'Secure and transparent bullion transactions' },
  { icon: Globe,      text: 'Follows international spot pricing' },
  { icon: TrendingUp, text: 'Stable and long-term growth opportunities' },
]

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease } },
}

const staggerText = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export default function SilverBullionSection() {
  const textRef = useRef(null)
  const imgRef  = useRef(null)
  const textInView = useInView(textRef, { once: true, margin: '-80px' })
  const imgInView  = useInView(imgRef,  { once: true, margin: '-80px' })

  return (
    <section id="silver-bullion" className="relative overflow-hidden bg-[#F2F5F7] py-24 lg:py-32">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(107,124,132,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Animated ambient blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] right-[20%] w-[650px] h-[500px] bg-[#8B95A0]/12 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[-10%] left-[-8%] w-[450px] h-[450px] bg-[#6B7C84]/8 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B95A0]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B95A0]/20 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ════════════════════════════════
              IMAGES — Structured composite frame
              Wide panoramic image (top, full-width)
              + smaller silver coins photo (bottom-left)
              + glassmorphism specs panel (bottom-right)
          ════════════════════════════════ */}
          <div
            ref={imgRef}
            className="relative h-[500px] md:h-[580px] select-none order-last lg:order-first"
          >
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.10, 0.17, 0.10] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[90%] h-48 bg-[#8B95A0]/10 rounded-full blur-[60px] pointer-events-none"
            />

            {/* ── Top panoramic image: spans full width ── */}
            <motion.div
              initial={{ opacity: 0, y: -28 }}
              animate={imgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease }}
              whileHover={{ scale: 1.015, transition: { duration: 0.5 } }}
              className="absolute top-0 inset-x-0 h-[55%] rounded-2xl overflow-hidden border border-[#8B95A0]/18 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1641324115253-f66c552336cb?w=1200&q=85"
                alt="Premium silver bullion bars"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              {/* Glass strip at bottom of panoramic */}
              <div className="absolute bottom-0 inset-x-0 px-5 py-3 bg-white/8 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <span className="text-white/80 text-[11px] font-semibold tracking-[0.18em] uppercase">999 Fine Silver</span>
                <span className="text-white/50 text-[10px] tracking-widest uppercase">Investment Grade Bullion</span>
              </div>
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#8B95A0]/45 rounded-tl pointer-events-none" />
              <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#8B95A0]/25 rounded-tr pointer-events-none" />
            </motion.div>

            {/* ── Bottom-left: silver coins image ── */}
            <motion.div
              initial={{ opacity: 0, x: -28, y: 20 }}
              animate={imgInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.22 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
              className="absolute bottom-0 left-0 w-[47%] h-[41%] rounded-2xl overflow-hidden border-[3px] border-[#F2F5F7] shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1621862623900-832ef4dd24aa?w=700&q=85"
                alt="Silver coins"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-[#C8D4DA] text-[11px] font-bold tracking-[0.18em] uppercase">Silver Coins</p>
              </div>
            </motion.div>

            {/* ── Bottom-right: glass specs panel (no image) ── */}
            <motion.div
              initial={{ opacity: 0, x: 28, y: 20 }}
              animate={imgInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.36 }}
              className="absolute bottom-0 right-0 w-[47%] h-[41%] rounded-2xl bg-white/75 backdrop-blur-xl border border-[#D0D8E2] shadow-[0_20px_50px_rgba(107,124,132,0.12)] overflow-hidden"
            >
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(#8B95A0 1px, transparent 1px), linear-gradient(90deg, #8B95A0 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="relative h-full flex flex-col justify-between p-4">
                <p className="text-[#3a4f58] text-[10px] font-bold uppercase tracking-[0.22em]">
                  Product Specs
                </p>
                <div className="space-y-2">
                  {[
                    '999 Fine Silver Standard',
                    'Available from 1g to 1 kilogram',
                    'Dubai & Abu Dhabi outlets',
                    'International spot pricing',
                  ].map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={imgInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.08 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B95A0] flex-shrink-0" />
                      <span className="text-[#444] text-[12px] leading-snug">{spec}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2.5 border-t border-[#D0D8E0]">
                  <Award className="w-3.5 h-3.5 text-[#4a5c64] flex-shrink-0" />
                  <span className="text-[9px] text-[#888] uppercase tracking-widest">Internationally Certified</span>
                </div>
              </div>
            </motion.div>

            {/* ── Floating certified badge (top-left) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.6 }}
              className="absolute top-[3%] left-0"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="bg-white/85 backdrop-blur-xl rounded-xl border border-[#D0D8E0] px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.07)] flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#8B95A0]/15 border border-[#8B95A0]/25 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 text-[#4a5c64]" />
                </div>
                <div>
                  <p className="text-[#111] text-[11px] font-bold leading-tight">Certified Bullion</p>
                  <p className="text-[#888] text-[9px] mt-0.5">International Standards</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ══════════════ TEXT ══════════════ */}
          <motion.div
            ref={textRef}
            variants={staggerText}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
          >
            {/* Badge + leading line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={textInView ? { width: 64, opacity: 1 } : {}}
                transition={{ duration: 1, ease, delay: 0.45 }}
                className="h-px bg-gradient-to-l from-[#8B95A0]/55 to-transparent"
              />
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#8B95A0]/40 bg-gradient-to-r from-[#8B95A0]/12 to-[#C0CBD4]/8">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#9EA8B0] opacity-50 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-gradient-to-br from-[#C0CBD4] to-[#8B95A0]" />
                </span>
                <span className="bg-gradient-to-r from-[#6B7C84] via-[#9EA8B0] to-[#6B7C84] bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.32em]">
                  Silver Bullion
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="text-4xl md:text-[2.8rem] lg:text-5xl font-bold leading-[1.1] mb-6">
              <span className="text-[#111111]">Premium </span>
              <span className="bg-gradient-to-r from-[#4a5c64] via-[#8B95A0] to-[#5a6b73] bg-clip-text text-transparent">
                Silver Bullion
              </span>
              <span className="text-[#111111] block">in the UAE</span>
            </motion.h2>

            {/* Animated divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={textInView ? { width: 56 } : {}}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-[#8B95A0] to-transparent"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={textInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.55 }}
                className="w-2 h-2 rounded-full border border-[#8B95A0]/60"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={textInView ? { width: 36 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
                className="h-px bg-gradient-to-l from-[#8B95A0]/30 to-transparent"
              />
            </motion.div>

            {/* Body */}
            <motion.p variants={fadeUp} className="text-[#555] text-base md:text-[17px] leading-[1.95] mb-10">
              Tora Bullion offers high-quality premium silver bars and coins in Dubai in a wide range
              that will help the investors to diversify their portfolios. As silver is showing high
              potential in the market, the demand for silver bullion is increasing. Our experts will
              help our clients to explore the silver investment opportunities in the UAE for both
              experienced and new investors. We provide silver bars and coins in Dubai and Abu Dhabi
              ranging from 1 gram to 1 kilogram.
            </motion.p>

            {/* Feature cards */}
            <motion.div variants={cardStagger} className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={cardItem}
                  whileHover={{ y: -3, boxShadow: '0 6px_24px_rgba(107,124,132,0.16)', borderColor: 'rgba(139,149,160,0.55)' }}
                  transition={{ duration: 0.22 }}
                  className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#D4DCE0] bg-white cursor-default shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                >
                  <motion.span
                    whileHover={{ scale: 1.12, rotate: -8 }}
                    transition={{ duration: 0.22 }}
                    className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#EDF1F3] border border-[#CDDAE0] flex items-center justify-center group-hover:bg-[#8B95A0]/15 group-hover:border-[#8B95A0]/35 transition-all duration-300"
                  >
                    <f.icon className="w-4 h-4 text-[#4a5c64]" />
                  </motion.span>
                  <span className="text-[#444] text-sm leading-snug group-hover:text-[#1a2428] transition-colors duration-300">
                    {f.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <motion.a
                href="#shop"
                whileHover={{ y: -2, boxShadow: '0 14px 48px rgba(26,36,40,0.28)' }}
                transition={{ duration: 0.22 }}
                className="relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#1a2428] text-white text-sm font-bold tracking-wide overflow-hidden shadow-[0_8px_32px_rgba(26,36,40,0.18)]"
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
                <span className="relative">Explore Silver Bullion</span>
                <ChevronRight className="relative w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
