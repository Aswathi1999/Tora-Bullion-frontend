import type { Metadata } from 'next'
import BullionCategoryPage from '@/components/services/BullionCategoryPage'

export const metadata: Metadata = {
  title: 'Buy & Sell Gold Bullion in UAE | Tora Bullion',
  description: 'Investment-grade gold bars and coins in Dubai and Abu Dhabi. DET-licensed, LBMA-certified, live spot pricing. Trusted since 2016.',
}

export default function GoldBullionPage() {
  return <BullionCategoryPage metal="gold" />
}
