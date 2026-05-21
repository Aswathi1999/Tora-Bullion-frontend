import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function GoldBarBanner() {
  return (
    <section className="py-12 bg-[#F7F5F2]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#C9982A] text-sm font-bold mb-2">GOLD</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">BAR SALE</h2>
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
