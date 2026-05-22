'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Why should I invest in gold bullion in Abu Dhabi?',
    answer:
      'Gold bullion is a globally recognised product as a stable investment option, as they show reliability during inflation and economic instability. When you invest in gold, it helps to diversify your portfolio and protect long-term wealth.',
  },
  {
    question: 'What is the best gold investment in the UAE?',
    answer:
      'In the UAE, it is best to invest in 24k gold bars and bullions with investment-grade quality, as they are exempt from VAT. With the gold bullion with 999.9 purity, you will have the highest-quality product, certified bullion, and long-term wealth protection.',
  },
  {
    question: 'Is silver bullion a good long-term investment?',
    answer:
      'Yes, silver bars and coins in the UAE can be the right entry for your bullion investment, especially when the demand for silver is increasing in different industrial sectors. Investment-grade silver bullion is a good option for diversifying the investor portfolio.',
  },
  {
    question: 'Is bullion investment safe during inflation?',
    answer:
      'Bullions are often considered a reliable hedge against inflation because of their performance throughout history. They have shown steady performance when currencies were unstable.',
  },
  {
    question: 'What is the safest precious metals investment?',
    answer:
      'It can be said that the investment-grade 24K gold will be the safest option for precious metal investment. Certified gold bars and coins can be a reliable asset for the future.',
  },
  {
    question: 'Why do investors buy physical gold?',
    answer:
      'Investors buy physical gold in the UAE as it is a reliable product that can protect your wealth in the long term. It also has global validity and tangible asset ownership. During economic uncertainties, gold bullion can help you to balance your portfolio.',
  },
  {
    question: 'Why should I choose Tora Bullion?',
    answer:
      'Tora Bullion is a trusted gold bullion dealer in the UAE, offering certified gold and silver bars and coins. Located in Dubai and Abu Dhabi, Tora Bullion is known for transparent pricing, product authenticity, and providing a secure buying experience for both local and international investors.',
  },
]

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────── */}
      <div className="relative h-[500px] w-full overflow-hidden md:h-[620px]">
        <Image
          src="/faq_hero_image.jpg"
          alt="FAQ Tora Bullion"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 10%' }}
          priority
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/60 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 md:px-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-[#C9982A]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9982A]">
              Tora Bullion FAQ
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
            Frequently{' '}
            <span className="bg-gradient-to-r from-[#C9982A] via-[#E4B84A] to-[#C9982A] bg-clip-text text-transparent">
              Asked
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
            Everything you need to know about buying, selling, and investing
            in gold and silver bullion in the UAE.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center gap-2 text-[12px] font-medium text-white/50"
          >
            <Link href="/" className="transition hover:text-[#C9982A]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">FAQ</span>
          </motion.div>
        </div>
      </div>

      {/* ── FAQ Section ───────────────────────────────────────────── */}
    <section className="relative overflow-hidden bg-[#faf8f4] py-12 lg:py-16">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #111 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-0 left-[10%] h-[450px] w-[450px] rounded-full bg-[#C9982A]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[5%] h-[400px] w-[400px] rounded-full bg-[#6B7C84]/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9982A]/30 to-transparent" />

      <div className="relative mx-auto max-w-[1100px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9982A]/20 bg-white/80 px-5 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9982A] opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-[#C9982A]" />
            </span>
            <span className="bg-gradient-to-r from-[#C9982A] to-[#6B7C84] bg-clip-text text-[11px] font-bold uppercase tracking-[0.35em] text-transparent">
              FAQ
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#111111] md:text-5xl">
            Frequently Asked
            <span className="bg-gradient-to-r from-[#C9982A] via-[#B8871A] to-[#6B7C84] bg-clip-text text-transparent"> Questions</span>
          </h1>

          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9982A]" />
            <div className="h-2 w-2 rounded-full border border-[#C9982A]/60" />
            <div className="h-1.5 w-1.5 rounded-full border border-[#6B7C84]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#6B7C84]" />
          </div>

          <p className="text-[17px] leading-[1.9] text-[#555]">
            Explore important insights about gold and silver bullion investments in the UAE,
            including safety, purity, portfolio diversification, and long-term wealth protection.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
                >
                  <div className="flex items-start gap-5">
                    <span className="mt-1 text-sm font-semibold text-[#C9982A]">0{index + 1}</span>
                    <h3 className="text-[17px] md:text-[19px] font-semibold leading-[1.5] text-[#111111]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-[#C9982A]/30 bg-[#C9982A]/10' : 'border-[#E5E1DA] bg-white'}`}>
                    {isOpen ? <Minus className="h-4 w-4 text-[#C9982A]" /> : <Plus className="h-4 w-4 text-[#6B7C84]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-[#ECE8E1] px-7 pb-7 pt-5">
                        <div className="pl-9">
                          <p className="text-[15px] leading-[2] text-[#666]">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,152,42,0.05),transparent_55%)]" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}
