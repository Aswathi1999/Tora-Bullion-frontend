"use client"

import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp, BadgeCheck, Coins, LineChart } from "lucide-react"

const guides = [
  {
    number: "01",
    tag: "Gold Bullion",
    title: "Understanding Gold Bullion",
    description: "Learn about how gold bullions in Abu Dhabi and Dubai are strong against market inflations.",
    icon: ShieldCheck,
    accent: "gold",
  },
  {
    number: "02",
    tag: "Silver Market",
    title: "Silver Investment Opportunities",
    description: "Explore the opportunities silver has to offer in the long run.",
    icon: TrendingUp,
    accent: "silver",
  },
  {
    number: "03",
    tag: "Certification",
    title: "Purity and Certifications",
    description: "Be aware of the importance of 24K gold bullion and 999.9 purity in the bullion market.",
    icon: BadgeCheck,
    accent: "gold",
  },
  {
    number: "04",
    tag: "Product Type",
    title: "Bars or Coins",
    description: "A deep understanding of your investment goal is necessary to choose the right product.",
    icon: Coins,
    accent: "silver",
  },
  {
    number: "05",
    tag: "Market Data",
    title: "Market Pricing & Trends",
    description: "Knowing the current price range and the market trends is essential before making any investment decision.",
    icon: LineChart,
    accent: "gold",
  },
]

const GOLD = "#C9982A"
const SILVER = "#8a9ba4"

export default function InvestmentGuideSection() {
  return (
    <section
      className="w-full"
      style={{ background: "#F6F1E7", padding: "40px 0 40px", fontFamily: "var(--font-dm-sans)" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9982A]" />
            <span className="text-[#C9982A] text-xs font-semibold uppercase tracking-[0.25em]">
              Investment Guide
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontSize: 52, fontWeight: 700, lineHeight: 1.08, color: "#1a1408", margin: 0 }}>
              Precious Metals <span style={{ color: GOLD }}>Investment Guide</span>
            </h2>
            <p style={{ fontSize: 14, color: "#7a6a4e", lineHeight: 1.8, maxWidth: 380, fontWeight: 300, margin: 0 }}>
              Here are some expert insights that you should know as an investor before you start your journey with gold and silver bullion in Dubai and Abu Dhabi.
            </p>
          </div>
        </motion.div>

        {/* ── Top border line ─────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: 1, background: `linear-gradient(to right, ${GOLD}80, ${GOLD}20)`, transformOrigin: "left", marginBottom: 0 }}
        />

        {/* ── Guide rows ──────────────────────────────────────────── */}
        {guides.map((item, i) => {
          const color = item.accent === "gold" ? GOLD : SILVER
          const Icon = item.icon

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ backgroundColor: "#ede7d5" }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr 1fr auto",
                  alignItems: "center",
                  gap: 32,
                  padding: "28px 0",
                  cursor: "default",
                  transition: "background 0.2s",
                  borderRadius: 4,
                }}
              >
                {/* Number */}
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 42, fontWeight: 700, color: `${color}25`, lineHeight: 1 }}>
                  {item.number}
                </div>

                {/* Icon + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${color}18`, border: `1px solid ${color}30`,
                  }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color, marginBottom: 4, fontWeight: 500 }}>
                      {item.tag}
                    </p>
                    <h3 style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, color: "#1a1408", lineHeight: 1.2, margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: "#7a6a4e", lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                  {item.description}
                </p>

                {/* Arrow */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{ color, fontSize: 20, userSelect: "none", paddingRight: 8 }}
                >
                  →
                </motion.div>
              </motion.div>

              {/* Row separator */}
              <div style={{ height: 1, background: i === guides.length - 1 ? `linear-gradient(to right, ${GOLD}60, ${GOLD}10)` : "#d8cfc0" }} />
            </motion.div>
          )
        })}

        {/* ── Bottom stat strip ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24, marginTop: 48,
            padding: "32px 40px",
            background: "#1a1408",
            borderTop: `3px solid ${GOLD}`,
          }}
        >
          <p style={{ fontSize: 14, color: "#8a7a5a", fontWeight: 300, margin: 0, maxWidth: 400 }}>
            Build long-term financial confidence through certified gold and silver investments.
          </p>
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { num: "999.9", lbl: "Purity standard" },
              { num: "24K",   lbl: "Gold grade" },
              { num: "UAE",   lbl: "Top bullion hub" },
            ].map((s) => (
              <div key={s.lbl} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 28, color: GOLD, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#5a4e38", marginTop: 4 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
