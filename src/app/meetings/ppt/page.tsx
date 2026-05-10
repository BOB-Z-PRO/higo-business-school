'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, FileText, Download, AlertTriangle } from 'lucide-react'

const meeting = {
  id: 'ppt',
  type: '讲课PPT中心',
  title: '讲课PPT中心',
  subtitle: '让经营者学习"怎么讲"',
  icon: '📊',
  color: '#1A365D',
  gradient: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)',
  audience: '需要学习讲课的经营者',
  goal: '提供标准PPT和讲稿，帮助讲师成长',
}

const pptList = [
  { name: '招商说明会PPT', slides: 32, category: '招商', desc: '完整的90分钟招商说明会课件' },
  { name: '公司介绍PPT', slides: 24, category: '公司', desc: 'HIGO公司介绍标准课件' },
  { name: '产品介绍PPT', slides: 40, category: '产品', desc: '四大产品详细介绍课件' },
  { name: '事业机会PPT', slides: 28, category: '事业', desc: 'HIGO商业模式与机会' },
  { name: '新人启动PPT', slides: 18, category: '新人', desc: '新人入门引导课件' },
  { name: '团队建设PPT', slides: 22, category: '团队', desc: '如何建设高效团队' },
]

export default function PPTMeetingPage() {
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
                <span>👥 {meeting.audience}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">PPT</span>
            <h2 className="section-title">标准课件库</h2>
            <p className="section-desc">每个PPT都配套逐页讲稿</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {pptList.map((ppt, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ background: meeting.gradient, padding: '20px', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '50px' }}>{ppt.category}</span>
                    <span style={{ fontSize: '0.75rem' }}>{ppt.slides}页</span>
                  </div>
                  <div style={{ fontWeight: 600 }}>{ppt.name}</div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '16px' }}>{ppt.desc}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ flex: 1, background: 'var(--primary-dark)', color: 'white', padding: '8px 12px', borderRadius: '6px', border: 'none', fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <FileText size={14} /> 查看
                    </button>
                    <button style={{ flex: 1, background: 'var(--bg-gray)', color: 'var(--text-dark)', padding: '8px 12px', borderRadius: '6px', border: 'none', fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <Download size={14} /> 下载
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Guide</span>
            <h2 className="section-title">如何使用PPT</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { step: 1, title: '先听一遍', desc: '先听标准会议录像，了解整体节奏' },
                { step: 2, title: '再读讲稿', desc: '阅读配套逐字稿，理解每页重点' },
                { step: 3, title: '然后试讲', desc: '看着PPT自己讲一遍，录音回听' },
                { step: 4, title: '最后实战', desc: '在实际会议中练习，不断优化' },
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
              使用PPT讲解时，禁止添加个人夸大内容。必须使用公司统一版本，不得修改核心数据和结论。
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