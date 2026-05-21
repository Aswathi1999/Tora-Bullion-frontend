"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  Coins,
  LineChart,
} from "lucide-react"

const guides = [
  {
    title: "Understanding Gold Bullion",
    description:
      "Learn about how gold bullions in Abu Dhabi and Dubai are strong against market inflations.",
    icon: ShieldCheck,
    accent: "gold",
  },
  {
    title: "Silver Investment Opportunities",
    description:
      "Explore the opportunities silver has to offer in the long run.",
    icon: TrendingUp,
    accent: "silver",
  },
  {
    title: "Purity and Certifications",
    description:
      "Be aware of the importance of 24K gold bullion and 999.9 purity in the bullion market.",
    icon: BadgeCheck,
    accent: "gold",
  },
  {
    title: "Bars or Coins",
    description:
      "A deep understanding of your investment goal is necessary to choose the right product.",
    icon: Coins,
    accent: "silver",
  },
  {
    title: "Market Pricing & Trends",
    description:
      "Knowing the current price range and the market trends is essential before making any investment decision.",
    icon: LineChart,
    accent: "gold",
  },
]

const colors = {
  gold: "#C9982A",
  silver: "#6B7C84",
}

export default function InvestmentGuideSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#111_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9982A]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6B7C84]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-14 lg:gap-16">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky top-24 h-fit"
          >
            {/* Label */}
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9982A] font-semibold">
              Investment Guide
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#111111]">
              Precious
              <br />
              Metals
              <span className="block text-[#C9982A] mt-2">
                Investment
              </span>
              <span className="block text-[#6B7C84]">
                Guide
              </span>
            </h2>

            {/* Divider */}
            <div className="w-20 h-px bg-gradient-to-r from-[#C9982A] to-transparent my-8" />

            {/* Description */}
            <p className="text-[#555] text-[16px] leading-[2] max-w-md">
              Here are some expert insights that you should know as an investor
              before you start your journey with gold and silver bullion in
              Dubai and Abu Dhabi.
            </p>

            {/* Editorial Box */}
            <div className="relative mt-12 overflow-hidden rounded-[30px] bg-[#faf8f4] p-8 border border-[#ece6da]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9982A]/10 rounded-full blur-3xl" />

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9982A] mb-5 font-semibold">
                Trusted Precious Metals
              </p>

              <p className="text-2xl font-semibold leading-[1.5] text-[#111111]">
                Build long-term financial confidence through certified gold and silver investments.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-12 max-w-4xl">
            {guides.map((item, index) => {
              const color = colors[item.accent]

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className={`grid md:grid-cols-[90px_1fr] gap-5 items-start ${
                    index % 2 !== 0 ? "md:translate-x-4" : ""
                  }`}
                >
                  {/* Number + Icon */}
                  <div className="relative">
                    <span
                      className="text-[68px] font-black leading-none opacity-10"
                      style={{ color }}
                    >
                      0{index + 1}
                    </span>

                    <div
                      className="absolute top-6 left-4 w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${color}15`,
                      }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    transition={{ duration: 0.25 }}
                    className="relative border-l border-[#e7e1d7] pl-6"
                  >
                    {/* Accent Line */}
                    <div
                      className="absolute left-[-1px] top-0 w-px h-16"
                      style={{
                        background: `linear-gradient(to bottom, ${color}, transparent)`,
                      }}
                    />

                    {/* Small Label */}
                    <span
                      className="text-[11px] uppercase tracking-[0.3em] font-semibold"
                      style={{ color }}
                    >
                      Expert Insight
                    </span>

                    {/* Title */}
                    <h3 className="mt-3 text-2xl font-semibold text-[#111111] leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[#666] text-[15px] leading-[1.95] max-w-xl">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}