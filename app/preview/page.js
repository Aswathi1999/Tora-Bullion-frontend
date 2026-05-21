'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sun, Moon, Building2, ShoppingCart, BookOpen, Briefcase } from 'lucide-react'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const concepts = [
  {
    id: 'v1',
    href: '/v1',
    title: 'Institutional Trust',
    mode: 'Light',
    description: 'Financial credibility meets luxury retail. Swiss private banking aesthetics with UAE institutional authority.',
    icon: Building2,
    colors: ['#FAFAF8', '#B8973A', '#1A1714'],
    font: 'Playfair Display'
  },
  {
    id: 'v2',
    href: '/v2',
    title: 'Ecommerce First',
    mode: 'Light',
    description: 'Conversion-optimized, product-forward design. Fast browsing with quick reservation flow.',
    icon: ShoppingCart,
    colors: ['#FFFFFF', '#C9982A', '#111111'],
    font: 'DM Sans'
  },
  {
    id: 'v3',
    href: '/v3',
    title: 'Editorial Luxury',
    mode: 'Light',
    description: 'Premium storytelling for the discerning buyer. Magazine-style layouts with curated product presentation.',
    icon: BookOpen,
    colors: ['#F5F3EE', '#A67C2E', '#16130E'],
    font: 'Cormorant Garamond'
  },
  {
    id: 'v4',
    href: '/v4',
    title: 'Executive Dark',
    mode: 'Dark',
    description: 'Private banking aesthetics for HNI clients. Bloomberg meets Ritz-Carlton private lounge.',
    icon: Briefcase,
    colors: ['#0E0D0B', '#C9982A', '#F0EDE6'],
    font: 'Josefin Sans'
  }
]

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#0A0908]">
      {/* Header */}
      <header className="w-full py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <Image
            src="https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png"
            alt="Tora Bullion"
            width={180}
            height={80}
            className="h-20 w-auto"
            priority
          />
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-light text-[#F0EDE6] tracking-wide">
              Design Concept Showcase
            </h1>
            <p className="text-sm text-[#8A8580] mt-2">
              For Review Only — Select a concept to explore
            </p>
          </div>
        </div>
      </header>

      {/* Info Banner */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-[#1A1815] border border-[#2E2B26] rounded-lg p-6 text-center">
          <p className="text-[#B8973A] text-sm font-medium mb-2">All Concepts Share</p>
          <p className="text-[#8A8580] text-sm">
            Same booking logic, product catalog, and business rules. Only the visual design system differs.
          </p>
        </div>
      </div>

      {/* Concepts Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.map((concept) => {
            const IconComponent = concept.icon
            return (
              <Link
                key={concept.id}
                href={concept.href}
                className="group relative bg-[#1A1815] border border-[#2E2B26] rounded-lg overflow-hidden hover:border-[#B8973A]/50 transition-all duration-200"
              >
                {/* Mode Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    concept.mode === 'Dark' 
                      ? 'bg-[#0E0D0B] text-[#F0EDE6] border border-[#2E2B26]'
                      : 'bg-[#F5F3EE] text-[#1A1714]'
                  }`}>
                    {concept.mode === 'Dark' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                    {concept.mode}
                  </span>
                </div>

                {/* Color Preview Bar */}
                <div className="h-2 flex">
                  {concept.colors.map((color, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: color }} />
                  ))}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[#0E0D0B] rounded-lg border border-[#2E2B26]">
                      <IconComponent className="w-6 h-6 text-[#B8973A]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#8A8580] uppercase tracking-wider">
                        Version {concept.id.toUpperCase()}
                      </span>
                      <h2 className="text-xl font-semibold text-[#F0EDE6] mt-1">
                        {concept.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#8A8580] text-sm leading-relaxed mb-6">
                    {concept.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6B6560]">
                      Font: {concept.font}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[#B8973A] text-sm font-medium group-hover:gap-3 transition-all duration-200">
                      Explore Concept
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      {/* Footer Note */}
      <footer className="py-8 border-t border-[#2E2B26]">
        <p className="text-center text-[#6B6560] text-xs">
          This page is for client review only and will not be published on the live site.
        </p>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
