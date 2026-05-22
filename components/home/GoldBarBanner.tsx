import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function GoldBarBanner() {
  return (
    <section className="py-12 bg-[#F7F5F2]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Gold</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-[#111111] md:text-4xl lg:text-[2.75rem] mb-4">
              Bar{' '}
              <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">
                Sale
              </span>
            </h2>
            <p className="text-sm text-[#777777] uppercase tracking-wider mb-2">
              Shine bright this season with our sparkling
            </p>
            <p className="text-[#555] mb-6">
              Our Journey - A Tale of Continuous Growth and Commitment to Quality.
              For over two decades, Tora Bullion has been on an unwavering journey,
              adapting and evolving to meet the high demands of the gold industry.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-6 py-3 rounded-md text-sm font-bold"
            >
              Shop Now
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1762463176350-baed663b310c?w=600&q=80"
              alt="Gold Bars"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
