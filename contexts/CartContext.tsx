'use client'

import { createContext, useContext, useState } from 'react'

export interface CartItem {
  id: string
  title: string
  image: string
  weightGrams: number
  purity: string
}

type CartContextType = {
  cartItems: CartItem[]
  cartCount: number
  isCartOpen: boolean
  addToCart: (item?: CartItem) => void
  removeFromCart: (index: number) => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartCount: 0,
  isCartOpen: false,
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item?: CartItem) => {
    if (item) {
      setCartItems(prev => [...prev, item])
    } else {
      setCartItems(prev => [...prev, { id: 'unknown', title: 'Product', image: '/gold_bars.jpg', weightGrams: 0, purity: '' }])
    }
  }

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount: cartItems.length,
      isCartOpen,
      addToCart,
      removeFromCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
