'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import { products } from '@/lib/data/products'

const categories = [
  { id: 'gold-bars', label: 'Gold Minted Bars', metal: 'gold', type: 'bar' },
  { id: 'gold-coins', label: 'Gold Minted Coins', metal: 'gold', type: 'coin' },
  { id: 'silver-bars', label: 'Silver Bars', metal: 'silver', type: 'bar' },
  { id: 'silver-coins', label: 'Silver Coins', metal: 'silver', type: 'coin' },
]

const availabilityColor = {
  in_stock: 'bg-green-500',
  made_to_order: 'bg-amber-500',
}

export default function ShopSection({ activeWeight, setActiveWeight, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('gold-bars')
  const pathname = usePathname()
  const isShopPage = pathname === '/shop'

  const { metal, type } = categories.find(c => c.id === activeCategory)
  const filteredProducts = products.filter(p => {
    if (p.metal !== metal || p.type !== type) return false
    if (activeWeight && p.weightGrams !== activeWeight) return false
    return true
  }).slice(0, isShopPage ? undefined : 8)

  return (
    <section id="shop" className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9982A]/30 bg-[#C9982A]/8 px-4 py-1.5 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9982A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9982A]">Our Collection</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-[#111111] md:text-4xl lg:text-[2.75rem] mb-2">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-[#C9982A] to-[#B8871A] bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-sm text-[#777777]">Discover a wide range of 24ct gold coins, bars and pendants</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveWeight(null) }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id ? 'bg-[#C9982A] text-white' : 'bg-[#F7F5F2] text-[#777777] hover:bg-[#DEDAD3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white border border-[#DEDAD3] rounded-lg overflow-hidden hover:border-[#C9982A] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square bg-[#F7F5F2]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={onAddToCart}
                  className="absolute bottom-3 right-3 bg-[#C9982A] hover:bg-[#B8871A] text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
                {product.isBestseller && (
                  <span className="absolute top-2 left-2 bg-[#C9982A] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    BESTSELLER
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-[#2C2C2C] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    NEW
                  </span>
                )}
                <span className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${availabilityColor[product.availability] ?? 'bg-gray-400'}`} />
              </div>
              <div className="p-3">
                <p className="text-[10px] text-[#777777] uppercase tracking-wider mb-1">{product.brand}</p>
                <h3 className="text-sm font-bold text-[#111111] mb-1 line-clamp-1">{product.title}</h3>
                <div className="flex items-center gap-2 text-xs text-[#777777] mb-3">
                  <span>{product.weightGrams}g</span>
                  <span>•</span>
                  <span>{product.purity}</span>
                </div>
                <button
                  onClick={onAddToCart}
                  className="w-full bg-[#2C2C2C] hover:bg-[#C9982A] text-white py-2.5 rounded-md text-xs font-bold transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#777777]">No products found for this weight. Try another category.</p>
          </div>
        )}

        {!isShopPage && (
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#C9982A] text-[#C9982A] text-sm font-bold tracking-wide hover:bg-[#C9982A] hover:text-white transition-all duration-300"
            >
              View More Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
