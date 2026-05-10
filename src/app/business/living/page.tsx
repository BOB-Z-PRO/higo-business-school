'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'

const livingContent = {
  title: '生活空间',
  subtitle: '稳定经营期',
  icon: '🌟',
  color: '#805AD5',
  gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
  level: '一星~三星钻石',
  description: '从"自己会分享"到"能够稳定经营、带动新人、形成小团队"',
  goal: '建立稳定分享能力 → 建立基础成交能力 → 建立带新人能力 → 建立小团队学习氛围',
}

const courses = [
  { id: 'L2-01', title: '钻石级别全解 — 权益与责任', duration: '20分钟', type: '视频+逐字稿', category: '团队篇', summary: '钻石领导人的使命是什么？3项权益与3项责任。' },
  { id: 'L2-02', title: '如何培养一星SVIP', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '人才复制流水线：选人→育人→带人→留人。' },
  { id: 'L2-03', title: '如何做团队启动 — 成功九步法', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '成功九步：梦想→目标→学习→行动→邀约→跟进→成交→复制→传承。' },
  { id: 'L2-04', title: '团队会议体系', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '早会/晚会/周会怎么开？会议主持要点。' },
  { id: 'L2-05', title: '如何做团队激励', duration: '30分钟', type: '视频+逐字稿', category: '团队篇', summary: '动势建设：庆祝小胜利、树立榜样、设立目标。' },
  { id: 'L2-06', title: '如何做案例分享', duration: '30分钟', type: '视频+逐字稿', category: '产品篇', summary: '见证收集方法、按问题分类（肝/肾/心脑血管/糖尿病/肿瘤）、按见效速度分类。' },
  { id: 'L2-07', title: '时间管理与效率', duration: '30分钟', type: '视频+逐字稿', category: '团队篇', summary: '领导人时间表、时间管理原则。' },
  { id: 'L2-08', title: '目标设定与达成', duration: '30分钟', type: '视频+逐字稿', category: '团队篇', summary: 'SMART原则、月计划与周计划制定。' },
  { id: 'L2-09', title: '深度沟通 — 团队凝聚力打造', duration: '30分钟', type: '视频+逐字稿', category: '团队篇', summary: '共情+共鸣+共识+共事=共赢。' },
  { id: 'L2-10', title: '情绪管理与压力处理', duration: '30分钟', type: '视频+逐字稿', category: '心态篇', summary: '稳定压倒一切、情绪调节方法。' },
]

const mindset = [
  { title: '从消费者心态到经营者心态', desc: '不再只是使用者，而是事业的经营者' },
  { title: '从偶尔分享，到持续经营', desc: '建立规律的分享和跟进习惯' },
  { title: '从自己懂，到让别人也懂', desc: '培养带教能力，复制给更多人' },
  { title: '从追求成交，到建立信任', desc: '信任是成交的基础' },
  { title: '从个人努力，到借力系统', desc: '善用会议系统和团队资源' },
]

const shouldDo = [
  '会讲3分钟产品',
  '会讲10分钟机会',
  '会邀约别人听招商会',
  '会回答基础异议',
  '会带新人走完生存空间课程',
  '会组织小范围学习会',
  '会使用案例而不夸大案例',
]

export default function LivingPage() {
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
            <Link href="/business" className="nav-link active">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: livingContent.gradient, color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回经营篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{livingContent.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{livingContent.title}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '8px' }}>{livingContent.subtitle} · {livingContent.level}</p>
              <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '600px' }}>{livingContent.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>心态模块</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {mindset.map((item, index) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <div style={{ width: '32px', height: '32px', background: livingContent.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>该会的</h2>
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <p style={{ color: 'var(--text-gray)', marginBottom: '20px', lineHeight: 1.7 }}>
                  生活空间阶段需要建立的核心能力：
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['会讲3分钟产品', '会讲10分钟机会', '会邀约别人听招商会', '会回答基础异议', '会带新人走完生存空间课程', '会组织小范围学习会', '会使用案例而不夸大案例'].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                      <div style={{ width: '8px', height: '8px', background: livingContent.color, borderRadius: '50%' }} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Courses</span>
            <h2 className="section-title">生活空间课程</h2>
            <p className="section-desc">稳定经营期的7门核心课程</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
            {courses.map((course, index) => (
              <Link key={course.id} href={`/business/course/${course.id}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '48px', height: '48px', background: livingContent.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{course.title}</h4>
                  <div style={{ display: 'flex', gap: '12px', color: 'var(--text-gray)', fontSize: '0.8125rem' }}>
                    <span>{course.id}</span><span>·</span><span>{course.duration}分钟</span>
                  </div>
                </div>
                <ChevronRight size={20} color="var(--text-light)" />
              </Link>
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