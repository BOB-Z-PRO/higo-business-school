'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, AlertTriangle } from 'lucide-react'

const meeting = {
  id: 'newcomer',
  type: '新人启动会',
  title: '新人启动会',
  subtitle: '让新人知道从哪里开始',
  icon: '🌱',
  color: '#3182CE',
  gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
  duration: '15-30分钟',
  audience: '刚加入的新人、刚了解HIGO的人',
  goal: '帮助新人了解学习路径，明确第一步怎么走',
}

const sections = [
  { title: '欢迎新人', content: '热情欢迎，建立安全感，消除陌生感' },
  { title: '最容易犯的错误', content: '急于成交、夸大宣传、不自用产品、不听会' },
  { title: '为什么先吃产品', content: '建立信心，体验是最真实的武器' },
  { title: '为什么先听会', content: '借力系统，不自己摸索' },
  { title: '为什么先复制标准', content: '用公司统一内容，不自由发挥' },
  { title: '7天学习路径', content: '生存空间课程 + 产品知识 + 招商说明会' },
]

export default function NewcomerMeetingPage() {
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
            {sections.map((section, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: meeting.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                  {index + 1}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px' }}>{section.title}</div>
                  <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{section.content}</div>
                </div>
              </div>
            ))}
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
              新人启动会是帮助新人入门，不是销售话术。禁止在新人启动会上承诺收益或夸大产品效果。
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