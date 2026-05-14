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
  description:
    'HIGO 全球商学院首页，聚合公司认知、产品学习、经营路径、会议 SOP 与合规表达入口。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen academy-shell">
      <Header activePath="/" rightSlot={<ClientAuthStatus />} />

      <section className="academy-hero">
        <div className="container">
          <div className="academy-hero-content">
            <span className="academy-hero-badge">{homeHero.badge}</span>
            <h1 className="academy-hero-title">{homeHero.title}</h1>
            <p className="academy-hero-subtitle">{homeHero.subtitle}</p>
            <div className="academy-hero-actions">
              <Link href="/business/survival/7-day" className="academy-btn academy-btn-primary">
                进入新人7天启动营
              </Link>
              <Link href="/business" className="academy-btn academy-btn-secondary">
                查看三大成长路径
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Growth Path</span>
            <h2 className="section-title">三大成长路径</h2>
            <p className="section-desc">从生存到经营再到生命成长，建立长期可复制的学习与实战节奏。</p>
          </div>
          <div className="home-spaces-grid">
            {homeSpaces.map((space) => (
              <div key={space.id} className={`home-space-card academy-card ${space.id}`}>
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
                  进入学习
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section academy-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Learning</span>
            <h2 className="section-title">四大学习入口</h2>
            <p className="section-desc">公司篇、产品篇、经营篇与会议中心一体化联动。</p>
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
            <span className="section-badge">Newcomer</span>
            <h2 className="section-title">新人优先入口</h2>
            <p className="section-desc">先完成基础认知与标准表达，再进入进阶训练。</p>
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
            <span className="section-badge">Courses</span>
            <h2 className="section-title">精选课程</h2>
            <p className="section-desc">聚焦认知统一、产品理解、会议转化与合规边界。</p>
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
            <span className="section-badge">Meetings</span>
            <h2 className="section-title">会议 SOP 精选</h2>
            <p className="section-desc">把会议流程、主持脚本与复盘动作沉淀成可复用模板。</p>
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

      <ComplianceNotice description="请避免夸大宣传、疾病治疗承诺和收益确定性表达。所有案例分享必须基于统一资料，并明确“因人而异”。" />

      <Footer />
      <MobileNav activePath="/" items={mobileNavItems} />
    </div>
  )
}
