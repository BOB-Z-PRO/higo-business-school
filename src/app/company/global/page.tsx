'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, MapPin, Building, Globe } from 'lucide-react'

const globalLocations = [
  { country: '美国', flag: '🇺🇸', role: '全球总部 + 研发中心', city: '美国',
    address: '美国设立全球总部，负责全球战略规划和新产品研发',
    features: ['全球战略制定', '核心技术研发', '产品质量监控', '专家团队建设'],
    status: '核心基地' },
  { country: '马来西亚', flag: '🇲🇾', role: '全球运营中心', city: '吉隆坡',
    address: '马来西亚作为全球运营中心，辐射东南亚和亚太市场',
    features: ['东南亚市场运营', '物流仓储中心', '客服中心', '培训支持'],
    status: '运营枢纽' },
  { country: '韩国', flag: '🇰🇷', role: '东亚市场', city: '首尔',
    address: '韩国首尔，负责韩国及周边东亚市场',
    features: ['韩国市场拓展', '东北亚业务', '本地化服务', '市场调研'],
    status: '重点市场' },
  { country: '越南', flag: '🇻🇳', role: '东南亚市场', city: '胡志明市',
    address: '越南胡志明市，负责越南及东南亚新兴市场',
    features: ['越南市场深耕', '东南亚新兴', '本地团队建设', '市场开拓'],
    status: '快速发展' },
  { country: '加拿大', flag: '🇨🇦', role: '北美市场', city: '多伦多',
    address: '加拿大多伦多，北美市场深耕',
    features: ['北美市场拓展', '加拿大运营', '美国市场协同', '高端用户服务'],
    status: '新开拓' },
  { country: '日本', flag: '🇯🇵', role: '东亚高端市场', city: '东京',
    address: '日本东京，东亚高端市场',
    features: ['日本市场开拓', '高端产品线', '精致化服务', '品牌建设'],
    status: '新开拓' },
]

export default function CompanyGlobalPage() {
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

      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🗺️</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>全球布局</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                美国、马来西亚、韩国、越南、加拿大、日本
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#805AD5' }}>6</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>国家</div>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#805AD5' }}>4</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>大洲</div>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#805AD5' }}>3</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>运营中心</div>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#805AD5' }}>6+</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>年深耕</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Detail */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Global</span>
            <h2 className="section-title">全球运营网络</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {globalLocations.map((location) => (
              <div key={location.country} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '3rem' }}>{location.flag}</span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>{location.country}</h3>
                    <span style={{ fontSize: '0.75rem', color: '#805AD5', background: '#805AD510', padding: '2px 8px', borderRadius: '50px' }}>{location.status}</span>
                  </div>
                </div>
                <p style={{ color: '#805AD5', fontWeight: 600, marginBottom: '8px' }}>{location.role}</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '16px' }}>{location.address}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {location.features.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', background: '#805AD5', borderRadius: '50%' }} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.8125rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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