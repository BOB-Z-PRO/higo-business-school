'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { BookOpen, Trophy, Clock, Star, LogOut, Settings, ChevronRight } from 'lucide-react'

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

        {/* Not Logged In */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)', padding: '40px 20px' }}>
          <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>
            <div style={{ background: 'white', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <i className="fas fa-user-circle" style={{ fontSize: '40px', color: 'white' }}></i>
              </div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>登录后查看我的学习</h1>
              <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '32px' }}>登录HIGO商学院，开启您的学习成长之旅</p>

              <Link href="/login" style={{ display: 'block', width: '100%', padding: '16px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', textAlign: 'center', boxShadow: '0 4px 15px rgba(56, 161, 105, 0.4)' }}>
                立即登录
              </Link>
              <Link href="/register" style={{ display: 'block', width: '100%', padding: '16px', background: 'white', color: '#38A169', border: '2px solid #38A169', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', textAlign: 'center', marginTop: '12px' }}>
                立即注册
              </Link>

              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E2E8F0' }}>
                <Link href="/" style={{ color: '#718096', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fas fa-arrow-left"></i> 返回首页
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const user = session.user

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">H</div>
            <div>
              <div className="logo-text">HIGO商学院</div>
              <div className="logo-sub">HIGO Business School</div>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/" className="nav-link">首页</Link>
            <Link href="/course" className="nav-link">全部课程</Link>
          </nav>
        </div>
      </header>

      {/* Profile Header */}
      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', padding: '40px 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700 }}>
              {user.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{user.name || '用户'}</h1>
              <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>{user.email}</p>
              {(user as any).higoUsername && (
                <p style={{ opacity: 0.8, fontSize: '0.875rem', marginTop: '4px' }}>
                  <i className="fas fa-star" style={{ marginRight: '4px' }}></i>
                  HIGO: {(user as any).higoUsername}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Learning Progress */}
      <section style={{ padding: '32px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>我的学习</h2>

          {/* Empty State */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '48px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ width: '64px', height: '64px', background: '#F7FAFC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <BookOpen size={32} style={{ color: '#A0AEC0' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A202C', marginBottom: '8px' }}>还没有开始学习</h3>
            <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '24px' }}>开始您的学习之旅，探索HIGO商学院的精彩课程</p>
            <Link href="/course" style={{ display: 'inline-block', padding: '12px 24px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white', borderRadius: '10px', fontWeight: 600, textDecoration: 'none' }}>
              浏览全部课程
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section style={{ padding: '0 0 32px 0' }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <Link href="/course" style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', textDecoration: 'none' }}>
              <BookOpen size={20} style={{ color: '#3182CE', marginRight: '12px' }} />
              <span style={{ flex: 1, color: '#1A202C', fontWeight: 500 }}>我的课程</span>
              <ChevronRight size={20} style={{ color: '#A0AEC0' }} />
            </Link>
            <Link href="/profile/progress" style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', textDecoration: 'none' }}>
              <Trophy size={20} style={{ color: '#38A169', marginRight: '12px' }} />
              <span style={{ flex: 1, color: '#1A202C', fontWeight: 500 }}>学习进度</span>
              <ChevronRight size={20} style={{ color: '#A0AEC0' }} />
            </Link>
            <Link href="/profile/settings" style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', textDecoration: 'none' }}>
              <Settings size={20} style={{ color: '#718096', marginRight: '12px' }} />
              <span style={{ flex: 1, color: '#1A202C', fontWeight: 500 }}>账号设置</span>
              <ChevronRight size={20} style={{ color: '#A0AEC0' }} />
            </Link>
          </div>

          {/* Logout */}
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '16px', marginTop: '16px', background: 'white', border: 'none', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer' }}
          >
            <LogOut size={20} style={{ color: '#E53E3E', marginRight: '8px' }} />
            <span style={{ color: '#E53E3E', fontWeight: 500 }}>退出登录</span>
          </button>
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item">
          <i className="fas fa-home"></i>
          <span>首页</span>
        </Link>
        <Link href="/#schools" className="mobile-nav-item">
          <i className="fas fa-university"></i>
          <span>四大学院</span>
        </Link>
        <Link href="/chapters" className="mobile-nav-item">
          <i className="fas fa-th-large"></i>
          <span>六大体系</span>
        </Link>
        <Link href="/profile" className="mobile-nav-item active">
          <i className="fas fa-user"></i>
          <span>我的</span>
        </Link>
      </div>
    </div>
  )
}