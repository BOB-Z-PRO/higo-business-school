'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, User, AlertTriangle } from 'lucide-react'

const meeting = {
  id: 'morning',
  type: '早会精选',
  title: '早会精选',
  subtitle: '统一思想、建立氛围、持续学习',
  icon: '☀️',
  color: '#D69E2E',
  gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
  duration: '每日10-15分钟',
  audience: '全体经营者',
  goal: '晨会统一思想，日常学习交流',
}

const recentMeetings = [
  { date: '2026-04-13', speaker: '江勋源', theme: '审时度势-分享经济的现状与未来', highlights: ['分享经济的趋势', '为什么现在是机会', '如何抓住趋势'] },
  { date: '2026-04-12', speaker: '高代华', theme: '梦想与目标', highlights: ['梦想是实环', '目标是瞄准', '行动是扣扳机'] },
  { date: '2026-04-11', speaker: '玫秀', theme: '如何成为卓越的经销商', highlights: ['卓越经销商特质', '心态管理', '行动力养成'] },
  { date: '2026-04-10', speaker: '如云', theme: '内卷的时代如何破局', highlights: ['什么是内卷', '破局思路', 'HIGO的机会'] },
  { date: '2026-04-09', speaker: '潘玮宸', theme: '团队建设', highlights: ['A团队 vs B团队', '招商三步法', '三个月行动计划'] },
  { date: '2026-04-08', speaker: '曹玥宏', theme: '新人正确起步', highlights: ['六字真言', '筛人思维', '150讲定律'] },
  { date: '2026-04-06', speaker: '江勋源', theme: '审时度势-经济内卷下势在何方', highlights: ['宏观经济分析', '大健康趋势', '为什么是HIGO'] },
  { date: '2026-04-05', speaker: '惠颜', theme: '落地行动圈', highlights: ['每日三讲量化', '复盘习惯', '行动执行系统'] },
  { date: '2026-04-03', speaker: '徐莉', theme: '我的形象价值百万', highlights: ['形象=身份认同', '能量状态', '专业可信度'] },
  { date: '2026-04-02', speaker: '张杰', theme: '服务定江山', highlights: ['五服', '四大基石', '调理反应阶段'] },
  { date: '2026-04-01', speaker: '顺米', theme: '学+习', highlights: ['学习不是学', '习才是改变', '成功九步'] },
]

export default function MorningMeetingPage() {
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
            <h2 className="section-title">早会内容结构</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { step: 1, title: '问好与氛围', desc: '互相问候，建立积极氛围' },
                { step: 2, title: '今日主题', desc: '统一学习一个知识点' },
                { step: 3, title: '分享与讨论', desc: '经验分享、问题讨论' },
                { step: 4, title: '金句与行动', desc: '一句金句，一个行动号召' },
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

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Recent</span>
            <h2 className="section-title">近期早会精选</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
            {recentMeetings.map((item) => (
              <div key={item.date} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '80px', textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: meeting.color }}>{item.date.split('-')[2]}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>{item.date.substring(5, 7)}月</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.theme}</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {item.highlights.map((h) => (
                      <span key={h} style={{ background: meeting.color + '20', color: meeting.color, padding: '2px 8px', borderRadius: '50px', fontSize: '0.75rem' }}>{h}</span>
                    ))}
                  </div>
                </div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>
                  👤 {item.speaker}
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
              早会内容禁止分享收益截图、禁止夸大案例、禁止做疾病治疗承诺。分享产品体验需注明"因人而异"。
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