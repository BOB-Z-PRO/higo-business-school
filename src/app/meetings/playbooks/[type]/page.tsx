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

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/meetings" />

      <section style={{ background: `linear-gradient(135deg, ${meta.color} 0%, #2D3748 100%)`, color: 'white', padding: '72px 0' }}>
        <div className="container">
          <Link href="/meetings/playbooks" style={{ display: 'inline-flex', marginBottom: '18px', background: 'rgba(255,255,255,0.15)', padding: '8px 14px', borderRadius: '999px', fontSize: '0.84rem', fontWeight: 700 }}>
            返回会议 SOP 库
          </Link>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>{playbook.title}</h1>
          <p style={{ fontSize: '1.02rem', opacity: 0.92, lineHeight: 1.8, maxWidth: '780px' }}>{playbook.meetingGoal}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {[
              ['适合对象', playbook.targetAudience],
              ['会议时长', playbook.duration],
              ['会议类型', meta.title],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '8px' }}>{title}</div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.92rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            <section style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '14px' }}>标准流程</h2>
              <div style={{ display: 'grid', gap: '10px' }}>
                {playbook.agenda.map((item, index) => (
                  <div key={item} style={{ display: 'flex', gap: '12px', color: 'var(--text-gray)', lineHeight: 1.7 }}>
                    <span style={{ color: meta.color, fontWeight: 700 }}>{index + 1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '14px' }}>主持人开场</h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.9 }}>{playbook.hostOpening}</p>
            </section>

            <section style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '14px' }}>主讲结构</h2>
              <ul style={{ display: 'grid', gap: '10px' }}>
                {playbook.speakerOutline.map((item) => (
                  <li key={item} style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '14px' }}>案例模板</h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.9 }}>{playbook.caseTemplate}</p>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px' }}>会后跟进</h2>
                <ul style={{ display: 'grid', gap: '10px' }}>
                  {playbook.followUpScripts.map((item) => (
                    <li key={item} style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px' }}>复盘清单</h2>
                <ul style={{ display: 'grid', gap: '10px' }}>
                  {playbook.reviewChecklist.map((item) => (
                    <li key={item} style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#FFF5F5', borderRadius: '20px', padding: '24px', border: '1px solid #FEB2B2' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px', color: '#C53030' }}>合规提醒</h2>
                <ul style={{ display: 'grid', gap: '10px' }}>
                  {playbook.complianceNotes.map((item) => (
                    <li key={item} style={{ color: '#9B2C2C', lineHeight: 1.8 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 28px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px' }}>相关资料</h2>
                <ul style={{ display: 'grid', gap: '10px' }}>
                  {playbook.relatedMaterials.map((item) => (
                    <li key={item} style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
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
