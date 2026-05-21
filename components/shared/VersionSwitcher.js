'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function VersionSwitcher() {
  const pathname = usePathname()
  
  const versions = [
    { href: '/v1', label: 'V1', title: 'Institutional' },
    { href: '/v2', label: 'V2', title: 'Ecommerce' },
    { href: '/v3', label: 'V3', title: 'Editorial' },
    { href: '/v4', label: 'V4', title: 'Executive' },
    { href: '/preview', label: '⊞', title: 'All Concepts' }
  ]

  return (
    <div className="fixed top-10 right-4 z-50 flex gap-1 bg-black/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
      {versions.map(v => (
        <Link
          key={v.href}
          href={v.href}
          title={v.title}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 ${
            pathname === v.href || (pathname.startsWith(v.href) && v.href !== '/preview')
              ? 'bg-amber-500 text-black'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          {v.label}
        </Link>
      ))}
    </div>
  )
}
