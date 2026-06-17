import type { Metadata } from 'next'
import GoldCoinsDubaiPage from '@/components/services/GoldCoinsDubaiPage'

export const metadata: Metadata = {
  title: 'Premium Gold Coins in Dubai | Tora Bullion',
  description: 'Buy certified gold coins in Dubai. Globally recognised gold coins for flexible investing — available at Tora Bullion, Deira Gold Souk.',
}

export default function Page() {
  return <GoldCoinsDubaiPage />
}
