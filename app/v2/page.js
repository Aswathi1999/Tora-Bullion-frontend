'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart, Search, Filter, ChevronRight, ChevronLeft, Star, Zap, Phone, MapPin, Clock, Shield, Award, Truck, RefreshCw, Heart } from 'lucide-react'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import VersionSwitcher from '@/components/shared/VersionSwitcher'
import { products } from '@/lib/data/products'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const navLinks = [
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' },
  { href: '#sell', label: 'Sell Gold' },
  { href: '#contact', label: 'Contact' },
]

const weightCategories = [
  { id: '1g', label: '1g', weight: 1 },
  { id: '5g', label: '5g', weight: 5 },
  { id: '10g', label: '10g', weight: 10 },
  { id: '50g', label: '50g', weight: 50 },
  { id: '100g', label: '100g', weight: 100 },
  { id: '1kg', label: '1kg', weight: 1000 },
]

const heroSlides = [
  {
    title: 'Frontier in Gold and Silver Trade',
    subtitle: 'Explore new investment opportunities',
    image: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=1200&q=80',
  },
  {
    title: 'Continuous Growth & Commitment to Quality',
    subtitle: 'Get assured products with certified purity',
    image: 'https://images.pexels.com/photos/8442342/pexels-photo-8442342.jpeg?w=1200&q=80',
  },
  {
    title: 'Bridging Worlds with Excellence',
    subtitle: 'A reliable channel of investment',
    image: 'https://images.unsplash.com/photo-1762463176312-1757d5125c85?w=1200&q=80',
  },
]

export default function V2Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('gold-bars')
  const [activeWeight, setActiveWeight] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goldBars = products.filter(p => p.metal === 'gold' && p.type === 'bar')
  const goldCoins = products.filter(p => p.metal === 'gold' && p.type === 'coin')
  const silverBars = products.filter(p => p.metal === 'silver' && p.type === 'bar')
  const silverCoins = products.filter(p => p.metal === 'silver' && p.type === 'coin')
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4)
  
  const getFilteredProducts = () => {
    let filtered = []
    switch(activeCategory) {
      case 'gold-bars': filtered = goldBars; break
      case 'gold-coins': filtered = goldCoins; break
      case 'silver-bars': filtered = silverBars; break
      case 'silver-coins': filtered = silverCoins; break
      default: filtered = products
    }
    
    if (activeWeight) {
      filtered = filtered.filter(p => p.weightGrams === activeWeight)
    }
    
    return filtered
  }

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-dm-sans)]">
      {/* Spot Price Ticker */}
      <SpotPriceTicker theme="light" />

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#DEDAD3]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/v2" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="Tora Bullion"
                width={120}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#111111] hover:text-[#C9982A] text-sm font-semibold transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 text-sm text-[#777777] hover:text-[#111111]">
                <Search className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#111111] hover:text-[#C9982A]"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <button className="relative flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#111111] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 text-[#111111]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#DEDAD3] px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#111111] hover:text-[#C9982A] text-base font-medium py-2 px-2 rounded hover:bg-[#F7F5F2]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <VersionSwitcher />

      {/* Hero Slideshow - Like Rafmoh */}
      <section className="relative bg-[#F7F5F2] overflow-hidden">
        <div className="relative h-[400px] md:h-[500px]">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
                  <p className="text-[#C9982A] text-sm font-semibold mb-2">Tora Bullion</p>
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-xl">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-lg mb-6">{slide.subtitle}</p>
                  <a
                    href="#shop"
                    className="inline-flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-6 py-3 rounded-md text-sm font-bold"
                  >
                    Shop Now
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? 'bg-[#C9982A] w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day - Like Rafmoh */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#111111]">DEALS OF THE DAY</h2>
            <p className="text-sm text-[#777777]">Discover a wide range of 24kt gold coins, bars and pendants</p>
          </div>

          {/* Weight Category Tabs - Like Rafmoh */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveWeight(null)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeWeight === null
                  ? 'bg-[#C9982A] text-white'
                  : 'bg-[#F7F5F2] text-[#777777] hover:bg-[#DEDAD3]'
              }`}
            >
              All Weights
            </button>
            {weightCategories.map(w => (
              <button
                key={w.id}
                onClick={() => setActiveWeight(w.weight)}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  activeWeight === w.weight
                    ? 'bg-[#C9982A] text-white'
                    : 'bg-[#F7F5F2] text-[#777777] hover:bg-[#DEDAD3]'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          {/* Featured Products Grid */}
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
                    onClick={() => setCartCount(c => c + 1)}
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

      {/* Gold Bar Sale Banner - Like Rafmoh */}
      <section className="py-12 bg-[#F7F5F2]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#C9982A] text-sm font-bold mb-2">GOLD</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                BAR SALE
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

      {/* Shop Section */}
      <section id="shop" className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#111111] mb-2">EXPLORE OUR PRODUCTS</h2>
            <p className="text-sm text-[#777777]">
              Discover a wide range of 24ct gold coins, bars and pendants
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'gold-bars', label: 'Gold Minted Bars' },
              { id: 'gold-coins', label: 'Gold Minted Coins' },
              { id: 'silver-bars', label: 'Silver Bars' },
              { id: 'silver-coins', label: 'Silver Coins' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setActiveWeight(null); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#C9982A] text-white'
                    : 'bg-[#F7F5F2] text-[#777777] hover:bg-[#DEDAD3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getFilteredProducts().map(product => (
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
                    onClick={() => setCartCount(c => c + 1)}
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
                  <span className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${
                    product.availability === 'in_stock' ? 'bg-green-500' :
                    product.availability === 'made_to_order' ? 'bg-amber-500' : 'bg-gray-400'
                  }`} />
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
                    onClick={() => setCartCount(c => c + 1)}
                    className="w-full bg-[#2C2C2C] hover:bg-[#C9982A] text-white py-2.5 rounded-md text-xs font-bold transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {getFilteredProducts().length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#777777]">No products found for this weight. Try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-[#F7F5F2] border-y border-[#DEDAD3]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'DMCC Certified', desc: 'Licensed Dubai dealer' },
              { icon: Award, title: '999.9 Purity', desc: 'Guaranteed hallmark' },
              { icon: Truck, title: 'Secure Delivery', desc: 'Insured UAE-wide' },
              { icon: RefreshCw, title: 'Easy Buyback', desc: 'Competitive rates' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-[#DEDAD3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#C9982A]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111111]">{item.title}</h3>
                  <p className="text-xs text-[#777777]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Section */}
      <section id="sell" className="py-12 bg-[#2C2C2C]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Sell Your Gold & Silver</h2>
              <p className="text-[#999] text-sm">Get instant quotes at competitive market rates</p>
            </div>
            <a
              href="https://wa.me/971501234567?text=Hello%20Tora%20Bullion!%20I%20would%20like%20to%20sell%20my%20gold/silver."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-6 py-3 rounded-md text-sm font-bold"
            >
              Get Instant Quote
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
  icon: MapPin,
  title: 'Dubai Office',
  desc: "Shop No. 10, 9A St, Near Women's Museum, Gold Souq, Deira, Dubai"
},
              { icon: Phone, title: 'WhatsApp', desc: '+971 542891916' },
              { icon: Clock, title: 'Open Hours', desc: 'Sun-Thu: 9AM-6PM' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-[#F7F5F2] rounded-lg">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#C9982A]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111]">{item.title}</p>
                  <p className="text-xs text-[#777777]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Image
              src={LOGO_URL}
              alt="Tora Bullion"
              width={100}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <div className="flex items-center gap-6 text-xs text-[#666]">
              <a href="#" className="hover:text-[#C9982A]">Terms</a>
              <a href="#" className="hover:text-[#C9982A]">Privacy</a>
              <a href="#" className="hover:text-[#C9982A]">Returns</a>
            </div>
            <p className="text-xs text-[#666]">© 2024 Tora Bullion. DMCC Licensed.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#DEDAD3] px-4 py-3 flex gap-3">
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-md text-sm font-bold"
        >
          <Phone className="w-4 h-4" />
          WhatsApp
        </a>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#C9982A] text-white py-3 rounded-md text-sm font-bold">
          <ShoppingCart className="w-4 h-4" />
          Cart ({cartCount})
        </button>
      </div>

      <WhatsAppButton />
    </div>
  )
}
