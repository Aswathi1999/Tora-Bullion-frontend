'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const DUMMY_USERS = [
  { email: 'customer@torabullion.com', password: 'Tora@123', name: 'Customer' },
  { email: 'admin@torabullion.com',    password: 'Admin@123', name: 'Admin' },
]

type User = { name: string; email: string }

type AuthContextType = {
  isLoggedIn: boolean
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => false,
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('tora_user')
      if (stored) setUser(JSON.parse(stored))
    } catch {}
  }, [])

  const login = (email: string, password: string): boolean => {
    const match = DUMMY_USERS.find(u => u.email === email && u.password === password)
    if (match) {
      const u = { name: match.name, email: match.email }
      setUser(u)
      localStorage.setItem('tora_user', JSON.stringify(u))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('tora_user')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
