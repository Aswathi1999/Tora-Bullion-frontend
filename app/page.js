import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to preview page for design concept selection
  redirect('/preview')
}
