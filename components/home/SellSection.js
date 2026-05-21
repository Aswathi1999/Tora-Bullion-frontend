import { ChevronRight } from 'lucide-react'

export default function SellSection() {
  return (
    <section id="sell" className="py-16 bg-[#2C2C2C]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready for a Reliable Bullion Dealer in the UAE?
            </h2>
            <p className="text-[#aaa] text-sm leading-relaxed">
              Thinking of making an investment in gold and silver bullion in the UAE? Tora Bullion
              is here to offer you a unique and premium experience with quality products and services.
            </p>
          </div>
          <a
            href="https://wa.me/971542891916?text=Hello%20Tora%20Bullion!%20I%20would%20like%20to%20start%20my%20bullion%20journey."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] text-white px-7 py-3.5 rounded-md text-sm font-bold transition-colors"
          >
            Start your bullion journey with Tora Bullion
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
