import type { Metadata } from 'next'
import SilverBullionUAEPage from '@/components/services/SilverBullionUAEPage'

export const metadata: Metadata = {
  title: 'Silver Bullion in the UAE | Tora Bullion',
  description: 'A complete guide to silver bullion in the UAE. Buy and sell certified silver bars and coins in Dubai and Abu Dhabi with Tora Bullion.',
}

export default function SilverBullionPage() {
  return <SilverBullionUAEPage />
}
