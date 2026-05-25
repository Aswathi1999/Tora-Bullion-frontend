'use client'

import { SpotPriceProvider } from '@/contexts/SpotPriceContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return <SpotPriceProvider>{children}</SpotPriceProvider>
}
