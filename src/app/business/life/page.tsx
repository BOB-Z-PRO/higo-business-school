import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '生命空间 | HIGO 全球商学院',
  description: '复制增长期：从个人执行升级为团队系统与领导力。',
}

const mindset = [
  ['从个人英雄到团队领导', '重点从“我会做”转为“团队会做”。'],
  ['从业绩导向到人才导向', '通过培养领导人实现长期增长。'],
  ['从借力资源到搭建系统', '沉淀会议、带教、复盘和激励机制。'],
]

const capability = [
  '搭建团队学习地图',
  '组织中大型会议与复盘',
  '培养二梯队讲师',
  '建立跨团队协作机制',
  '落地合规文化与监督',
  '制定季度增长计划',
]

const courses = [
  { id: 'L3-01', title: '黑钻级别全解', duration: '30 分钟' },
  { id: 'L3-02', title: '培养钻石领导人', duration: '40 分钟' },
  { id: 'L3-03', title: '领导复制系统', duration: '50 分钟' },
  { id: 'L3-04', title: '大型招商会运营', duration: '60 分钟' },
  { id: 'L3-05', title: '团队文化建设', duration: '40 分钟' },
  { id: 'L3-06', title: '战略布局与资源整合', duration: '40 分钟' },
]

export default function LifePage() {
  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Life Space</span>
            <h1>生命空间</h1>
            <p className="module-hero-subtitle">复制增长期</p>
            <p className="module-hero-description">把个人动作升级为团队系统，实现可持续复制与领导力增长。</p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-grid-2 seven-day-hero-grid">
            <div className="seven-day-summary-card">
              <span className="ui-eyebrow">心态模块</span>
              <div className="seven-day-stack" style={{ marginTop: '1rem' }}>
                {mindset.map(([title, desc]) => (
                  <div key={title} className="seven-day-stack-card">
                    <div className="seven-day-note-title">{title}</div>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="seven-day-next-stage">
              <span className="ui-eyebrow">核心能力</span>
              <ul className="seven-day-list" style={{ marginTop: '1rem' }}>
                {capability.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Courses</span>
            <h2 className="ui-title">生命空间课程</h2>
          </div>
          <div className="seven-day-stack">
            {courses.map((course, index) => (
              <Link key={course.id} href={`/business/course/${course.id}`} className="seven-day-card">
                <div className="seven-day-card-hero">
                  <div className="seven-day-card-hero-main">
                    <div className="seven-day-day-badge">{index + 1}</div>
                    <div>
                      <h3>{course.title}</h3>
                      <p>
                        {course.id} · {course.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="生命空间阶段的所有团队素材与会议表达，必须保持一致合规标准。" />
      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
