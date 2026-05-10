'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, TrendingUp, Globe, Users, DollarSign, ChevronRight, Activity, Clock } from 'lucide-react'

const marketData = [
  { icon: '📈', title: '全球抗衰老市场规模', value: '2025年', desc: '市场规模突破4000亿美元' },
  { icon: '🌱', title: '年复合增长率', value: '15.2%', desc: '预计到2030年达万亿规模' },
  { icon: '👥', title: '目标人群', value: '30亿+', desc: '全球抗衰老需求用户' },
  { icon: '💰', title: '人均消费', value: '$2,800', desc: '北美抗衰老年均支出' },
]

const trends = [
  { title: '基因抗衰革命', desc: 'NAD+提升、端粒延长、细胞自噬成为抗衰老核心技术路线', color: '#805AD5' },
  { title: '精准健康管理', desc: '从"治病"到"防病"，个性化健康管理成为主流趋势', color: '#38A169' },
  { title: '跨境电商爆发', desc: '全球优质抗衰老产品通过跨境电商触达更多消费者', color: '#3182CE' },
  { title: '长寿经济崛起', desc: '抗衰老成为继互联网之后的下一个万亿级产业风口', color: '#D69E2E' },
]

const reasons = [
  { num: '01', title: '时势造英雄', desc: '只有时代的英雄，没有英雄的时代。看清趋势，顺势而为。' },
  { num: '02', title: '选择大于努力', desc: '选择一个有发展潜力的行业，比盲目努力更重要。' },
  { num: '03', title: '复利的力量', desc: '健康与事业的双重复利，让时间成为最大的杠杆。' },
  { num: '04', title: '科技平权', desc: '曾经只有顶层能享受的抗衰老科技，如今人人可及。' },
]

const whyHigo = [
  { title: '科研实力', desc: '与IAAMC深度合作，拥有5组国际顶尖科学家团队', icon: '🔬' },
  { title: '制造实力', desc: '美国双工厂（cGMP/FDA/NSF），制药级标准', icon: '🏭' },
  { title: '临床验证', desc: '通过RCT试验，生物年龄逆转8.5-34岁有据可查', icon: '📊' },
  { title: '全球生态', desc: '科研+生产+医疗+销售+服务五维一体', icon: '🌐' },
]

export default function CompanyFuturePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
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
      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ marginTop: '20px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>未来前景</h1>
            <p style={{ fontSize: '1rem', opacity: 0.9 }}>大健康趋势 · 跨境电商 · 基因抗衰市场</p>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Market</span>
            <h2 className="section-title">抗衰老市场蓝海</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {marketData.map((item) => (
              <div key={item.title} className="mobile-card">
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#805AD5', marginBottom: '4px' }}>{item.value}</div>
                      <div style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{item.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Trends */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Trends</span>
            <h2 className="section-title">四大产业趋势</h2>
          </div>
          <div className="mobile-card-stack" style={{ marginTop: '24px' }}>
            {trends.map((trend, index) => (
              <div key={trend.title} className="mobile-card">
                <div style={{ height: '6px', background: trend.color }} />
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: trend.color + '20', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: trend.color, fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{trend.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.5 }}>{trend.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Timing</span>
            <h2 className="section-title">为什么是现在</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {reasons.map((reason) => (
              <div key={reason.num} className="mobile-card">
                <div style={{ height: '6px', background: '#D69E2E' }} />
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                      {reason.num}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{reason.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{reason.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HIGO */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">HIGO</span>
            <h2 className="section-title">为什么选择HIGO</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {whyHigo.map((item) => (
              <div key={item.title} className="mobile-card">
                <div className="mobile-card-header" style={{ background: '#1A365D' }}>
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <div className="mobile-card-body">
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="mobile-card" style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', textAlign: 'center' }}>
            <div className="mobile-card-body" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>站在风口，顺势而为</h3>
              <p style={{ fontSize: '0.9375rem', opacity: 0.9, marginBottom: '20px', lineHeight: 1.6 }}>
                在人类征服衰老的历史进程中，HIGO不是跟随者，而是定义者。
              </p>
              <Link href="/business" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#805AD5', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                了解HIGO事业机会 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>
    </div>
  )
}