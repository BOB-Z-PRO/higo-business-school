'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
        router.refresh()
      }
    } catch (err) {
      setError('登录失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleGuestLogin = () => {
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

      {/* Login Form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className="fas fa-user" style={{ fontSize: '28px', color: 'white' }}></i>
              </div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>登录账号</h1>
              <p style={{ color: '#718096', fontSize: '0.875rem' }}>欢迎回到HIGO商学院</p>
            </div>

            {error && (
              <div style={{ background: '#FED7D7', color: '#C53030', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.875rem' }}>
                <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>邮箱</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入邮箱"
                  required
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', transition: 'border-color 0.3s', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#38A169'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>密码</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  required
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', transition: 'border-color 0.3s', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#38A169'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', padding: '16px', background: loading ? '#9AE6B4' : 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(56, 161, 105, 0.4)' }}
              >
                {loading ? '登录中...' : '登录'}
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '12px' }}>
                还没有账号？<Link href="/register" style={{ color: '#38A169', fontWeight: 600, textDecoration: 'none' }}>立即注册</Link>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0' }}>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                <span style={{ color: '#A0AEC0', fontSize: '0.75rem' }}>或</span>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
              </div>
              <button
                onClick={handleGuestLogin}
                style={{ width: '100%', padding: '14px', background: 'white', color: '#4A5568', border: '2px solid #E2E8F0', borderRadius: '12px', fontSize: '0.9375rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = '#38A169'; e.currentTarget.style.color = '#38A169'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#4A5568'; }}
              >
                <i className="fas fa-user-circle" style={{ marginRight: '8px' }}></i>
                游客登录（浏览全部内容）
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