import { CartProvider } from '@/contexts/CartContext'
import PagesShell from '@/components/home/PagesShell'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <PagesShell>{children}</PagesShell>
    </CartProvider>
  )
}
