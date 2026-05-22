'use client'

import { useCart } from '@/contexts/CartContext'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'

export default function PagesShell({ children }: { children: React.ReactNode }) {
  const { cartCount } = useCart()
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-dm-sans)]">
      <SpotPriceTicker theme="light" />
      <Navbar cartCount={cartCount} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
