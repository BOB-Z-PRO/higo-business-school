'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BookOpen, ArrowLeft, User, Mail, Lock, Star } from 'lucide-react'

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

export default function RegisterPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    higoUsername: '',
    memberId: '',
    historicalStar: '',
    leaderTeam: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('两次密码输入不一致')
      return
    }

    if (formData.password.length < 6) {
      setError('密码至少6位')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          higoUsername: formData.higoUsername,
          memberId: formData.memberId,
          historicalStar: formData.historicalStar,
          leaderTeam: formData.leaderTeam,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || '注册失败')
        return
      }

      router.push('/login?registered=true')
    } catch {
      setError('注册失败，请重试')
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

        {/* Register Form */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-4 py-12">
          <div className="w-full max-w-lg">
            <div className="glass card p-8 fade-in">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">注册账号</h1>
                <p className="text-gray-400">绑定HIGO会员，开启你的学习之旅</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      真实姓名 *
                    </label>
                    <Input
                      name="name"
                      placeholder="请输入真实姓名"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      邮箱 *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      密码 *
                    </label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="至少6位"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      确认密码 *
                    </label>
                    <Input
                      name="confirmPassword"
                      type="password"
                      placeholder="再次输入密码"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* HIGO Info */}
                <div className="border-t border-white/10 pt-5 mt-5">
                  <p className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    HIGO会员信息（选填）
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">HIGO商城用户名</label>
                      <Input
                        name="higoUsername"
                        placeholder="用于绑定HIGO账号"
                        value={formData.higoUsername}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">会员编号</label>
                      <Input
                        name="memberId"
                        placeholder="HIGO会员编号"
                        value={formData.memberId}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">历史星级</label>
                      <Input
                        name="historicalStar"
                        placeholder="如：黑钻/钻石/白金"
                        value={formData.historicalStar}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">所属黑钻领导人团队</label>
                      <Input
                        name="leaderTeam"
                        placeholder="所属团队名称"
                        value={formData.leaderTeam}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white"
                  disabled={loading}
                >
                  {loading ? '注册中...' : '立即注册'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  已有账号？{' '}
                  <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
                    立即登录
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
