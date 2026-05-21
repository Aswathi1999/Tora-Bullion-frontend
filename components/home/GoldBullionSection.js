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

export default function GoldBullionSection() {
  const textRef = useRef(null)
  const imgRef  = useRef(null)
  const textInView = useInView(textRef, { once: true, margin: '-80px' })
  const imgInView  = useInView(imgRef,  { once: true, margin: '-80px' })

  return (
    <section id="gold-bullion" className="relative overflow-hidden bg-[#0A0800] py-24 lg:py-32">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,152,42,0.18) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Animated ambient blobs */}
      <motion.div
        animate={{ y: [0, -22, 0], opacity: [0.10, 0.17, 0.10] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] left-[25%] w-[700px] h-[500px] bg-[#C9982A]/10 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        className="absolute bottom-[-10%] right-[-8%] w-[500px] h-[500px] bg-[#C9982A]/7 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ══════════════ TEXT ══════════════ */}
          <motion.div
            ref={textRef}
            variants={staggerText}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
          >
            {/* Badge + trailing line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#C9982A]/40 bg-gradient-to-r from-[#C9982A]/20 to-[#E8C060]/8">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8C060] opacity-70 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-gradient-to-br from-[#E8C060] to-[#C9982A]" />
                </span>
                <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#C9982A] bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-[0.32em]">
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
            <motion.h2 variants={fadeUp} className="text-4xl md:text-[2.8rem] lg:text-5xl font-bold leading-[1.1] mb-6">
              <span className="text-white">Investment Grade </span>
              <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#B8871A] bg-clip-text text-transparent">
                Gold Bullion
              </span>
              <span className="text-white block">in the UAE</span>
            </motion.h2>

            {/* Animated divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={textInView ? { width: 56 } : {}}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-[#C9982A] to-transparent"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={textInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.55 }}
                className="w-2 h-2 rounded-full border border-[#C9982A]/60"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={textInView ? { width: 36 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
                className="h-px bg-gradient-to-l from-[#C9982A]/30 to-transparent"
              />
            </motion.div>

            {/* Body */}
            <motion.p variants={fadeUp} className="text-[#A89470] text-base md:text-[17px] leading-[1.95] mb-10">
              Tora Bullion provides 24K investment-grade gold bullion in Dubai with internationally
              accepted standards and follows all the compliance requirements of the UAE government.
              Our gold bullions with 999.9 purity are a confident investment product that is preferred
              by investors all around the world. Tora Bullion provides gold bullions ranging from 1
              gram to 1 kilogram with the highest purity products in our Dubai and Abu Dhabi outlets.
            </motion.p>

            {/* Feature cards */}
            <motion.div variants={cardStagger} className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={cardItem}
                  whileHover={{ y: -3, boxShadow: '0 0 18px rgba(201,152,42,0.18)', borderColor: 'rgba(201,152,42,0.35)' }}
                  transition={{ duration: 0.22 }}
                  className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/6 bg-white/3 cursor-default"
                >
                  <motion.span
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    transition={{ duration: 0.22 }}
                    className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#C9982A]/10 border border-[#C9982A]/15 flex items-center justify-center group-hover:bg-[#C9982A]/20 group-hover:border-[#C9982A]/30 transition-colors duration-300"
                  >
                    <f.icon className="w-4 h-4 text-[#C9982A]" />
                  </motion.span>
                  <span className="text-[#B0977A] text-sm leading-snug group-hover:text-[#E8D5AA] transition-colors duration-300">
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
                className="relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#C9982A] to-[#B8871A] text-white text-sm font-bold tracking-wide overflow-hidden shadow-[0_8px_32px_rgba(201,152,42,0.35)]"
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
                <span className="relative">Explore Gold Bullion</span>
                <ChevronRight className="relative w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════
              IMAGES — Asymmetric 3-image filmstrip
              Main tall image (left, full-height)
              + vertical strip of 2 stacked images (right)
              + animated gold shimmer on entry
          ════════════════════════════════ */}
          <div
            ref={imgRef}
            className="relative h-[500px] md:h-[580px] select-none"
          >
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.14, 0.22, 0.14] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C9982A]/15 rounded-full blur-[70px] pointer-events-none"
            />

            {/* ── Main image: full-height, left-anchored ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease }}
              whileHover={{ scale: 1.015, transition: { duration: 0.5 } }}
              className="absolute top-0 left-0 w-[56%] h-full rounded-2xl overflow-hidden border border-[#C9982A]/20 shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=900&q=85"
                alt="Investment grade gold bullion bars"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9982A]/60 rounded-tl pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9982A]/25 rounded-br pointer-events-none" />
              {/* Bottom label */}
              <div className="absolute bottom-5 left-5">
                <p className="text-[#E8C060] text-[11px] font-bold tracking-[0.2em] uppercase">999.9 Purity</p>
                <p className="text-white/45 text-[10px] tracking-wider mt-0.5">24K Investment Grade</p>
              </div>
              {/* One-shot shimmer sweep on scroll entry */}
              <motion.div
                initial={{ x: '-130%' }}
                animate={imgInView ? { x: '240%' } : {}}
                transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: 0.75 }}
                className="absolute inset-y-0 w-1/3 pointer-events-none z-10"
                style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)' }}
              />
            </motion.div>

            {/* ── Filmstrip top image ── */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.18 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
              className="absolute top-0 right-0 w-[41%] h-[47%] rounded-2xl overflow-hidden border border-[#C9982A]/15 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1624365169198-38255ba54160?w=600&q=85"
                alt="Gold coins"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
            </motion.div>

            {/* ── Filmstrip bottom image ── */}
            <motion.div
              initial={{ opacity: 0, x: 36, y: 20 }}
              animate={imgInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.32 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
              className="absolute bottom-0 right-0 w-[41%] h-[47%] rounded-2xl overflow-hidden border border-[#C9982A]/15 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=600&q=85"
                alt="Gold investment bullion"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* ── Intersection overlap card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.52 }}
              className="absolute top-[43%] left-[49%]"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white/8 backdrop-blur-xl rounded-2xl border border-[#C9982A]/22 px-4 py-3 shadow-[0_8px_40px_rgba(201,152,42,0.25)]"
              >
                <p className="text-[#E8C060] text-lg font-bold leading-none tracking-wide">1g – 1kg</p>
                <p className="text-white/45 text-[10px] mt-1 tracking-widest uppercase">Available Range</p>
              </motion.div>
            </motion.div>

            {/* ── VAT badge (top-right of filmstrip) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.65 }}
              className="absolute top-[3%] right-[1%]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="bg-white/7 backdrop-blur-xl rounded-xl border border-white/10 px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#C9982A]/20 border border-[#C9982A]/25 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#E8C060]" />
                </div>
                <div>
                  <p className="text-white text-[11px] font-bold leading-tight">VAT Exempt</p>
                  <p className="text-white/35 text-[9px] mt-0.5">Investment Grade</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
