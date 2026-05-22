import { NextResponse } from 'next/server'

const AED_PER_USD = 3.6725
const GRAMS_PER_OZ = 31.1035

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const [goldRes, silverRes] = await Promise.all([
      fetch('https://api.gold-api.com/price/XAU', { next: { revalidate: 60 } }),
      fetch('https://api.gold-api.com/price/XAG', { next: { revalidate: 60 } }),
    ])

    if (!goldRes.ok || !silverRes.ok) {
      throw new Error('Failed to fetch spot prices')
    }

    const goldData = await goldRes.json()
    const silverData = await silverRes.json()

    const goldOzUSD = goldData.price
    const silverOzUSD = silverData.price

    return NextResponse.json({
      gold: {
        ozUSD: goldOzUSD,
        ozAED: +(goldOzUSD * AED_PER_USD).toFixed(2),
        gramAED: +(goldOzUSD * AED_PER_USD / GRAMS_PER_OZ).toFixed(2),
      },
      silver: {
        ozUSD: silverOzUSD,
        ozAED: +(silverOzUSD * AED_PER_USD).toFixed(2),
        gramAED: +(silverOzUSD * AED_PER_USD / GRAMS_PER_OZ).toFixed(2),
      },
      updatedAt: goldData.updatedAt,
    })
  } catch (err) {
    return NextResponse.json({ error: 'Unable to fetch prices' }, { status: 502 })
  }
}
