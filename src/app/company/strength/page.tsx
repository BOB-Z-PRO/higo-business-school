'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, FlaskConical, Truck, Headphones, CreditCard, Users, Shield, Award } from 'lucide-react'

const strengthAreas = [
  {
    icon: '🔬',
    title: '科研实力',
    color: '#1A365D',
    desc: '汇聚全球顶级科学家，持续投入基因抗衰研发',
    details: [
      '专家团队来自哈佛、杜克、斯坦福等世界顶级学府',
      '专注基因抗衰核心技术研究',
      '拥有多项国际专利技术',
      '与美国顶尖实验室合作',
    ],
  },
  {
    icon: '🏭',
    title: '生产供应',
    color: '#38A169',
    desc: '美国原装制造，品质支持',
    details: [
      '美国FDA认证工厂生产',
      'cGMP动态药品生产管理规范',
      '严格的质量检测流程',
      '全程可追溯的供应链',
    ],
  },
  {
    icon: '🚚',
    title: '物流体系',
    color: '#3182CE',
    desc: '全球物流网络，快速配送',
    details: [
      '全球6国设立物流中心',
      '跨境电商成熟体系',
      '多式联运配送方案',
      '专业的恒温配送',
    ],
  },
  {
    icon: '💬',
    title: '客服体系',
    color: '#D69E2E',
    desc: '专业客服团队，7*24小时支持',
    details: [
      '多语言客服支持',
      '专业的健康咨询顾问',
      '高效的售后响应',
      '定期客户回访制度',
    ],
  },
  {
    icon: '💳',
    title: '支付体系',
    color: '#805AD5',
    desc: '安全便捷的全球支付系统',
    details: [
      '支持多种货币结算',
      '安全的支付网关',
      '便捷的跨境转账',
      '完善的财务对账系统',
    ],
  },
  {
    icon: '👥',
    title: '培训体系',
    color: '#E53E3E',
    desc: 'HIGO全球商学院，系统化培养',
    details: [
      '完整的新人培训课程',
      '专业的讲师团队',
      '标准化的逐字稿',
      '线上线下结合学习',
    ],
  },
]

export default function CompanyStrengthPage() {
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

      <section style={{ background: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🏆</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>企业实力</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                科研实力、供应链、物流、客服、支付体系全方位支撑
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Areas */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Strength</span>
            <h2 className="section-title">六大核心实力</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {strengthAreas.map((area) => (
              <div key={area.title} style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '56px', height: '56px', background: area.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>
                    {area.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>{area.title}</h3>
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.9375rem', marginBottom: '16px' }}>{area.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {area.details.map((detail, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', background: area.color, borderRadius: '50%' }} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.8125rem' }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Team</span>
            <h2 className="section-title">专家团队</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '20px' }}>科研团队</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['100+', '来自哈佛、杜克、斯坦福等顶级学府', '专注基因抗衰研究', '多项国际专利持有者'].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Shield size={16} color="#38A169" />
                      <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '20px' }}>运营团队</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['全球化管理团队', '深耕6国市场经验', '专业的电商运营能力', '完善的本地化服务'].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Users size={16} color="#3182CE" />
                      <span style={{ color: 'var(--text-dark)' }}>{item}</span>
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
