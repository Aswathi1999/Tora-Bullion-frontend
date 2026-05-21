'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingBag, Phone, MapPin, Mail, Clock, Shield, Award, Truck, RefreshCw, ChevronRight, ChevronLeft, Gem, Lock, CheckCircle, Factory, FlaskConical, Stamp, Scale } from 'lucide-react'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import VersionSwitcher from '@/components/shared/VersionSwitcher'
import { products } from '@/lib/data/products'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Our Process' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#sell', label: 'Sell to Us' },
  { href: '#contact', label: 'Contact' },
]

const certifications = [
  { name: 'DMCC', desc: 'Dubai Multi Commodities Centre Licensed' },
  { name: 'LBMA', desc: 'London Bullion Market Association' },
  { name: 'ISO 9001', desc: 'Quality Management System' },
  { name: 'BIS', desc: 'Bureau of Indian Standards Hallmark' },
  { name: 'RJC', desc: 'Responsible Jewellery Council' },
]

const processSteps = [
  { icon: Scale, step: '01', title: 'Assaying', desc: 'Precise metal purity verification using advanced testing methods' },
  { icon: FlaskConical, step: '02', title: 'Refining', desc: 'Advanced chemical and electrolytic processes for maximum purity' },
  { icon: Factory, step: '03', title: 'Smelting', desc: 'High-temperature processing to shape precious metals' },
  { icon: Stamp, step: '04', title: 'Minting', desc: 'Precision crafting into bars and coins with hallmarks' },
]

const categories = [
  { id: 'gold-bar', label: 'Gold Bar', image: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=400&q=80' },
  { id: 'gold-coin', label: 'Gold Coin', image: 'https://images.pexels.com/photos/8442342/pexels-photo-8442342.jpeg?w=400&q=80' },
  { id: 'silver-bar', label: 'Silver Bar', image: 'https://images.unsplash.com/photo-1707783764111-502472d31ace?w=400&q=80' },
  { id: 'silver-coin', label: 'Silver Coin', image: 'https://images.unsplash.com/photo-1624365169106-1f1f4cd65c91?w=400&q=80' },
]

export default function V1Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('gold-bars')
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const goldBars = products.filter(p => p.metal === 'gold' && p.type === 'bar')
  const goldCoins = products.filter(p => p.metal === 'gold' && p.type === 'coin')
  const silverProducts = products.filter(p => p.metal === 'silver')
  const featuredProducts = products.filter(p => p.isFeatured)

  const getTabProducts = () => {
    switch(activeTab) {
      case 'gold-bars': return goldBars
      case 'gold-coins': return goldCoins
      case 'silver': return silverProducts
      default: return goldBars
    }
  }

  const nextFeatured = () => setFeaturedIndex((i) => (i + 1) % featuredProducts.length)
  const prevFeatured = () => setFeaturedIndex((i) => (i - 1 + featuredProducts.length) % featuredProducts.length)

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-[family-name:var(--font-inter)]">
      {/* Spot Price Ticker */}
      <SpotPriceTicker theme="light" />

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#E8E4DC]">
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/v1" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="Tora Bullion"
                width={140}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#1A1714] hover:text-[#B8973A] text-sm font-medium transition-colors duration-150 font-[family-name:var(--font-playfair)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#B8973A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <button className="hidden md:flex items-center gap-2 bg-[#B8973A] hover:bg-[#9A7C2E] text-white px-5 py-2.5 rounded text-sm font-medium transition-colors duration-150">
                <ShoppingBag className="w-4 h-4" />
                Reserve
              </button>
              <button
                className="md:hidden p-2 text-[#1A1714]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAFAF8] border-t border-[#E8E4DC] px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#1A1714] hover:text-[#B8973A] text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="flex items-center justify-center gap-2 bg-[#B8973A] hover:bg-[#9A7C2E] text-white px-5 py-3 rounded text-sm font-medium mt-2">
                <ShoppingBag className="w-4 h-4" />
                Reserve Bullion
              </button>
            </nav>
          </div>
        )}
      </header>

      <VersionSwitcher />

      {/* Hero Section - Emirates Minting Style */}
      <section className="relative bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="text-center mb-12">
            <p className="text-[#B8973A] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Dubai's Premier Precious Metals Dealer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1A1714] leading-tight mb-6">
              Leading Provider of Gold and Silver{" "}
              <br className="hidden md:block" />
              Investment Products
            </h1>
          </div>

          {/* Category Cards - Like Emirates Minting */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href="#products"
                className="group relative bg-white rounded-lg overflow-hidden border border-[#E8E4DC] hover:border-[#B8973A] transition-all duration-200 hover:shadow-lg"
              >
                <div className="aspect-square relative bg-gradient-to-br from-[#F5F3EE] to-[#E8E4DC]">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#1A1714] font-[family-name:var(--font-playfair)]">
                    {cat.label}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spot Prices Section */}
      <section className="bg-[#1A1714] py-6">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-[#B8973A] text-xs tracking-wider uppercase mb-1">
                Gold
              </p>
              <p className="text-white text-2xl font-[family-name:var(--font-playfair)]">
                AED 312.50/g
              </p>
            </div>
            <div className="w-px h-10 bg-[#2E2B26] hidden md:block" />
            <div className="text-center">
              <p className="text-[#8A8580] text-xs tracking-wider uppercase mb-1">
                Silver
              </p>
              <p className="text-white text-2xl font-[family-name:var(--font-playfair)]">
                AED 3.85/g
              </p>
            </div>
            <div className="w-px h-10 bg-[#2E2B26] hidden md:block" />
            <p className="text-[#6B6560] text-xs">
              Prices based on live market rates
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1A1714]">
                Featured Products
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevFeatured}
                className="w-10 h-10 border border-[#E8E4DC] hover:border-[#B8973A] rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#6B6560]" />
              </button>
              <button
                onClick={nextFeatured}
                className="w-10 h-10 border border-[#E8E4DC] hover:border-[#B8973A] rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#6B6560]" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts
              .slice(featuredIndex, featuredIndex + 4)
              .concat(
                featuredProducts.slice(
                  0,
                  Math.max(0, featuredIndex + 4 - featuredProducts.length),
                ),
              )
              .slice(0, 4)
              .map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-[#E8E4DC] hover:border-[#B8973A]/50 rounded-lg overflow-hidden transition-all duration-200"
                >
                  <div className="relative aspect-square bg-[#F5F3EE]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-[#1A1714] mb-1 font-[family-name:var(--font-playfair)]">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#B8973A] font-medium mb-3">
                      Market Rate
                    </p>
                    <button className="w-full bg-[#1A1714] hover:bg-[#B8973A] text-white py-2.5 rounded text-sm font-medium transition-colors duration-150">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1A1714] mb-4">
              Our Products
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Premium gold bars tailored for investment. From 1g to 1kg, our
              bars are crafted with the highest purity of 999.9.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex border border-[#E8E4DC] rounded-lg p-1 bg-white">
              {[
                { id: "gold-bars", label: "Gold Bars" },
                { id: "gold-coins", label: "Gold Coins" },
                { id: "silver", label: "Silver" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-150 ${
                    activeTab === tab.id
                      ? "bg-[#B8973A] text-white"
                      : "text-[#6B6560] hover:text-[#1A1714]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTabProducts().map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-[#E8E4DC] hover:border-[#B8973A]/50 rounded-lg overflow-hidden transition-all duration-200"
              >
                <div className="relative aspect-square bg-[#F5F3EE]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isBestseller && (
                    <span className="absolute top-3 left-3 bg-[#B8973A] text-white text-xs font-medium px-2 py-1 rounded">
                      Bestseller
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#6B6560] uppercase tracking-wider mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-lg font-semibold text-[#1A1714] mb-2 font-[family-name:var(--font-playfair)]">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-[#6B6560] mb-4">
                    <span>{product.weightGrams}g</span>
                    <span className="w-1 h-1 bg-[#E8E4DC] rounded-full" />
                    <span>Purity {product.purity}</span>
                  </div>
                  <button className="w-full bg-[#1A1714] hover:bg-[#B8973A] text-white py-3 rounded text-sm font-medium transition-colors duration-150">
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Like Emirates Minting */}
      <section id="process" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1A1714] mb-4">
              Our Process
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              We refine precious metals for maximum purity, conduct precise
              assays to verify metal content, and use advanced techniques to
              shape them into high-quality bars and coins.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-[#FAFAF8] border border-[#E8E4DC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-[#B8973A]" />
                </div>
                <span className="text-4xl font-[family-name:var(--font-playfair)] text-[#E8E4DC] block mb-2">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-[#1A1714] mb-2 font-[family-name:var(--font-playfair)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6560]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Like Emirates Minting */}
      <section id="certifications" className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1A1714] mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-[#6B6560]">
              Our commitment to quality is backed by globally recognized
              certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white border border-[#E8E4DC] rounded-lg p-6 text-center hover:border-[#B8973A] transition-colors"
              >
                <div className="w-16 h-16 bg-[#B8973A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#B8973A]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1714] mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#6B6560]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell to Us */}
      <section id="sell" className="py-16 md:py-24 bg-[#1A1714]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-4">
                Sell Your Gold & Silver
              </h2>
              <p className="text-[#8A8580] mb-6">
                Get competitive rates for your precious metals. DMCC certified
                process with instant valuation and secure transactions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Competitive market rates",
                  "Instant valuation",
                  "Secure transaction",
                  "Same-day payment",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#F0EDE6]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#B8973A]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/971501234567?text=Hello%20Tora%20Bullion!%20I%20would%20like%20to%20sell%20my%20gold/silver."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B8973A] hover:bg-[#9A7C2E] text-white px-8 py-4 rounded text-sm font-semibold transition-colors duration-150"
              >
                Get Instant Quote
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8442352/pexels-photo-8442352.jpeg?w=800&q=80"
                alt="Sell your gold"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1A1714] mb-6">
                Visit Our Dubai Office
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "Shop No. 10, 9A St,\nNear Women's Museum,\nGold Souq, Deira,\nDubai, United Arab Emirates",
                  },
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: "+971 542891916",
                  },
                  { icon: Mail, label: "Email", value: " Info@toragold.com" },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Sun - Thu: 9AM - 6PM\nFri - Sat: By Appointment",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-[#E8E4DC] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#B8973A]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1714]">{item.label}</p>
                      <p className="text-[#6B6560] text-sm whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#E8E4DC] rounded-lg h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#B8973A] mx-auto mb-4" />
                <p className="text-[#6B6560]">Dubai, UAE</p>
                <p className="text-sm text-[#8A8580]">
                  Shop No. 10, 9A St, Near Women&apos;s Museum,
                  <br />
                  Gold Souq, Deira, Dubai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1714] py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Image
                src={LOGO_URL}
                alt="Tora Bullion"
                width={120}
                height={48}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-[#8A8580] text-sm">
                Dubai's trusted destination for certified gold and silver
                bullion.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-[#8A8580]">
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Gold Bars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Gold Coins
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Silver Bars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Silver Coins
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#8A8580]">
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#sell" className="hover:text-[#B8973A]">
                    Sell to Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#B8973A]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Policies</h4>
              <ul className="space-y-2 text-sm text-[#8A8580]">
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8973A]">
                    Returns Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2E2B26] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B6560] text-sm">
              © 2024 Tora Bullion. All rights reserved. DMCC Licensed.
            </p>
            <div className="flex items-center gap-4">
              {certifications.slice(0, 3).map((cert, i) => (
                <span
                  key={i}
                  className="text-xs text-[#6B6560] border border-[#2E2B26] px-2 py-1 rounded"
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
