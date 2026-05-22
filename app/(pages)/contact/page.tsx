'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react'
import ContactForm from '@/components/home/ContactForm'

const contactInfo = [
  { icon: MapPin, title: 'Dubai', desc: "Shop No. 10, 9A St, Near Women's Museum, Gold Souq, Deira, Dubai" },
  { icon: MapPin, title: 'Abu Dhabi', desc: 'Al Danah - Zone 1, Abu Dhabi, United Arab Emirates' },
  { icon: Phone, title: 'WhatsApp', desc: '+971 542891916' },
  { icon: Clock, title: 'Open Hours', desc: 'Sun–Thu: 9AM–6PM' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────── */}
      <div className="relative h-[500px] w-full overflow-hidden md:h-[620px]">
        {/* Background image */}
        <Image
          src="/contact_hero_image.jpg"
          alt="Contact Tora Bullion"
          fill
          className="object-cover object-center scale-105"
          priority
        />

        {/* Base dark layer */}
        {/* Bottom fade into page bg */}
        {/* Gold top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/60 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-2 md:px-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-[#C9982A]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9982A]">
              Contact Tora Bullion
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-black leading-[0.92] tracking-tight text-white"
            style={{ fontSize: 'clamp(4rem, 5vw, 5rem)' }}
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-[#C9982A] via-[#E4B84A] to-[#C9982A] bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg leading-relaxed text-white/80"
            style={{ maxWidth: '480px' }}
          >
            Whether you&apos;re looking to buy certified gold bars, sell precious metals,
            or explore investment opportunities — our experts across Dubai and Abu Dhabi
            are here to guide you every step of the way.
          </motion.p>
        </div>
      </div>

      {/* ── Contact Section ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#faf8f4] py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #111 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-[#C9982A]/8 blur-[130px]" />
        <div className="absolute bottom-0 right-[5%] h-[450px] w-[450px] rounded-full bg-[#C9982A]/5 blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            {/* ── Left — Info ── */}
            <div className="flex flex-col gap-8">

              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#C9982A]" />
                  <span className="text-sm font-mono uppercase tracking-[0.4em] text-[#C9982A]">Our Locations</span>
                </div>
                <h2 className="text-3xl font-black text-[#111111]">Visit Us</h2>
                <p className="mt-2 text-sm text-[#888]">Two locations across the UAE to serve you</p>
              </motion.div>

              {/* Info cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(201,152,42,0.14)]"
                  >
                    {/* Gold top accent */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9982A]/60 to-transparent" />
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9982A]/10 transition-colors duration-300 group-hover:bg-[#C9982A]/18">
                      <item.icon className="h-5 w-5 text-[#C9982A]" />
                    </div>
                    <p className="mb-1 text-sm font-bold text-[#111111]">{item.title}</p>
                    <p className="text-xs leading-relaxed text-[#777777]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/971542891916"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-xl px-6 py-4 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(201,152,42,0.28)]"
                style={{ background: 'linear-gradient(135deg, #C9982A 0%, #B8871A 100%)' }}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 w-[55%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-120%' }}
                  whileHover={{ x: '280%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Chat on WhatsApp
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
            </div>

            {/* ── Right — Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Gold glow behind card */}
              <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[#C9982A]/6 blur-[60px]" />

              <div className="relative rounded-[28px] border border-[#E8E2D9] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:p-10">
                {/* Gold top border */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-[28px] bg-gradient-to-r from-transparent via-[#C9982A]/60 to-transparent" />

                <div className="mb-2 flex items-center gap-3">
                  <div className="h-px w-6 bg-[#C9982A]" />
                  <span className="text-sm font-mono uppercase tracking-[0.4em] text-[#C9982A]">Send a Message</span>
                </div>
                <h2 className="mb-1 text-2xl font-black text-[#111111]">We'd Love to Hear From You</h2>
                <p className="mb-8 text-sm text-[#888]">We'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
