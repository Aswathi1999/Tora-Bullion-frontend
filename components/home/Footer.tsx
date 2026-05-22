import Image from 'next/image'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tora_bullion_llc/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Tora-Gold/61551072300830/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/tora_gold',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/tora-bullion-jewellery-co-l-l-c/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const quickLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/sell', label: 'Sell Gold' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Returns' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand + description */}
          <div className="md:col-span-1">
            <Image
              src={LOGO_URL}
              alt="Tora Bullion"
              width={140}
              height={56}
              className="h-24 w-auto brightness-0 invert mb-5"
            />
            <p className="text-[#aaa] text-base leading-relaxed mb-5">
              Established in 2016 in Dubai. Certified gold & silver bullion with expert investment guidance and competitive pricing.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-lg bg-[#C9982A]/10 border border-[#C9982A]/30 flex items-center justify-center text-[#C9982A] hover:bg-[#C9982A] hover:text-[#111] hover:border-[#C9982A] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-base font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#aaa] hover:text-[#C9982A] text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white text-base font-semibold uppercase tracking-widest mb-4">
              Our Locations
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#C9982A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Dubai</p>
                  <p className="text-[#aaa] text-sm leading-relaxed">Shop No. 10, 9A St, Near Women&apos;s Museum, Gold Souq, Deira, Dubai</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#C9982A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Abu Dhabi</p>
                  <p className="text-[#aaa] text-sm leading-relaxed">Al Danah - Zone 1, Abu Dhabi, United Arab Emirates</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-white text-base font-semibold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9982A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/971542891916" className="text-[#aaa] hover:text-[#C9982A] text-sm transition-colors">+971 542 891 916</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9982A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Email</p>
                  <a href="mailto:info@torabullion.com" className="text-[#aaa] hover:text-[#C9982A] text-sm transition-colors">info@torabullion.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C9982A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Open Hours</p>
                  <p className="text-[#aaa] text-sm">Sun – Thu: 9AM – 6PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#999] text-sm text-center md:text-left">
            Tora Bullion Jewellery Co. LLC &nbsp;·&nbsp; Trade Licence No. 1106002 &nbsp;·&nbsp;
            Licensed by the Dubai Department of Economy and Tourism (DET), Dubai, UAE
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map(link => (
              <a key={link.label} href={link.href} className="text-[#999] hover:text-[#C9982A] text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
