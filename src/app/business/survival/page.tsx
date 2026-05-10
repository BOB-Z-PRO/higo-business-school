'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, BookOpen, Target, CheckCircle, Users, MessageCircle, ChevronRight } from 'lucide-react'

const survivalContent = {
  title: '生存空间',
  subtitle: '新人启动期',
  icon: '🌱',
  color: '#38A169',
  gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
  level: '新人 → 一星~三星SVIP',
  description: '从"不了解、不相信、不敢开口"到"愿意吃产品、愿意学习、愿意分享"',
  goal: '认识公司 → 认识产品 → 看懂模式 → 愿意自用 → 敢于分享 → 学会借力会议',
}

const mindset = [
  { title: '先体验，再判断', desc: '产品谁用谁知道，自己先体验，用真实感受建立信心' },
  { title: '先相信系统，再完善自己', desc: '成功者的经验已经证明有效，还没学会走就想跑一定会摔' },
  { title: '先分享价值，不要急着成交', desc: '帮助别人，而不是推销产品' },
  { title: '被拒绝是筛选，不是否定', desc: '每一次拒绝都是筛选出真正需要的人的机会' },
  { title: '普通人做事业，靠系统不靠天赋', desc: '简单听话照做，复制成功者的路，不需要特别能力' },
]

const courses = [
  { id: 'N-01', title: 'HIGO是什么 — 一页纸说清楚', duration: '15分钟', type: '视频+逐字稿', category: '公司篇', summary: '如何用一句话让陌生人记住HIGO？包含6年深耕、七大国际认证、权威专家团队。' },
  { id: 'N-02', title: '为什么要做HIGO — 趋势与机遇', duration: '20分钟', type: '视频+逐字稿', category: '公司篇', summary: '大健康30万亿市场、基因抗衰革命、为什么现在是最佳时机。' },
  { id: 'N-03', title: 'GnAKG产品原理', duration: '30分钟', type: '视频+逐字稿', category: '产品篇', summary: 'AKG为什么能优化生物年龄表现？NAD+/Sirtuins机制、180天人体试验数据、见证案例。' },
  { id: 'N-04', title: 'GnCELL产品原理', duration: '25分钟', type: '视频+逐字稿', category: '产品篇', summary: 'Cell为什么能"支持异常细胞管理"？靶向自噬技术、三大功效、见证案例。' },
  { id: 'N-05', title: 'GnHORMONE产品原理', duration: '25分钟', type: '视频+逐字稿', category: '产品篇', summary: '荷尔蒙平衡为什么能解决更年期/亚健康？8大腺体、男女配方区别。' },
  { id: 'N-06', title: 'HIGO商业模式', duration: '20分钟', type: '视频+逐字稿', category: '经营篇', summary: '四句话讲明白：四大红利、奖金制度、晋升路线。' },
  { id: 'N-07', title: '如何启动市场 — 新人起步六步曲', duration: '30分钟', type: '视频+逐字稿', category: '经营篇', summary: '简单听话照做、筛人思维、150讲定律、7天起步任务。' },
  { id: 'N-08', title: '邀约话术 — 三种场景详解', duration: '30分钟', type: '视频+逐字稿', category: '经营篇', summary: 'ABC法则、三种场景详解（熟人/意向/线上）、常见拒绝应对。' },
  { id: 'N-09', title: '如何讲产品 — 产品讲解三板斧', duration: '30分钟', type: '视频+逐字稿', category: '经营篇', summary: '讲原理、讲证据、讲感受。AKG/Cell/荷尔蒙完整话术。' },
  { id: 'N-10', title: '如何讲机会 — 事业说明会流程', duration: '30分钟', type: '视频+逐字稿', category: '经营篇', summary: '事业说明会30分钟版完整话术框架，开场到结尾。' },
]

const shouldDo = [
  '完成N-01至N-10全部课程学习',
  '每天听1节产品/公司课程',
  '开始自用产品，记录感受',
  '参加一场完整招商说明会',
  '列出20-50人名单',
  '尝试发一条朋友圈',
  '学会使用ABC法则邀约',
  '借力A（老师）讲计划',
]

export default function SurvivalPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      {/* Header */}
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

      {/* Hero */}
      <section style={{ background: survivalContent.gradient, color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> 返回经营篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{survivalContent.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{survivalContent.title}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '8px' }}>{survivalContent.subtitle} · {survivalContent.level}</p>
              <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '600px' }}>{survivalContent.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section style={{ background: 'white', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/business/survival/objections" className="quick-access-btn" style={{ background: '#E53E3E', color: 'white' }}>
              <MessageCircle size={18} /> 新人疑义解答
            </Link>
            <Link href="/company" className="quick-access-btn" style={{ background: '#1A365D', color: 'white' }}>
              <BookOpen size={18} /> 了解公司
            </Link>
            <Link href="/products" className="quick-access-btn" style={{ background: '#38A169', color: 'white' }}>
              <Target size={18} /> 了解产品
            </Link>
            <Link href="/meetings/opportunity" className="quick-access-btn" style={{ background: '#3182CE', color: 'white' }}>
              <Users size={18} /> 参加招商说明会
            </Link>
          </div>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: survivalContent.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🧠</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>心态模块</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {mindset.map((item, index) => (
                  <div key={item.title} className="mindset-card">
                    <div style={{ width: '32px', height: '32px', background: survivalContent.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: survivalContent.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✅</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>该做的</h2>
              </div>
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <p style={{ color: 'var(--text-gray)', marginBottom: '20px', lineHeight: 1.7 }}>
                  生存空间阶段的核心动作建议，完成这些动作帮助你快速入门：
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {shouldDo.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                      <CheckCircle size={20} color={survivalContent.color} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Courses</span>
            <h2 className="section-title">生存空间课程</h2>
            <p className="section-desc">新人成长学院 N-01~N-10 · 10门核心课程</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
            {courses.map((course, index) => (
              <Link key={course.id} href={`/business/course/${course.id}`} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }} className="survival-course-card">
                <div style={{ width: '48px', background: survivalContent.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                  N-{index + 1}
                </div>
                <div style={{ flex: 1, padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ background: survivalContent.color + '20', color: survivalContent.color, padding: '2px 8px', borderRadius: '50px', fontSize: '0.6875rem', fontWeight: 600 }}>{course.category}</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.75rem' }}>{course.duration}</span>
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>{course.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{course.summary}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', color: 'var(--text-light)' }}>
                  <ChevronRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
