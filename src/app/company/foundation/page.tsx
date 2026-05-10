'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Heart, Users, Globe, ChevronRight, Calendar, MapPin } from 'lucide-react'

const foundationInfo = {
  name: 'HIGO爱心基金会',
  established: '2022年',
  mission: '让爱传递，让生命延续',
  description: 'HIGO爱心基金会成立于2022年，致力于帮助需要帮助的人，传递温暖与关爱。',
}

const publicWelfareProjects = [
  { icon: '🏥', title: '健康援助', desc: '为经济困难的患者提供医疗援助，支持基因抗衰健康管理', status: '进行中' },
  { icon: '📚', title: '教育扶持', desc: '资助贫困地区儿童教育，让更多孩子有书可读', status: '进行中' },
  { icon: '🌍', title: '环境改善', desc: '支持环保项目，守护地球家园', status: '计划中' },
  { icon: '👴', title: '养老关怀', desc: '关爱老年人群体，提供健康管理和生活支持', status: '进行中' },
]

const mediaReports = [
  { title: 'HIGO爱心基金会启动健康援助计划', date: '2024-06-15', source: '公益时报' },
  { title: '海购集团向贫困地区捐赠教育基金', date: '2024-03-20', source: '企业社会责任' },
  { title: 'HIGO志愿者团队走进养老院', date: '2023-12-05', source: '社会责任网' },
]

export default function CompanyFoundationPage() {
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

      <section style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '20px' }}>
            <div style={{ fontSize: '3.5rem' }}>❤️</div>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>{foundationInfo.name}</h1>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>{foundationInfo.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Info */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Foundation</span>
            <h2 className="section-title">基金会介绍</h2>
          </div>
          <div className="mobile-card" style={{ marginTop: '24px' }}>
            <div className="mobile-card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-gray)', borderRadius: '12px' }}>
                  <Calendar size={24} color="#E53E3E" style={{ marginBottom: '8px' }} />
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '4px' }}>成立时间</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{foundationInfo.established}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-gray)', borderRadius: '12px' }}>
                  <Globe size={24} color="#E53E3E" style={{ marginBottom: '8px' }} />
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '4px' }}>覆盖范围</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>6个国家</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, fontSize: '0.9375rem' }}>{foundationInfo.description}</p>
              <div style={{ marginTop: '20px', padding: '16px', background: 'linear-gradient(135deg, #FED7D7 0%, #FFF5F5 100%)', borderRadius: '12px', border: '1px solid #FED7D7' }}>
                <p style={{ color: '#E53E3E', fontSize: '0.9375rem', textAlign: 'center', fontWeight: 500 }}>
                  爱心传递，生命延续。每一份支持，都在创造改变。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Welfare Projects */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Projects</span>
            <h2 className="section-title">公益项目</h2>
            <p className="section-desc">用行动传递温暖</p>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {publicWelfareProjects.map((project) => (
              <div key={project.title} className="mobile-card">
                <div style={{ height: '6px', background: project.status === '进行中' ? '#38A169' : project.status === '计划中' ? '#3182CE' : '#718096' }} />
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--bg-gray)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                      {project.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{project.title}</h4>
                        <span style={{ fontSize: '0.6875rem', padding: '2px 8px', background: project.status === '进行中' ? '#C6F6D5' : project.status === '计划中' ? '#BEE3F8' : '#E2E8F0', color: project.status === '进行中' ? '#276749' : project.status === '计划中' ? '#2B6CB0' : '#718096', borderRadius: '50px' }}>{project.status}</span>
                      </div>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{project.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">News</span>
            <h2 className="section-title">媒体报道</h2>
          </div>
          <div className="mobile-card-stack" style={{ marginTop: '24px' }}>
            {mediaReports.map((item, index) => (
              <div key={index} className="mobile-card">
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#1A365D', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.875rem', fontWeight: 600, flexShrink: 0 }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                      <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                        <span>{item.date}</span>
                        <span>·</span>
                        <span>{item.source}</span>
                      </div>
                    </div>
                  </div>
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