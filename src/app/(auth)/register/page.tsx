'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, User, Star } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
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

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center">注册HIGO商学院</CardTitle>
        <CardDescription className="text-center">
          绑定HIGO会员，开启你的学习之旅
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">真实姓名 *</label>
            <Input
              name="name"
              placeholder="请输入真实姓名"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">邮箱 *</label>
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">密码 *</label>
            <Input
              name="password"
              type="password"
              placeholder="至少6位"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">确认密码 *</label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="再次输入密码"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <User className="w-4 h-4" />
              HIGO会员信息（选填）
            </p>

            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">HIGO商城用户名</label>
                <Input
                  name="higoUsername"
                  placeholder="用于绑定HIGO账号"
                  value={formData.higoUsername}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">会员编号</label>
                <Input
                  name="memberId"
                  placeholder="HIGO会员编号"
                  value={formData.memberId}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Star className="w-4 h-4" /> 历史星级
                </label>
                <Input
                  name="historicalStar"
                  placeholder="如：黑钻/钻石/白金"
                  value={formData.historicalStar}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">所属黑钻领导人团队</label>
                <Input
                  name="leaderTeam"
                  placeholder="所属团队名称"
                  value={formData.leaderTeam}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
            {loading ? '注册中...' : '立即注册'}
          </Button>
          <p className="text-sm text-gray-500 text-center">
            已有账号？{' '}
            <Link href="/login" className="text-emerald-600 hover:underline">
              立即登录
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
