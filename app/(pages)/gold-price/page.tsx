import type { Metadata } from 'next'
import MetalPricePage from '@/components/prices/MetalPricePage'

export const metadata: Metadata = {
  title: 'Gold Price Today in UAE (AED & USD) | Tora Bullion',
  description: 'Live gold price in UAE today — per gram and per troy ounce in AED and USD. Updated every minute from international markets.',
}

export default function GoldPricePage() {
  return <MetalPricePage metal="gold" />
}
