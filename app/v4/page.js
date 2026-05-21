'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Phone, ChevronRight, Shield, Award, Truck, RefreshCw, MapPin, Clock, TrendingUp, TrendingDown, Eye, Lock, Gem, Sparkles, Target, Users, Lightbulb, Heart } from 'lucide-react'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import VersionSwitcher from '@/components/shared/VersionSwitcher'
import { products } from '@/lib/data/products'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#contact', label: 'Contact' },
]

const heroSlides = [
  { title: 'Rare.', subtitle: 'Precious.', accent: 'Timeless.' },
]

const servicesList = [
  { icon: TrendingUp, title: 'Trading', desc: 'Based in Dubai, our global market access ensures fast, safe, and transparent precious metals trading.' },
  { icon: RefreshCw, title: 'Refining', desc: 'Partnering with top refiners worldwide, we maximize value from precious metals in ore and scrap forms.' },
  { icon: Target, title: 'Hedging', desc: 'Sophisticated hedging solutions help investors mitigate risks and safeguard profitability.' },
  { icon: Lock, title: 'Secured Vaulting', desc: 'Secure vaulting across major trading points with seamless location swaps and top logistics.' },
]

const valuesList = [
  { icon: Shield, title: 'Integrity', desc: 'Honesty and transparency in all practices' },
  { icon: Gem, title: 'Quality', desc: 'Products and services of the highest excellence' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuous improvement and market leadership' },
  { icon: Heart, title: 'Social Responsibility', desc: 'Supporting and engaging with local communities' },
]

const productCategories = [
  { id: 'gold', label: 'Gold', image: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=600&q=80', desc: 'LBMA Good or Non-Good Gold Bars in standard weights and purities' },
  { id: 'silver', label: 'Silver', image: 'https://images.unsplash.com/photo-1707783764111-502472d31ace?w=600&q=80', desc: 'Silver large bars, coins or 1 Kg bars with ethical standards' },
  { id: 'platinum', label: 'Platinum', image: 'https://images.pexels.com/photos/8442342/pexels-photo-8442342.jpeg?w=600&q=80', desc: 'LBMA Good and Non-Good Platinum Bars for investment' },
  { id: 'palladium', label: 'Palladium', image: 'https://images.pexels.com/photos/8442429/pexels-photo-8442429.jpeg?w=600&q=80', desc: 'Rare metal in various forms including bars and alloys' },
]

export default function V4Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [prices, setPrices] = useState({
    gold: { price: 4993.95, change: 16.69, changePercent: 0.34, trend: 'up' },
    silver: { price: 31.25, change: 0.15, changePercent: 0.48, trend: 'up' },
    platinum: { price: 1024.50, change: -5.20, changePercent: -0.51, trend: 'down' },
    palladium: { price: 985.00, change: 8.30, changePercent: 0.85, trend: 'up' },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        gold: {
          ...prev.gold,
          price: prev.gold.price + (Math.random() - 0.5) * 2,
          change: (Math.random() - 0.5) * 20,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        },
        silver: {
          ...prev.silver,
          price: prev.silver.price + (Math.random() - 0.5) * 0.1,
          change: (Math.random() - 0.5) * 0.5,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        },
        platinum: {
          ...prev.platinum,
          price: prev.platinum.price + (Math.random() - 0.5) * 5,
          change: (Math.random() - 0.5) * 10,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        },
        palladium: {
          ...prev.palladium,
          price: prev.palladium.price + (Math.random() - 0.5) * 5,
          change: (Math.random() - 0.5) * 10,
          trend: Math.random() > 0.5 ? 'up' : 'down'
        },
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const goldProducts = products.filter(p => p.metal === 'gold')
  const silverProducts = products.filter(p => p.metal === 'silver')

  const getFilteredProducts = () => {
    switch(activeFilter) {
      case 'gold': return goldProducts
      case 'silver': return silverProducts
      default: return products
    }
  }

  return (
    <div className="min-h-screen bg-[#0E0D0B] font-[family-name:var(--font-inter)]">
      {/* Live Ticker - Esteem Style */}
      <div className="bg-[#0A0908] border-b border-[#1A1815] overflow-hidden">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 py-2 px-4 whitespace-nowrap"
            >
              {Object.entries(prices).map(([metal, data]) => (
                <div key={metal} className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      metal === "gold"
                        ? "bg-[#C9982A] text-black"
                        : "bg-[#1A1815] text-white"
                    }`}
                  >
                    {metal[0].toUpperCase()}
                  </span>
                  <span className="text-white/60 text-xs uppercase">
                    {metal}
                  </span>
                  <span className="text-white text-sm font-mono">
                    ${data.price.toFixed(2)}
                  </span>
                  <span
                    className={`flex items-center text-xs ${
                      data.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {data.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {data.change >= 0 ? "+" : ""}
                    {data.change.toFixed(2)} ({data.changePercent.toFixed(2)}%)
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#0E0D0B]/95 backdrop-blur-sm border-b border-[#1A1815]">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/v4" className="flex-shrink-0">
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
                  className="text-[#8A8580] hover:text-[#C9982A] text-sm font-light tracking-wide transition-colors duration-150"
                  style={{ fontFamily: "var(--font-josefin)" }}
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
                className="hidden md:flex items-center gap-2 text-sm text-[#8A8580] hover:text-[#C9982A] transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button className="hidden md:flex items-center gap-2 border border-[#C9982A] hover:bg-[#C9982A] text-[#C9982A] hover:text-[#0E0D0B] px-5 py-2.5 text-sm font-medium transition-all duration-150">
                Contact Us
              </button>
              <button
                className="md:hidden p-2 text-[#F0EDE6]"
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
          <div className="md:hidden bg-[#1A1815] border-t border-[#2E2B26] px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#F0EDE6] hover:text-[#C9982A] text-base font-light py-2"
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

      {/* Hero Section - Esteem Style */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1762463176312-1757d5125c85?w=1600&q=80"
            alt="Gold Bars"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0D0B] via-[#0E0D0B]/80 to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl leading-none mb-8"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              <span className="block text-[#F0EDE6]">Rare.</span>
              <span className="block text-[#F0EDE6]">Precious.</span>
              <span className="block text-[#C9982A]">Timeless.</span>
            </h1>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-[#C9982A] hover:bg-[#C9982A] text-[#C9982A] hover:text-[#0E0D0B] px-8 py-4 text-sm font-medium transition-all duration-150"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Esteem Style */}
      <section id="about" className="py-20 bg-[#0E0D0B]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9982A] text-sm tracking-[0.2em] uppercase mb-4">
                Bullion Dealers in Dubai, UAE
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#F0EDE6] mb-6"
                style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
              >
                10+ Years of Golden Legacy
              </h2>
              <p className="text-[#8A8580] leading-relaxed mb-6">
                Tora Bullion FZCO, founded in 2014, is a premier precious metals
                trading and import/export company based in Dubai, UAE.
                Specializing in both bullion and investment-grade metals, we
                cater to a wide range of clients including miners, aggregators,
                traders, jewelers, manufacturers, refiners, and banks globally.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#C9982A] hover:text-[#F0EDE6] transition-colors"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.pexels.com/photos/8442352/pexels-photo-8442352.jpeg?w=800&q=80"
                alt="Gold Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Esteem Style */}
      <section id="products" className="py-20 bg-[#1A1815]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#F0EDE6] mb-4"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Our Products
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative bg-[#222019] border border-[#2E2B26] overflow-hidden hover:border-[#C9982A] transition-all duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] to-transparent" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl text-[#F0EDE6] mb-2"
                    style={{
                      fontFamily: "var(--font-josefin)",
                      fontWeight: 400,
                    }}
                  >
                    {cat.label}
                  </h3>
                  <p className="text-sm text-[#8A8580] mb-4 line-clamp-2">
                    {cat.desc}
                  </p>
                  <a
                    href="#"
                    className="text-[#C9982A] text-sm hover:underline"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Esteem Style */}
      <section id="services" className="py-20 bg-[#0E0D0B]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#F0EDE6] mb-4"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, i) => (
              <div
                key={i}
                className="bg-[#1A1815] border border-[#2E2B26] p-8 text-center hover:border-[#C9982A] transition-colors"
              >
                <div className="w-16 h-16 bg-[#C9982A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-[#C9982A]" />
                </div>
                <h3
                  className="text-lg text-[#F0EDE6] mb-3"
                  style={{ fontFamily: "var(--font-josefin)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#8A8580]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Esteem Style */}
      <section className="py-20 bg-[#1A1815] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1762463176319-8416bf1e6a8e?w=1600&q=80"
            alt="Gold"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <blockquote
            className="text-4xl md:text-5xl text-[#F0EDE6] leading-relaxed"
            style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
          >
            Only Gold is Money.
            <span className="block text-[#C9982A]">
              Everything Else is Credit.
            </span>
          </blockquote>
        </div>
      </section>

      {/* Values Section - Esteem Style */}
      <section className="py-20 bg-[#0E0D0B]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-[#C9982A] text-sm tracking-[0.2em] uppercase mb-2">
              Why Choose Us
            </p>
            <h2
              className="text-4xl text-[#F0EDE6]"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              We are Tora Bullion
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {valuesList.map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-20 h-20 bg-[#1A1815] border border-[#2E2B26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#C9982A]" />
                </div>
                <h3
                  className="text-lg text-[#F0EDE6] mb-2"
                  style={{ fontFamily: "var(--font-josefin)", fontWeight: 400 }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-[#8A8580]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section
        id="compliance"
        className="py-20 bg-[#1A1815] border-y border-[#2E2B26]"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-[#F0EDE6] mb-2"
              style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            >
              Compliance & Trust
            </h2>
            <p className="font-mono text-xs text-[#8A8580] tracking-[0.3em] uppercase">
              Regulated. Audited. Authenticated.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { icon: Shield, label: "DMCC Licensed" },
              { icon: Award, label: "LBMA Member" },
              { icon: Lock, label: "RJC Certified" },
              { icon: Gem, label: "ISO 9001" },
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-3">
                <cert.icon className="w-8 h-8 text-[#F0EDE6]" />
                <span className="text-sm text-[#8A8580]">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0E0D0B]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-3xl text-[#F0EDE6] mb-6"
                style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
              >
                Contact Us
              </h2>
              <p className="text-[#8A8580] mb-8">
                Discover the power of precious metals with us. Experience the
                difference of investing with us and take control of your
                financial destiny.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+971527564884"
                  className="flex items-center gap-3 text-[#F0EDE6] hover:text-[#C9982A]"
                >
                  <Phone className="w-5 h-5" />
                  +971 542891916
                </a>
                <a
                  href="mailto:Info@toragold.com "
                  className="flex items-center gap-3 text-[#F0EDE6] hover:text-[#C9982A]"
                >
                  <span className="text-sm">Info@toragold.com</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: "Dubai Office",
                  desc: "Shop No. 10, 9A Street, Near Women's Museum, Gold Souq, Deira, Dubai",
                },
                { icon: Clock, title: "Hours", desc: "Sun-Thu: 9AM-6PM" },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-[#2E2B26]">
                  <item.icon className="w-6 h-6 text-[#C9982A] mb-4" />
                  <h3 className="text-[#F0EDE6] font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8A8580]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0908] border-t border-[#1A1815]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src={LOGO_URL}
              alt="Tora Bullion"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-[#8A8580] text-sm text-center">
              Discover the power of precious metals with us.
            </p>
            <p className="text-xs text-[#6B6560]">
              © 2024 Tora Bullion. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
