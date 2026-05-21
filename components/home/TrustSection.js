import { Shield, Award, Truck, RefreshCw } from 'lucide-react'

const trustItems = [
  { icon: Shield, title: 'DET Licensed', desc: 'Dubai Dept. of Economy & Tourism' },
  { icon: Award, title: '999.9 Purity', desc: 'Guaranteed hallmark' },
  { icon: Truck, title: 'Secure Delivery', desc: 'Insured UAE-wide' },
  { icon: RefreshCw, title: 'Easy Buyback', desc: 'Competitive rates' },
]

export default function TrustSection() {
  return (
    <section className="py-12 bg-[#F7F5F2] border-y border-[#DEDAD3]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white border border-[#DEDAD3] rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-[#C9982A]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111111]">{item.title}</h3>
                <p className="text-xs text-[#777777]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
