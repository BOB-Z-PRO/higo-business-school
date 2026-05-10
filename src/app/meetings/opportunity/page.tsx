'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, PlayCircle, FileText, Download, Clock, Users, CheckCircle, AlertTriangle, ChevronRight } from 'lucide-react'

const meeting = {
  id: 'opportunity',
  type: '招商说明会',
  title: '招商说明会完整版',
  subtitle: '让新人和意向人看懂HIGO事业',
  icon: '🎯',
  color: '#38A169',
  gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
  duration: '90分钟',
  audience: '新人、意向客户、刚开始了解HIGO的人',
  goal: '让听众理解HIGO是什么、建立信任、看懂事业机会',
}

const structure = [
  { step: 1, title: '开场与主持人开场白', duration: '5分钟', content: '欢迎词、会议流程介绍、氛围建立' },
  { step: 2, title: '公司介绍', duration: '15分钟', content: 'HIGO是谁、6年历史、全球布局、实力背书' },
  { step: 3, title: '产品介绍', duration: '15分钟', content: '四大产品线、基因抗衰科技、科学背书' },
  { step: 4, title: '事业机会', duration: '20分钟', content: '商业模式、四大红利、奖金制度、发展前景' },
  { step: 5, title: '案例分享', duration: '15分钟', content: '真实案例（注明因人而异）、产品体验、事业收获' },
  { step: 6, title: '行动引导', duration: '10分钟', content: '下一步建议、怎么开始、常见问题解答' },
  { step: 7, title: '合规提醒', duration: '5分钟', content: '合规宣传规范、禁止承诺收益、禁止夸大效果' },
  { step: 8, title: '答疑环节', duration: '5分钟', content: '现场问题收集与解答' },
]

const scripts = {
  opening: '各位朋友大家好，欢迎来到HIGO全球商学院。今天我们一起来了解一个在大健康领域的创业机会。在开始之前，我想问大家一个问题：你们觉得未来20年，什么行业会是最有发展潜力的？\n\n今天我会用大约90分钟的时间，跟大家分享一下HIGO这个平台，看看它是否值得你花时间来了解。',
  company: 'HIGO Global Biotech Group，海购全球生物科技集团，2020年创立于美国，6年专注基因抗衰科技。集团在美国、马来西亚、韩国、越南、加拿大、日本等地设有运营中心，拥有FDA、cGMP等七大国际认证。\n\n我们的使命是用基因科技创造生命奇迹，让每一个普通人都能享受到尖端生物科技带来的福祉。',
  product: 'HIGO的四大产品围绕基因抗衰这一核心概念设计：\n\n1. GnAKG：基因激活胶囊，补充α-酮戊二酸，提升细胞能量\n2. GnCELL：细胞修复胶囊，修复受损细胞，对抗慢性炎症\n3. GN荷尔蒙：平衡八大腺体，改善睡眠和精力\n4. GN大脑：提升认知功能，保护脑健康\n\n所有产品都获得FDA等国际认证，美国原装制造。',
  opportunity: 'HIGO的商业模式很简单：产品+分享+团队。\n\n四大红利：\n1. 产品红利 - 高品质、高复购、高毛利\n2. 分享红利 - 分享就能赚钱，无需囤货\n3. 团队红利 - 带团队赚取管理奖金\n4. 全球红利 - 业务遍及6个国家\n\n没有门槛费，没有复杂条件，只需自用+分享。',
}

const goldenSentences = [
  'HIGO不是让你一夜暴富，而是给普通人一个公平创业的机会',
  '基因抗衰是未来20年最大的趋势，HIGO站在了这个趋势的最前沿',
  '产品自用是建立信心的最好方式',
  '被拒绝是筛选，不是否定',
  '用公司统一的内容和话术，而不是自己随意发挥',
]

const complianceNotes = [
  '禁止承诺任何收益，禁止暗示人人必赚',
  '禁止夸大产品效果，禁止说能治疗疾病',
  '案例必须真实，必须注明"因人而异"',
  '禁止用检测报告为产品效果做承诺',
  '使用公司统一话术，不自由发挥',
]

export default function OpportunityMeetingPage() {
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

      {/* Meeting Info */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <Clock size={24} color={meeting.color} style={{ marginBottom: '8px' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)' }}>{meeting.duration}</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>会议时长</div>
            </div>
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <Users size={24} color={meeting.color} style={{ marginBottom: '8px' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)' }}>新人/意向</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>适合对象</div>
            </div>
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <CheckCircle size={24} color={meeting.color} style={{ marginBottom: '8px' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)' }}>完整版</div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>版本类型</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Structure */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Structure</span>
            <h2 className="section-title">标准流程</h2>
            <p className="section-desc">90分钟完整版会议结构</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
            {structure.map((item) => (
              <div key={item.step} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '40px', height: '40px', background: meeting.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{item.title}</span>
                    <span style={{ background: meeting.color + '20', color: meeting.color, padding: '2px 8px', borderRadius: '50px', fontSize: '0.75rem' }}>{item.duration}</span>
                  </div>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', margin: 0 }}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripts */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Scripts</span>
            <h2 className="section-title">逐字稿节选</h2>
            <p className="section-desc">各环节标准话术参考</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
            {Object.entries(scripts).map(([key, content]) => (
              <div key={key} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: meeting.color, marginBottom: '12px', textTransform: 'uppercase' }}>
                  {key === 'opening' ? '开场白' : key === 'company' ? '公司介绍' : key === 'product' ? '产品介绍' : '事业机会'}
                </h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, whiteSpace: 'pre-line', margin: 0 }}>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Sentences */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Golden</span>
            <h2 className="section-title">金句摘录</h2>
            <p className="section-desc">可复制的经典话术</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '40px' }}>
            {goldenSentences.map((sentence, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: meeting.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                  💬
                </div>
                <span style={{ color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{sentence}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Materials</span>
            <h2 className="section-title">配套资料</h2>
            <p className="section-desc">讲师使用的标准课件</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {[
              { icon: FileText, title: '招商PPT', desc: '完整版课件下载' },
              { icon: PlayCircle, title: '会议视频', desc: '标准会议录像' },
              { icon: FileText, title: '逐字稿文档', desc: '完整文字版' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'white', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer' }}>
                <item.icon size={32} color={meeting.color} style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-gray)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section" style={{ background: '#FFF5F5' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: '#E53E3E' }}>Compliance</span>
            <h2 className="section-title">合规提醒</h2>
            <p className="section-desc">会议中必须遵守的规范</p>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {complianceNotes.map((note, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#FFF5F5', borderRadius: '8px' }}>
                  <AlertTriangle size={16} color="#E53E3E" />
                  <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{note}</span>
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