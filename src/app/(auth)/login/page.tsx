'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BookOpen, ArrowLeft, Mail, Lock } from 'lucide-react'

function ParticlesBackground() {
  return (
    <div className="particles-container">
      <div className="dna-container">
        {[...Array(3)].map((_, i) => (
          <div key={`dna-${i}`}>
            <div
              className="dna-strand"
              style={{
                left: `${20 + i * 25}%`,
                animationDelay: `${i * 0.6}s`,
                height: `${50 + Math.random() * 30}px`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="cells-container">
        {[...Array(4)].map((_, i) => (
          <div
            key={`cell-${i}`}
            className="cell"
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.9}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function LoginPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('邮箱或密码错误')
      } else {
        router.push('/')
      }
    } catch {
      setError('登录失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <ParticlesBackground />

      <div className="content-wrapper">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">HIGO商学院</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              返回首页
            </Link>
          </div>
        </header>

        {/* Login Form */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="w-full max-w-md">
            <div className="glass card p-8 fade-in">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">欢迎回来</h1>
                <p className="text-gray-400">登录你的账号开始学习</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    邮箱
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    密码
                  </label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white"
                  disabled={loading}
                >
                  {loading ? '登录中...' : '登录'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  还没有账号？{' '}
                  <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-medium">
                    立即注册
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
