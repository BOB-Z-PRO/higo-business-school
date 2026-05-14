import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import SevenDayCard from '@/components/seven-day/seven-day-card'
import { sevenDayOverview, sevenDayTasks } from '@/lib/seven-day-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '新人7天启动营 | HIGO 全球商学院',
  description: '围绕认知启动、产品理解、轻邀约与合规表达设计的新人第一周训练营。',
}

export default function SevenDayCampPage() {
  const todayTask = sevenDayTasks[0]

  return (
    <div className="min-h-screen academy-shell">
      <Header activePath="/business" />

      <section className="academy-hero academy-hero-camp">
        <div className="container">
          <div className="academy-hero-content">
            <span className="academy-hero-badge">Survival Camp</span>
            <h1 className="academy-hero-title">{sevenDayOverview.title}</h1>
            <p className="academy-hero-subtitle">{sevenDayOverview.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="academy-meta-grid">
            <div className="academy-meta-card">
              <h4>7天路径</h4>
              <p>每日都有学习、行动、标准表达与禁用表达。</p>
            </div>
            <div className="academy-meta-card">
              <h4>训练主线</h4>
              <p>从认知到邀约到听会复盘，形成闭环。</p>
            </div>
            <div className="academy-meta-card">
              <h4>合规优先</h4>
              <p>先边界、后表达，先标准、后发挥。</p>
            </div>
            <div className="academy-meta-card">
              <h4>下一阶段</h4>
              <p>完成后进入30天经营训练。</p>
            </div>
          </div>

          <div className="academy-dual-highlight">
            <article className="academy-panel">
              <span className="academy-panel-eyebrow">今日优先</span>
              <h3>
                Day {todayTask.day} · {todayTask.title}
              </h3>
              <p>{todayTask.learningGoal}</p>
              <Link href={`#day-${todayTask.day}`} className="academy-btn academy-btn-primary">
                查看 Day {todayTask.day}
              </Link>
            </article>
            <article className="academy-panel academy-panel-dark">
              <span className="academy-panel-eyebrow">完成后</span>
              <h3>30天经营训练</h3>
              <p>{sevenDayOverview.description}</p>
              <Link href={sevenDayOverview.nextStageHref} className="academy-btn academy-btn-light">
                {sevenDayOverview.nextStageLabel}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section academy-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">7-Day Camp</span>
            <h2 className="section-title">训练营任务板</h2>
            <p className="section-desc">每一天都包含目标、行动清单、标准话术、禁用表达与复盘动作。</p>
          </div>
          <div className="academy-stack">
            {sevenDayTasks.map((task) => (
              <div id={`day-${task.day}`} key={task.day}>
                <SevenDayCard task={task} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="新人启动阶段尤其要避免疾病治疗、收益确定、绝对化效果和压迫式邀约表达。所有动作以学习、体验、记录和借力系统为主。" />

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
