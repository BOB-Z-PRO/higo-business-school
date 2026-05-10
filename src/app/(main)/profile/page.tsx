'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { BookOpen, Clock, LogOut, Settings, Trophy } from 'lucide-react'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { profileMobileNavItems } from '@/lib/site-data'

const quickLinks = [
  { href: '/course', icon: BookOpen, label: '我的课程', color: '#3182CE' },
  { href: '/business', icon: Trophy, label: '经营路径', color: '#38A169' },
  { href: '/resources', icon: Settings, label: '学习资料', color: '#805AD5' },
]

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="min-h-screen" style={{ background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner"></div>
          <p style={{ marginTop: 16, color: 'var(--text-gray)' }}>加载中...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
        <Header activePath="/profile" />
        <section style={{ padding: '80px 20px' }}>
          <div className="container-sm">
            <div style={{ background: 'white', borderRadius: '24px', padding: '48px 40px', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>👤</div>
              <h1 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>登录后查看个人学习页</h1>
              <p style={{ color: 'var(--text-gray)', marginBottom: '24px' }}>
                个人中心已经就绪。登录后可以继续查看学习路径、课程入口与资料链接。
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/login" className="btn btn-primary">
                  去登录
                </Link>
                <Link href="/" className="btn" style={{ background: 'var(--bg-gray)', color: 'var(--text-dark)' }}>
                  返回首页
                </Link>
              </div>
            </div>
          </div>
        </section>
        <MobileNav activePath="/profile" items={profileMobileNavItems} />
      </div>
    )
  }

  const user = session.user

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/profile" />

      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', padding: '40px 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 700,
              }}
            >
              {user.name?.charAt(0) || 'H'}
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{user.name || 'HIGO 用户'}</h1>
              <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>{user.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#EBF8FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <BookOpen size={24} style={{ color: '#3182CE' }} />
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>0</div>
              <div style={{ fontSize: '0.75rem', color: '#718096' }}>已学习课程</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#F0FFF4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <Trophy size={24} style={{ color: '#38A169' }} />
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>0%</div>
              <div style={{ fontSize: '0.75rem', color: '#718096' }}>整体进度</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#FFFBEB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <Clock size={24} style={{ color: '#D69E2E' }} />
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>0h</div>
              <div style={{ fontSize: '0.75rem', color: '#718096' }}>学习时长</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '32px 0' }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>快捷入口</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ background: 'var(--bg-gray)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <item.icon size={24} style={{ color: item.color, marginBottom: '12px' }} />
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{item.label}</div>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '16px', marginTop: '16px', background: 'white', border: 'none', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer' }}
          >
            <LogOut size={20} style={{ color: '#E53E3E', marginRight: '8px' }} />
            <span style={{ color: '#E53E3E', fontWeight: 500 }}>退出登录</span>
          </button>
        </div>
      </section>

      <MobileNav activePath="/profile" items={profileMobileNavItems} />
    </div>
  )
}
