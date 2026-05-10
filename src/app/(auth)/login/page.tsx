'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const router = useRouter()
  const [callbackUrl, setCallbackUrl] = useState('/profile')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const nextCallbackUrl = query.get('callbackUrl')
    if (nextCallbackUrl) {
      setCallbackUrl(nextCallbackUrl)
    }
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl,
      })

      if (result?.error) {
        setError('邮箱或密码不正确，请重新输入。')
        return
      }

      router.push(result?.url || callbackUrl)
      router.refresh()
    } catch {
      setError('登录暂时失败，请稍后重试。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0c1445 0%, #1a237e 25%, #00695c 50%, #1a237e 75%, #0c1445 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      <header style={{ background: 'transparent', padding: '20px 0' }}>
        <div className="container">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              H
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>HIGO 全球商学院</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>HIGO Business School</div>
            </div>
          </Link>
        </div>
      </header>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 160px)', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                  fontSize: '28px',
                }}
              >
                👤
              </div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>登录账号</h1>
              <p style={{ color: '#718096', fontSize: '0.875rem' }}>登录后可继续访问个人学习页和需要认证的内容。</p>
            </div>

            {error ? (
              <div style={{ background: '#FED7D7', color: '#C53030', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.875rem' }}>
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>邮箱</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="请输入邮箱"
                  required
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: '8px' }}>密码</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="请输入密码"
                  required
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', outline: 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: loading ? '#9AE6B4' : 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? '登录中...' : '登录'}
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <p style={{ color: '#718096', fontSize: '0.875rem' }}>
                还没有账号？
                <Link href="/register" style={{ color: '#38A169', fontWeight: 600, marginLeft: '4px' }}>
                  立即注册
                </Link>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
