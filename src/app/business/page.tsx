'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, TrendingUp, Award, ChevronRight, Target, BookOpen, Users, MessageCircle } from 'lucide-react'

const homeSpaces = [
  {
    id: 'survival',
    icon: '🏠',
    name: '生存空间',
    subtitle: '新人启动期',
    color: '#38A169',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    level: '新人 → 一星~三星SVIP',
    description: '从"不了解、不相信、不敢开口"到"愿意吃产品、愿意学习、愿意分享"',
    goals: ['认识公司', '认识产品', '看懂模式', '愿意自用', '敢于分享', '学会借力会议'],
    features: [
      { icon: '📚', title: '该学的', desc: 'HIGO公司基础认知、四大产品基础认知、事业模式基础认知' },
      { icon: '🎯', title: '该会的', desc: '会讲清楚HIGO是什么、会表达为什么愿意吃产品' },
      { icon: '✅', title: '该做的', desc: '完成新人必学7节课、每天听一节课程' },
    ],
    courses: 7,
    duration: '约15天'
  },
  {
    id: 'living',
    icon: '🌟',
    name: '生活空间',
    subtitle: '稳定经营期',
    color: '#805AD5',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    level: '一星~三星钻石',
    description: '从"自己会分享"到"能够稳定经营、带动新人、形成小团队"',
    goals: ['建立稳定分享能力', '建立基础成交能力', '建立带新人能力', '建立小团队学习氛围', '理解会议系统'],
    features: [
      { icon: '📚', title: '该学的', desc: '产品讲解逻辑、事业说明逻辑、成交沟通逻辑' },
      { icon: '🎯', title: '该会的', desc: '会讲3分钟产品、会讲10分钟机会' },
      { icon: '✅', title: '该做的', desc: '每周至少学习2节课程、每周带新人听一次课程' },
    ],
    courses: 7,
    duration: '约60天'
  },
  {
    id: 'life',
    icon: '👑',
    name: '生命空间',
    subtitle: '领导人成就期',
    color: '#D69E2E',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
    level: '一星~三星黑钻',
    description: '从"小团队经营"到"系统复制、领导人培养、组织文化建设"',
    goals: ['建立组织思维', '建立会议系统', '建立讲师系统', '建立新人复制系统', '建立合规文化', '建立长期事业格局'],
    features: [
      { icon: '📚', title: '该学的', desc: '领导人会议逻辑、组织架构设计、会议系统设计' },
      { icon: '🎯', title: '该会的', desc: '会设计团队学习路径、会开领导人会议' },
      { icon: '✅', title: '该做的', desc: '建立团队课程学习地图、每月组织主题招商说明会' },
    ],
    courses: 7,
    duration: '约90天'
  },
]

const objections = [
  { icon: '🏢', title: '关于公司', count: 10, color: '#1A365D' },
  { icon: '🧬', title: '关于产品', count: 10, color: '#38A169' },
  { icon: '💼', title: '关于经营', count: 10, color: '#3182CE' },
  { icon: '🤝', title: '关于分享', count: 10, color: '#805AD5' },
  { icon: '⚠️', title: '关于合规', count: 10, color: '#E53E3E' },
]

export default function BusinessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">H</div>
            <div>
              <div className="logo-text">HIGO全球商学院</div>
              <div className="logo-sub">HIGO Global Business School</div>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/company" className="nav-link">公司篇</Link>
            <Link href="/products" className="nav-link">产品篇</Link>
            <Link href="/business" className="nav-link active">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>📈</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>经营篇</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                HIGO经营者成长地图。按三大家园分阶段，围绕心态、能力、该学的、该会的、该做的设计。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Flow */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Path</span>
            <h2 className="section-title">三大家园成长路径</h2>
            <p className="section-desc">从新人到领导人的完整成长路径</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ background: '#38A169', color: 'white', padding: '16px 24px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🌱</div>
              <div style={{ fontWeight: 600 }}>新人起步</div>
            </div>
            <div style={{ color: '#38A169', fontSize: '1.5rem' }}>→</div>
            <div style={{ background: '#38A169', color: 'white', padding: '16px 24px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🏠</div>
              <div style={{ fontWeight: 600 }}>生存空间</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>一星~三星SVIP</div>
            </div>
            <div style={{ color: '#805AD5', fontSize: '1.5rem' }}>→</div>
            <div style={{ background: '#805AD5', color: 'white', padding: '16px 24px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🌟</div>
              <div style={{ fontWeight: 600 }}>生活空间</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>一星~三星钻石</div>
            </div>
            <div style={{ color: '#D69E2E', fontSize: '1.5rem' }}>→</div>
            <div style={{ background: '#D69E2E', color: 'white', padding: '16px 24px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>👑</div>
              <div style={{ fontWeight: 600 }}>生命空间</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>一星~三星黑钻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Home Spaces */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '40px' }}>
            {homeSpaces.map((home) => (
              <div key={home.id} className="home-space-detail-card">
                <div style={{ background: home.gradient, padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '20px', color: 'white' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                    {home.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{home.name}</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{home.subtitle} · {home.level}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '8px', marginBottom: '4px' }}>
                      <div style={{ fontWeight: 700 }}>{home.courses}门课程</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{home.duration}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px 32px' }}>
                  <p style={{ color: 'var(--text-gray)', marginBottom: '20px', lineHeight: 1.7 }}>{home.description}</p>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 600 }}>阶段目标</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {home.goals.map((goal) => (
                        <span key={goal} style={{ background: home.color + '15', color: home.color, padding: '6px 14px', borderRadius: '50px', fontSize: '0.8125rem', fontWeight: 500 }}>
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    {home.features.map((feature) => (
                      <div key={feature.title} style={{ background: 'var(--bg-gray)', padding: '16px', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{ fontSize: '1.25rem' }}>{feature.icon}</span>
                          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{feature.title}</span>
                        </div>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Link href={`/business/${home.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: home.color, color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>
                      进入{home.name}学习 <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newcomer Objections */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Q&A</span>
            <h2 className="section-title">新人疑义解答</h2>
            <p className="section-desc">生存空间第一优先级模块，解决新人最关心的问题</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginTop: '40px' }}>
            {objections.map((obj) => (
              <Link key={obj.title} href={`/business/survival/objections`} className="objection-card" style={{ borderTop: `4px solid ${obj.color}` }}>
                <div style={{ width: '48px', height: '48px', background: obj.color + '15', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '12px' }}>
                  {obj.icon}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{obj.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>常见{obj.count}个问题</p>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/business/survival/objections" className="btn btn-primary">
              查看全部疑义解答 →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item">
          <i className="fas fa-home"></i>
          <span>首页</span>
        </Link>
        <Link href="/company" className="mobile-nav-item">
          <i className="fas fa-building"></i>
          <span>公司</span>
        </Link>
        <Link href="/products" className="mobile-nav-item">
          <i className="fas fa-capsules"></i>
          <span>产品</span>
        </Link>
        <Link href="/business" className="mobile-nav-item active">
          <i className="fas fa-chart-line"></i>
          <span>经营</span>
        </Link>
      </div>
    </div>
  )
}