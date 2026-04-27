'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      setError('密码长度至少6位')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
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
    } catch (err) {
      setError('注册失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleGuestEntry = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0c1445 0%, #1a237e 25%, #00695c 50%, #1a237e 75%, #0c1445 100%)', backgroundSize: '400% 400%', animation: 'gradientShift 15s ease infinite' }}>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'transparent', padding: '20px 0' }}>
        <div className="container">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', textDecoration: 'none' }}>
            <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '20px' }}>H</div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>HIGO商学院</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>HIGO Business School</div>
            </div>
          </Link>
        </div>
      </header>

      {/* Register Form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: '480px' }}>
          <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className="fas fa-user-plus" style={{ fontSize: '28px', color: 'white' }}></i>
              </div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>注册账号</h1>
              <p style={{ color: '#718096', fontSize: '0.875rem' }}>创建您的HIGO商学院账号</p>
            </div>

            {error && (
              <div style={{ background: '#FED7D7', color: '#C53030', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.875rem' }}>
                <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Basic Info */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>
                  姓名 <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="请输入姓名"
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: '10px', fontSize: '0.9375rem', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#38A169'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>
                  邮箱 <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="请输入邮箱"
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: '10px', fontSize: '0.9375rem', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#38A169'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>
                  密码 <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="请输入密码（至少6位）"
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: '10px', fontSize: '0.9375rem', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#38A169'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>
                  确认密码 <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="请再次输入密码"
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: '10px', fontSize: '0.9375rem', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#38A169'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>

              {/* HIGO Info */}
              <div style={{ background: '#F7FAFC', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#4A5568', marginBottom: '12px' }}>
                  <i className="fas fa-info-circle" style={{ marginRight: '6px', color: '#3182CE' }}></i>
                  HIGO会员信息（选填）
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#718096', marginBottom: '12px' }}>如有HIGO会员账号，请填写以下信息以关联学习记录</p>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#4A5568', marginBottom: '6px' }}>HIGO用户名</label>
                  <input
                    type="text"
                    name="higoUsername"
                    value={formData.higoUsername}
                    onChange={handleChange}
                    placeholder="请输入HIGO用户名"
                    style={{ width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px', fontSize: '0.875rem', outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#38A169'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#4A5568', marginBottom: '6px' }}>会员ID</label>
                  <input
                    type="text"
                    name="memberId"
                    value={formData.memberId}
                    onChange={handleChange}
                    placeholder="请输入会员ID"
                    style={{ width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px', fontSize: '0.875rem', outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#38A169'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#4A5568', marginBottom: '6px' }}>历史星衔</label>
                  <input
                    type="text"
                    name="historicalStar"
                    value={formData.historicalStar}
                    onChange={handleChange}
                    placeholder="如：一星、二星、三星"
                    style={{ width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px', fontSize: '0.875rem', outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#38A169'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#4A5568', marginBottom: '6px' }}>隶属团队</label>
                  <input
                    type="text"
                    name="leaderTeam"
                    value={formData.leaderTeam}
                    onChange={handleChange}
                    placeholder="请输入团队名称"
                    style={{ width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: '8px', fontSize: '0.875rem', outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#38A169'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', padding: '14px', background: loading ? '#9AE6B4' : 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(56, 161, 105, 0.4)' }}
              >
                {loading ? '注册中...' : '立即注册'}
              </button>
            </form>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '12px' }}>
                已有账号？<Link href="/login" style={{ color: '#38A169', fontWeight: 600, textDecoration: 'none' }}>立即登录</Link>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '12px 0' }}>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                <span style={{ color: '#A0AEC0', fontSize: '0.75rem' }}>或</span>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
              </div>
              <button
                onClick={handleGuestEntry}
                style={{ width: '100%', padding: '12px', background: 'white', color: '#4A5568', border: '2px solid #E2E8F0', borderRadius: '10px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = '#38A169'; e.currentTarget.style.color = '#38A169'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#4A5568'; }}
              >
                游客登录（不注册，直接浏览）
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', textDecoration: 'none' }}>
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}