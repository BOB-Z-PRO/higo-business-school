'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react'

const product = {
  id: 'gn-brain',
  name: 'GN 大脑',
  fullName: 'GN 大脑认知增强胶囊',
  tagline: '提升认知功能，保持大脑年轻',
  icon: '🧠',
  color: '#3182CE',
  gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
}

const targetUsers = [
  { icon: '💻', text: '脑力工作者' },
  { icon: '📚', text: '学习备考人群' },
  { icon: '👴', text: '认知衰退担忧人群' },
  { icon: '🎯', text: '专注力下降人群' },
  { icon: '💡', text: '记忆力下降人群' },
  { icon: '🧓', text: '老年人群' },
]

const scienceBackground = [
  { title: '神经可塑性', desc: '支持大脑神经可塑性，帮助建立新的神经连接。' },
  { title: '突触功能', desc: '支持神经突触功能，改善信息传递效率。' },
  { title: '认知保护', desc: '减少氧化应激对脑细胞的损伤，保护认知功能。' },
  { title: '专注与记忆', desc: '支持多巴胺等神经递质合成，改善专注力和记忆力。' },
]

const benefits = [
  { title: '提升专注', desc: '帮助维持专注力和注意力' },
  { title: '改善记忆', desc: '支持记忆力功能' },
  { title: '脑力支持', desc: '为大脑提供营养支持' },
  { title: '认知保护', desc: '延缓认知衰退速度' },
]

const allowedExpressions = [
  '帮助提升专注力',
  '支持记忆力功能',
  '为大脑提供营养支持',
  '改善脑力表现',
  '体验反馈：专注力改善、思维清晰',
  '帮助保持大脑年轻状态',
]

const forbiddenExpressions = [
  '治疗老年痴呆症',
  '宣称改善阿尔茨海默相关问题',
  '提升智商、变聪明',
  '几天就记忆力大增',
  '替代药物治疗脑部疾病',
  '解决所有认知问题',
]

const scripts = {
  oneMinute: 'GN大脑是HIGO的大脑认知增强产品。它的核心作用是提升认知功能，保持大脑年轻。大脑是人体的指挥中心，GN大脑通过为脑细胞提供营养支持，帮助维持更好的认知表现。',
  threeMinute: '现代人普遍用脑过度，很多人感觉脑子不够用，专注力下降，记忆力也不如以前。大脑细胞非常活跃，需要持续的营养支持。\n\nGN大脑通过提供特定的营养成分，帮助：1）维持神经突触功能，让信息传递更高效；2）支持神经可塑性，帮助大脑建立新的连接；3）保护脑细胞免受氧化损伤。\n\n就像给大脑充电一样，GN大脑帮助你的大脑保持更好的工作状态。',
}

const complianceNote = 'GN大脑为基因抗衰食品，不是药物，不能宣传治疗任何脑部疾病。认知改善效果因人而异，老年相关认知问题应遵医嘱。'

export default function GnBrainPage() {
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
