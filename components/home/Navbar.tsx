'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, Phone } from 'lucide-react'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/sell', label: 'Sell Gold' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#DEDAD3]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src={LOGO_URL} alt="Tora Bullion" width={220} height={88} className="h-24 w-auto" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-150 relative ${
                    isActive
                      ? 'text-[#C9982A]'
                      : 'text-[#111111] hover:text-[#C9982A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9982A] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
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
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 px-2 rounded transition-colors ${
                    isActive
                      ? 'text-[#C9982A] bg-[#C9982A]/8 font-semibold'
                      : 'text-[#111111] hover:text-[#C9982A] hover:bg-[#F7F5F2]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
