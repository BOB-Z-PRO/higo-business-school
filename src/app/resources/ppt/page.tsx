'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, FileText, Video, Download } from 'lucide-react'

const category = {
  id: 'ppt',
  name: '讲课PPT',
  icon: '📊',
  color: '#805AD5',
  desc: '招商PPT、产品PPT、团队建设PPT、心态培训PPT等标准课件',
}

const materials = [
  { title: '招商说明会完整版PPT', category: '招商', slides: 32, format: 'PPTX', date: '2026-04-15' },
  { title: '招商说明会基础版PPT', category: '招商', slides: 18, format: 'PPTX', date: '2026-04-10' },
  { title: '公司介绍标准版PPT', category: '公司', slides: 24, format: 'PPTX', date: '2026-04-01' },
  { title: 'GnAKG产品介绍PPT', category: '产品', slides: 20, format: 'PPTX', date: '2026-04-12' },
  { title: 'GnCELL产品介绍PPT', category: '产品', slides: 20, format: 'PPTX', date: '2026-04-12' },
  { title: 'GN荷尔蒙产品介绍PPT', category: '产品', slides: 18, format: 'PPTX', date: '2026-04-12' },
  { title: 'GN大脑产品介绍PPT', category: '产品', slides: 18, format: 'PPTX', date: '2026-04-12' },
  { title: 'HIGO事业机会介绍PPT', category: '事业', slides: 28, format: 'PPTX', date: '2026-04-05' },
  { title: '新人启动培训PPT', category: '新人', slides: 16, format: 'PPTX', date: '2026-03-28' },
  { title: '团队建设培训PPT', category: '团队', slides: 22, format: 'PPTX', date: '2026-04-08' },
]

export default function ResourcesPPTSubPage() {
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
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link active">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回素材中心
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{category.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{category.name}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>{category.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
            {materials.map((item, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', background: category.color + '20', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FileText size={24} color={category.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ display: 'flex', gap: '12px', color: 'var(--text-gray)', fontSize: '0.8125rem' }}>
                    <span>{item.category}</span>
                    <span>·</span>
                    <span>{item.slides}页</span>
                    <span>·</span>
                    <span>{item.format}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: 'var(--primary-dark)', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FileText size={14} /> 预览
                  </button>
                  <button style={{ background: 'var(--bg-gray)', color: 'var(--text-dark)', padding: '8px 16px', borderRadius: '6px', border: 'none', fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Download size={14} /> 下载
                  </button>
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