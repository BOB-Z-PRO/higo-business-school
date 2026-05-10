'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'

const companySections = [
  {
    icon: '🏢',
    title: '公司介绍',
    desc: '了解HIGO全球生物科技集团的基本信息、发展和愿景',
    href: '/company/intro',
    gradient: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)'
  },
  {
    icon: '🌍',
    title: '海购国际战略',
    desc: '了解公司的初心、使命、定位和全球化布局',
    href: '/company/strategy',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)'
  },
  {
    icon: '📋',
    title: '海购五句话',
    desc: '一个生态系统、两个体制、三大家园、四大红利、全球市场',
    href: '/company/five-sentences',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)'
  },
  {
    icon: '🗺️',
    title: '全球布局',
    desc: '美国、马来西亚、韩国、越南、加拿大、日本',
    href: '/company/global',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)'
  },
  {
    icon: '🏆',
    title: '企业实力',
    desc: '科研实力、供应链、物流、客服、支付体系',
    href: '/company/strength',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)'
  },
  {
    icon: '✅',
    title: '资质认证',
    desc: 'FDA、cGMP、产品认证、检测报告',
    href: '/company/certifications',
    gradient: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)'
  },
  {
    icon: '🏛',
    title: '企业文化',
    desc: '核心价值观、团队精神、行为准则',
    href: '/company/culture',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)'
  },
  {
    icon: '❤️',
    title: '爱心基金会',
    desc: '公益项目、媒体报道、社会责任',
    href: '/company/foundation',
    gradient: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)'
  },
  {
    icon: '🔮',
    title: '未来前景',
    desc: '大健康趋势、跨境电商、基因抗衰市场分析',
    href: '/company/future',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)'
  },
]

const stats = [
  { num: '6年', label: '深耕基因抗衰' },
  { num: '4大洲', label: '全球布局' },
  { num: '7大', label: '国际认证' },
  { num: '100+', label: '专家团队' },
]

const countries = [
  { flag: '🇺🇸', name: '美国', role: '全球总部' },
  { flag: '🇲🇾', name: '马来西亚', role: '全球运营中心' },
  { flag: '🇰🇷', name: '韩国', role: '首尔分公司' },
  { flag: '🇻🇳', name: '越南', role: '胡志明分公司' },
]

export default function CompanyPage() {
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
            <Link href="/company" className="nav-link active">公司篇</Link>
            <Link href="/products" className="nav-link">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}
          >
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '20px' }}>
            <div style={{ fontSize: '3.5rem' }}>🏢</div>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>公司篇</h1>
              <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '500px', lineHeight: 1.6 }}>
                了解HIGO是谁，建立信任基础
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Mobile Dual Column */}
      <section style={{ background: 'white', padding: '20px 0', marginTop: '-24px' }}>
        <div className="container">
          <div className="mobile-card-grid-2" style={{ gap: '10px' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="mobile-card-item" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1A365D' }}>{stat.num}</div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.75rem', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Sections - Mobile Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Company</span>
            <h2 className="section-title">公司介绍</h2>
            <p className="section-desc">全面了解HIGO全球生物科技集团</p>
          </div>

          <div className="mobile-card-grid-2" style={{ marginTop: '24px', gap: '12px' }}>
            {companySections.map((section) => (
              <Link key={section.href} href={section.href} className="mobile-card mobile-card-link" style={{ textDecoration: 'none' }}>
                <div style={{ height: '6px', background: section.gradient }} />
                <div className="mobile-card-body" style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '48px', height: '48px', background: section.gradient, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                      {section.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{section.title}</h3>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5, marginBottom: '12px' }}>{section.desc}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1A365D', fontSize: '0.75rem', fontWeight: 600 }}>
                        了解详情 <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">About HIGO</span>
            <h2 className="section-title">关于HIGO</h2>
          </div>
          <div className="mobile-card" style={{ marginTop: '24px' }}>
            <div className="mobile-card-body">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>HIGO全球生物科技集团</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.9375rem' }}>
                HIGO GLOBAL BIOTECH GROUP（海购全球生物科技集团）是一家专注于基因抗衰科技的跨国企业，致力于用基因科技创造生命奇迹。
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.9375rem' }}>
                公司自2020年成立以来，在美国、马来西亚、韩国、越南、加拿大、日本等国家设有运营中心或分支机构，业务遍及全球4大洲。
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                HIGO整合了全球顶级科研资源，拥有一支由哈佛、杜克、斯坦福等世界顶级学者组成的专家团队，专注于基因抗衰领域的研究与产品开发。
              </p>
            </div>
          </div>

          {/* Global Presence - Mobile Cards */}
          <div className="mobile-card-grid-2" style={{ marginTop: '16px' }}>
            {countries.map((country) => (
              <div key={country.name} className="mobile-card" style={{ textAlign: 'center' }}>
                <div className="mobile-card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{country.flag}</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px' }}>{country.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#1A365D', fontWeight: 500 }}>{country.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link href="/company/intro" className="btn btn-primary">查看完整介绍 →</Link>
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
        <Link href="/company" className="mobile-nav-item active">
          <i className="fas fa-building"></i>
          <span>公司</span>
        </Link>
        <Link href="/products" className="mobile-nav-item">
          <i className="fas fa-capsules"></i>
          <span>产品</span>
        </Link>
        <Link href="/business" className="mobile-nav-item">
          <i className="fas fa-chart-line"></i>
          <span>经营</span>
        </Link>
      </div>
    </div>
  )
}