'use client'

import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Trash2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, cartCount } = useCart()
  const overlayRef = useRef<HTMLDivElement>(null)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#DEDAD3]">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5 text-[#C9982A]" />
                <span className="text-[15px] font-bold text-[#111111]">Your Cart</span>
                {cartCount > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C9982A] text-white text-[10px] font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-[#777] hover:text-[#111] hover:bg-[#F7F5F2] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F7F5F2] flex items-center justify-center">
                    <ShoppingCart className="w-7 h-7 text-[#DEDAD3]" />
                  </div>
                  <p className="text-[#777] text-sm">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="text-[#C9982A] text-sm font-semibold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, i) => (
                    <div key={`${item.id}-${i}`} className="flex gap-4 py-4 border-b border-[#F0EDE8]">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#F7F5F2] flex-shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-[#111111] line-clamp-2 leading-snug">{item.title}</p>
                        <p className="text-[11px] text-[#999] mt-0.5">{item.weightGrams}g · {item.purity}</p>
                        <p className="text-[13px] font-bold text-[#C9982A] mt-1">Contact for price</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(i)}
                        className="flex-shrink-0 p-1.5 text-[#bbb] hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="px-6 py-5 border-t border-[#DEDAD3] space-y-3">
                <p className="text-[12px] text-[#999] text-center">Prices are based on live market rates at time of purchase</p>
                <Link href="/contact" onClick={onClose}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#C9982A] hover:bg-[#B8871A] text-white py-3.5 text-[13px] font-bold uppercase tracking-[0.15em] transition-colors"
                  >
                    Enquire About Order
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
