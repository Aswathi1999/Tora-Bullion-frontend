import { Phone, ShoppingCart } from 'lucide-react'

export default function MobileStickyCTA({ cartCount }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#DEDAD3] px-4 py-3 flex gap-3">
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-md text-sm font-bold"
      >
        <Phone className="w-4 h-4" />
        WhatsApp
      </a>
      <button className="flex-1 flex items-center justify-center gap-2 bg-[#C9982A] text-white py-3 rounded-md text-sm font-bold">
        <ShoppingCart className="w-4 h-4" />
        Cart ({cartCount})
      </button>
    </div>
  )
}
