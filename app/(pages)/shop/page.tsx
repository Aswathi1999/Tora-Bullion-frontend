'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import ShopSection from '@/components/home/ShopSection'

export default function ShopPage() {
  const [activeWeight, setActiveWeight] = useState(null)
  const { addToCart } = useCart()

  return (
    <ShopSection
      activeWeight={activeWeight}
      setActiveWeight={setActiveWeight}
      onAddToCart={addToCart}
    />
  )
}
