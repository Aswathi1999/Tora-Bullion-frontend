'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 'Est. 2016', label: 'Established' },
  { value: 'Dubai', label: 'Gold Souk' },
  { value: 'DET', label: 'Licensed' },
]

const ease = [0.22, 1, 0.36, 1]

export default function AboutSection() {
  const imgRef  = useRef(null)
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28 bg-[#faf8f4]">
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-[#C9982A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[480px] h-[480px] bg-[#111111]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-[#C9982A] text-xs font-semibold uppercase tracking-[0.25em]">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#111111] leading-tight mb-5">
              Your Trusted Precious Metals Partner
            </h2>

            <div className="flex items-center gap-2 mb-7">
              <div className="w-14 h-[2px] bg-[#C9982A] rounded-full" />
              <div className="w-4 h-[2px] bg-[#C9982A]/40 rounded-full" />
              <div className="w-2 h-[2px] bg-[#C9982A]/20 rounded-full" />
            </div>

            <p className="text-[#555] text-base md:text-lg leading-[1.85] mb-10">
              Tora Bullion is one of the reputed bullion dealers in the Dubai
              Gold Souk. Dubai is the heart of gold and silver bullion
              investment, and operating from this heart, we provide certified
              bullions in the UAE, with guidance to make your gold and silver
              investment in the UAE easier and worry-free. With uncompromised
              standards for quality and compliance, we aim to make gold and
              silver bullion in the UAE more accessible and reliable for
              everyone.
            </p>

            <div className="flex gap-8 pt-6 border-t border-[#ece6da]">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-lg font-bold text-[#111111]">{s.value}</p>
                  <p className="text-[11px] text-[#999] uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════
              Right — Unique image layout
              STYLE: Large featured image (left-anchored, tall)
              + rotated "polaroid" photo floating bottom-right
              + glassmorphism DET badge
          ════════════════════════════════ */}
          <div ref={imgRef} className="relative h-[460px] md:h-[520px] select-none">

            {/* Pulsing gold glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.10, 0.18, 0.10] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#C9982A]/12 rounded-full blur-3xl pointer-events-none"
            />

            {/* ── Primary image: tall, left-anchored ── */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              className="absolute top-0 left-0 w-[62%] h-[90%] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)] border border-[#ece6da]"
            >
              <Image
                src="https://images.unsplash.com/photo-1624365169198-38255ba54160?w=800&q=80"
                alt="Gold bullion bars"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9982A]/70 rounded-tl pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9982A]/30 rounded-br pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white/70 text-[10px] uppercase tracking-widest">Investment Grade Bullion</p>
              </div>
            </motion.div>

            {/* ── Secondary "polaroid" photo: rotated, bottom-right, floating ── */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={imgInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="absolute bottom-0 right-0 w-[50%] h-[47%]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full rotate-[-2.5deg] bg-white p-2 pb-8 rounded shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
              >
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
                    alt="Dubai Gold Souk"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <p className="absolute bottom-[7px] left-0 right-0 text-center text-[9px] text-[#999] tracking-[0.18em] uppercase font-medium">
                  Dubai · Gold Souk
                </p>
              </motion.div>
            </motion.div>

            {/* ── Glassmorphism DET badge ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.52 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-[55%] right-[2%] bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)] border border-[#ece6da] flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-[#C9982A]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9982A] text-base leading-none">✦</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#111111] leading-tight">DET Licensed</p>
                  <p className="text-[10px] text-[#999] mt-0.5">Licensed Bullion Dealer</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
