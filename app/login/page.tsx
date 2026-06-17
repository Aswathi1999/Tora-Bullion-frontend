'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      const ok = login(email, password)
      if (ok) {
        router.push(redirect)
      } else {
        setError('Invalid email or password. Please try again.')
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <Link href="/" className="mb-8">
        <Image src="/favicon.png" alt="Tora Bullion" width={200} height={80} className="h-28 w-auto" />
      </Link>

      <div className="w-full max-w-md bg-white border border-[#DEDAD3] rounded-2xl shadow-sm p-8">

        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-[#111111] mb-1">Welcome back</h1>
          <p className="text-sm text-[#888888]">Sign in to your Tora Bullion account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-[#333333] mb-1.5">Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#DEDAD3] text-sm text-[#111111] placeholder:text-[#BBBBBB] focus:outline-none focus:border-[#C9982A] focus:ring-1 focus:ring-[#C9982A] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#333333] mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 pr-10 rounded-lg border border-[#DEDAD3] text-sm text-[#111111] placeholder:text-[#BBBBBB] focus:outline-none focus:border-[#C9982A] focus:ring-1 focus:ring-[#C9982A] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] hover:text-[#555555] transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 px-4 py-2.5 rounded-lg">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#C9982A] hover:bg-[#B8871A] disabled:opacity-60 text-white py-2.5 rounded-lg text-sm font-bold transition-colors"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}
            {loading ? 'Signing in…' : 'Sign In'}
          </button>

        </form>

      </div>

      <p className="mt-6 text-xs text-[#AAAAAA]">
        <Link href="/" className="hover:text-[#C9982A] transition-colors">← Back to home</Link>
      </p>

    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
