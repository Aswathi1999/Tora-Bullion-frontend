'use client'

import { createContext, useContext, useState } from 'react'

type CartContextType = {
  cartCount: number
  addToCart: () => void
}

const CartContext = createContext<CartContextType>({ cartCount: 0, addToCart: () => {} })

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0)
  const addToCart = () => setCartCount(c => c + 1)
  return <CartContext.Provider value={{ cartCount, addToCart }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
