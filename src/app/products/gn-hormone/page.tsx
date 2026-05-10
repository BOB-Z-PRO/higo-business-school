'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react'

const product = {
  id: 'gn-hormone',
  name: 'GN 荷尔蒙',
  fullName: 'GN 荷尔蒙平衡胶囊',
  tagline: '平衡八大腺体，重拾年轻态',
  icon: '⚖️',
  color: '#ED8936',
  gradient: 'linear-gradient(135deg, #ED8936 0%, #F6AD55 100%)',
}

const targetUsers = [
  { icon: '😰', text: '更年期人群' },
  { icon: '😴', text: '睡眠障碍人群' },
  { icon: '⚡', text: '精力波动人群' },
  { icon: '📊', text: '情绪不稳定人群' },
  { icon: '🏃', text: '体能下降人群' },
  { icon: '👵', text: '抗衰需求人群' },
]

const scienceBackground = [
  { title: 'HPA轴调节', desc: '支持下丘脑-垂体-肾上腺轴平衡，帮助身体更好应对压力。' },
  { title: 'HPG轴支持', desc: '支持性腺功能，维持激素水平相对稳定。' },
  { title: '褪黑素调节', desc: '帮助调节睡眠周期，改善睡眠质量。' },
  { title: '压力应对', desc: '支持身体在压力下的内分泌平衡能力。' },
]

const benefits = [
  { title: '平衡腺体', desc: '支持八大腺体功能协调' },
  { title: '改善睡眠', desc: '帮助调节睡眠周期' },
  { title: '稳定情绪', desc: '支持情绪稳定' },
  { title: '提升精力', desc: '帮助维持能量水平' },
]

const allowedExpressions = [
  '帮助调节内分泌平衡',
  '支持身体应对压力',
  '改善睡眠质量',
  '帮助维持精力',
  '体验反馈：睡眠改善、情绪稳定',
  '帮助身体恢复更好状态',
]

const forbiddenExpressions = [
  '治疗更年期综合症',
  '宣称改善内分泌失衡',
  '承诺激素快速恢复',
  '几天就见效',
  '替代激素药物治疗',
  '解决所有健康问题',
]

const scripts = {
  oneMinute: 'GN荷尔蒙是HIGO的荷尔蒙平衡产品。它的核心作用是平衡八大腺体，帮助身体维持年轻状态。随着年龄增长，人体内分泌功能会逐渐失衡，GN荷尔蒙帮助身体调节这方面的功能。',
  threeMinute: '很多人过了某个年龄段，会明显感觉精力不如以前，睡眠质量下降，情绪也不稳定。这很大程度上是因为体内荷尔蒙水平在变化。\n\nGN荷尔蒙不是直接补充激素，而是通过天然成分支持身体自身的内分泌调节系统，让八大腺体能够更好地协调工作。\n\n这样身体能够更平稳地度过内分泌调整期，保持更好的精力和状态。',
}

const complianceNote = 'GN荷尔蒙为基因抗衰食品，不是激素类药物，不替代药物治疗。不得宣传治疗内分泌疾病。更年期等人群应在医生指导下使用。'

export default function GnHormonePage() {
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
            <Link href="/products" className="nav-link active">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: product.gradient, color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回产品篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{product.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{product.name}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '8px' }}>{product.tagline}</p>
              <p style={{ fontSize: '1rem', opacity: 0.85 }}>{product.fullName}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">A. 产品定位</span>
            <h2 className="section-title">一句话定位</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: product.color, lineHeight: 1.6 }}>{product.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">B. 适用人群</span>
            <h2 className="section-title">谁适合使用</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {targetUsers.map((user) => (
              <div key={user.text} style={{ background: 'white', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2rem' }}>{user.icon}</div>
                <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{user.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">C. 科学原理</span>
            <h2 className="section-title">科学背景</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            {scienceBackground.map((item) => (
              <div key={item.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: product.color, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">E. 产品优势</span>
            <h2 className="section-title">核心功效</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {benefits.map((benefit) => (
              <div key={benefit.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ width: '56px', height: '56px', background: product.gradient, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem', color: 'white' }}>✓</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">I. 合规话术</span>
            <h2 className="section-title">表达规范</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: '#F0FFF4', borderRadius: '16px', padding: '24px', border: '1px solid #68D391' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CheckCircle size={20} color="#38A169" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#38A169', margin: 0 }}>可以这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {allowedExpressions.map((expr) => (
                  <div key={expr} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{expr}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FFF5F5', borderRadius: '16px', padding: '24px', border: '1px solid #FC8181' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <XCircle size={20} color="#E53E3E" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#E53E3E', margin: 0 }}>禁止这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {forbiddenExpressions.map((expr) => (
                  <div key={expr} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <XCircle size={16} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{expr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#FFF5F5', padding: '24px 0' }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #E53E3E' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertTriangle size={20} color="#E53E3E" />
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>合规提醒</span>
            </div>
            <p style={{ color: 'var(--text-gray)', marginTop: '12px', lineHeight: 1.7, marginBottom: 0 }}>{complianceNote}</p>
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
