'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import SpotPriceTicker from '@/components/shared/SpotPriceTicker'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Navbar from '@/components/home/Navbar'
import HeroSlideshow from '@/components/home/HeroSlideshow'
import AboutSection from '@/components/home/AboutSection'
import GoldBullionSection from '@/components/home/GoldBullionSection'
import SilverBullionSection from '@/components/home/SilverBullionSection'
import WhyInvestSection from '@/components/home/WhyInvestSection'
import GoldBarBanner from '@/components/home/GoldBarBanner'
import TrustSection from '@/components/home/TrustSection'
import SellSection from '@/components/home/SellSection'
import Footer from '@/components/home/Footer'
import MobileStickyCTA from '@/components/home/MobileStickyCTA'

const LivePriceSection = dynamic(() => import('@/components/home/LivePriceSection'))
const InvestmentGuideSection = dynamic(() => import('@/components/home/PreciousMetalsInvestmentGuide'))
const DealsOfTheDay = dynamic(() => import('@/components/home/DealsOfTheDay'))
const ShopSection = dynamic(() => import('@/components/home/ShopSection'))

export default function HomePage() {
  const [cartCount, setCartCount] = useState(0)
  const [activeWeight, setActiveWeight] = useState(null)

  const onAddToCart = () => setCartCount(c => c + 1)

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-dm-sans)]">
      <SpotPriceTicker theme="light" />
      <Navbar cartCount={cartCount} />
      <HeroSlideshow />
      <AboutSection />
      <GoldBullionSection />
      <SilverBullionSection />
      <LivePriceSection />
      <WhyInvestSection />
      <InvestmentGuideSection/>
      <DealsOfTheDay activeWeight={activeWeight} setActiveWeight={setActiveWeight} onAddToCart={onAddToCart} />
      <GoldBarBanner />
      <ShopSection activeWeight={activeWeight} setActiveWeight={setActiveWeight} onAddToCart={onAddToCart} />
      <TrustSection />
      <SellSection />
      <Footer />
      <MobileStickyCTA cartCount={cartCount} />
      <WhatsAppButton />
    </div>
  )
}
