'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, PlayCircle, FileText, Headphones } from 'lucide-react'

const meetingTypes = [
  {
    id: 'opportunity',
    icon: '🎯',
    title: '招商说明会',
    desc: '让新人和意向人看懂HIGO事业',
    color: '#38A169',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    items: [
      { title: '招商说明会基础版', duration: '45分钟', type: '视频+逐字稿' },
      { title: '招商说明会完整版', duration: '90分钟', type: '视频+PPT' },
      { title: '主持人开场白', duration: '5分钟', type: '话术' },
      { title: '讲师主讲内容', duration: '30分钟', type: '逐字稿' },
      { title: '案例分享环节', duration: '10分钟', type: '模板' },
    ]
  },
  {
    id: 'product',
    icon: '🧬',
    title: '产品分享会',
    desc: '建立产品信任，让新人愿意自用',
    color: '#805AD5',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    items: [
      { title: 'AKG产品专场', duration: '30分钟', type: '视频+话术' },
      { title: 'CELL产品专场', duration: '30分钟', type: '视频+话术' },
      { title: '荷尔蒙产品专场', duration: '30分钟', type: '视频+话术' },
      { title: '大脑产品专场', duration: '30分钟', type: '视频+话术' },
    ]
  },
  {
    id: 'newcomer',
    icon: '🌱',
    title: '新人启动会',
    desc: '让新人知道从哪里开始',
    color: '#3182CE',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
    items: [
      { title: '欢迎新人流程', duration: '15分钟', type: '流程' },
      { title: '新人最容易犯的错误', duration: '10分钟', type: '视频' },
      { title: '为什么先吃产品', duration: '5分钟', type: '话术' },
      { title: '为什么先听会', duration: '5分钟', type: '话术' },
      { title: '7天学习路径', duration: '10分钟', type: '指引' },
    ]
  },
  {
    id: 'morning',
    icon: '☀️',
    title: '早会精选',
    desc: '统一思想、建立氛围、持续学习',
    color: '#D69E2E',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
    items: [
      { title: '早会日期', speaker: '分享人', theme: '主题' },
      { title: '早会日期', speaker: '分享人', theme: '主题' },
      { title: '早会日期', speaker: '分享人', theme: '主题' },
    ]
  },
  {
    id: 'leader',
    icon: '👑',
    title: '领导人会议',
    desc: '培养团队负责人',
    color: '#E53E3E',
    gradient: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)',
    items: [
      { title: '领导人会议主题', duration: '60分钟', type: '会议' },
      { title: '核心问题讨论', duration: '30分钟', type: '议程' },
      { title: '团队管理重点', duration: '20分钟', type: '内容' },
    ]
  },
  {
    id: 'ppt',
    icon: '📊',
    title: '讲课PPT中心',
    desc: '让经营者学习"怎么讲"',
    color: '#1A365D',
    gradient: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)',
    items: [
      { title: 'PPT名称', slides: '12页', type: '下载' },
      { title: 'PPT名称', slides: '18页', type: '下载' },
      { title: 'PPT名称', slides: '24页', type: '下载' },
    ]
  },
]

export default function MeetingsPage() {
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

      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🎤</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>会议中心</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                会议是复制发动机。标准化会议学习与复制，帮助你建立高效的团队运作系统。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Meeting Center</span>
            <h2 className="section-title">六大会议类型</h2>
            <p className="section-desc">系统化会议学习与复制</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {meetingTypes.map((type) => (
              <div key={type.id} className="meeting-type-card">
                <div style={{ background: type.gradient, padding: '20px 24px', borderRadius: '16px 16px 0 0', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '2rem' }}>{type.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>{type.title}</h3>
                      <p style={{ fontSize: '0.8125rem', opacity: 0.9, margin: 0 }}>{type.desc}</p>
                    </div>
                  </div>
                </div>
                <div style={{ background: 'white', borderRadius: '0 0 16px 16px', padding: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {type.items.slice(0, 3).map((item, index) => (
                      <Link key={index} href={`/meetings/${type.id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: '8px', color: 'var(--text-dark)', fontSize: '0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {type.id === 'ppt' ? <FileText size={16} color={type.color} /> : <PlayCircle size={16} color={type.color} />}
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight size={16} color="var(--text-light)" />
                      </Link>
                    ))}
                  </div>
                  <Link href={`/meetings/${type.id}`} style={{ display: 'block', textAlign: 'center', marginTop: '16px', padding: '10px', background: type.color + '15', color: type.color, borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600 }}>
                    查看全部 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Standard</span>
            <h2 className="section-title">会议详情页结构</h2>
            <p className="section-desc">每个会议页面的标准结构</p>
          </div>

          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {[
                { num: '1', title: '会议标题', desc: '清晰的会议名称' },
                { num: '2', title: '会议类型', desc: '属于哪种会议' },
                { num: '3', title: '适合对象', desc: '谁应该参加' },
                { num: '4', title: '学习目标', desc: '能学到什么' },
                { num: '5', title: '视频/音频', desc: '会议录像/录音' },
                { num: '6', title: 'PPT下载', desc: '可下载课件' },
                { num: '7', title: '逐字稿', desc: '完整文字版' },
                { num: '8', title: '精华摘要', desc: '核心要点' },
                { num: '9', title: '金句', desc: '可复制话术' },
                { num: '10', title: '合规提醒', desc: '注意事项' },
                { num: '11', title: '推荐下一步', desc: '相关学习' },
              ].map((item) => (
                <div key={item.num} style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                  <div style={{ width: '28px', height: '28px', background: 'var(--primary-dark)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', margin: '0 auto 8px' }}>
                    {item.num}
                  </div>
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.6875rem' }}>{item.desc}</p>
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
        <Link href="/meetings" className="mobile-nav-item active"><i className="fas fa-video"></i><span>会议</span></Link>
      </div>
    </div>
  )
}