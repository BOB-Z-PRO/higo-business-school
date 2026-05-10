'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Shield, Award, CheckCircle, FileText } from 'lucide-react'

const certifications = [
  {
    name: 'FDA',
    fullName: '美国食品药品监督管理局认证',
    shortName: 'Food and Drug Administration',
    icon: '🇺🇸',
    color: '#1A365D',
    desc: '美国市场的最高标准认证，代表产品品质和安全性的重要背书',
    details: [
      '美国市场的准入门槛',
      '严格的生产质量标准',
      '产品安全性认证',
      '消费者信任保障',
    ],
  },
  {
    name: 'cGMP',
    fullName: '动态药品生产管理规范',
    shortName: 'current Good Manufacturing Practice',
    icon: '🏭',
    color: '#38A169',
    desc: '国际认可的药品生产质量管理体系',
    details: [
      '生产过程全程可追溯',
      '严格的质量控制流程',
      '洁净的生产环境',
      '持续改进的生产体系',
    ],
  },
  {
    name: 'ISO9001',
    fullName: '国际质量管理体系认证',
    shortName: 'International Organization for Standardization',
    icon: '📋',
    color: '#3182CE',
    desc: '全球认可的质量管理国际标准',
    details: [
      '质量管理国际标准',
      '客户满意度导向',
      '持续改进机制',
      '全球认可资质',
    ],
  },
  {
    name: 'ISO22000',
    fullName: '食品安全管理体系认证',
    shortName: 'Food Safety Management System',
    icon: '🍎',
    color: '#D69E2E',
    desc: '食品安全管理的国际标准',
    details: [
      '食品安全预防体系',
      'HACCP基础认证',
      '全流程食品安全控制',
      '国际通用资质',
    ],
  },
  {
    name: 'HACCP',
    fullName: '危害分析与关键控制点认证',
    shortName: 'Hazard Analysis and Critical Control Points',
    icon: '🔬',
    color: '#805AD5',
    desc: '国际认可的食品安全预防体系',
    details: [
      '识别食品安全危害',
      '确定关键控制点',
      '建立监控体系',
      '预防食品安全问题',
    ],
  },
  {
    name: 'KDA',
    fullName: '韩国食品药品认证',
    shortName: 'Korea Food & Drug Administration',
    icon: '🇰🇷',
    color: '#E53E3E',
    desc: '韩国市场的准入认证',
    details: [
      '韩国市场准入',
      '符合韩国法规',
      '本地化品质支持',
      '东亚市场认可',
    ],
  },
  {
    name: 'NSF',
    fullName: '美国国家卫生基金会认证',
    shortName: 'National Sanitation Foundation',
    icon: '✅',
    color: '#ED8936',
    desc: '美国权威的产品质量和安全认证',
    details: [
      '第三方认证机构',
      '产品测试与认证',
      '公众健康保护',
      '专业可信度高',
    ],
  },
]

export default function CompanyCertificationsPage() {
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

      <section style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🏅</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>资质认证</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                FDA、cGMP、产品认证、检测报告全方位品质保障
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#E53E3E', marginBottom: '8px' }}>7大</div>
            <div style={{ fontSize: '1.125rem', color: 'var(--text-gray)' }}>国际权威认证</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
              {certifications.map((cert) => (
                <span key={cert.name} style={{ background: cert.color + '15', color: cert.color, padding: '4px 12px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600 }}>
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Detail */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Certifications</span>
            <h2 className="section-title">七大国际认证详情</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {certifications.map((cert) => (
              <div key={cert.name} style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.5rem' }}>{cert.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: cert.color }}>{cert.name}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>{cert.shortName}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '16px', lineHeight: 1.6 }}>{cert.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'var(--bg-gray)', padding: '16px', borderRadius: '8px' }}>
                  {cert.details.map((detail, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={14} color={cert.color} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.8125rem' }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Promise</span>
            <h2 className="section-title">品质承诺</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { icon: '🏭', title: '美国制造', desc: '所有产品均在美国FDA认证工厂生产' },
                { icon: '🔍', title: '严格检测', desc: '每一批次产品都经过严格质量检测' },
                { icon: '📦', title: '正品支持', desc: '全程可追溯，拒绝假冒伪劣' },
                { icon: '🌿', title: '天然成分', desc: '采用天然原料，对人体无害' },
              ].map((item) => (
                <div key={item.title} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{item.desc}</p>
                </div>
              ))}
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
