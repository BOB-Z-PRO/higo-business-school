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
  title: '新人 7 天启动营 | HIGO 全球商学院',
  description:
    '围绕新人启动、产品认知、轻邀约、听会借力与第一周复盘设计的 7 天路径，帮助新人完成第一轮学习与行动闭环。',
}

export default function SevenDayCampPage() {
  const todayTask = sevenDayTasks[0]

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/business" />

      <section style={{ background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white', padding: '72px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.18)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '20px' }}>
              生存空间 · 新人启动系统
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>{sevenDayOverview.title}</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: 1.8, marginBottom: '14px' }}>{sevenDayOverview.subtitle}</p>
            <p style={{ fontSize: '0.98rem', opacity: 0.88, lineHeight: 1.8 }}>{sevenDayOverview.description}</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'white', padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {[
              ['7 天路径', '每天有学习、动作、话术和禁语'],
              ['1 条主线', '从认知到邀约到听会复盘'],
              ['合规优先', '所有表达都先过合规边界'],
              ['下一阶段', '完成后转入 30 天经营训练'],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: 'var(--bg-gray)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{title}</div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.84rem', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '10px' }}>今日推荐学习</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '10px' }}>
                Day {todayTask.day} · {todayTask.title}
              </h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '16px' }}>{todayTask.learningGoal}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '18px' }}>
                {todayTask.actionTasks.slice(0, 3).map((task) => (
                  <span key={task} style={{ background: 'var(--bg-gray)', padding: '6px 12px', borderRadius: '999px', fontSize: '0.82rem', color: 'var(--text-gray)' }}>
                    {task}
                  </span>
                ))}
              </div>
              <Link href={`#day-${todayTask.day}`} className="btn btn-primary">
                先看 Day 1
              </Link>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '0.8rem', opacity: 0.85, fontWeight: 700, marginBottom: '10px' }}>完成后下一阶段</div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '10px' }}>30 天经营训练</h2>
              <p style={{ opacity: 0.9, lineHeight: 1.8, marginBottom: '18px' }}>
                当 7 天启动营完成后，下一步不是继续堆资料，而是进入稳定分享、带新人和借力会议的经营节奏。
              </p>
              <Link href={sevenDayOverview.nextStageHref} className="btn" style={{ background: 'white', color: '#1A365D' }}>
                {sevenDayOverview.nextStageLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">7-Day Camp</span>
            <h2 className="section-title">7 天任务总览</h2>
            <p className="section-desc">每天都包含学什么、怎么说、怎么做、不能说什么和下一步。</p>
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>
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
