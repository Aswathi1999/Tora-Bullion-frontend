import type { Metadata } from 'next'
import GoldBullionDubaiPage from '@/components/services/GoldBullionDubaiPage'

export const metadata: Metadata = {
  title: 'Gold Bullion in Dubai | Buy & Sell Certified Gold | Tora Bullion',
  description: 'Buy certified gold bullion in Dubai at live spot prices. Investment-grade gold bars and coins from Tora Bullion — DET-licensed, LBMA-certified, Deira Gold Souk since 2016.',
}

export default function Page() {
  return <GoldBullionDubaiPage />
}
