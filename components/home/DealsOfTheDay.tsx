'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { products } from '@/lib/data/products'

const weightCategories = [
  { id: '1g', label: '1g', weight: 1 },
  { id: '5g', label: '5g', weight: 5 },
  { id: '10g', label: '10g', weight: 10 },
  { id: '50g', label: '50g', weight: 50 },
  { id: '100g', label: '100g', weight: 100 },
  { id: '1kg', label: '1kg', weight: 1000 },
]

const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4)

export default function DealsOfTheDay({ activeWeight, setActiveWeight, onAddToCart }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">
              Deals of the Day
            </span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold leading-tight text-[#111111] md:text-4xl lg:text-[2.75rem]">
              Today&apos;s{' '}
              <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">
                Featured
              </span>{' '}
              Deals
            </h2>
            <p className="text-sm text-[#777777] pb-1 hidden sm:block">Discover a wide range of 24kt gold coins, bars and pendants</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveWeight(null)}
            className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
              activeWeight === null ? 'bg-[#C9982A] text-white' : 'bg-[#F7F5F2] text-[#777777] hover:bg-[#DEDAD3]'
            }`}
          >
            All Weights
          </button>
          {weightCategories.map(w => (
            <button
              key={w.id}
              onClick={() => setActiveWeight(w.weight)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeWeight === w.weight ? 'bg-[#C9982A] text-white' : 'bg-[#F7F5F2] text-[#777777] hover:bg-[#DEDAD3]'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white border border-[#DEDAD3] rounded-lg overflow-hidden hover:border-[#C9982A] hover:shadow-lg transition-all"
            >
              <div className="relative aspect-square bg-[#F7F5F2]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#C9982A] hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                {product.isBestseller && (
                  <span className="absolute top-2 left-2 bg-[#C9982A] text-white text-[10px] font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-[#111111] mb-1">{product.title}</h3>
                <p className="text-xs text-[#777777] mb-2">{product.weightGrams}g • {product.purity}</p>
                <button
                  onClick={onAddToCart}
                  className="w-full bg-[#2C2C2C] hover:bg-[#C9982A] text-white py-2 rounded text-xs font-bold transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
