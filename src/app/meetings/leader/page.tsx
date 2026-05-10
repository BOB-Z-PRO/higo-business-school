'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, AlertTriangle } from 'lucide-react'

const meeting = {
  id: 'leader',
  type: '领导人会议',
  title: '领导人会议',
  subtitle: '培养团队负责人',
  icon: '👑',
  color: '#E53E3E',
  gradient: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)',
  duration: '60-90分钟',
  audience: '团队领导人、核心骨干',
  goal: '培养领导力，统一团队方向，建立复制系统',
}

const sections = [
  { title: '核心问题讨论', desc: '当前团队最重要的问题' },
  { title: '领导力培训', desc: '如何培养讲师、如何带团队' },
  { title: '会议系统复制', desc: '招商说明会、产品会怎么开' },
  { title: '合规文化建立', desc: '如何做好合规提醒' },
  { title: '经验分享', desc: '成功经验复制' },
  { title: '行动部署', desc: '下一步具体行动' },
]

export default function LeaderMeetingPage() {
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
            <Link href="/company" className="nav-link">公司篇</Link>
            <Link href="/products" className="nav-link">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link active">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: meeting.gradient, color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回会议中心
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{meeting.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{meeting.title}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '8px' }}>{meeting.subtitle}</p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.875rem' }}>
                <span>⏱️ {meeting.duration}</span>
                <span>👥 {meeting.audience}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Content</span>
            <h2 className="section-title">会议内容</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '40px' }}>
            {sections.map((section, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '32px', height: '32px', background: meeting.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: '12px' }}>
                  {index + 1}
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{section.title}</div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{section.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Focus</span>
            <h2 className="section-title">领导力核心主题</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {[
                '如何设计团队学习路径',
                '如何开好领导人会议',
                '如何培养产品讲师',
                '如何复制招商说明会',
                '如何做组织复盘',
                '如何处理违规表达',
                '如何塑造团队文化',
                '如何做合规提醒',
              ].map((topic, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: meeting.color, borderRadius: '50%' }} />
                  <span style={{ color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#FFF5F5' }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #E53E3E' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertTriangle size={20} color="#E53E3E" />
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>合规提醒</span>
            </div>
            <p style={{ color: 'var(--text-gray)', marginTop: '12px', lineHeight: 1.7, marginBottom: 0 }}>
              领导人会议中禁止承诺收益、禁止夸大团队业绩。分享成功案例必须真实并注明"因人而异"。
            </p>
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