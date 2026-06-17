import type { Metadata } from 'next'
import BuyGoldBarsDubaiPage from '@/components/services/BuyGoldBarsDubaiPage'

export const metadata: Metadata = {
  title: 'Buy Gold Bars in Dubai | Tora Bullion',
  description: 'Buy certified 24K gold bars in Dubai at live spot prices. Investment-grade gold bars from 1 gram to 1 kilogram — DET-licensed, LBMA-certified, Deira Gold Souk since 2016.',
}

export default function Page() {
  return <BuyGoldBarsDubaiPage />
}
