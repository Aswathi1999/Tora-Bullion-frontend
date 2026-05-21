import Image from 'next/image'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_tora-v3-editorial/artifacts/sprhv78m_Tora%20logo%20png%20%281%29.png'

const quickLinks = [
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' },
  { href: '#sell', label: 'Sell Gold' },
  { href: '#contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Returns' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111]">
      {/* Main footer body */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand + description */}
          <div className="md:col-span-2">
            <Image
              src={LOGO_URL}
              alt="Tora Bullion"
              width={140}
              height={56}
              className="h-10 w-auto brightness-0 invert mb-5"
            />
            <p className="text-[#aaa] text-sm leading-relaxed max-w-lg">
              Tora Bullion, established in 2016 in Dubai, deals in certified gold & silver bullion,
              providing expert investment guidance. We buy & sell bars and coins with trusted sourcing,
              competitive pricing, and expert service near the Gold Souq, Deira, and in Abu Dhabi.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#aaa] hover:text-[#C9982A] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#999] text-xs text-center md:text-left">
            Tora Bullion Jewellery Co. LLC &nbsp;·&nbsp; Trade Licence No. 1106002 &nbsp;·&nbsp;
            Licensed by the Dubai Department of Economy and Tourism (DET), Dubai, UAE
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map(link => (
              <a key={link.label} href={link.href} className="text-[#999] hover:text-[#C9982A] text-xs transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
