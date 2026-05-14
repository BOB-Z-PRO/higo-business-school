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
  description: '沉淀新人启动会、产品分享会与机会说明会的标准流程与主持框架。',
}

export default function MeetingPlaybooksPage() {
  return (
    <div className="min-h-screen academy-shell">
      <Header activePath="/meetings" />

      <section className="academy-hero academy-hero-meeting">
        <div className="container">
          <div className="academy-hero-content">
            <span className="academy-hero-badge">Meeting SOP</span>
            <h1 className="academy-hero-title">会议 SOP 库</h1>
            <p className="academy-hero-subtitle">
              会议中心升级为训练手册库：目标、流程、主持稿、主讲结构、会后复盘一页打通。
            </p>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Playbooks</span>
            <h2 className="section-title">三类优先 SOP</h2>
            <p className="section-desc">先把高频会议标准化，再谈团队规模化复制。</p>
          </div>

          <div className="academy-category-grid">
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

      <ComplianceNotice description="会议价值是统一认知与复制流程，不是制造情绪后做夸张承诺。主持、主讲和案例都要先过合规边界。" />

      <Footer />
      <MobileNav activePath="/meetings" items={mobileNavItems} />
    </div>
  )
}
