'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 'Est. 2016', label: 'Established' },
  { value: 'Dubai', label: 'Gold Souk' },
  { value: 'DET', label: 'Licensed' },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const features = [
  'Wide range of gold bars and coins',
  'International spot pricing for all products',
  'Transparent pricing with no hidden charges',
  'Professional guidance for all purchases',
]

export default function AboutSection() {
  const imgRef    = useRef(null)
  const textRef   = useRef(null)
  const imgInView  = useInView(imgRef,  { once: true, margin: '-80px' })
  const textInView = useInView(textRef, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28 bg-[#faf8f4]">

      {/* Background glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-[#C9982A]/6 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#111111]/4 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/30 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-24">

          {/* ── Left: Text ─────────────────────────────────────────── */}
          <div ref={textRef}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={textInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="mb-5 text-3xl font-bold leading-tight text-[#111111] md:text-4xl lg:text-[2.75rem]"
            >
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">
                Precious Metals
              </span>{' '}
              Partner
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={textInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mb-7 flex origin-left items-center gap-2"
            >
              <div className="h-[2px] w-14 rounded-full bg-[#C9982A]" />
              <div className="h-[2px] w-4 rounded-full bg-[#C9982A]/40" />
              <div className="h-[2px] w-2 rounded-full bg-[#C9982A]/20" />
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mb-8 text-base leading-[1.9] text-[#555] md:text-lg"
            >
              Tora Bullion is one of the reputed bullion dealers in the Dubai
              Gold Souk. Dubai is the heart of gold and silver bullion
              investment, and operating from this heart, we provide certified
              bullions in the UAE, with guidance to make your gold and silver
              investment in the UAE easier and worry-free. With uncompromised
              standards for quality and compliance, we aim to make gold and
              silver bullion in the UAE more accessible and reliable for everyone.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mb-10 space-y-3"
            >
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#444]">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#C9982A]/12">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
                  </span>
                  {f}
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="flex gap-8 border-t border-[#ece6da] pt-6"
            >
              {stats.map((s, i) => (
                <div key={i} className="group">
                  <p className="text-xl font-bold text-[#111111] transition-colors duration-200 group-hover:text-[#C9982A]">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-widest text-[#999]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Image layout ─────────────────────────────────── */}
          <div ref={imgRef} className="relative h-[480px] select-none md:h-[540px]">

            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9982A] blur-[80px]"
            />

            {/* Primary image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              className="absolute left-0 top-0 h-[90%] w-[62%] overflow-hidden rounded-2xl border border-[#ece6da] shadow-[0_32px_80px_rgba(0,0,0,0.16)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1624365169198-38255ba54160?w=800&q=80"
                alt="Gold bullion bars"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Corner brackets */}
              <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 rounded-tl border-l-2 border-t-2 border-[#C9982A]/70" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 rounded-br border-b-2 border-r-2 border-[#C9982A]/30" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] uppercase tracking-widest text-white/70">Investment Grade Bullion</p>
              </div>
            </motion.div>

            {/* Polaroid photo */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={imgInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="absolute bottom-0 right-0 h-[47%] w-[50%]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-full rotate-[-2.5deg] rounded bg-white p-2 pb-8 shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
                    alt="Dubai Gold Souk"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <p className="absolute bottom-[7px] left-0 right-0 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-[#999]">
                  Dubai · Gold Souk
                </p>
              </motion.div>
            </motion.div>

            {/* DET badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.52 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute right-[2%] top-[55%] flex items-center gap-3 rounded-xl border border-[#ece6da] bg-white/90 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)] backdrop-blur-sm"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#C9982A]/10">
                  <span className="text-base leading-none text-[#C9982A]">✦</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold leading-tight text-[#111111]">DET Licensed</p>
                  <p className="mt-0.5 text-[10px] text-[#999]">Licensed Bullion Dealer</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
