'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }

    setLoading(true)
    await new Promise(res => setTimeout(res, 1000))
    setLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9982A]/10">
          <CheckCircle className="h-8 w-8 text-[#C9982A]" />
        </div>
        <h3 className="text-xl font-bold text-[#111111]">Message Sent!</h3>
        <p className="max-w-sm text-sm text-[#777777]">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-[#C9982A] underline underline-offset-4 hover:text-[#B8871A]"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#111111]">
            Full Name <span className="text-[#C9982A]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="rounded-xl border border-[#E5E1DA] bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-[#AAAAAA] outline-none transition focus:border-[#C9982A] focus:ring-2 focus:ring-[#C9982A]/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#111111]">
            Email Address <span className="text-[#C9982A]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="rounded-xl border border-[#E5E1DA] bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-[#AAAAAA] outline-none transition focus:border-[#C9982A] focus:ring-2 focus:ring-[#C9982A]/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#111111]">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+971 50 000 0000"
            className="rounded-xl border border-[#E5E1DA] bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-[#AAAAAA] outline-none transition focus:border-[#C9982A] focus:ring-2 focus:ring-[#C9982A]/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#111111]">Subject</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="rounded-xl border border-[#E5E1DA] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#C9982A] focus:ring-2 focus:ring-[#C9982A]/20"
          >
            <option value="">Select a subject</option>
            <option value="buy">Buy Gold / Silver</option>
            <option value="sell">Sell Gold / Silver</option>
            <option value="pricing">Pricing Enquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-[#111111]">
          Message <span className="text-[#C9982A]">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can we help you?"
          className="resize-none rounded-xl border border-[#E5E1DA] bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-[#AAAAAA] outline-none transition focus:border-[#C9982A] focus:ring-2 focus:ring-[#C9982A]/20"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#C9982A] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B8871A] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
