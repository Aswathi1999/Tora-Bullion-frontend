'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, ShieldCheck, TrendingUp, Clock, BadgeCheck, Coins, BarChart2, Gem, Phone } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Contact Us',
    desc: 'Reach out via WhatsApp or visit one of our UAE outlets. Our experts are available to guide you through the process.',
    icon: Phone,
  },
  {
    step: '02',
    title: 'Get a Valuation',
    desc: 'Bring your gold or silver items. We assess purity and weight on the spot using certified equipment.',
    icon: BarChart2,
  },
  {
    step: '03',
    title: 'Receive Your Payment',
    desc: 'We offer competitive, transparent pricing based on live international spot rates. Get paid instantly.',
    icon: Coins,
  },
]

const reasons = [
  { icon: TrendingUp,   title: 'Live Spot Pricing',       desc: 'We price based on real-time international gold & silver spot rates — no guesswork.' },
  { icon: ShieldCheck,  title: 'Trusted & Licensed',       desc: 'DET licensed dealer in Dubai. Certified, transparent and regulated transactions.' },
  { icon: Clock,        title: 'Quick Process',            desc: 'Walk in, get assessed, and walk out with payment — often in under 30 minutes.' },
  { icon: BadgeCheck,   title: 'No Hidden Charges',        desc: 'What you see is what you get. Fully transparent pricing with no deductions.' },
]

const accepts = [
  { icon: Gem,    label: 'Gold Bars',    desc: '999.9 / 24K investment bars of any weight' },
  { icon: Coins,  label: 'Gold Coins',   desc: 'Minted gold coins, proof or bullion grade' },
  { icon: Gem,    label: 'Silver Bars',  desc: '999 fine silver bars, all sizes accepted' },
  { icon: Coins,  label: 'Silver Coins', desc: 'Investment-grade silver coins & rounds' },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export default function SellPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        <Image
          src="/gold_bars.jpg"
          alt="Sell Gold at Tora Bullion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 self-start inline-flex items-center gap-2 rounded-full border border-[#C9982A]/40 bg-[#C9982A]/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Sell Gold & Silver</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight mb-4 max-w-2xl"
          >
            Get the Best Price for Your{' '}
            <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#B8860B] bg-clip-text text-transparent">
              Bullion
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-white/65 text-base md:text-lg max-w-lg mb-8"
          >
            Tora Bullion offers fast, fair, and fully transparent valuations for gold and silver bullion across Dubai and Abu Dhabi.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            href="https://wa.me/971542891916?text=Hello%20Tora%20Bullion!%20I%20would%20like%20to%20sell%20my%20bullion."
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-extrabold text-[#0a0800] shadow-[0_8px_32px_rgba(201,152,42,0.3)] transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #C9982A 0%, #E8C060 50%, #B8860B 100%)' }}
          >
            Get a Free Valuation
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* ── How It Works ── */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Simple Process</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#111]">
              How It{' '}
              <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">Works</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-white rounded-2xl p-7 border border-[#E8DFC8] shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:border-[#C9982A]/40 hover:shadow-[0_4px_24px_rgba(201,152,42,0.1)] transition-all duration-300"
              >
                <span className="absolute top-6 right-6 text-[3rem] font-black text-[#C9982A]/8 leading-none select-none">{s.step}</span>
                <div className="w-12 h-12 rounded-xl bg-[#C9982A]/10 border border-[#C9982A]/20 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[#C9982A]" />
                </div>
                <h3 className="text-lg font-bold text-[#111] mb-2">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What We Buy ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Accepted Items</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#111]">
              What We{' '}
              <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">Buy</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {accepts.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-[#E8DFC8] bg-[#faf8f4] hover:border-[#C9982A]/40 hover:bg-[#C9982A]/4 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9982A]/10 border border-[#C9982A]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#C9982A]" />
                </div>
                <h3 className="text-base font-bold text-[#111] mb-1">{item.label}</h3>
                <p className="text-xs text-[#777] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Tora ── */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Why Choose Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#111]">
              Why Sell to{' '}
              <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">Tora Bullion</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-5"
          >
            {reasons.map((r, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="w-10 h-10 rounded-lg bg-[#C9982A]/10 border border-[#C9982A]/20 flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-[#C9982A]" />
                </div>
                <h3 className="text-base font-bold text-[#111] mb-1.5">{r.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Sell Your{' '}
              <span className="bg-gradient-to-r from-[#C9982A] via-[#E8C060] to-[#B8860B] bg-clip-text text-transparent">Bullion?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 text-base mb-8 max-w-lg mx-auto">
              Contact us today for a free, no-obligation valuation at our Dubai or Abu Dhabi outlets.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="https://wa.me/971542891916?text=Hello%20Tora%20Bullion!%20I%20would%20like%20to%20sell%20my%20bullion."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold text-[#0a0800] shadow-[0_8px_32px_rgba(201,152,42,0.3)] hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg, #C9982A 0%, #E8C060 50%, #B8860B 100%)' }}
            >
              WhatsApp Us Now
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
