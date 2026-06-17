'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Navbar from '@/components/home/Navbar'
import HeroSlideshow from '@/components/home/HeroSlideshow'
import GoldBullionSection from '@/components/home/GoldBullionSection'
import SilverBullionSection from '@/components/home/SilverBullionSection'
import WhyInvestSection from '@/components/home/WhyInvestSection'
import GoldBarBanner from '@/components/home/GoldBarBanner'
import TrustSection from '@/components/home/TrustSection'
import SellSection from '@/components/home/SellSection'
import Footer from '@/components/home/Footer'
import CartDrawer from '@/components/home/CartDrawer'
import { useCart } from '@/contexts/CartContext'

const LivePriceSection = dynamic(() => import('@/components/home/LivePriceSection'))
const InvestmentGuideSection = dynamic(() => import('@/components/home/PreciousMetalsInvestmentGuide'))
const DealsOfTheDay = dynamic(() => import('@/components/home/DealsOfTheDay'))
const ShopSection = dynamic(() => import('@/components/home/ShopSection'))

export default function HomePage() {
  const [activeWeight, setActiveWeight] = useState(null)
  const { cartCount, addToCart, isCartOpen, openCart, closeCart } = useCart()

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-dm-sans)]">
      <SpotPriceTicker theme="light" />
      <Navbar cartCount={cartCount} onCartClick={openCart} />
      <HeroSlideshow />
      <GoldBullionSection />
      <SilverBullionSection />
      <LivePriceSection />
      <WhyInvestSection />
      <InvestmentGuideSection/>
      <DealsOfTheDay activeWeight={activeWeight} setActiveWeight={setActiveWeight} onAddToCart={addToCart} />
      <GoldBarBanner />
      <ShopSection activeWeight={activeWeight} setActiveWeight={setActiveWeight} onAddToCart={addToCart}  />
      <TrustSection />
      <SellSection />
      <Footer />
      <WhatsAppButton />
      <CartDrawer open={isCartOpen} onClose={closeCart} />
    </div>
  )
}
