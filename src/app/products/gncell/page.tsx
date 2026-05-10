'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle, XCircle, PlayCircle, FileText, Clock, AlertTriangle } from 'lucide-react'

const product = {
  id: 'gncell',
  name: 'GnCELL',
  fullName: 'GnCELL 细胞修复胶囊',
  tagline: '修复受损细胞，对抗慢性炎症',
  icon: '🔬',
  color: '#38A169',
  gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
}

const targetUsers = [
  { icon: '🔥', text: '慢性炎症人群' },
  { icon: '💊', text: '长期服药人群' },
  { icon: '🏥', text: '亚健康人群' },
  { icon: '🦴', text: '关节不适人群' },
  { icon: '🧬', text: '细胞损伤人群' },
  { icon: '💤', text: '睡眠障碍人群' },
]

const scienceBackground = [
  { title: '细胞自噬', desc: '促进细胞自噬作用，清除受损蛋白质和老化细胞器，维持细胞内环境清洁。' },
  { title: '抗炎机制', desc: '抑制NF-κB等炎症通路，减少慢性炎症反应，保护正常组织。' },
  { title: '端粒保护', desc: '减少氧化应激对端粒的损伤，延缓细胞衰老进程。' },
  { title: '线粒体再生', desc: '促进新的线粒体生成，恢复细胞能量代谢水平。' },
]

const benefits = [
  { title: '修复损伤', desc: '帮助修复受损细胞，恢复正常功能' },
  { title: '对抗炎症', desc: '减轻慢性炎症反应，改善不适症状' },
  { title: '清除废物', desc: '促进细胞自噬，清除老化蛋白质' },
  { title: '延缓衰老', desc: '保护端粒，延缓细胞衰老速度' },
]

const allowedExpressions = [
  '帮助修复受损细胞',
  '支持细胞自噬',
  '减轻慢性炎症反应',
  '改善亚健康状态',
  '体验反馈：关节不适缓解、睡眠改善',
  '帮助身体恢复更好状态',
]

const forbiddenExpressions = [
  '治愈癌症、治好肿瘤',
  '让乙肝转阴、根治糖尿病',
  '保证什么病都能治',
  '修复后永不再损坏',
  '几天就治好慢性病',
  '替代药物和治疗',
]

const scripts = {
  oneMinute: 'GnCELL是HIGO的细胞修复产品。它的核心作用是修复受损细胞，对抗慢性炎症。慢性炎症是很多疾病的根源，GnCELL通过促进细胞自噬，帮助身体清除受损细胞和有害蛋白质，让身体恢复更好状态。',
  threeMinute: '很多人有慢性炎症的问题，但不重视。慢性炎症就像身体里的闷烧，会慢慢损害我们的细胞和组织，最终导致各种健康问题。\n\nGnCELL的核心作用是两方面：一是修复受损细胞，二是对抗慢性炎症。它通过促进细胞自噬，让身体主动清除那些受损的蛋白质和老化的细胞器，同时抑制炎症反应，保护正常组织。\n\n所以GnCELL帮助你的身体做一次深度清洁，让细胞恢复到更健康的状态。',
}

const complianceNote = 'GnCELL为基因抗衰食品，不是药物，不能宣传任何疾病治疗效果。产品不替代药物治疗，慢性病患者应遵医嘱。案例分享必须注明"因人而异"。'

export default function GnCELLPage() {
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
            <span className="section-badge">H. 标准讲解</span>
            <h2 className="section-title">话术模板</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
            {[
              { duration: '1分钟', script: scripts.oneMinute },
              { duration: '3分钟', script: scripts.threeMinute },
            ].map((item) => (
              <div key={item.duration} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ background: product.color, color: 'white', padding: '4px 16px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600 }}>{item.duration}</span>
                  <Clock size={16} color="var(--text-light)" />
                </div>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{item.script}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
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