import type { Metadata } from 'next'
import BuyGoldBarsAbuDhabiPage from '@/components/services/BuyGoldBarsAbuDhabiPage'

export const metadata: Metadata = {
  title: 'Buy Gold Bars in Abu Dhabi | Tora Bullion',
  description: 'Buy certified 24K gold bars in Abu Dhabi at live spot prices. Investment-grade gold bars from 1 gram to 1 kilogram — LBMA-certified, trusted bullion dealer in the UAE since 2016.',
}

export default function Page() {
  return <BuyGoldBarsAbuDhabiPage />
}
