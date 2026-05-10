'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, FileText, Video, Download, CheckCircle } from 'lucide-react'

const resourceCategories = [
  { id: 'company', icon: '🏢', title: '公司资料', count: 12, color: '#1A365D', items: ['公司简介PPT', '公司资质文件', '高管介绍', '宣传视频'] },
  { id: 'product', icon: '🧬', title: '产品资料', count: 24, color: '#38A169', items: ['产品手册', '检测报告', '科学文献', '产品视频'] },
  { id: 'system', icon: '📋', title: '制度资料', count: 8, color: '#3182CE', items: ['奖金制度', '晋升路径', 'SVIP权益', '钻石权益'] },
  { id: 'ppt', icon: '📊', title: '讲课PPT', count: 36, color: '#805AD5', items: ['招商PPT', '产品PPT', '团队建设PPT', '心态培训PPT'] },
  { id: 'script', icon: '📝', title: '标准话术', count: 20, color: '#D69E2E', items: ['邀约话术', '成交话术', '带教话术', '异议处理'] },
  { id: 'poster', icon: '🖼️', title: '宣传海报', count: 48, color: '#E53E3E', items: ['产品海报', '活动海报', '励志海报', '节日海报'] },
  { id: 'case', icon: '💬', title: '案例分享', count: 30, color: '#ED8936', items: ['产品见证', '成长故事', '团队故事', '创业分享'] },
  { id: 'compliance', icon: '✅', title: '合规资料', count: 6, color: '#718096', items: ['合规手册', '禁止表达', '审核标准', '风险提示'] },
]

export default function ResourcesPage() {
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
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>📚</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>素材中心</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                资料库服务经营者学习，不是杂乱网盘。所有素材都经过合规审核。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Resources</span>
            <h2 className="section-title">素材分类</h2>
            <p className="section-desc">8大分类，184个素材，持续更新</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {resourceCategories.map((cat) => (
              <div key={cat.id} className="resource-card">
                <div style={{ background: cat.color, padding: '20px', borderRadius: '16px 16px 0 0', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '2rem' }}>{cat.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{cat.title}</h3>
                      <p style={{ fontSize: '0.75rem', opacity: 0.9, margin: 0 }}>{cat.count}个素材</p>
                    </div>
                  </div>
                </div>
                <div style={{ background: 'white', borderRadius: '0 0 16px 16px', padding: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cat.items.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-gray)' }}>
                        <FileText size={14} color={cat.color} />
                        <span>{item}</span>
                      </div>
                    ))}
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
            <span className="section-badge">Features</span>
            <h2 className="section-title">素材详情页字段</h2>
            <p className="section-desc">每个素材都包含完整的元数据</p>
          </div>

          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {['标题', '类型', '所属模块', '适合阶段', '适合对象', '文件格式', '内容摘要', '使用场景', '官方审核', '是否可下载', '上传时间', '更新时间'].map((field, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                  <CheckCircle size={16} color="#38A169" />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-dark)' }}>{field}</span>
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

      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link>
        <Link href="/company" className="mobile-nav-item"><i className="fas fa-building"></i><span>公司</span></Link>
        <Link href="/products" className="mobile-nav-item"><i className="fas fa-capsules"></i><span>产品</span></Link>
        <Link href="/resources" className="mobile-nav-item active"><i className="fas fa-folder"></i><span>素材</span></Link>
      </div>
    </div>
  )
}