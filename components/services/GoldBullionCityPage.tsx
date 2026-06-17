'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const GOLD = '#C9982A'
const goldRgba = (a: number) => `rgba(201,152,42,${a})`

function useReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

/* ─── Config ──────────────────────────────────────────────────────────────── */
interface CityConfig {
  city:     'Dubai' | 'Abu Dhabi'
  badge:    string
  desc:     string
  image:    string
  services: { label: string; desc: string; href: string; icon: string }[]
  reasons:  { icon: string; title: string; desc: string }[]
  aboutTitle: string
  aboutBody:  string[]
}

const configs: Record<'dubai' | 'abu-dhabi', CityConfig> = {
  dubai: {
    city:  'Dubai',
    badge: 'Gold Bullion · Dubai',
    desc:  'Dubai is home to the world-famous Gold Souk and is one of the largest physical gold trading hubs globally. Tora Bullion, established in Deira\'s Gold Souk since 2016, offers LBMA-certified gold bars and coins at live spot prices — with same-day collection.',
    image: '/gold_coins.jpg',
    services: [
      {
        icon: '◈',
        label: 'Buy Gold Bars Dubai',
        desc:  'Investment-grade gold bars from 1g to 1kg, LBMA-certified and priced at live international spot rates. Same-day collection from our Dubai showroom.',
        href:  '/services/buy-gold-bars-dubai',
      },
      {
        icon: '◎',
        label: 'Buy Gold Coins Dubai',
        desc:  'A wide selection of legal-tender gold coins from the world\'s leading mints, available at competitive live prices in Dubai.',
        href:  '/services/buy-gold-coins-dubai',
      },
      {
        icon: '◇',
        label: 'Sell Gold Dubai',
        desc:  'Get the best live market buyback price for your gold in Dubai. Transparent assessment, instant payment, and full DET compliance.',
        href:  '/services/sell-gold-dubai',
      },
    ],
    reasons: [
      {
        icon: '◈',
        title: 'World\'s Gold Trading Hub',
        desc:  'Dubai processes a significant share of global physical gold trade annually through DMCC, making it one of the most competitive and transparent gold markets in the world.',
      },
      {
        icon: '◎',
        title: 'Zero VAT on Investment Gold',
        desc:  'Investment-grade gold bullion is VAT-exempt in the UAE. You pay no consumption tax on your gold bar or coin purchases — a major advantage for investors.',
      },
      {
        icon: '◇',
        title: 'Gold Souk Heritage',
        desc:  'Tora Bullion has operated from the heart of Deira\'s historic Gold Souk since 2016, offering direct market access, expert guidance, and deep roots in Dubai\'s bullion community.',
      },
    ],
    aboutTitle: 'Gold Bullion in Dubai',
    aboutBody: [
      'Dubai is one of the world\'s foremost centres for physical gold trading. Governed by the Dubai Multi Commodities Centre (DMCC) and overseen by Dubai Economy & Tourism (DET), the city operates a highly regulated and transparent bullion market that attracts investors from around the globe.',
      'As a DET-licensed dealer operating from the Deira Gold Souk since 2016, Tora Bullion is ideally positioned to serve Dubai-based investors with LBMA-certified gold bars and coins, real-time spot pricing, and expert investment guidance. Whether you are buying your first gold bar or expanding a substantial portfolio, our Dubai showroom offers same-day service and complete peace of mind.',
    ],
  },

  'abu-dhabi': {
    city:  'Abu Dhabi',
    badge: 'Gold Bullion · Abu Dhabi',
    desc:  'Abu Dhabi, the UAE\'s capital and financial centre, is home to a sophisticated precious metals investment community. Tora Bullion brings the same DET-licensed, LBMA-certified gold bullion services and live pricing to Abu Dhabi investors.',
    image: '/hero_image_3.jpg',
    services: [
      {
        icon: '◈',
        label: 'Buy Gold Bars Abu Dhabi',
        desc:  'Full range of LBMA-certified gold bars from 1g to 1kg, available at live international spot rates for Abu Dhabi investors.',
        href:  '/services/buy-gold-bars-abu-dhabi',
      },
      {
        icon: '◎',
        label: 'Buy Gold Coins Abu Dhabi',
        desc:  'Globally recognised gold coins from leading world mints, competitively priced at live spot rates and available for Abu Dhabi collection.',
        href:  '/services/buy-gold-coins-abu-dhabi',
      },
      {
        icon: '◇',
        label: 'Sell Gold Abu Dhabi',
        desc:  'Transparent gold buyback at live market prices in Abu Dhabi. Expert assessment, instant payment, and full DET-licensed documentation.',
        href:  '/services/sell-gold-abu-dhabi',
      },
    ],
    reasons: [
      {
        icon: '◈',
        title: 'UAE Capital Financial Hub',
        desc:  'Abu Dhabi is the financial capital of the UAE, home to ADGM and a rapidly growing community of investors seeking physical asset protection through precious metals.',
      },
      {
        icon: '◎',
        title: 'Zero VAT on Investment Gold',
        desc:  'Investment-grade gold bullion is VAT-exempt across the UAE. Abu Dhabi investors enjoy the same tax advantage as Dubai, with no consumption tax on gold bar or coin purchases.',
      },
      {
        icon: '◇',
        title: 'Same Certified Products',
        desc:  'Tora Bullion delivers the same LBMA-certified gold bars and coins available in our Dubai showroom directly to Abu Dhabi investors, with the same live pricing and expert service.',
      },
    ],
    aboutTitle: 'Gold Bullion in Abu Dhabi',
    aboutBody: [
      'Abu Dhabi\'s position as the UAE\'s capital and home to the Abu Dhabi Global Market (ADGM) makes it a natural centre for sophisticated investment, including precious metals. As the emirate\'s financial infrastructure grows, demand for physical gold as a wealth preservation tool continues to rise.',
      'Tora Bullion extends its Dubai-based expertise to serve Abu Dhabi investors with the same LBMA-certified gold bullion range, live spot pricing, and DET-licensed compliance. Our specialists are available to guide Abu Dhabi clients through bar selection, pricing, and the full buying or selling process — with the same standard of service and transparency our Dubai clients have trusted since 2016.',
    ],
  },
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection({ c }: { c: CityConfig }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgParallax = useTransform(scrollYProgress, [0, 1], ['0px', '-52px'])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#faf8f4] overflow-hidden flex items-center">
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2 h-[720px] w-[720px] rounded-full blur-[160px]"
        style={{ backgroundColor: goldRgba(0.5) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-12 pt-14 pb-12 lg:pt-20 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-9 inline-flex items-center gap-2.5 border px-5 py-2"
              style={{ borderColor: goldRgba(0.3), backgroundColor: goldRgba(0.08) }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">{c.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.6rem,7vw,4rem)] font-bold leading-[1.02] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              Gold Bullion<br />
              in <span className="text-[#C9982A]">{c.city}</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="origin-left mb-9 flex items-center gap-2"
            >
              <div className="h-[2px] w-16 bg-[#C9982A]" />
              <div className="h-[2px] w-7" style={{ backgroundColor: goldRgba(0.4) }} />
              <div className="h-[2px] w-3" style={{ backgroundColor: goldRgba(0.2) }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="text-[0.95rem] sm:text-[1.05rem] text-[#585858] leading-[1.88] mb-10 max-w-[520px]"
            >
              {c.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.33, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#C9982A] text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  Shop Gold <span className="text-sm">→</span>
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
          <div className="relative h-[420px] sm:h-[540px] lg:h-[660px] select-none">
            <motion.div
              animate={{ scale: [1, 1.24, 1], opacity: [0.14, 0.28, 0.14] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[28%] top-[43%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#C9982A] blur-[88px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.12, ease }}
              style={{ y: imgParallax }}
              className="absolute left-0 top-[5%] w-[60%] h-[86%] overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.20)]"
            >
              <Image src={c.image} alt={`Gold Bullion in ${c.city}`} fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/32" />
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]" />
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: goldRgba(0.35) }} />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">
                Investment Grade · {c.city}
              </p>
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
                className="bg-white/96 backdrop-blur-sm border border-[#e6ddd0] px-5 sm:px-6 py-4 sm:py-5 shadow-[0_12px_50px_rgba(0,0,0,0.09)]"
              >
                <p className="text-[9px] text-[#aaa] uppercase tracking-[0.26em] font-semibold leading-none">Est.</p>
                <p className="mt-1 text-[2.4rem] sm:text-[3rem] font-bold text-[#C9982A] leading-[1.0]">2016</p>
                <div className="mt-2 h-px w-full" style={{ backgroundColor: goldRgba(0.16) }} />
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
                style={{ borderColor: goldRgba(0.28) }}
              >
                <div className="h-8 w-8 flex-shrink-0 border flex items-center justify-center" style={{ borderColor: goldRgba(0.5) }}>
                  <span className="text-[#C9982A] text-sm">✦</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">DET Licensed</p>
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
   SERVICES
═══════════════════════════════════════════════════════════════════════════ */
function ServicesSection({ c }: { c: CityConfig }) {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#111111] py-16 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 h-[500px] w-[900px] rounded-full blur-[140px]" style={{ backgroundColor: goldRgba(0.07) }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.026]" style={{ backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Our Services in {c.city}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            Gold Bullion <span className="text-[#C9982A]">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease }}
              className="relative border border-white/10 overflow-hidden group"
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-[#C9982A] to-transparent" />

              <div className="p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-[#C9982A]/40 group-hover:border-[#C9982A] group-hover:bg-[#C9982A]/10 transition-all duration-300">
                  <span className="text-[#C9982A]">{s.icon}</span>
                </div>
                <h3 className="text-[1.1rem] font-bold text-white mb-3 group-hover:text-[#C9982A] transition-colors duration-300">{s.label}</h3>
                <div className="h-px w-8 bg-[#C9982A]/40 group-hover:w-14 group-hover:bg-[#C9982A]/70 transition-all duration-400 mb-4" />
                <p className="text-[0.88rem] text-[#999] leading-[1.82] mb-6">{s.desc}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9982A] hover:gap-3 transition-all duration-200"
                >
                  Learn More <span>→</span>
                </Link>
              </div>

              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#C9982A] blur-[55px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500" />
              <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: goldRgba(0.25) }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHY THIS CITY
═══════════════════════════════════════════════════════════════════════════ */
function WhyCitySection({ c }: { c: CityConfig }) {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">Why {c.city}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#111111] leading-[1.06] tracking-tight"
          >
            Why Buy Gold in <span className="text-[#C9982A]">{c.city}?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {c.reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.78, delay: 0.1 + i * 0.1, ease }}
              className="group relative bg-white border border-[#e8e2d8] px-7 py-8 overflow-hidden hover:shadow-[0_8px_48px_rgba(201,152,42,0.12)] transition-shadow duration-500 cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${GOLD}, ${goldRgba(0.3)})` }} />
              <span className="pointer-events-none absolute right-4 top-2 text-[4rem] font-bold leading-none text-[#111]/[0.05] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border" style={{ borderColor: goldRgba(0.4) }}>
                <span className="text-[1rem] text-[#C9982A]">{r.icon}</span>
              </div>
              <h3 className="text-[1.08rem] font-bold text-[#111111] mb-3">{r.title}</h3>
              <div className="mb-4 h-px w-8 group-hover:w-12 transition-all duration-400" style={{ backgroundColor: goldRgba(0.4) }} />
              <p className="text-[0.875rem] text-[#636363] leading-[1.85]">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════════════════════ */
function AboutSection({ c }: { c: CityConfig }) {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${goldRgba(0.03)} 0%, transparent 70%)` }} />

      <div className="relative mx-auto max-w-[860px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-5 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-[#C9982A]" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">About Gold in {c.city}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-8"
        >
          {c.aboutTitle}
        </motion.h2>

        {c.aboutBody.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease }}
            className="text-[1rem] text-[#555] leading-[1.9] mb-5"
          >
            {para}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════════════════════ */
function CTASection({ c }: { c: CityConfig }) {
  const { ref, inView } = useReveal('-40px')

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-10 lg:py-14 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full blur-[130px]" style={{ backgroundColor: goldRgba(0.07) }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/15 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease }}
          className="relative mx-auto max-w-[1000px] bg-white overflow-hidden border shadow-[0_8px_60px_rgba(201,152,42,0.08)]"
          style={{ borderColor: goldRgba(0.25) }}
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9982A] to-[#d4a93a]" />
          <div className="pointer-events-none absolute left-5 top-6 h-6 w-6 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: goldRgba(0.5) }} />
          <div className="pointer-events-none absolute right-5 top-6 h-6 w-6 border-r-[1.5px] border-t-[1.5px]" style={{ borderColor: goldRgba(0.5) }} />
          <div className="pointer-events-none absolute left-5 bottom-5 h-6 w-6 border-l-[1.5px] border-b-[1.5px]" style={{ borderColor: goldRgba(0.28) }} />
          <div className="pointer-events-none absolute right-5 bottom-5 h-6 w-6 border-r-[1.5px] border-b-[1.5px]" style={{ borderColor: goldRgba(0.28) }} />

          <div className="px-8 pt-10 pb-10 sm:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold text-[#111111] leading-[1.15] tracking-tight mb-5"
            >
              Buy or Sell Gold Bullion<br />
              in <span className="text-[#C9982A]">{c.city}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-[0.97rem] leading-[1.88] text-[#636363] mb-8 max-w-[500px] mx-auto"
            >
              Tora Bullion offers DET-licensed, LBMA-certified gold bars and coins in {c.city} at live spot prices. Expert guidance and same-day service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.28, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/shop" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C9982A] text-white px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em]"
                >
                  Buy Gold <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#111111]/20 text-[#111111] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:border-[#C9982A] hover:text-[#C9982A] transition-all duration-300"
                >
                  Contact Us <span className="text-sm">→</span>
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
export default function GoldBullionCityPage({ city }: { city: 'dubai' | 'abu-dhabi' }) {
  const c = configs[city]
  return (
    <main className="overflow-x-hidden">
      <HeroSection    c={c} />
      <ServicesSection c={c} />
      <WhyCitySection  c={c} />
      <AboutSection   c={c} />
      <CTASection     c={c} />
    </main>
  )
}
