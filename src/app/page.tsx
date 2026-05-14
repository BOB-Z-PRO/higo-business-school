import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import CourseCard from '@/components/cards/course-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import ClientAuthStatus from '@/components/home/client-auth-status'
import { featuredCourses, featuredMeetings, homeHero, homeSpaces, learningEntrances, newcomerLinks } from '@/lib/home-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'HIGO 全球商学院 | 经营者成长与复制系统',
  description: '把新人启动、产品学习、经营训练、会议复制和合规表达整理成可执行路径。',
}

export default function HomePage() {
  return (
    <div className="page-shell home-v3">
      <Header activePath="/" rightSlot={<ClientAuthStatus />} />
      <main>
        <section className="home-v3-hero">
          <div className="container home-v3-hero-grid">
            <div className="home-v3-hero-copy">
              <span className="home-v3-kicker">{homeHero.badge}</span>
              <h1>{homeHero.title}</h1>
              <p>{homeHero.subtitle}</p>
              <div className="home-v3-actions">
                <Link href="/business/survival/7-day" className="btn btn-primary">从 7 天启动营开始</Link>
                <Link href="/compliance/phrasebook" className="btn btn-text">先看合规表达</Link>
              </div>
            </div>
            <div className="home-v3-hero-panel">
              <h2>今日优先动作</h2>
              <ul>
                <li>完成 1 个学习动作</li>
                <li>完成 1 次低压力邀约</li>
                <li>完成 1 条复盘记录</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="home-v3-section">
          <div className="container">
            <div className="home-v3-grid-4">
              {learningEntrances.map((entry) => (
                <Link key={entry.href} href={entry.href} className="home-v3-card">
                  <span className="home-v3-code">{entry.icon}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-v3-section home-v3-muted">
          <div className="container">
            <div className="home-v3-head">
              <h2>三阶段成长路径</h2>
            </div>
            <div className="home-v3-grid-3">
              {homeSpaces.map((space) => (
                <Link key={space.id} href={`/business/${space.id}`} className="home-v3-card">
                  <span className="home-v3-code">{space.icon}</span>
                  <h3>{space.name}</h3>
                  <p>{space.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-v3-section">
          <div className="container home-v3-split">
            <div className="home-v3-head"><h2>新人第一轮学习顺序</h2></div>
            <div className="home-v3-steps">
              {newcomerLinks.map((item) => (
                <Link key={item.href + item.number} href={item.href} className="home-v3-step">
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-v3-section home-v3-muted">
          <div className="container">
            <div className="home-v3-head"><h2>优先学习内容</h2></div>
            <div className="featured-courses home-v3-grid-3">
              {featuredCourses.map((course) => <CourseCard key={course.href} {...course} />)}
            </div>
          </div>
        </section>

        <section className="home-v3-section">
          <div className="container">
            <div className="home-v3-head"><h2>会议复制入口</h2></div>
            <div className="home-v3-grid-3">
              {featuredMeetings.map((m) => (
                <Link key={m.href} href={m.href} className="home-v3-card">
                  <span className="home-v3-code">{m.icon}</span>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ComplianceNotice description="所有内容都需避免医疗化宣传、收益承诺和绝对化效果表达。" />
      </main>
      <Footer />
      <MobileNav activePath="/" items={mobileNavItems} />
    </div>
  )
}
