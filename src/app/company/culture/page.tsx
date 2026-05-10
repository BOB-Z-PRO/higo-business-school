'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Heart, Users, Globe, Sparkles, ChevronRight, Shield, Award, Target } from 'lucide-react'

const coreValues = [
  { icon: '💎', title: '真实', desc: '实事求是，不夸大、不虚假，对每一位伙伴和客户负责', color: '#1A365D' },
  { icon: '🤝', title: '诚信', desc: '言行一致，说到做到，建立长期信任的合作关系', color: '#38A169' },
  { icon: '✨', title: '简单', desc: '大道至简，让复杂的商业变简单，让每个人都能参与', color: '#3182CE' },
  { icon: '🌱', title: '成长', desc: '持续学习、共同成长，帮助更多人实现人生突破', color: '#805AD5' },
  { icon: '🏆', title: '共赢', desc: '共享成果、共担责任，打造命运共同体', color: '#D69E2E' },
  { icon: '💪', title: '坚持', desc: '每天进步一点点，长期主义，厚积薄发', color: '#E53E3E' },
]

const teamSpirit = [
  { title: '学习精神', desc: '每天学习、每周分享、每月复盘，持续提升专业能力' },
  { title: '服务精神', desc: '用心服务每一位客户，帮助他们解决健康和事业问题' },
  { title: '创新精神', desc: '拥抱变化、持续改进，用更好的方式创造价值' },
  { title: '担当精神', desc: '主动承担、勇于负责，成为团队的正能量' },
]

const behaviorStandards = [
  { icon: '✅', text: '说正能量的话，做正能量的事', positive: true },
  { icon: '✅', text: '积极分享公司正面信息，维护品牌形象', positive: true },
  { icon: '✅', text: '主动帮助新人成长，传承成功经验', positive: true },
  { icon: '✅', text: '遵守公司制度，规范经营行为', positive: true },
  { icon: '❌', text: '不说不利于公司的话，不传播负面', positive: false },
  { icon: '❌', text: '不夸大产品功效，如实分享见证', positive: false },
  { icon: '❌', text: '不返佣、不扰乱市场秩序', positive: false },
  { icon: '❌', text: '不跨区域经营，不恶性竞争', positive: false },
]

export default function CompanyCulturePage() {
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

      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '20px' }}>
            <div style={{ fontSize: '3.5rem' }}>🏛</div>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>企业文化</h1>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>核心价值观 · 团队精神 · 行为准则</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Values</span>
            <h2 className="section-title">核心价值观</h2>
            <p className="section-desc">HIGO人的行为准则</p>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {coreValues.map((value) => (
              <div key={value.title} className="mobile-card">
                <div className="mobile-card-header" style={{ background: value.color }}>
                  <span style={{ fontSize: '1.5rem' }}>{value.icon}</span>
                  <span>{value.title}</span>
                </div>
                <div className="mobile-card-body">
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, fontSize: '0.9375rem' }}>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Spirit */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Spirit</span>
            <h2 className="section-title">团队精神</h2>
            <p className="section-desc">HIGO人的精神风貌</p>
          </div>
          <div className="mobile-card-stack" style={{ marginTop: '24px' }}>
            {teamSpirit.map((spirit, index) => (
              <div key={spirit.title} className="mobile-card">
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>{spirit.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.5 }}>{spirit.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behavior Standards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Conduct</span>
            <h2 className="section-title">行为准则</h2>
            <p className="section-desc">规范经营，从我做起</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <div className="mobile-card" style={{ marginBottom: '16px', borderLeft: '4px solid #38A169' }}>
              <div className="mobile-card-header" style={{ background: '#38A169' }}>
                <Shield size={18} color="white" />
                <span>正确示范</span>
              </div>
              <div className="mobile-card-body">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                  {behaviorStandards.filter(b => b.positive).map((item) => (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                      <span style={{ color: '#38A169', fontSize: '1.25rem' }}>✅</span>
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mobile-card" style={{ borderLeft: '4px solid #E53E3E' }}>
              <div className="mobile-card-header" style={{ background: '#E53E3E' }}>
                <Shield size={18} color="white" />
                <span>禁忌事项</span>
              </div>
              <div className="mobile-card-body">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                  {behaviorStandards.filter(b => !b.positive).map((item) => (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: '#FFF5F5', borderRadius: '8px' }}>
                      <span style={{ color: '#E53E3E', fontSize: '1.25rem' }}>❌</span>
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
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