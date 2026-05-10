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
  title: 'HIGO 全球商学院 | 统一认知与标准学习入口',
  description:
    'HIGO 全球商学院首页，聚合公司认知、产品学习、经营路径、会议支持与合规入口，帮助伙伴建立更清晰的成长路线。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header activePath="/" rightSlot={<ClientAuthStatus />} />

      <section className="hero" style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)' }}>
        <div className="hero-particles">
          <div className="dna-container">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="dna-strand"></div>
            ))}
          </div>
          <div className="cells-container">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={`cell cell-${index + 1}`}></div>
            ))}
          </div>
          <div className="molecules-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={`molecule mol-${index + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">{homeHero.badge}</span>
            <h1 className="hero-title">{homeHero.title}</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">{homeHero.subtitle}</p>
            <div className="hero-buttons">
              <Link href="/business/survival" className="btn btn-primary btn-lg">
                从新人路径开始
              </Link>
              <Link href="/business" className="btn btn-secondary btn-lg">
                进入经营篇
              </Link>
              <Link href="/products" className="btn btn-secondary btn-lg">
                查看产品体系
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Growth Path</span>
            <h2 className="section-title">三大空间成长地图</h2>
            <p className="section-desc">从新人到团队复制者，先搭建清晰路径，再逐步放大动作。</p>
          </div>
          <div className="home-spaces-grid">
            {homeSpaces.map((space) => (
              <div key={space.id} className={`home-space-card ${space.id}`}>
                <div className="home-space-header">
                  <div className="home-space-icon">{space.icon}</div>
                  <div>
                    <h3>{space.name}</h3>
                    <span className="home-space-tag">{space.tag}</span>
                  </div>
                </div>
                <div className="home-space-content">
                  <p>{space.description}</p>
                  <div className="home-space-goals">
                    {space.goals.map((goal) => (
                      <span key={goal}>{goal}</span>
                    ))}
                  </div>
                </div>
                <Link href={`/business/${space.id}`} className="home-space-btn">
                  进入学习 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Learning</span>
            <h2 className="section-title">四大学习入口</h2>
            <p className="section-desc">从认知、产品、经营和会议四个维度开始建立统一表达。</p>
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Newcomer</span>
            <h2 className="section-title">新人先看什么</h2>
            <p className="section-desc">把最基础、最容易跑偏的内容前置，帮助团队更快对齐。</p>
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

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Courses</span>
            <h2 className="section-title">精选课程</h2>
            <p className="section-desc">围绕认知统一、产品理解与会议应用整理的重点内容。</p>
          </div>
          <div className="featured-courses">
            {featuredCourses.map((course) => (
              <CourseCard key={course.href} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Meetings</span>
            <h2 className="section-title">会议中心精选</h2>
            <p className="section-desc">帮助团队保持统一表达与共享学习节奏。</p>
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

      <ComplianceNotice description="请避免夸大宣传、疾病治疗承诺和收益确定性表达。所有案例分享都应使用统一资料，并明确“因人而异”的前提。" />

      <Footer />
      <MobileNav activePath="/" items={mobileNavItems} />
    </div>
  )
}
