'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'

/* ─── Shared constants ────────────────────────────────────────────────────── */
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

function useReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin } as any)
  return { ref, inView }
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgParallax = useTransform(scrollYProgress, [0, 1], ['0px', '-52px'])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#faf8f4] overflow-hidden flex items-center">

      {/* ── Ambient background ─────────────────────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 h-[720px] w-[720px] rounded-full bg-[#C9982A] blur-[150px]"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/18 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-12 pt-14 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Editorial text ──────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-9 inline-flex items-center gap-2.5 border border-[#C9982A]/30 bg-[#C9982A]/8 px-5 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">
                About Tora Bullion
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
              className="text-[clamp(2.4rem,6vw,3rem)] font-bold leading-[1.04] tracking-tight text-[#111111] mb-6 lg:mb-8"
            >
              Redefining
              Bullion<br />
              <span className="text-[#C9982A]">Investment </span> 
              In The UAE
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="origin-left mb-9 flex items-center gap-2"
            >
              <div className="h-[2px] w-16 bg-[#C9982A]" />
              <div className="h-[2px] w-7 bg-[#C9982A]/40" />
              <div className="h-[2px] w-3 bg-[#C9982A]/18" />
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="text-[0.95rem] sm:text-[1.05rem] text-[#585858] leading-[1.88] mb-5 max-w-[500px]"
            >
              From the heart of Dubai Gold Souk, Tora Bullion started its
              journey back in 2016. As a trusted bullion dealer in the UAE,
              Tora Bullion provides high-quality gold and silver bullion. We
              offer the highest quality gold and silver bars and coins, offering
              all our customers trust and valuable guidance. We are committed to
              delivering the best value for your investment and future that will
              stand the test of time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.26, ease }}
              className="text-[0.95rem] sm:text-[1.05rem] text-[#585858] leading-[1.88] mb-8 lg:mb-10 max-w-[500px]"
            >
              Each employee of Tora Bullion values your trust as our foundation,
              and we work our best to uphold it in every bullion we provide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.33, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(201,152,42,0.32)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C9982A] text-white px-8 sm:px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-shadow duration-300"
                >
                  Explore Bullion
                  <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: '#C9982A', color: '#C9982A' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#111111]/22 text-[#111111] px-8 sm:px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
                >
                  Contact Us
                  <span className="text-sm">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Editorial image composition ────────────────────── */}
          {/*
            Layout map (desktop, 680px tall container):
            ┌──────────────────────────────────────────┐
            │  ┌─────────────────┐   ┌────────────┐   │
            │  │                 │   │  Est. 2016  │   │
            │  │                 │   └────────────┘   │
            │  │   MAIN IMAGE    │                     │
            │  │   left-0        │                     │
            │  │   top-[5%]      │   ┌──────────────┐ │
            │  │   w-[60%]       │   │              │ │
            │  │   h-[86%]       ├───┤  SECONDARY   │ │
            │  │                 │   │  right-0     │ │
            │  │        ┌────────┼───┤  bottom-[2%] │ │
            │  └────────┤DET BDGE│   │  w-[44%]     │ │
            │           └────────┘   │  h-[57%]     │ │
            │                        └──────────────┘ │
            └──────────────────────────────────────────┘
          */}
          <div className="relative h-[400px] sm:h-[520px] lg:h-[680px] select-none">

            {/* Gold ambient glow — anchored behind main image centre */}
            <motion.div
              animate={{ scale: [1, 1.24, 1], opacity: [0.14, 0.30, 0.14] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[28%] top-[43%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#C9982A] blur-[88px]"
            />
            {/* Soft secondary glow at image junction */}
            <div className="pointer-events-none absolute right-[22%] bottom-[28%] h-[160px] w-[160px] rounded-full bg-[#C9982A]/10 blur-[55px]" />

            {/* ── Main portrait image ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.12, ease }}
              style={{ y: imgParallax }}
              className="absolute left-0 top-[5%] w-[60%] h-[86%] overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.20)]"
            >
              <Image
                src="/silver_bars.jpg"
                alt="Premium silver bullion bars"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/32" />
              {/* Top-left corner bracket */}
              <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]" />
              {/* Bottom-right corner bracket */}
              <div className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r-[1.5px] border-b-[1.5px] border-[#C9982A]/35" />
              <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/55">
                Investment Grade Bullion
              </p>
            </motion.div>

            {/* ── Secondary image — bottom-right, overlapping main ────── */}
            {/*
              Inner div is h-[110%] so the floating animation (-8px upward)
              never exposes the container background below the image.
            */}
            <motion.div
              initial={{ opacity: 0, x: 22, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.05, delay: 0.36, ease }}
              className="absolute right-0 bottom-[2%] w-[44%] h-[57%] overflow-hidden shadow-[0_24px_72px_rgba(0,0,0,0.22)]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-[110%]"
              >
                <Image
                  src="/gold_coins.jpg"
                  alt="Gold coins"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/44 via-transparent to-transparent" />
              {/* Ivory border frame — creates visual lift off the page */}
              <div className="pointer-events-none absolute inset-0 border-[3px] border-[#faf8f4]" />
            </motion.div>

            {/* ── Est. 2016 glass card ─────────────────────────────────
                Positioned in the natural white space to the RIGHT of the
                main image (right-0 = right column margin), floats at top.
                Never overlaps main image body.
            ── */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
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
                <div className="mt-2 h-px w-full bg-[#C9982A]/16" />
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.24em] text-[#bbb]">Dubai · Gold Souk</p>
              </motion.div>
            </motion.div>

            {/* ── DET badge ────────────────────────────────────────────
                Positioned at left-[54%] — exactly at the horizontal
                junction of the two images — bridging them visually.
                bottom-[18%] keeps it within both images' vertical spans.
            ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.70, ease }}
              className="hidden sm:block absolute left-[54%] bottom-[18%]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="flex items-center gap-3 bg-[#111111]/92 backdrop-blur-sm border border-[#C9982A]/28 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
              >
                <div className="h-8 w-8 flex-shrink-0 border border-[#C9982A]/50 flex items-center justify-center">
                  <span className="text-[#C9982A] text-sm">✦</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">DET Licensed</p>
                  <p className="text-[8px] text-white/45 mt-0.5">Certified Bullion Dealer</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Thin horizontal gold rule — anchors composition top edge on desktop */}
            <div className="hidden lg:block absolute left-0 top-[4.5%] w-[61%] h-px bg-gradient-to-r from-[#C9982A]/0 via-[#C9982A]/22 to-[#C9982A]/0" />
            {/* Thin horizontal gold rule — anchors composition bottom edge */}
            <div className="hidden lg:block absolute left-0 bottom-[1.5%] w-[61%] h-px bg-gradient-to-r from-[#C9982A]/0 via-[#C9982A]/18 to-[#C9982A]/0" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CORE VALUES SECTION
═══════════════════════════════════════════════════════════════════════════ */
const coreValues = [
  {
    num: '01',
    title: 'Purity & Quality',
    icon: '◈',
    desc: 'We ensure that all the products we are offering are of high quality and pure. All products will go through strict processes to determine the purity before they reach our customer\'s hands.',
  },
  {
    num: '02',
    title: 'Trust & Transparency',
    icon: '◎',
    desc: 'Trust is one of the uncompromised values in bullion trading. We ensure that all our transactions are transparent, with clear information at each stage of purchase or sale, so our customers can make informed decisions in the UAE bullion market.',
  },
  {
    num: '03',
    title: 'Security & Assurance',
    icon: '◇',
    desc: 'Every transaction with us is backed by secure and reliable systems. We ensure that your investments are safe and protected with us. We are here to secure your assets, giving you peace of mind throughout your investment journey.',
  },
  {
    num: '04',
    title: 'Customer-Centric Approach',
    icon: '○',
    desc: 'Tora Bullion considers our customer our top priority throughout the purchase process. We offer personalised services to our customers with expert advice and continuous support.',
  },
  {
    num: '05',
    title: 'Integrity & Ethics',
    icon: '◉',
    desc: 'Integrity is the base of all decisions we take at Tora Bullion. We follow all the best and ethical practices for our transactions, ensuring quality product delivery and honest interactions with all our customers.',
  },
  {
    num: '06',
    title: 'Heritage & Expertise',
    icon: '✦',
    desc: 'With our years of experience and expertise in the bullion industry, we try to combine tradition with modern innovation. Our team ensures that all the products and services we are providing are meeting the needs of our customers.',
  },
]

function CoreValuesSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#111111] py-14 lg:py-20 overflow-hidden">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 h-[420px] w-[860px] rounded-full bg-[#C9982A]/7 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-[280px] w-[600px] rounded-full bg-[#C9982A]/5 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.026]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9982A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C9982A]">
              Our Values
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2.2rem,5vw,3rem)] font-bold text-white leading-[1.06] tracking-tight"
          >
            Our Core Values at<br />
            <span className="text-[#C9982A]">Tora Bullion</span>
          </motion.h2>
        </div>

        {/* ── Values panel grid ──────────────────────────────────────
            gap-px + bg-white/[0.10] wrapper → crisp 1px separator lines.
            Top + bottom frame lines close the enclosure.
        ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          {/* Top frame line */}
          <div className="h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {coreValues.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.68, delay: 0.18 + i * 0.07, ease }}
                className="group relative bg-[#111111] px-6 py-8 lg:px-8 lg:py-9 overflow-hidden cursor-default"
              >
                {/* Gold reveal line — sweeps left→right on hover */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-[#C9982A]/0 via-[#C9982A] to-[#C9982A]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

                {/* Watermark number — top right */}
                <span className="pointer-events-none absolute right-4 top-2 text-[4.5rem] lg:text-[5.5rem] font-bold leading-none text-white/[0.06] select-none group-hover:text-[#C9982A]/12 transition-colors duration-500">
                  {v.num}
                </span>

                {/* Icon frame */}
                <div className="mb-5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C9982A]/40 group-hover:border-[#C9982A] group-hover:bg-[#C9982A]/10 transition-all duration-400">
                  <span className="text-[#C9982A] text-[1rem] leading-none">
                    {v.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[1.05rem] lg:text-[1.22rem] font-bold text-white leading-snug mb-2 group-hover:text-[#C9982A] transition-colors duration-300">
                  {v.title}
                </h3>

                {/* Expanding gold divider */}
                <div className="mb-4 h-px w-8 bg-[#C9982A]/40 group-hover:w-14 group-hover:bg-[#C9982A]/70 transition-all duration-400 ease-out" />

                {/* Description — brightened for legibility */}
                <p className="text-[#a0a0a0] group-hover:text-[#c0c0c0] leading-[1.82] text-[0.875rem] lg:text-[0.9rem] transition-colors duration-300">
                  {v.desc}
                </p>

                {/* Corner ambient glow on hover */}
                <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#C9982A] blur-[55px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom frame line */}
          <div className="h-px bg-white/10" />
        </motion.div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   VISION & MISSION SECTION
═══════════════════════════════════════════════════════════════════════════ */
function VisionMissionSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-10 lg:py-14 overflow-hidden">

      {/* Gold ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-[#C9982A]/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-[#C9982A]/8 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/15 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">

        {/* Centered eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 lg:mb-10 flex items-center justify-center gap-5"
        >
          <div className="h-px w-16 bg-[#C9982A]/45" />
          <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C9982A]">
            Purpose & Direction
          </span>
          <div className="h-px w-16 bg-[#C9982A]/45" />
        </motion.div>

        {/* ── Two white + gold panels ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

          {/* ── Vision panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            className="group relative bg-white overflow-hidden shadow-[0_4px_40px_rgba(201,152,42,0.08)] hover:shadow-[0_8px_56px_rgba(201,152,42,0.18)] transition-shadow duration-500"
          >
            {/* Solid 3px gold top border */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9982A] to-[#d4a93a]" />

            {/* Top-left corner bracket */}
            <div className="pointer-events-none absolute left-5 top-6 h-7 w-7 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]/50" />
            {/* Bottom-right corner bracket */}
            <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-[1.5px] border-b-[1.5px] border-[#C9982A]/30" />

            {/* Large decorative quote mark */}
            <div className="pointer-events-none absolute -bottom-6 right-6 text-[9rem] lg:text-[11rem] font-bold leading-none text-[#C9982A]/[0.07] select-none">"</div>

            {/* Hover gold wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C9982A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative px-8 pt-12 pb-12 lg:px-12 lg:pt-14 lg:pb-14">

              {/* Index */}
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.44em] text-[#C9982A]">01</p>

              {/* Heading */}
              <h2 className="mb-5 text-[2.6rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#111111] leading-[0.95] tracking-tight">
                Our<br />Vision
              </h2>

              {/* Gold gradient rule */}
              <div className="mb-8 h-[2px] w-14 bg-gradient-to-r from-[#C9982A] to-[#C9982A]/20" />

              {/* Italic quote */}
              <p className="mb-5 text-[1.05rem] lg:text-[1.14rem] font-light italic leading-[1.78] text-[#333333]">
                "Tora Bullion aims to set new standards in precious metals
                investment. Our vision is to empower investors worldwide with
                secure, reliable, and transparent access to gold and silver
                bullion."
              </p>

              {/* Supporting */}
              <p className="text-[0.88rem] leading-[1.88] text-[#888888]">
                We help them build lasting assets and protect wealth for the long term.
              </p>

              {/* Bottom label */}
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9982A]" />
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#C9982A] font-semibold">
                  Tora Bullion
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Mission panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.22, ease }}
            className="group relative bg-white overflow-hidden shadow-[0_4px_40px_rgba(201,152,42,0.08)] hover:shadow-[0_8px_56px_rgba(201,152,42,0.18)] transition-shadow duration-500"
          >
            {/* Solid 3px gold top border */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-[#C9982A] to-[#d4a93a]" />

            {/* Top-right corner bracket */}
            <div className="pointer-events-none absolute right-5 top-6 h-7 w-7 border-r-[1.5px] border-t-[1.5px] border-[#C9982A]/50" />
            {/* Bottom-left corner bracket */}
            <div className="pointer-events-none absolute left-5 bottom-5 h-7 w-7 border-l-[1.5px] border-b-[1.5px] border-[#C9982A]/30" />

            {/* Large decorative quote mark — mirrored side */}
            <div className="pointer-events-none absolute -bottom-6 left-6 text-[9rem] lg:text-[11rem] font-bold leading-none text-[#C9982A]/[0.07] select-none">"</div>

            {/* Hover gold wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#C9982A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative px-8 pt-12 pb-12 lg:px-12 lg:pt-14 lg:pb-14">

              {/* Index */}
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.44em] text-[#C9982A]">02</p>

              {/* Heading */}
              <h2 className="mb-5 text-[2.6rem] sm:text-[3rem] lg:text-[3.6rem] font-bold text-[#111111] leading-[0.95] tracking-tight">
                Our<br />Mission
              </h2>

              {/* Gold gradient rule */}
              <div className="mb-8 h-[2px] w-14 bg-gradient-to-r from-[#C9982A] to-[#C9982A]/20" />

              {/* Italic quote */}
              <p className="mb-5 text-[1.05rem] lg:text-[1.14rem] font-light italic leading-[1.78] text-[#333333]">
                "To make gold bullion accessible and hassle-free for all. We
                ensure that each of our clients experiences premium service and
                confidence in their investments."
              </p>

              {/* Supporting */}
              <p className="text-[0.88rem] leading-[1.88] text-[#888888]">
                We aim to grow and ensure wealth protection for future generations.
              </p>

              {/* Bottom label */}
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9982A]" />
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#C9982A] font-semibold">
                  Tora Bullion
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHAT MAKES TORA DIFFERENT
═══════════════════════════════════════════════════════════════════════════ */
const differentiators = [
  {
    num: '01',
    title: 'Certified Bullion',
    desc: 'All the gold and silver bullions we are providing are certified, investment-grade products.',
  },
  {
    num: '02',
    title: 'Transparent Pricing',
    desc: 'Being one of the trusted bullion dealers in the UAE, we provide real-time international prices for all our products without any hidden charges.',
  },
  {
    num: '03',
    title: 'Investor Guidance',
    desc: 'Tora Bullion provides professional guidance for gold investment in the UAE, ensuring our clients are making informed decisions.',
  },
  {
    num: '04',
    title: 'Trusted Relationships',
    desc: 'We always try to maintain a long-term relationship with all our clients and to maintain their confidence with our services.',
  },
]

function WhatMakesDifferentSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-10 lg:py-16 overflow-hidden">

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/22 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-5 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#C9982A]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.32em] text-[#C9982A]">
              The Difference
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="text-[clamp(2.2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.06] tracking-tight max-w-[680px]"
          >
            What Makes Tora{' '}
            <span className="text-[#C9982A]">Different</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-4 text-[1.05rem] leading-[1.85] text-[#636363] max-w-[600px]"
          >
            As a trusted bullion dealer in the UAE, these are the points that
            set Tora Bullion apart from others.
          </motion.p>
        </div>

        {/* Rows */}
        <div>
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.82, delay: 0.14 + i * 0.1, ease }}
              className="group relative border-t border-[#e8e2d8] py-7 lg:py-8 cursor-default"
            >
              {/* Animated bottom accent */}
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C9982A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[72px_1fr] lg:grid-cols-[100px_1fr_1fr] gap-4 sm:gap-5 lg:gap-12 items-center">

                {/* Number */}
                <span className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold leading-none text-[#111111]/[0.09] group-hover:text-[#C9982A]/22 transition-colors duration-500 select-none">
                  {item.num}
                </span>

                {/* Title */}
                <h3 className="text-[1.15rem] sm:text-[1.5rem] lg:text-[2rem] font-bold text-[#111111] group-hover:text-[#C9982A] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description — desktop only in third column */}
                <div className="hidden lg:block">
                  <p className="text-[#636363] leading-[1.78] text-[0.95rem]">{item.desc}</p>
                </div>
              </div>

              {/* Description — mobile/tablet below the row */}
              <div className="lg:hidden mt-3 pl-[56px] sm:pl-[77px]">
                <p className="text-[#636363] leading-[1.78] text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#e8e2d8]" />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SMARTER APPROACH SECTION  —  Luxury editorial magazine experience
   Pure typography, vertical gold accent, no cards or images.
═══════════════════════════════════════════════════════════════════════════ */
function SmarterApproachSection() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="relative bg-white pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden">

      {/* Radial warmth — barely perceptible ivory tint */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,152,42,0.035) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/12 to-transparent" />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-16">

        {/* ── Centered eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 lg:mb-16 flex items-center justify-center gap-6"
        >
          <div className="h-px w-16 bg-[#C9982A]/40" />
          <span className="text-[13px] font-bold uppercase tracking-[0.38em] text-[#C9982A]">
            Our Approach
          </span>
          <div className="h-px w-16 bg-[#C9982A]/40" />
        </motion.div>

        {/* ── Display heading — 2 lines ── */}
        <div className="mb-10 lg:mb-12 overflow-hidden">
          {/* Line 1 */}
          <motion.div
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.06, ease }}
          >
            <h2 className="text-[clamp(2.2rem,5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              <span className="text-[#111111]">A Smarter </span>
              <span className="text-[#C9982A]">Approach</span>
              <span className="text-[#111111]"> to</span>
            </h2>
          </motion.div>
          {/* Line 2 */}
          <motion.div
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <h2 className="text-[clamp(2.2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.15] tracking-[-0.02em]">
              Precious Metals Investment
            </h2>
          </motion.div>
        </div>

        {/* ── Full-width animated gold rule ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.3, delay: 0.28 }}
          className="origin-left mb-14 lg:mb-16 h-px bg-gradient-to-r from-[#C9982A] via-[#C9982A]/45 to-transparent"
        />

        {/* ── Body: vertical gold line + editorial text ── */}
        <div className="flex gap-10 lg:gap-16">

          {/* Tall vertical gold accent line — scaleY from top */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.44 }}
            className="origin-top hidden sm:block flex-shrink-0 w-[2px] self-stretch"
            style={{ background: 'linear-gradient(to bottom, #C9982A 0%, rgba(201,152,42,0.45) 55%, rgba(201,152,42,0.08) 100%)' }}
          />

          {/* Text column */}
          <div className="flex-1">

            {/* Principle labels — editorial inline strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {['Trust', 'Transparency', 'Informed Decisions'].map((tag, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="hidden sm:block h-px w-6 bg-[#C9982A]/30" />}
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.36em] text-[#C9982A]">
                    {tag}
                  </span>
                </span>
              ))}
            </motion.div>

            {/* Paragraph 1 — larger editorial size */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.92, delay: 0.52, ease }}
              className="text-[1.1rem] sm:text-[1.18rem] lg:text-[1.26rem] leading-[1.96] text-[#444444] mb-9 lg:mb-11"
            >
              We know that bullion investment should be guided by{' '}
              <span className="font-semibold text-[#111111] border-b border-[#C9982A]/50 pb-[1px]">trust</span>,{' '}
              <span className="font-semibold text-[#111111] border-b border-[#C9982A]/50 pb-[1px]">transparency</span>, and{' '}
              <span className="font-semibold text-[#111111] border-b border-[#C9982A]/50 pb-[1px]">informed decision-making</span>.{' '}
              So, we try our best to provide a premium bullion experience to our clients
              by helping them build confidence with certified products and personalised
              services. Our team will help you get on track with your individual
              investment goals.
            </motion.p>

            {/* Paragraph 2 — slightly receded weight for hierarchy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.92, delay: 0.66, ease }}
              className="text-[1rem] sm:text-[1.08rem] lg:text-[1.14rem] leading-[1.96] text-[#666666]"
            >
              By combining market experience and customised investment services, we
              help all our clients to navigate seamlessly through their precious
              metal journey.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SPECIALIST SECTION  —  Cinematic dark immersive showcase
   Full-bleed split-screen, floating badges, parallax image, no max-width box.
═══════════════════════════════════════════════════════════════════════════ */
function SpecialistSection() {
  const { ref, inView } = useReveal()
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative bg-[#0d0c0a] overflow-hidden">

      {/* Gold border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/28 to-transparent" />

      {/* Full-bleed split grid — no container */}
      <div className="grid lg:grid-cols-[52%_48%] min-h-[480px] lg:min-h-[640px]">

        {/* ── Left: Full-bleed cinematic image ──────────────────────────── */}
        <div ref={imgRef} className="relative overflow-hidden min-h-[400px]">

          {/* Cinematic gold glow — behind image */}
          <motion.div
            animate={{ scale: [1, 1.28, 1], opacity: [0.14, 0.30, 0.14] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[620px] w-[620px] rounded-full bg-[#C9982A] blur-[150px]"
          />

          {/* Parallax image */}
          <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.1]">
            <Image
              src="/hero_image_3.jpg"
              alt="Tora Bullion specialist"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right-edge fade — subtle blend into content column */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent lg:to-[#0d0c0a]/60" />

          {/* Corner bracket — top left */}
          <div className="pointer-events-none absolute left-7 top-7 h-12 w-12 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]/75" />
          {/* Corner bracket — bottom right (desktop only — covered by content on small) */}
          <div className="pointer-events-none absolute right-7 bottom-7 h-10 w-10 border-r-[1.5px] border-b-[1.5px] border-[#C9982A]/35 hidden lg:block" />

          {/* Floating DET badge — bottom left of image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.65, ease }}
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 left-8 bg-[#0d0c0a]/92 backdrop-blur-md border border-[#C9982A]/30 px-5 py-4 shadow-[0_14px_56px_rgba(0,0,0,0.55)]"
            >
              <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.36em] text-[#C9982A]">
                Licensed Dealer
              </p>
              <p className="text-[1.1rem] font-bold leading-none text-white">DET Certified</p>
              <p className="mt-1 text-[8px] tracking-wide text-white/38">Dubai Economy & Tourism</p>
            </motion.div>
          </motion.div>

          {/* Subtle vertical rule at right edge of image */}
          <div className="hidden lg:block absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-[#C9982A]/25 to-transparent" />
        </div>

        {/* ── Right: Staggered floating content ────────────────────────── */}
        <div className="flex flex-col justify-center px-8 sm:px-10 lg:px-14 xl:px-18 py-16 lg:py-24">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.68, ease }}
            className="mb-7 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-[#C9982A]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.32em] text-[#C9982A]">
              Expertise
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            className="text-[clamp(2.2rem,5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight mb-8"
          >
            Tora Bullion as the{' '}
            <span className="text-[#C9982A]">Gold & Silver</span>
            <br />Bullion Specialist
          </motion.h2>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="origin-left mb-8 flex items-center gap-2"
          >
            <div className="h-[1.5px] w-14 bg-[#C9982A]" />
            <div className="h-[1.5px] w-5 bg-[#C9982A]/38" />
          </motion.div>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.88, delay: 0.22, ease }}
            className="text-[0.97rem] leading-[1.92] text-[#8a8a8a] mb-6"
          >
            Tora Bullion is a bullion specialist that offers premium gold
            and silver bullion for investors interested in long-term value.
            We have an extensive collection of investment-grade gold and
            silver bars and coins. All the products we offer are carefully
            selected and sourced from the internationally recognised refineries.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.88, delay: 0.30, ease }}
            className="text-[0.97rem] leading-[1.92] text-[#8a8a8a]"
          >
            With our expertise in the precious metals in the UAE and the
            understanding of compliance regulations, we can help our clients
            with trusted guidance and investment solutions that suit the
            needs of each individual.
          </motion.p>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA SECTION  —  White + gold boxed design
═══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const { ref, inView } = useReveal('-40px')

  return (
    <section ref={ref} className="relative bg-[#faf8f4] py-10 lg:py-14 overflow-hidden">

      {/* Ambient gold radial glow behind the box */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full bg-[#C9982A]/7 blur-[130px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/15 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">

        {/* ── Boxed content card ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease }}
          className="relative mx-auto max-w-[1100px] bg-white overflow-hidden
                     border border-[#C9982A]/25
                     shadow-[0_8px_80px_rgba(201,152,42,0.10),0_2px_16px_rgba(0,0,0,0.04)]"
        >
          {/* 3px solid gold top accent bar */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C9982A] to-[#d4a93a]" />

          {/* Corner brackets — all four */}
          <div className="pointer-events-none absolute left-5 top-6  h-7 w-7 border-l-[1.5px] border-t-[1.5px] border-[#C9982A]/50" />
          <div className="pointer-events-none absolute right-5 top-6  h-7 w-7 border-r-[1.5px] border-t-[1.5px] border-[#C9982A]/50" />
          <div className="pointer-events-none absolute left-5 bottom-5 h-7 w-7 border-l-[1.5px] border-b-[1.5px] border-[#C9982A]/28" />
          <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-[1.5px] border-b-[1.5px] border-[#C9982A]/28" />

          {/* Subtle inner warm wash */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#C9982A]/[0.025] via-transparent to-[#C9982A]/[0.015]" />

          <div className="relative px-8 pt-10 pb-10 sm:px-12 lg:px-16 text-center">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.0, delay: 0.1, ease }}
              className="text-[clamp(2.2rem,5vw,3rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-6"
            >
              Start Your Precious Metals<br />
              Journey{' '}
              <span className="text-[#C9982A]">With Confidence</span>
            </motion.h2>

            {/* Gold dot rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.26 }}
              className="mx-auto mb-8 origin-center flex items-center justify-center gap-2.5"
            >
              <div className="h-px w-12 bg-[#C9982A]/45" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <div className="h-px w-12 bg-[#C9982A]/45" />
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.22, ease }}
              className="text-[1.02rem] leading-[1.9] text-[#636363] mb-10 max-w-[560px] mx-auto"
            >
              Connect with Tora Bullion for quality gold and silver bullion and
              investment guidance in the UAE. We are here to give you the right
              advice whether you are a seasoned investor or a first-time investor.
              Your door to gold and silver investment in the UAE is here!
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.78, delay: 0.32, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(201,152,42,0.36)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C9982A] text-white px-10 py-[1.05rem] text-[11px] font-bold uppercase tracking-[0.22em] transition-shadow duration-300"
                >
                  Contact Us
                  <span className="text-sm">→</span>
                </motion.button>
              </Link>
              <Link href="/shop" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, borderColor: '#C9982A', color: '#C9982A' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#111111]/20 text-[#111111] px-10 py-[1.05rem] text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300"
                >
                  Explore Bullion
                  <span className="text-sm">→</span>
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
   PAGE ROOT EXPORT
═══════════════════════════════════════════════════════════════════════════ */
export default function AboutPageFull() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CoreValuesSection />
      <VisionMissionSection />
      <WhatMakesDifferentSection />
      <SmarterApproachSection />
      <SpecialistSection />
      <CTASection />
    </main>
  )
}
