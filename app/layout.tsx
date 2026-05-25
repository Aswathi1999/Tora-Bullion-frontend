import { DM_Sans } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: "Tora Bullion - Premium Gold & Silver | Dubai UAE",
  description:
    "Dubai's trusted bullion destination. Certified gold and silver bars & coins. DET licensed. Reservation-based purchasing.",
  keywords:
    "gold bars dubai, silver coins uae, bullion dealer, precious metals, gold investment dubai",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
