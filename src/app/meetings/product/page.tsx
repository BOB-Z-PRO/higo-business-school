'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Clock, Users, CheckCircle, AlertTriangle } from 'lucide-react'

const meeting = {
  id: 'product',
  type: '产品分享会',
  title: '产品专场会',
  subtitle: '建立产品信任，让新人愿意自用',
  icon: '🧬',
  color: '#805AD5',
  gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
  duration: '30分钟',
  audience: '对产品有兴趣但还不够了解的人',
  goal: '让听众理解产品科学原理，愿意尝试自用',
}

const products = [
  { name: 'GnAKG', topic: '基因激活胶囊', duration: '30分钟', desc: 'α-酮戊二酸与细胞能量代谢' },
  { name: 'GnCELL', topic: '细胞修复胶囊', duration: '30分钟', desc: '细胞自噬与抗炎机制' },
  { name: 'GN荷尔蒙', topic: '荷尔蒙平衡胶囊', duration: '30分钟', desc: '八大腺体与内分泌调节' },
  { name: 'GN大脑', topic: '大脑认知增强胶囊', duration: '30分钟', desc: '神经可塑性与认知保护' },
]

export default function ProductMeetingPage() {
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
            <span className="section-badge">Products</span>
            <h2 className="section-title">四大产品专场</h2>
            <p className="section-desc">每个产品30分钟专场讲解</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            {products.map((product) => (
              <Link key={product.name} href={`/products/${product.name.toLowerCase().replace(' ', '')}`} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '56px', height: '56px', background: meeting.gradient, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white', flexShrink: 0 }}>
                  🧬
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-dark)' }}>{product.name}</span>
                    <span style={{ background: meeting.color + '20', color: meeting.color, padding: '2px 8px', borderRadius: '50px', fontSize: '0.75rem' }}>{product.duration}</span>
                  </div>
                  <div style={{ color: meeting.color, fontSize: '0.875rem', marginBottom: '4px' }}>{product.topic}</div>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', margin: 0 }}>{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Structure</span>
            <h2 className="section-title">产品专场结构</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { step: 1, title: '产品定位', desc: '一句话说明产品解决什么问题' },
                { step: 2, title: '科学原理', desc: '底层机制、关键通路' },
                { step: 3, title: '配方逻辑', desc: '核心成分及作用' },
                { step: 4, title: '体验反馈', desc: '真实案例（注明因人而异）' },
                { step: 5, title: '使用建议', desc: '怎么吃、注意事项' },
                { step: 6, title: '合规提醒', desc: '禁止夸大、禁止治病承诺' },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', background: meeting.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{item.title}</span>
                    <span style={{ color: 'var(--text-gray)', marginLeft: '8px' }}>— {item.desc}</span>
                  </div>
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
              产品分享会禁止说治疗疾病、承诺明确效果。案例必须真实并注明"因人而异"。使用公司统一话术，不自由发挥。
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
