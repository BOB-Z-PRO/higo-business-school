import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '新人疑义解答 | HIGO 全球商学院',
  description: '围绕公司、产品、经营、分享和合规的新人高频问题解答。',
}

const objectionCategories = [
  {
    id: 'company',
    icon: '🏢',
    title: '关于公司',
    color: '#1A365D',
    questions: [
      ['HIGO 是什么公司？', 'HIGO 是聚焦基因抗衰科技与健康管理的国际化企业。'],
      ['公司实力如何判断？', '看认证体系、研发团队、生产标准和持续运营能力。'],
      ['为什么要关注全球布局？', '布局决定运营稳定性，也影响长期学习与协作资源。'],
    ],
  },
  {
    id: 'product',
    icon: '🧬',
    title: '关于产品',
    color: '#38A169',
    questions: [
      ['为什么建议先自用？', '先体验，才能更真实地表达，不需要夸大。'],
      ['产品可以说治疗吗？', '不可以。只能做学习与体验分享，不做医疗化表述。'],
      ['多久会有感受？', '个体差异很大，表达上只能说“因人而异”。'],
    ],
  },
  {
    id: 'business',
    icon: '💼',
    title: '关于经营',
    color: '#3182CE',
    questions: [
      ['没有销售经验怎么办？', '按系统路径执行，用标准话术做低压力沟通。'],
      ['怕被拒绝怎么办？', '拒绝是筛选信号，不是个人否定。'],
      ['需要很高投入吗？', '先做自用与学习，不做高压投入。'],
    ],
  },
  {
    id: 'sharing',
    icon: '🤝',
    title: '关于分享',
    color: '#805AD5',
    questions: [
      ['怎么开口不尴尬？', '从自己体验出发，先交流，再邀约。'],
      ['朋友圈怎么发？', '分享价值内容，不发承诺式文案。'],
      ['遇到专业问题怎么办？', '转交给老师或标准课程，不硬答。'],
    ],
  },
  {
    id: 'compliance',
    icon: '⚠️',
    title: '关于合规',
    color: '#E53E3E',
    questions: [
      ['哪些表达不能说？', '不能治疗承诺、不能收益承诺、不能绝对化效果。'],
      ['能用案例做保证吗？', '不能。案例只可作为个体经验，必须注明因人而异。'],
      ['合规为什么是第一优先？', '合规决定长期可持续，违规会直接破坏信任与系统。'],
    ],
  },
]

export default function ObjectionsPage() {
  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">FAQ Library</span>
            <h1>新人疑义解答</h1>
            <p className="module-hero-subtitle">先答疑，再推进学习与行动</p>
            <p className="module-hero-description">
              覆盖新人最常见的五类问题：公司、产品、经营、分享、合规。
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="seven-day-stack">
            {objectionCategories.map((category) => (
              <article key={category.id} className="seven-day-card">
                <div className="seven-day-card-hero" style={{ borderLeft: `4px solid ${category.color}` }}>
                  <div className="seven-day-card-hero-main">
                    <span className="academy-link-card-icon">{category.icon}</span>
                    <div>
                      <h3>{category.title}</h3>
                      <p>共 {category.questions.length} 个高频问题</p>
                    </div>
                  </div>
                </div>
                <div className="seven-day-card-body">
                  <div className="seven-day-stack">
                    {category.questions.map(([q, a]) => (
                      <div key={q} className="seven-day-stack-card">
                        <div className="seven-day-note-title">Q：{q}</div>
                        <p>A：{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="异议解答用于澄清与教育，不用于承诺结果。所有对外表达保持合规边界。" />
      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
