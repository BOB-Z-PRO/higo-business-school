import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import SevenDayCard from '@/components/seven-day/seven-day-card'
import { sevenDayOverview, sevenDayTasks } from '@/lib/seven-day-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '新人 7 天启动营 | HIGO 全球商学院',
  description:
    '围绕新人启动、产品认知、轻邀约、听会借力与第一周复盘设计的 7 天路径，帮助新人完成第一轮学习与行动闭环。',
}

export default function SevenDayCampPage() {
  const todayTask = sevenDayTasks[0]
  const heroStyle = { ['--module-accent' as string]: '#10B981' } as CSSProperties

  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero module-hero-green" style={heroStyle}>
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">生存空间 · 新人启动系统</span>
            <h1>{sevenDayOverview.title}</h1>
            <p className="module-hero-subtitle">{sevenDayOverview.subtitle}</p>
            <p className="module-hero-description">{sevenDayOverview.description}</p>
          </div>
        </div>
      </section>

      <section className="premium-section module-overview-strip">
        <div className="container">
          <div className="overview-stat-grid mobile-two-col">
            {[
              ['7 天路径', '每天有学习、动作、话术和禁语'],
              ['1 条主线', '从认知到邀约到听会复盘'],
              ['合规优先', '所有表达都先过合规边界'],
              ['下一阶段', '完成后转入 30 天经营训练'],
            ].map(([title, desc]) => (
              <div key={title} className="overview-stat-card stat-card">
                <div className="overview-stat-title">{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-card-grid-2 seven-day-hero-grid">
            <div className="premium-card seven-day-summary-card">
              <div className="premium-badge">今日推荐学习</div>
              <h2 className="seven-day-summary-title">
                Day {todayTask.day} · {todayTask.title}
              </h2>
              <p className="mobile-readable">{todayTask.learningGoal}</p>
              <div className="seven-day-summary-chips">
                {todayTask.actionTasks.slice(0, 3).map((task) => (
                  <span key={task} className="seven-day-summary-chip">
                    {task}
                  </span>
                ))}
              </div>
              <Link href={`#day-${todayTask.day}`} className="btn btn-primary">
                先看 Day 1
              </Link>
            </div>

            <div className="glass-card seven-day-next-stage">
              <div className="premium-badge">完成后下一阶段</div>
              <h2>30 天经营训练</h2>
              <p>
                当 7 天启动营完成后，下一步不是继续堆资料，而是进入稳定分享、带新人和借力会议的经营节奏。
              </p>
              <Link href={sevenDayOverview.nextStageHref} className="btn btn-light">
                {sevenDayOverview.nextStageLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section section-surface">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">7-Day Camp</span>
            <h2 className="premium-title">7 天任务总览</h2>
            <p className="premium-desc content-narrow">每天都包含学什么、怎么说、怎么做、不能说什么和下一步。</p>
          </div>

          <div className="seven-day-stack">
            {sevenDayTasks.map((task) => (
              <div id={`day-${task.day}`} key={task.day}>
                <SevenDayCard task={task} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="新人启动阶段尤其要避免疾病治疗、收益确定、绝对化效果和压迫式邀约表达。所有动作都以学习、体验、记录和借力系统为主。" />

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
