import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '生活空间 | HIGO 全球商学院',
  description: '稳定经营期：从个人分享到可持续带新与小团队协作。',
}

const mindset = [
  ['从消费者到经营者', '不只是会用产品，更要会稳定输出价值。'],
  ['从偶尔分享到持续经营', '建立固定节奏，减少情绪化执行。'],
  ['从自己懂到别人也懂', '开始带教新人，建立基础复制。'],
]

const capability = [
  '会讲 3 分钟产品',
  '会讲 10 分钟机会',
  '会做轻邀约并跟进',
  '会答基础异议',
  '会带新人走完启动营',
  '会组织小范围学习会',
]

const courses = [
  { id: 'L2-01', title: '钻石级别全解', duration: '20 分钟' },
  { id: 'L2-02', title: '如何培养一星 SVIP', duration: '40 分钟' },
  { id: 'L2-03', title: '团队启动九步法', duration: '40 分钟' },
  { id: 'L2-04', title: '团队会议体系', duration: '40 分钟' },
  { id: 'L2-05', title: '团队激励机制', duration: '30 分钟' },
  { id: 'L2-06', title: '案例分享方法', duration: '30 分钟' },
]

export default function LivingPage() {
  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Living Space</span>
            <h1>生活空间</h1>
            <p className="module-hero-subtitle">稳定经营期</p>
            <p className="module-hero-description">从会分享到会带人，建立稳定动作、会议节奏与小团队协作。</p>
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
            <h2 className="ui-title">生活空间课程</h2>
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

      <ComplianceNotice description="生活空间阶段同样遵循合规表达，不做夸大效果和收益承诺。" />
      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
