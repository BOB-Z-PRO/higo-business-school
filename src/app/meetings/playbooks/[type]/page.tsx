import type { Metadata } from 'next'
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
  if (!playbook) return {}
  return {
    title: `${playbook.title} | HIGO 全球商学院`,
    description: playbook.meetingGoal,
  }
}

export default function MeetingPlaybookDetailPage({ params }: MeetingPlaybookDetailPageProps) {
  const playbook = meetingPlaybooks.find((item) => item.type === params.type)
  if (!playbook) notFound()
  const meta = meetingPlaybookTypeMeta[playbook.type]

  return (
    <div className="min-h-screen academy-shell">
      <Header activePath="/meetings" />

      <section className="academy-hero academy-hero-meeting">
        <div className="container">
          <div className="academy-hero-content">
            <Link href="/meetings/playbooks" className="academy-back-link">
              返回会议 SOP 库
            </Link>
            <h1 className="academy-hero-title">{playbook.title}</h1>
            <p className="academy-hero-subtitle">{playbook.meetingGoal}</p>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="academy-meta-grid">
            <div className="academy-meta-card">
              <h4>适合对象</h4>
              <p>{playbook.targetAudience}</p>
            </div>
            <div className="academy-meta-card">
              <h4>会议时长</h4>
              <p>{playbook.duration}</p>
            </div>
            <div className="academy-meta-card">
              <h4>会议类型</h4>
              <p>{meta.title}</p>
            </div>
          </div>

          <div className="academy-stack academy-stack-lg">
            <section className="academy-panel">
              <h3>标准流程</h3>
              <ol className="academy-ordered-list">
                {playbook.agenda.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="academy-panel">
              <h3>主持稿</h3>
              <p>{playbook.hostOpening}</p>
            </section>

            <section className="academy-panel">
              <h3>主讲结构</h3>
              <ul className="academy-simple-list">
                {playbook.speakerOutline.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="academy-panel">
              <h3>案例模板</h3>
              <p>{playbook.caseTemplate}</p>
            </section>

            <div className="academy-two-col">
              <section className="academy-panel">
                <h3>会后跟进</h3>
                <ul className="academy-simple-list">
                  {playbook.followUpScripts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="academy-panel">
                <h3>复盘清单</h3>
                <ul className="academy-simple-list">
                  {playbook.reviewChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="academy-two-col">
              <section className="academy-panel academy-panel-risk">
                <h3>合规提醒</h3>
                <ul className="academy-simple-list">
                  {playbook.complianceNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="academy-panel">
                <h3>相关资料</h3>
                <ul className="academy-simple-list">
                  {playbook.relatedMaterials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <ComplianceNotice description="会议复制的核心是统一资料、统一流程、统一边界。任何主持稿、案例与会后跟进都不能越过收益和疗效红线。" />

      <Footer />
      <MobileNav activePath="/meetings" items={mobileNavItems} />
    </div>
  )
}
