import type { Metadata } from 'next'
import GoldBullionAbuDhabiPage from '@/components/services/GoldBullionAbuDhabiPage'

export const metadata: Metadata = {
  title: 'Gold Bullion in Abu Dhabi | Buy & Sell Gold | Tora Bullion',
  description: 'Buy and sell investment-grade gold bars and coins in Abu Dhabi at live spot prices. DET-licensed, LBMA-certified bullion dealer.',
}

export default function Page() {
  return <GoldBullionAbuDhabiPage />
}
