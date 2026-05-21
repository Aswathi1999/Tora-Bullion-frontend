import { Inter, Playfair_Display, DM_Sans, Source_Sans_3, Josefin_Sans, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '500', '600', '700'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600', '700'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans', weight: ['300', '400', '500', '600'] })
const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin', weight: ['300', '400', '500', '600', '700'] })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['300', '400', '500', '600', '700'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['300', '400', '500'] })

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
      <body className={`${inter.variable} ${playfair.variable} ${dmSans.variable} ${sourceSans.variable} ${josefin.variable} ${cormorant.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
