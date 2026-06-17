'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ShoppingCart, Phone, ChevronDown, User, LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const LOGO_URL = '/favicon.png'

/* ─── Pulsing live dot ───────────────────────────────────────────────────── */
function LiveDot() {
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
  )
}

/* ─── Desktop live-price dropdown ────────────────────────────────────────── */
const livePriceItems = [
  { label: 'Gold Price',   href: '/gold-price',   color: '#C9982A', icon: '◈' },
  { label: 'Silver Price', href: '/silver-price', color: '#909090', icon: '◈' },
]

function LivePriceDropdown() {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true) }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 130) }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 ${
          open ? 'text-[#C9982A]' : 'text-[#111111] hover:text-[#C9982A]'
        }`}
      >
        <LiveDot />
        Live Prices
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-[220px] bg-white border border-[#DEDAD3] rounded-xl shadow-2xl overflow-hidden z-50">
          <div className="h-0.5 w-full bg-gradient-to-r from-[#C9982A] via-[#E8C96A] to-[#909090]" />
          <div className="p-2">
            {livePriceItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-[#F7F5F2] transition-colors duration-100 group"
                onClick={() => setOpen(false)}
              >
                <span className="text-sm" style={{ color: item.color }}>{item.icon}</span>
                <span className="text-sm font-medium text-[#333] group-hover:text-[#111]">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Mobile live-price accordion ────────────────────────────────────────── */
function MobileLivePrices({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-2 px-2 rounded hover:bg-[#F7F5F2] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <LiveDot />
          <span className="text-base font-medium text-[#111111]">Live Prices</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[#111111] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="mt-1 ml-2 space-y-0.5">
          {livePriceItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 text-sm py-1.5 px-3 rounded text-[#555] hover:text-[#111] hover:bg-[#F7F5F2] transition-colors"
              onClick={onClose}
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   METAL DROPDOWNS (Gold Bullion / Silver Bullion)
═══════════════════════════════════════════════════════════════════════════ */
interface MetalDropdown {
  label: string
  href: string
  accent: string
  overview?: { label: string; href: string }
  columns: { city?: string; cityHref?: string; items: { label: string; href: string }[] }[]
}

const metalMenus: MetalDropdown[] = [
  {
    label: 'Gold Bullion',
    href: '/gold-bullion',
    accent: '#C9982A',
    columns: [
      {
        city: 'Gold Bullion in Dubai',
        cityHref: '/gold-bullion/dubai',
        items: [
          { label: 'Buy Gold Bars Dubai',  href: '/services/buy-gold-bars-dubai' },
          { label: 'Buy Gold Coins Dubai', href: '/services/buy-gold-coins-dubai' },
          { label: 'Sell Gold Dubai',      href: '/services/sell-gold-dubai' },
        ],
      },
      {
        city: 'Gold Bullion in Abu Dhabi',
        cityHref: '/gold-bullion/abu-dhabi',
        items: [
          { label: 'Buy Gold Bars Abu Dhabi',  href: '/services/buy-gold-bars-abu-dhabi' },
          { label: 'Buy Gold Coins Abu Dhabi', href: '/services/buy-gold-coins-abu-dhabi' },
          { label: 'Sell Gold Abu Dhabi',      href: '/services/sell-gold-abu-dhabi' },
        ],
      },
    ],
  },
  {
    label: 'Silver Bullion',
    href: '/silver-bullion',
    accent: '#7A7A7A',
    overview: { label: 'Silver Bullion in UAE', href: '/silver-bullion' },
    columns: [
      {
        items: [
          { label: 'Buy Silver Bars Dubai',  href: '/services/buy-silver-bars-dubai' },
          { label: 'Buy Silver Coins Dubai', href: '/services/buy-silver-coins-dubai' },
          { label: 'Sell Silver Dubai',      href: '/services/sell-silver-dubai' },
        ],
      },
      {
        items: [
          { label: 'Buy Silver Bars Abu Dhabi',  href: '/services/buy-silver-bars-abu-dhabi' },
          { label: 'Buy Silver Coins Abu Dhabi', href: '/services/buy-silver-coins-abu-dhabi' },
          { label: 'Sell Silver Abu Dhabi',      href: '/services/sell-silver-abu-dhabi' },
        ],
      },
    ],
  },
]

function MetalDropdown({ menu }: { menu: MetalDropdown }) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true) }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 130) }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <div className="flex items-center gap-0.5">
        <Link
          href={menu.href}
          className={`text-sm font-semibold transition-colors duration-150 ${
            open ? 'text-[#C9982A]' : 'text-[#111111] hover:text-[#C9982A]'
          }`}
        >
          {menu.label}
        </Link>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            open ? 'rotate-180 text-[#C9982A]' : 'text-[#111111]'
          }`}
        />
      </div>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[620px] bg-white border border-[#DEDAD3] rounded-xl shadow-2xl overflow-hidden z-50">
          <div
            className="h-0.5 w-full"
            style={{ background: `linear-gradient(to right, ${menu.accent}, ${menu.accent}66, transparent)` }}
          />
          {menu.overview && (
            <div className="px-6 py-4 border-b border-[#DEDAD3]">
              <Link
                href={menu.overview.href}
                className="group/ov flex items-center justify-between"
                onClick={() => setOpen(false)}
              >
                <span
                  className="text-sm font-bold uppercase tracking-widest group-hover/ov:underline underline-offset-2"
                  style={{ color: menu.accent }}
                >
                  {menu.overview.label}
                </span>
                <span className="text-sm opacity-0 group-hover/ov:opacity-100 transition-opacity duration-150" style={{ color: menu.accent }}>→</span>
              </Link>
            </div>
          )}
          <div className="grid grid-cols-2 divide-x divide-[#DEDAD3]">
            {menu.columns.map((col, i) => (
              <div key={col.city ?? i} className="p-6">
                {col.city && (col.cityHref ? (
                  <Link
                    href={col.cityHref}
                    className="group/city flex items-center justify-between mb-4"
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest leading-snug group-hover/city:underline underline-offset-2"
                      style={{ color: menu.accent }}
                    >
                      {col.city}
                    </span>
                    <span
                      className="text-xs opacity-0 group-hover/city:opacity-100 -translate-x-1 group-hover/city:translate-x-0 transition-all duration-150"
                      style={{ color: menu.accent }}
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 leading-snug" style={{ color: menu.accent }}>
                    {col.city}
                  </p>
                ))}
                <ul className="space-y-1">
                  {col.items.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-base text-[#444] hover:bg-[#F7F5F2] hover:text-[#111] transition-colors duration-100 group"
                        onClick={() => setOpen(false)}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: menu.accent }}
                        />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileMetalAccordion({ menu, onClose }: { menu: MetalDropdown; onClose: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between py-2 px-2 rounded hover:bg-[#F7F5F2] transition-colors">
        <Link
          href={menu.href}
          className="text-base font-medium text-[#111111] hover:text-[#C9982A] flex-1"
          onClick={onClose}
        >
          {menu.label}
        </Link>
        <button onClick={() => setOpen(!open)} className="p-1 text-[#111111] hover:text-[#C9982A]">
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="mt-1 ml-2 space-y-4 pb-2">
          {menu.overview && (
            <Link
              href={menu.overview.href}
              className="flex items-center justify-between px-2"
              onClick={onClose}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-2" style={{ color: menu.accent }}>
                {menu.overview.label}
              </span>
              <span className="text-[10px]" style={{ color: menu.accent }}>→</span>
            </Link>
          )}
          {menu.columns.map((col, i) => (
            <div key={col.city ?? i}>
              {col.city && (col.cityHref ? (
                <Link
                  href={col.cityHref}
                  className="flex items-center justify-between px-2 mb-1"
                  onClick={onClose}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-2" style={{ color: menu.accent }}>
                    {col.city}
                  </span>
                  <span className="text-[10px]" style={{ color: menu.accent }}>→</span>
                </Link>
              ) : (
                <p className="text-[10px] font-bold uppercase tracking-widest px-2 mb-1" style={{ color: menu.accent }}>
                  {col.city}
                </p>
              ))}
              {col.items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm py-1.5 px-3 rounded text-[#555] hover:text-[#111] hover:bg-[#F7F5F2] transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── User profile menu ─────────────────────────────────────────────────── */
function UserMenu() {
  const { isLoggedIn, user, logout } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true) }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 130) }

  if (!isLoggedIn) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#C9982A] transition-colors"
      >
        <User className="w-4 h-4" />
        Login
      </Link>
    )
  }

  const initials = user!.name.slice(0, 1).toUpperCase()

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button className="flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#C9982A] transition-colors">
        <span className="w-7 h-7 rounded-full bg-[#C9982A] text-white flex items-center justify-center text-xs font-bold">
          {initials}
        </span>
        <span className="hidden lg:inline">{user!.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-[#C9982A]' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-[200px] bg-white border border-[#DEDAD3] rounded-xl shadow-2xl overflow-hidden z-50">
          <div className="h-0.5 w-full bg-gradient-to-r from-[#C9982A] to-[#E8C060]" />
          <div className="px-4 py-3 border-b border-[#DEDAD3]">
            <p className="text-xs font-bold text-[#111111]">{user!.name}</p>
            <p className="text-xs text-[#888888] truncate">{user!.email}</p>
          </div>
          <div className="p-2">
            <button
              onClick={() => { logout(); setOpen(false); router.push('/') }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#444] hover:bg-[#F7F5F2] hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC NAV LINKS
═══════════════════════════════════════════════════════════════════════════ */
const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/shop',  label: 'Shop' },
]

/* ═══════════════════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════════════════ */
export default function Navbar({ cartCount, onCartClick }: { cartCount: number; onCartClick?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  const handleCartClick = () => {
    if (!isLoggedIn) { router.push('/login'); return }
    onCartClick?.()
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#DEDAD3]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="flex-shrink-0">
            <Image src={LOGO_URL} alt="Tora Bullion" width={380} height={152} className="h-28 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-150 relative ${
                    isActive ? 'text-[#C9982A]' : 'text-[#111111] hover:text-[#C9982A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9982A] rounded-full" />
                  )}
                </Link>
              )
            })}
            {metalMenus.map(menu => (
              <MetalDropdown key={menu.label} menu={menu} />
            ))}
            <LivePriceDropdown />
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971542891916"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#111111] hover:text-[#C9982A]"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <div className="hidden md:block">
              <UserMenu />
            </div>
            <button onClick={handleCartClick} className="relative flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150">
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

      {/* Mobile menu */}
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
            {metalMenus.map(menu => (
              <MobileMetalAccordion
                key={menu.label}
                menu={menu}
                onClose={() => setMobileMenuOpen(false)}
              />
            ))}
            <MobileLivePrices onClose={() => setMobileMenuOpen(false)} />
            <div className="pt-2 border-t border-[#DEDAD3]">
              <UserMenu />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
