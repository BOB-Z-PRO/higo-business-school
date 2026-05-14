import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import CourseCard from '@/components/cards/course-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import ClientAuthStatus from '@/components/home/client-auth-status'
import {
  featuredCourses,
  featuredMeetings,
  homeHero,
  homeSpaces,
  learningEntrances,
  newcomerLinks,
} from '@/lib/home-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'HIGO 全球商学院 | 国际生命科技经营者成长系统',
  description: 'HIGO 商学院 v1.1.1 首页：以新人启动、表达训练、会议复制与合规风控为核心主路径。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen academy-shell home-v111">
      <Header activePath="/" rightSlot={<ClientAuthStatus />} />

      <section className="academy-hero home-hero-v111">
        <div className="container">
          <div className="academy-hero-content">
            <span className="academy-hero-badge">{homeHero.badge}</span>
            <h1 className="academy-hero-title">{homeHero.title}</h1>
            <p className="academy-hero-subtitle">{homeHero.subtitle}</p>
            <div className="academy-hero-actions">
              <Link href="/business/survival/7-day" className="academy-btn academy-btn-primary">
                进入新人7天启动营
              </Link>
              <Link href="/scripts" className="academy-btn academy-btn-secondary">
                查看话术训练库
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Modules</span>
            <h2 className="section-title">四大核心模块主路径</h2>
            <p className="section-desc">首页主入口直接对齐 v1.1 核心能力，不再绕行。</p>
          </div>
          <div className="home-core-grid">
            {homeSpaces.map((space) => (
              <Link key={space.id} href={space.href} className="home-core-card">
                <div className="home-core-head">
                  <span className="home-core-num">{space.icon}</span>
                  <span className="home-core-tag">{space.tag}</span>
                </div>
                <h3>{space.name}</h3>
                <p>{space.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section academy-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Learning Entrances</span>
            <h2 className="section-title">四大学习入口</h2>
          </div>
          <div className="learning-entrances">
            {learningEntrances.map((entry) => (
              <Link key={entry.href} href={entry.href} className="entrance-card">
                <div className="entrance-icon">{entry.icon}</div>
                <h4>{entry.title}</h4>
                <p>{entry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Newcomer First</span>
            <h2 className="section-title">新人先看什么</h2>
          </div>
          <div className="newcomer-cards">
            {newcomerLinks.map((item) => (
              <Link key={item.href + item.number} href={item.href} className="newcomer-card">
                <span className="newcomer-num">{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section academy-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Action Training</span>
            <h2 className="section-title">行动训练精选</h2>
          </div>
          <div className="featured-courses">
            {featuredCourses.map((course) => (
              <CourseCard key={course.href} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Meeting SOP</span>
            <h2 className="section-title">会议复制场景</h2>
          </div>
          <div className="meeting-cards">
            {featuredMeetings.map((meeting) => (
              <Link key={meeting.href} href={meeting.href} className="meeting-card">
                <div className="meeting-icon">{meeting.icon}</div>
                <div className="meeting-info">
                  <h4>{meeting.title}</h4>
                  <p>{meeting.description}</p>
                  <span className="meeting-meta">{meeting.meta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="请避免收益确定性、疾病治疗承诺和绝对化表达。所有对外话术以训练库和合规替换库为准。" />

      <Footer />
      <MobileNav activePath="/" items={mobileNavItems} />
    </div>
  )
}
