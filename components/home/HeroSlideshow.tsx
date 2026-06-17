'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    title: 'Buy Gold and Silver in Dubai with Confidence',
    subtitle: 'An irreplaceable destination to buy, sell, and invest in gold & silver in the UAE.',
    cta: 'Live Gold Price',
    ctaHref: '#live-price',
    image: '/hero/baner 1 tora.jpg',
  },
  {
    title: 'Reliable Bullion Dealer in UAE',
    subtitle: 'Trusted gold and silver bullion from the UAE\'s leading bullion dealers.',
    cta: 'Explore Bullion',
    ctaHref: '#shop',
    image: '/hero/baner 2 tora.jpg',
  },
  {
    title: 'Uncompromised Standards for Gold and Silver Bars',
    subtitle: 'Certified bullion, transparent pricing, and global purity standards.',
    cta: 'Buy Gold Bars',
    ctaHref: '#shop',
    image: '/hero/banner 3 tora.jpg',
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % heroSlides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-[#F7F5F2] overflow-hidden">
      <div className="relative h-[500px] md:h-[650px]">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={i === 0} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
                <p className="text-[#C9982A] text-sm font-semibold mb-2">Tora Bullion</p>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-xl">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-lg mb-6">{slide.subtitle}</p>
                <a
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-6 py-3 rounded-md text-sm font-bold"
                >
                  {slide.cta}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-[#C9982A] w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
