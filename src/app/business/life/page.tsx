'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'

const lifeContent = {
  title: '生命空间',
  subtitle: '领导人成就期',
  icon: '👑',
  color: '#D69E2E',
  gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
  level: '一星~三星黑钻',
  description: '从"小团队经营"到"系统复制、领导人培养、组织文化建设"',
  goal: '建立组织思维 → 建立会议系统 → 建立讲师系统 → 建立新人复制系统 → 建立合规文化',
}

const mindset = [
  { title: '从个人英雄到团队领袖', desc: '从"自己干"到"带人干"，培养人而不是控制人' },
  { title: '从追求个人业绩到成就他人', desc: '帮助别人成功才是真正的成功' },
  { title: '从借用资源到建立系统', desc: '建立可复制的系统和流程' },
  { title: '从被动跟随到主动引领', desc: '承担更多责任，带领团队向前' },
  { title: '从短期业绩到长期价值', desc: '建立百年基业的思维' },
]

const courses = [
  { id: 'L3-01', title: '黑钻级别全解 — 使命与格局', duration: '30分钟', type: '视频+逐字稿', category: '心态篇', summary: '黑钻的使命：帮助更多人成功，让生命影响生命。格局决定结局。' },
  { id: 'L3-02', title: '如何培养钻石领导人', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '培养1个钻石 > 自己成为钻石。钻石特质识别、培养方法。' },
  { id: 'L3-03', title: '领袖复制系统 — 领导人养成流水线', duration: '50分钟', type: '视频+逐字稿', category: '团队篇', summary: '为什么要建立系统？系统建设5要素：标准化流程、培训体系、会议体系、激励体系、传承体系。' },
  { id: 'L3-04', title: '如何做大招商会', duration: '60分钟', type: '视频+逐字稿', category: '经营篇', summary: '100人以上会议怎么运作？策划、邀约、讲师、物料、会后跟进。' },
  { id: 'L3-05', title: '团队文化与价值观建设', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '没有文化的团队 = 没有灵魂的团队。核心价值观：真实、诚信、简单、长期、共赢。' },
  { id: 'L3-06', title: '战略布局 — 市场拓展思维', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '看全局/长期/趋势/布局。深耕现有市场、拓展新区域、开发新渠道、战略联盟。' },
  { id: 'L3-07', title: '资源整合与借力', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '借力专家、平台、工具、团队。跨界合作：行业领袖合作、资源共享、互相背书。' },
  { id: 'L3-08', title: '领袖影响力', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '影响力 = 你能带动多少人愿意跟你走。核心圈打造：识别→连接→赋予→愿景→支持。' },
  { id: 'L3-09', title: '百年基业 — 系统化运营思维', duration: '40分钟', type: '视频+逐字稿', category: '团队篇', summary: '长期思维 vs 短期思维。系统化运营：流程标准化、培训系统化、会议常态化、激励长期化。' },
  { id: 'L3-10', title: '传承与使命', duration: '40分钟', type: '视频+逐字稿', category: '心态篇', summary: '使命 = 你为什么而存在。帮助更多人成功，成功不是拥有多少，而是留下多少。' },
]

export default function LifePage() {
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

      <section style={{ background: lifeContent.gradient, color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回经营篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{lifeContent.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{lifeContent.title}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '8px' }}>{lifeContent.subtitle} · {lifeContent.level}</p>
              <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '600px' }}>{lifeContent.description}</p>
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
                    <div style={{ width: '32px', height: '32px', background: lifeContent.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
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
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>该做的</h2>
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <p style={{ color: 'var(--text-gray)', marginBottom: '20px', lineHeight: 1.7 }}>
                  生命空间阶段的核心动作建议：
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['建立团队课程学习地图', '每周组织领导人学习', '每月组织主题招商说明会', '持续沉淀标准逐字稿', '培养第二梯队讲师', '定期做合规提醒', '用公司统一内容替代个人随意发挥'].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'var(--bg-gray)', borderRadius: '8px' }}>
                      <div style={{ width: '8px', height: '8px', background: lifeContent.color, borderRadius: '50%' }} />
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
            <h2 className="section-title">生命空间课程</h2>
            <p className="section-desc">领导人成就期的7门核心课程</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
            {courses.map((course, index) => (
              <Link key={course.id} href={`/business/course/${course.id}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '48px', height: '48px', background: lifeContent.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
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