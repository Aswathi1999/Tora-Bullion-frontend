import { notFound } from 'next/navigation'
import ServicePage from '@/components/services/ServicePage'
import GoldCoinsDubaiPage from '@/components/services/GoldCoinsDubaiPage'
import GoldCoinsAbuDhabiPage from '@/components/services/GoldCoinsAbuDhabiPage'
import SellGoldDubaiPage from '@/components/services/SellGoldDubaiPage'
import SellGoldAbuDhabiPage from '@/components/services/SellGoldAbuDhabiPage'
import BuySilverBarsDubaiPage from '@/components/services/BuySilverBarsDubaiPage'
import BuySilverBarsAbuDhabiPage from '@/components/services/BuySilverBarsAbuDhabiPage'
import BuySilverCoinsDubaiPage from '@/components/services/BuySilverCoinsDubaiPage'
import BuySilverCoinsAbuDhabiPage from '@/components/services/BuySilverCoinsAbuDhabiPage'
import SellSilverDubaiPage from '@/components/services/SellSilverDubaiPage'
import SellSilverAbuDhabiPage from '@/components/services/SellSilverAbuDhabiPage'

const validSlugs = [
  'buy-gold-bars-dubai',
  'buy-gold-coins-dubai',
  'buy-gold-bars-abu-dhabi',
  'buy-gold-coins-abu-dhabi',
  'sell-gold-dubai',
  'sell-gold-abu-dhabi',
  'buy-silver-bars-dubai',
  'buy-silver-coins-dubai',
  'buy-silver-bars-abu-dhabi',
  'buy-silver-coins-abu-dhabi',
  'sell-silver-dubai',
  'sell-silver-abu-dhabi',
]

const titleMap: Record<string, string> = {
  'buy-gold-bars-dubai':        'Buy Gold Bars in Dubai | Tora Bullion',
  'buy-gold-coins-dubai':       'Buy Gold Coins in Dubai | Tora Bullion',
  'buy-gold-bars-abu-dhabi':    'Buy Gold Bars in Abu Dhabi | Tora Bullion',
  'buy-gold-coins-abu-dhabi':   'Buy Gold Coins in Abu Dhabi | Tora Bullion',
  'sell-gold-dubai':            'Sell Gold in Dubai | Tora Bullion',
  'sell-gold-abu-dhabi':        'Sell Gold in Abu Dhabi | Tora Bullion',
  'buy-silver-bars-dubai':      'Buy Silver Bars in Dubai | Tora Bullion',
  'buy-silver-coins-dubai':     'Buy Silver Coins in Dubai | Tora Bullion',
  'buy-silver-bars-abu-dhabi':  'Buy Silver Bars in Abu Dhabi | Tora Bullion',
  'buy-silver-coins-abu-dhabi': 'Buy Silver Coins in Abu Dhabi | Tora Bullion',
  'sell-silver-dubai':          'Sell Silver in Dubai | Tora Bullion',
  'sell-silver-abu-dhabi':      'Sell Silver in Abu Dhabi | Tora Bullion',
}

export function generateStaticParams() {
  return validSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) return {}
  return { title: titleMap[params.slug] }
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) notFound()
  if (params.slug === 'buy-gold-coins-dubai') return <GoldCoinsDubaiPage />
  if (params.slug === 'buy-gold-coins-abu-dhabi') return <GoldCoinsAbuDhabiPage />
  if (params.slug === 'sell-gold-dubai') return <SellGoldDubaiPage />
  if (params.slug === 'sell-gold-abu-dhabi') return <SellGoldAbuDhabiPage />
  if (params.slug === 'buy-silver-bars-dubai') return <BuySilverBarsDubaiPage />
  if (params.slug === 'buy-silver-bars-abu-dhabi') return <BuySilverBarsAbuDhabiPage />
  if (params.slug === 'buy-silver-coins-dubai') return <BuySilverCoinsDubaiPage />
  if (params.slug === 'buy-silver-coins-abu-dhabi') return <BuySilverCoinsAbuDhabiPage />
  if (params.slug === 'sell-silver-dubai') return <SellSilverDubaiPage />
  if (params.slug === 'sell-silver-abu-dhabi') return <SellSilverAbuDhabiPage />
  return <ServicePage slug={params.slug} />
}
