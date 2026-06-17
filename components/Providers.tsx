'use client'

import { SpotPriceProvider } from '@/contexts/SpotPriceContext'
import { CartProvider } from '@/contexts/CartContext'
import { AuthProvider } from '@/contexts/AuthContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SpotPriceProvider>
        <CartProvider>{children}</CartProvider>
      </SpotPriceProvider>
    </AuthProvider>
  )
}
