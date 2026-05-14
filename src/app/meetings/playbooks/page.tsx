import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import MeetingPlaybookCard from '@/components/meetings/meeting-playbook-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { meetingPlaybooks, meetingPlaybookTypeMeta } from '@/lib/meeting-playbooks-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '会议 SOP 库 | HIGO 全球商学院',
  description:
    '围绕新人启动会、产品分享会和机会说明会沉淀的会议 SOP 库，帮助团队做标准化复制。',
}

export default function MeetingPlaybooksPage() {
  return (
    <div className="page-shell">
      <Header activePath="/meetings" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Meeting SOP Library</span>
            <h1>会议 SOP 库</h1>
            <p className="module-hero-description">
              会议中心从“分类页”升级为“会议复制库”。每个 SOP 都包含会议目标、标准流程、主持稿、会后跟进、复盘表和合规提醒。
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Playbooks</span>
            <h2 className="ui-title">三类优先 SOP</h2>
            <p className="ui-desc ui-readable">先把团队最常用的会议标准化，再谈规模复制。</p>
          </div>

          <div className="playbook-card-grid">
            {meetingPlaybooks.map((playbook) => (
              <MeetingPlaybookCard
                key={playbook.id}
                playbook={playbook}
                color={meetingPlaybookTypeMeta[playbook.type].color}
              />
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="会议的价值是统一认知和复制流程，不是制造兴奋感后做夸张承诺。所有主持、主讲和案例环节都要先过合规边界。" />

      <Footer />
      <MobileNav activePath="/meetings" items={mobileNavItems} />
    </div>
  )
}
