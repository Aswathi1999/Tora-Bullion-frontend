'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowRight, Phone, MapPin, Clock, Shield, Lock, Cpu, Quote, ChevronLeft, ChevronRight, Newspaper, Calendar } from 'lucide-react'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import VersionSwitcher from '@/components/shared/VersionSwitcher'
import { products } from '@/lib/data/products'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#accreditations', label: 'Accreditations' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' },
]

const trustPillars = [
  { icon: Lock, title: 'Security', desc: 'We enforce specialised and comprehensive security measures at our refineries and shipments to ensure your valuable assets are secure and protected.' },
  { icon: Cpu, title: 'Technology', desc: 'Using robust, high extraction technology and accurate evaluation, we offer state of the art equipment, efficient handling, and environmentally friendly processes.' },
  { icon: Shield, title: 'Ethics', desc: 'With strict adherence to human rights, labour, environment and business ethics, the materials we acquire are responsibly sourced.' },
]

const accreditations = [
  { name: 'DMCC', desc: 'Dubai Multi Commodities Centre' },
  { name: 'LBMA', desc: 'London Bullion Market Association' },
  { name: 'RJC CoC', desc: 'Responsible Jewellery Council' },
  { name: 'ISO 9001', desc: 'Quality Management System' },
  { name: 'ISO 14001', desc: 'Environmental Management' },
]

const newsArticles = [
  { 
    title: 'Tora Bullion Expands Dubai Operations', 
    date: 'Feb 15, 2025',
    image: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=400&q=80',
    excerpt: 'Our new facility in DMCC marks a significant milestone in our growth journey.'
  },
  { 
    title: 'Understanding Gold Purity Standards', 
    date: 'Feb 10, 2025',
    image: 'https://images.pexels.com/photos/8442342/pexels-photo-8442342.jpeg?w=400&q=80',
    excerpt: 'A comprehensive guide to 999.9 vs 999 purity and what it means for investors.'
  },
  { 
    title: 'The Benefits of Investing in Silver', 
    date: 'Feb 5, 2025',
    image: 'https://images.unsplash.com/photo-1707783764111-502472d31ace?w=400&q=80',
    excerpt: 'Why silver remains an essential part of a diversified precious metals portfolio.'
  },
]

const whyChooseUs = [
  { title: 'Why Choose Us', desc: 'Working with the commodity of the future, we prioritise meeting the highest of standards. Our level of expertise is solidified with over 200 years of accumulated experience.' },
  { title: 'Our Process', desc: 'Adhering to the deep know-how in the gold and silver refining industry, we use different processes depending on the quantity and desired level of purity.' },
  { title: 'Our Equipment', desc: 'Keeping up with the advancements in technology, our refineries are equipped with avant-garde machinery and highly instrumented processes.' },
  { title: 'Customer Care', desc: 'Experienced, competent, and trustworthy, our team of Customer Care professionals are experts in handling inquiries and always available to assist you.' },
]

export default function V3Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [accredIndex, setAccredIndex] = useState(0)

  const featuredProducts = products.filter(p => p.isFeatured)

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      {/* Spot Price Ticker */}
      <SpotPriceTicker theme="light" />

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#F5F3EE]/95 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/v3" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="Tora Bullion"
                width={140}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#16130E] hover:text-[#A67C2E] text-sm tracking-wide transition-colors duration-150"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:flex items-center gap-2 bg-[#A67C2E] hover:bg-[#8B6A26] text-white px-5 py-2.5 text-sm font-medium transition-colors"
              >
                Get In Touch
              </a>
              <button
                className="md:hidden p-2 text-[#16130E]"
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

        <div className="w-full h-px bg-[#D9D4CA]" />

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F5F3EE] px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#16130E] hover:text-[#A67C2E] text-lg py-2"
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

      {/* Hero Section - SAM Style */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-[#A67C2E] text-sm tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Your First Choice for Precious Metals
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-[#16130E] leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                World-Class Gold & Silver | Ethical, Secure, UAE-Based
                Excellence
              </h1>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#A67C2E] hover:bg-[#8B6A26] text-white px-8 py-4 text-sm font-medium transition-colors"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=600&q=80"
                alt="Gold Bar"
                width={400}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - SAM Style */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-3xl md:text-4xl text-[#16130E] mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Tora Bullion
              </h2>
              <p
                className="text-[#7A756C] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Tora Bullion is a premier precious metals dealer headquartered
                in Dubai, UAE, offering world-class trading and investment
                services for gold and silver.
              </p>
              <p
                className="text-[#7A756C] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Built on a foundation of integrity, innovation, and compliance,
                Tora Bullion ensures that all products—whether bars or coins—are
                responsibly sourced and traceable.
              </p>
              <p
                className="text-[#7A756C] leading-relaxed"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Our cutting-edge processes and partnerships deliver maximum
                value with environmental and operational efficiency.
              </p>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A67C2E] hover:text-[#16130E]"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A67C2E] hover:text-[#16130E]"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A67C2E] hover:text-[#16130E]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="relative aspect-square bg-[#E8E1D5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1762463176312-1757d5125c85?w=800&q=80"
                alt="Gold Bars"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars - SAM Style */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white border border-[#D9D4CA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-[#A67C2E]" />
                </div>
                <h3
                  className="text-xl text-[#16130E] mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm text-[#7A756C]"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Carousel - SAM Style */}
      <section id="accreditations" className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-[#16130E] mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              Accreditations & Certifications
            </h2>
            <p
              className="text-[#7A756C]"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Our reputation is built on globally recognized standards
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center gap-6 overflow-hidden">
              {accreditations.map((acc, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 p-6 bg-[#F5F3EE] border border-[#D9D4CA] text-center hover:border-[#A67C2E] transition-colors"
                >
                  <div className="w-16 h-16 bg-[#A67C2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#A67C2E] font-bold text-lg">
                      {acc.name.slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#16130E] mb-1">
                    {acc.name}
                  </h3>
                  <p className="text-xs text-[#7A756C]">{acc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#" className="text-[#A67C2E] text-sm hover:underline">
              Explore More Accreditations & Certifications →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Carousel - SAM Style */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-[#D9D4CA]">
                <h3
                  className="text-lg text-[#16130E] mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-[#7A756C]"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - SAM Style */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-[#16130E] mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              Products
            </h2>
            <p
              className="text-[#7A756C]"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              A glimpse into our range of expertly crafted gold and silver
              products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square relative bg-[#F5F3EE] mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p
                  className="text-sm text-[#7A756C] line-clamp-2"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {product.description?.slice(0, 80)}...
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#A67C2E] hover:bg-[#8B6A26] text-white px-8 py-4 text-sm font-medium transition-colors"
            >
              Explore Our Products
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* News Section - SAM Style */}
      <section id="news" className="py-16 bg-[#F5F3EE]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-[#16130E] mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              Latest News
            </h2>
            <p
              className="text-[#7A756C]"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Read the latest news releases and articles from Tora Bullion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <div
                key={i}
                className="bg-white border border-[#D9D4CA] overflow-hidden group hover:border-[#A67C2E] transition-colors"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#7A756C] mb-3">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <h3
                    className="text-lg text-[#16130E] mb-2 line-clamp-2"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 500,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm text-[#7A756C] line-clamp-2"
                    style={{ fontFamily: "var(--font-source-sans)" }}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="text-[#A67C2E] text-sm hover:underline">
              See More →
            </a>
          </div>
        </div>
      </section>

      {/* Account Opening CTA - SAM Style */}
      <section className="py-16 bg-[#16130E]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            ACCOUNT OPENING
          </h2>
          <p
            className="text-[#8A8580] mb-8"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Open an account with us today and receive access to our large
            variety of services and products.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#A67C2E] hover:bg-[#8B6A26] text-white px-8 py-4 text-sm font-medium transition-colors"
          >
            Open Account
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-xl">
            <div className="w-12 h-px bg-[#A67C2E] mb-6" />
            <h2
              className="text-4xl text-[#16130E] mb-8"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div>
              <p className="text-sm text-[#A67C2E] uppercase tracking-wider mb-2">
                Address
              </p>

              <p className="text-[#16130E] leading-relaxed">
                Shop No. 10, 9A Street
                <br />
                Near Women&apos;s Museum
                <br />
                Gold Souq, Deira
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div>
              <p className="text-sm text-[#A67C2E] uppercase tracking-wider mb-2">
                Contact
              </p>
              <p className="text-[#16130E]">
                +971 542891916
                <br />
                Info@toragold.com
              </p>
            </div>
            <div>
              <p className="text-sm text-[#A67C2E] uppercase tracking-wider mb-2">
                Hours
              </p>
              <p className="text-[#16130E]">
                Sun — Thu: 9AM – 6PM
                <br />
                Fri — Sat: By Appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#D9D4CA]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src={LOGO_URL}
              alt="Tora Bullion"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
            <div className="flex items-center gap-8 text-xs text-[#7A756C]">
              <a href="#" className="hover:text-[#A67C2E]">
                Terms
              </a>
              <a href="#" className="hover:text-[#A67C2E]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#A67C2E]">
                Authenticity
              </a>
            </div>
            <p className="text-xs text-[#7A756C]">
              © 2024 Tora Bullion. DMCC Licensed.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
