import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import ProductCard from '@/components/cards/product-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { productCatalog, productScienceTopics } from '@/lib/product-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '产品篇 | HIGO 全球商学院',
  description: '四大核心产品、科研背景与合规表达边界总览。',
}

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <Header activePath="/products" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Products System</span>
            <h1>产品篇</h1>
            <p className="module-hero-subtitle">讲机制、讲体验、讲边界</p>
            <p className="module-hero-description">统一产品表达逻辑，避免医疗化承诺和绝对化效果描述。</p>
            <div className="ui-action-row">
              <Link href="/products/science" className="btn btn-primary">
                查看科研背景
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Products</span>
            <h2 className="ui-title">核心产品</h2>
          </div>
          <div className="academy-grid-2" style={{ marginTop: '1.25rem' }}>
            {productCatalog.map((product) => (
              <ProductCard key={product.slug} href={`/products/${product.slug}`} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Science</span>
            <h2 className="ui-title">科研背景模块</h2>
          </div>
          <div className="academy-grid-4" style={{ marginTop: '1.25rem' }}>
            {productScienceTopics.map((topic) => (
              <div key={topic.title} className="academy-feature-card">
                <div className="academy-feature-card-head">
                  <span className="academy-feature-card-mark">{topic.icon}</span>
                  <h3>{topic.title}</h3>
                </div>
                <p>{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="所有产品内容统一采用支持性表达，不做疾病治疗承诺，不做效果与收益确定性表达。" />
      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
