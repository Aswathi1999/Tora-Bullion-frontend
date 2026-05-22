'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Layers, BarChart2, Eye, Users, Star, Shield } from 'lucide-react'

const features = [
  { icon: Layers,    text: 'Wide range of gold bars and coins' },
  { icon: BarChart2, text: 'International spot pricing for all products' },
  { icon: Eye,       text: 'Transparent pricing with no hidden charges' },
  { icon: Users,     text: 'Professional guidance for all purchases' },
  { icon: Star,      text: 'Personalised assistance for choosing the right products' },
  { icon: Shield,    text: 'Long-term wealth protection' },
]

const stats = [
  { value: '999.9', label: 'Purity' },
  { value: '24K',   label: 'Gold Grade' },
  { value: '1g–1kg', label: 'Range' },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export default function GoldBullionSection() {
  const textRef    = useRef(null)
  const imgRef     = useRef(null)
  const textInView = useInView(textRef, { once: true, margin: '-80px' })
  const imgInView  = useInView(imgRef,  { once: true, margin: '-80px' })

  return (
    <section id="gold-bullion" className="relative overflow-hidden bg-[#0A0800] py-14 lg:py-20">

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(201,152,42,0.14) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Animated blobs */}
      <motion.div
        animate={{ y: [0, -24, 0], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-40 left-[20%] h-[600px] w-[700px] rounded-full bg-[#C9982A]/10 blur-[140px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#C9982A]/8 blur-[120px]"
      />

      {/* Hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ══ TEXT ══════════════════════════════════════════════ */}
          <motion.div
            ref={textRef}
            variants={stagger}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C9982A]/40 bg-gradient-to-r from-[#C9982A]/20 to-[#E8C060]/8 px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8C060] opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[#E8C060] to-[#C9982A]" />
                </span>
                <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#C9982A] bg-clip-text text-[11px] font-bold uppercase tracking-[0.32em] text-transparent">
                  Gold Bullion
                </span>
              </div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={textInView ? { width: 64, opacity: 1 } : {}}
                transition={{ duration: 1, ease, delay: 0.45 }}
                className="h-px bg-gradient-to-r from-[#C9982A]/55 to-transparent"
              />
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="mb-6 text-4xl font-bold leading-[1.1] md:text-[2.8rem] lg:text-5xl">
              <span className="text-white">Investment Grade </span>
              <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#B8871A] bg-clip-text text-transparent">Gold Bullion</span>
              <span className="block text-white">in the UAE</span>
            </motion.h2>

            {/* Divider */}
            <motion.div variants={fadeUp} className="mb-8 flex items-center gap-2">
              <motion.div
                initial={{ width: 0 }} animate={textInView ? { width: 56 } : {}}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-[#C9982A] to-transparent"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={textInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.55 }}
                className="h-2 w-2 rounded-full border border-[#C9982A]/60"
              />
              <motion.div
                initial={{ width: 0 }} animate={textInView ? { width: 36 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
                className="h-px bg-gradient-to-l from-[#C9982A]/30 to-transparent"
              />
            </motion.div>

            {/* Body */}
            <motion.p variants={fadeUp} className="mb-8 text-base leading-[1.95] text-[#A89470] md:text-[17px]">
              Tora Bullion provides 24K investment-grade gold bullion in Dubai with internationally
              accepted standards and follows all the compliance requirements of the UAE government.
              Our gold bullions with 999.9 purity are a confident investment product that is preferred
              by investors all around the world. Tora Bullion provides gold bullions ranging from 1
              gram to 1 kilogram with the highest purity products in our Dubai and Abu Dhabi outlets.
            </motion.p>

            {/* Features — 2-column grid */}
            <motion.div variants={stagger} className="mb-10 grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="group flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 cursor-default transition-colors duration-300 hover:border-[#C9982A]/25 hover:bg-[#C9982A]/[0.06]"
                >
                  <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#C9982A]/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
                  </span>
                  <span className="text-[13px] leading-snug text-white/70 transition-colors duration-300 group-hover:text-white">
                    {f.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <motion.a
                href="#shop"
                whileHover={{ y: -2, boxShadow: '0 14px 48px rgba(201,152,42,0.55)' }}
                transition={{ duration: 0.22 }}
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#C9982A] to-[#B8871A] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_8px_32px_rgba(201,152,42,0.35)]"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
                <span className="relative">Explore Gold Bullion</span>
                <ChevronRight className="relative h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ══ IMAGES ════════════════════════════════════════════ */}
          <div ref={imgRef} className="relative h-[520px] select-none md:h-[620px]">

            {/* Ambient glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[30%] top-[30%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9982A] blur-[90px]"
            />

            {/* ── Main tall image ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={imgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease }}
              className="absolute left-0 top-0 h-[100%] w-[58%] overflow-hidden rounded-3xl border border-[#C9982A]/25 shadow-[0_48px_120px_rgba(0,0,0,0.7)]"
            >
              <Image
                src="/gold_main.jpg"
                alt="Investment grade gold bullion bars"
                fill
                className="object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Gold corner brackets */}
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 rounded-tl-lg border-l-2 border-t-2 border-[#C9982A]/70" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 rounded-br-lg border-b-2 border-r-2 border-[#C9982A]/40" />
              {/* Bottom label */}
              <div className="absolute bottom-6 left-6">
                <div className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/15 px-3 py-1 backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-[#E8C060]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8C060]">Certified Bullion</span>
                </div>
                <p className="text-2xl font-black text-white">999.9 <span className="text-[#C9982A]">Pure</span></p>
                <p className="text-[11px] text-white/50 tracking-wider">24K Investment Grade · UAE</p>
              </div>
              {/* Shimmer */}
              <motion.div
                initial={{ x: '-130%' }}
                animate={imgInView ? { x: '260%' } : {}}
                transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
                className="pointer-events-none absolute inset-y-0 z-10 w-1/3"
                style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.14) 50%, transparent 80%)' }}
              />
            </motion.div>

            {/* ── Top-right image ── */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={imgInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
              className="absolute right-0 top-0 h-[46%] w-[40%] overflow-hidden rounded-2xl border border-[#C9982A]/18 shadow-[0_28px_70px_rgba(0,0,0,0.6)]"
            >
              <Image
                src="/gold_coins.jpg"
                alt="Gold coins"
                fill
                className="object-cover transition-transform duration-700 hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="absolute bottom-3 left-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C060]/80">Gold Coins</p>
              </div>
            </motion.div>

            {/* ── Bottom-right image ── */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={imgInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
              className="absolute bottom-0 right-0 h-[46%] w-[40%] overflow-hidden rounded-2xl border border-[#C9982A]/18 shadow-[0_28px_70px_rgba(0,0,0,0.6)]"
            >
              <Image
                src="/gold_bars.jpg"
                alt="Gold investment bullion"
                fill
                className="object-cover transition-transform duration-700 hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C060]/80">Gold Bars</p>
              </div>
            </motion.div>

            {/* ── Floating stat card (overlap) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
              className="absolute left-[50%] top-[43%] -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-2xl border border-[#C9982A]/30 bg-black/60 px-5 py-4 shadow-[0_16px_48px_rgba(201,152,42,0.30),0_0_0_1px_rgba(201,152,42,0.12)] backdrop-blur-2xl"
              >
                <p className="text-2xl font-black leading-none text-[#E8C060]">1g – 1kg</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/40">Available Range</p>
              </motion.div>
            </motion.div>

            {/* ── VAT Exempt floating badge ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.7 }}
              className="absolute right-0 top-[49%]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="flex items-center gap-3 rounded-xl border border-[#C9982A]/25 bg-black/70 px-4 py-3 shadow-[0_8px_32px_rgba(201,152,42,0.20)] backdrop-blur-xl"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#C9982A]/30 to-[#C9982A]/10 border border-[#C9982A]/30">
                  <Shield className="h-4 w-4 text-[#E8C060]" />
                </div>
                <div>
                  <p className="text-[12px] font-bold leading-tight text-white">VAT Exempt</p>
                  <p className="mt-0.5 text-[10px] text-[#C9982A]/70">Investment Grade</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
