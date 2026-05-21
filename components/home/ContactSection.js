import { MapPin, Phone, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dubai',
    desc: "Shop No. 10, 9A St, Near Women's Museum, Gold Souq, Deira, Dubai",
  },
  {
    icon: MapPin,
    title: 'Abu Dhabi',
    desc: 'Al Danah - Zone 1, Abu Dhabi, United Arab Emirates',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    desc: '+971 542891916',
  },
  {
    icon: Clock,
    title: 'Open Hours',
    desc: 'Sun–Thu: 9AM–6PM',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-2">Visit Us</h2>
          <p className="text-sm text-[#777777]">Two locations across the UAE to serve you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 bg-[#F7F5F2] rounded-xl">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <item.icon className="w-5 h-5 text-[#C9982A]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#111111] mb-1">{item.title}</p>
                <p className="text-xs text-[#777777] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
