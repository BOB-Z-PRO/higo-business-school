import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import {
  meetingPlaybooks,
  meetingPlaybookTypeMeta,
  type MeetingPlaybookType,
} from '@/lib/meeting-playbooks-data'
import { mobileNavItems } from '@/lib/site-data'

type MeetingPlaybookDetailPageProps = {
  params: {
    type: MeetingPlaybookType
  }
}

export function generateStaticParams() {
  return Object.keys(meetingPlaybookTypeMeta).map((type) => ({ type }))
}

export async function generateMetadata({
  params,
}: MeetingPlaybookDetailPageProps): Promise<Metadata> {
  const playbook = meetingPlaybooks.find((item) => item.type === params.type)

  if (!playbook) {
    return {}
  }

  return {
    title: `${playbook.title} | HIGO 全球商学院`,
    description: playbook.meetingGoal,
  }
}

export default function MeetingPlaybookDetailPage({ params }: MeetingPlaybookDetailPageProps) {
  const playbook = meetingPlaybooks.find((item) => item.type === params.type)

  if (!playbook) {
    notFound()
  }

  const meta = meetingPlaybookTypeMeta[playbook.type]
  const heroStyle = { ['--module-accent' as string]: meta.color } as CSSProperties

  return (
    <div className="page-shell">
      <Header activePath="/meetings" />

      <section className="module-hero module-hero-accent" style={heroStyle}>
        <div className="container">
          <Link href="/meetings/playbooks" className="module-hero-back-link">
            返回会议 SOP 库
          </Link>
          <div className="module-hero-inner">
            <span className="module-hero-kicker">{meta.title}</span>
            <h1>{playbook.title}</h1>
            <p className="module-hero-description">{playbook.meetingGoal}</p>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="overview-stat-grid mobile-two-col">
            {[
              ['适合对象', playbook.targetAudience],
              ['会议时长', playbook.duration],
              ['会议类型', meta.title],
            ].map(([title, desc]) => (
              <div key={title} className="overview-stat-card premium-card">
                <div className="overview-stat-title">{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="playbook-detail-stack">
            <section className="playbook-detail-card premium-card">
              <h2>标准流程</h2>
              <div className="playbook-detail-timeline">
                {playbook.agenda.map((item, index) => (
                  <div key={item} className="playbook-detail-step">
                    <span className="playbook-detail-step-num">{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="playbook-detail-card premium-card">
              <h2>主持人开场</h2>
              <p className="mobile-readable">{playbook.hostOpening}</p>
            </section>

            <section className="playbook-detail-card premium-card">
              <h2>主讲结构</h2>
              <ul className="playbook-detail-list">
                {playbook.speakerOutline.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="playbook-detail-card premium-card">
              <h2>案例模板</h2>
              <p className="mobile-readable">{playbook.caseTemplate}</p>
            </section>

            <section className="playbook-detail-grid">
              <div className="playbook-detail-card premium-card">
                <h2>会后跟进</h2>
                <ul className="playbook-detail-list">
                  {playbook.followUpScripts.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="playbook-detail-card premium-card">
                <h2>复盘清单</h2>
                <ul className="playbook-detail-list">
                  {playbook.reviewChecklist.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="playbook-detail-grid">
              <div className="playbook-detail-card premium-card playbook-detail-risk">
                <h2>合规提醒</h2>
                <ul className="playbook-detail-list">
                  {playbook.complianceNotes.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="playbook-detail-card premium-card">
                <h2>相关资料</h2>
                <ul className="playbook-detail-list">
                  {playbook.relatedMaterials.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      <ComplianceNotice description="会议复制的核心是使用统一资料、统一流程和统一边界。任何主持稿、案例和会后跟进都不能越过收益和疗效红线。" />

      <Footer />
      <MobileNav activePath="/meetings" items={mobileNavItems} />
    </div>
  )
}
