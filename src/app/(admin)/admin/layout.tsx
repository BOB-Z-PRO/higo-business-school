'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const adminNav = [
  { href: '/admin', label: '控制台', icon: 'fa-th-large' },
  { href: '/admin/users', label: '用户管理', icon: 'fa-users' },
  { href: '/admin/schools', label: '学院管理', icon: 'fa-university' },
  { href: '/admin/chapters', label: '篇章管理', icon: 'fa-layer-group' },
  { href: '/admin/modules', label: '模块管理', icon: 'fa-folder' },
  { href: '/admin/courses', label: '课程管理', icon: 'fa-book' },
  { href: '/admin/settings', label: '网站设置', icon: 'fa-cog' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated' && (session?.user as any)?.role !== 'ADMIN') {
      router.push('/')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7fafc' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner"></div>
          <p style={{ marginTop: 16, color: '#718096' }}>加载中...</p>
        </div>
      </div>
    )
  }

  if (!session || (session.user as any)?.role !== 'ADMIN') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7fafc' }}>
        <div style={{ textAlign: 'center', padding: 48, background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <div style={{ width: 64, height: 64, background: '#FED7D7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <i className="fas fa-exclamation-triangle" style={{ fontSize: 28, color: '#C53030' }}></i>
          </div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A202C', marginBottom: 8 }}>无权限访问</h1>
          <p style={{ color: '#718096', marginBottom: 24 }}>您没有管理员权限，如有疑问请联系管理员</p>
          <Link href="/" style={{ display: 'inline-block', padding: '12px 24px', background: '#38A169', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc' }}>
      {/* Admin Header */}
      <header style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '0 24px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: 18 }}>H</div>
              <div>
                <div style={{ fontWeight: 700, color: '#1A202C', fontSize: '1rem' }}>HIGO商学院</div>
                <div style={{ fontSize: '0.75rem', color: '#718096' }}>管理后台</div>
              </div>
            </Link>
            <nav style={{ display: 'flex', gap: 8 }}>
              {adminNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: pathname === item.href ? '#38A169' : '#4A5568',
                    background: pathname === item.href ? '#F0FFF4' : 'transparent',
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ marginRight: 6 }}></i>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href="/" target="_blank" style={{ color: '#718096', textDecoration: 'none', fontSize: '0.875rem' }}>
              <i className="fas fa-external-link-alt" style={{ marginRight: 4 }}></i>
              查看网站
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 36, height: 36, background: '#38A169', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
                {session.user?.name?.charAt(0) || 'A'}
              </div>
              <span style={{ fontSize: '0.875rem', color: '#1A202C' }}>{session.user?.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main style={{ padding: 24 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  )
}