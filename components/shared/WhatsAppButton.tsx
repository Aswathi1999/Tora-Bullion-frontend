'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ phone = '+971501234567' }) {
  const message = encodeURIComponent('Hello Tora Bullion! I would like to enquire about your gold and silver products.')
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
