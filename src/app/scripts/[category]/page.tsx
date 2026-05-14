import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ComplianceNotice from '@/components/common/compliance-notice'
import ScriptCard from '@/components/scripts/script-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import {
  scriptCategories,
  scriptCategoryMap,
  scriptItems,
  type ScriptCategory,
} from '@/lib/scripts-data'
import { mobileNavItems } from '@/lib/site-data'

type ScriptCategoryPageProps = {
  params: {
    category: ScriptCategory
  }
}

export function generateStaticParams() {
  return scriptCategories.map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: ScriptCategoryPageProps): Promise<Metadata> {
  const category = scriptCategoryMap[params.category]

  if (!category) {
    return {}
  }

  return {
    title: `${category.title} | HIGO 全球商学院`,
    description: category.description,
  }
}

export default function ScriptCategoryPage({ params }: ScriptCategoryPageProps) {
  const category = scriptCategoryMap[params.category]

  if (!category) {
    notFound()
  }

  const items = scriptItems.filter((item) => item.category === params.category)

  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <Link href="/scripts" className="module-hero-back-link">
            返回话术总入口
          </Link>
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">{category.shortTitle}</span>
            <h1>{category.title}</h1>
            <p className="module-hero-description">{category.description}</p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">{category.shortTitle}</span>
            <h2 className="ui-title">{category.title}示例</h2>
            <p className="ui-desc ui-readable">每条都包含推荐说法、不建议说法、合规提醒和复制按钮。</p>
          </div>

          <div className="script-card-list">
            {items.map((item) => (
              <ScriptCard key={item.id} item={item} accentColor={category.color} />
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="话术页面只用于训练统一表达，不用于制造压迫、承诺收益或放大疗效。拿不准时，优先借力课程和会议。" />

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
