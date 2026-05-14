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
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/business" />

      <section style={{ background: `linear-gradient(135deg, ${category.color} 0%, #2D3748 100%)`, color: 'white', padding: '72px 0' }}>
        <div className="container">
          <Link href="/scripts" style={{ display: 'inline-flex', marginBottom: '18px', background: 'rgba(255,255,255,0.15)', padding: '8px 14px', borderRadius: '999px', fontSize: '0.84rem', fontWeight: 700 }}>
            返回话术总入口
          </Link>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px' }}>{category.title}</h1>
          <p style={{ fontSize: '1.02rem', opacity: 0.92, lineHeight: 1.8, maxWidth: '760px' }}>{category.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{category.shortTitle}</span>
            <h2 className="section-title">{category.title}示例</h2>
            <p className="section-desc">每条都包含推荐说法、不建议说法、合规提醒和复制按钮。</p>
          </div>

          <div style={{ display: 'grid', gap: '18px' }}>
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
