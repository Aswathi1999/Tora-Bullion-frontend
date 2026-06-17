import type { Metadata } from 'next'
import MetalPricePage from '@/components/prices/MetalPricePage'

export const metadata: Metadata = {
  title: 'Silver Price Today in UAE (AED & USD) | Tora Bullion',
  description: 'Live silver price in UAE today — per gram and per troy ounce in AED and USD. Updated every minute from international markets.',
}

export default function SilverPricePage() {
  return <MetalPricePage metal="silver" />
}
