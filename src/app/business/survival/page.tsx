import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '生存空间 | HIGO 全球商学院',
  description: '新人启动期核心模块：7 天启动营、30 天经营训练与高频异议解答。',
}

const mindset = [
  { title: '先体验，再判断', desc: '用真实体验建立信心，不依赖空泛说服。' },
  { title: '先相信系统，再完善自己', desc: '按路径执行，比零散努力更有效率。' },
  { title: '先分享价值，不急着成交', desc: '先建立信任关系，再推进下一步。' },
  { title: '被拒绝是筛选，不是否定', desc: '拒绝是正常反馈，不是个人失败。' },
]

const coreActions = [
  '完成 7 天启动营任务并提交复盘',
  '每天至少 1 次轻邀约沟通',
  '每周至少参加 1 场会议并会后跟进',
  '沉淀个人话术与内容素材',
]

export default function SurvivalPage() {
  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Survival Space</span>
            <h1>生存空间</h1>
            <p className="module-hero-subtitle">新人启动期</p>
            <p className="module-hero-description">
              从不了解、不敢开口，到愿意自用、愿意学习、愿意分享。先建立认知和动作，再追求速度。
            </p>
            <div className="ui-action-row">
              <Link href="/business/survival/7-day" className="btn btn-primary">
                进入 7 天启动营
              </Link>
              <Link href="/business/survival/30-day" className="btn btn-text">
                查看 30 天训练
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="academy-overview-link-grid">
            <Link href="/business/survival/7-day" className="academy-overview-link">
              <h3>新人 7 天启动营</h3>
              <p>按天完成学习、动作、话术与复盘闭环。</p>
            </Link>
            <Link href="/business/survival/30-day" className="academy-overview-link">
              <h3>30 天经营训练</h3>
              <p>按周建立稳定节奏，形成可持续执行系统。</p>
            </Link>
            <Link href="/business/survival/objections" className="academy-overview-link">
              <h3>新人疑义解答</h3>
              <p>覆盖公司、产品、经营、分享、合规五类高频问题。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-grid-2 seven-day-hero-grid">
            <div className="seven-day-summary-card">
              <span className="ui-eyebrow">心态模块</span>
              <div className="seven-day-stack" style={{ marginTop: '1rem' }}>
                {mindset.map((item) => (
                  <div key={item.title} className="seven-day-stack-card">
                    <div className="seven-day-note-title">{item.title}</div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="seven-day-next-stage">
              <span className="ui-eyebrow">核心动作</span>
              <ul className="seven-day-list" style={{ marginTop: '1rem' }}>
                {coreActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ComplianceNotice description="生存空间阶段重点是认知、执行和合规表达，不做夸大功效、不做收益承诺。" />
      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
