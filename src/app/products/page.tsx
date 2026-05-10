import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import ProductCard from '@/components/cards/product-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { productCatalog, productPageStructure, productScienceTopics } from '@/lib/product-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '产品篇 | HIGO 全球商学院',
  description:
    '查看 HIGO 四大核心产品的基础介绍、资料结构、科学背景与合规表达边界，支持更可维护的产品学习与分享。',
}

export default function ProductsPage() {
  return (
    <div className="academy-page-shell">
      <Header activePath="/products" />

      <section className="academy-hero" style={{ ['--hero-start' as string]: '#0f172a', ['--hero-end' as string]: '#1d4ed8' }}>
        <div className="container academy-hero-grid">
          <div className="academy-hero-inner">
            <span className="academy-kicker">Products System</span>
            <h1>产品篇</h1>
            <p className="academy-hero-copy">
              用统一的数据源管理产品介绍、资料结构与合规表达，帮助团队以更专业、稳重、可复用的方式讲清生命科学与健康管理内容。
            </p>
          </div>

          <div className="academy-hero-aside">
            <div className="academy-hero-stat">
              <strong>4 大产品</strong>
              <span>围绕细胞能量、代谢平衡、认知支持与年轻态管理展开</span>
            </div>
            <div className="academy-hero-stat">
              <strong>专业表达</strong>
              <span>统一使用支持性、机制型表达，不做确定性效果承诺</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Products</span>
            <h2 className="premium-title">四大核心产品</h2>
            <p className="premium-desc content-narrow">
              所有产品内容统一采用支持性表达，不涉及治疗、明确效果承诺或收益承诺。
            </p>
          </div>

          <div className="academy-grid-2" style={{ marginTop: '2rem' }}>
            {productCatalog.map((product) => (
              <ProductCard key={product.slug} href={`/products/${product.slug}`} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section" style={{ background: 'rgba(226, 232, 240, 0.42)' }}>
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Science</span>
            <h2 className="premium-title">科学背景模块</h2>
            <p className="premium-desc content-narrow">
              统一沉淀“能讲什么”，帮助团队以机制和支持逻辑组织表达。
            </p>
          </div>

          <div className="academy-grid-4" style={{ marginTop: '2rem' }}>
            {productScienceTopics.map((topic) => (
              <div key={topic.title} className="academy-feature-card">
                <div className="academy-feature-card-head" style={{ ['--accent-color' as string]: '#1d4ed8' }}>
                  <span className="academy-feature-card-mark">{topic.icon}</span>
                  <h3>{topic.title}</h3>
                </div>
                <p>{topic.desc}</p>
              </div>
            ))}
          </div>

          <div className="academy-cta-row" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
            <Link href="/products/science" className="btn btn-primary">
              查看完整科研背景
            </Link>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Structure</span>
            <h2 className="premium-title">产品资料结构</h2>
            <p className="premium-desc content-narrow">
              把“页面长什么样”也沉淀成标准结构，方便后续继续工程化。
            </p>
          </div>

          <div className="academy-panel academy-table-card" style={{ marginTop: '2rem' }}>
            <div className="academy-grid-3">
              {productPageStructure.map((item) => (
                <div key={item.letter} className="academy-stat-card">
                  <strong>{item.letter}</strong>
                  <h3>{item.title}</h3>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComplianceNotice description="产品分享建议优先使用机制解释、适用场景和真实资料，不使用疾病治疗、结果确定或个案替代普遍结论的表达。" />

      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
