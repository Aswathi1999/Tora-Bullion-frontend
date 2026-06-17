'use client'

import { useCart } from '@/contexts/CartContext'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import CartDrawer from '@/components/home/CartDrawer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export default function PagesShell({ children }: { children: React.ReactNode }) {
  const { cartCount, isCartOpen, openCart, closeCart } = useCart()

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-dm-sans)]">
      <SpotPriceTicker theme="light" />
      <Navbar cartCount={cartCount} onCartClick={openCart} />
      <main>{children}</main>
      <Footer />
      <CartDrawer open={isCartOpen} onClose={closeCart} />
      <WhatsAppButton />
    </div>
  )
}
