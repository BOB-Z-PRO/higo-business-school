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
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/products" />

      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🧬</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>产品篇</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                用统一的数据源管理产品介绍、资料结构与合规表达，帮助页面内容更好维护，也让团队更容易复用。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Products</span>
            <h2 className="section-title">四大核心产品</h2>
            <p className="section-desc">所有产品内容统一采用支持性表达，不涉及治疗、明确效果承诺或收益承诺。</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            {productCatalog.map((product) => (
              <ProductCard key={product.slug} href={`/products/${product.slug}`} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Science</span>
            <h2 className="section-title">科学背景模块</h2>
            <p className="section-desc">统一沉淀“能讲什么”，帮助团队以机制和支持逻辑组织表达。</p>
          </div>

          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {productScienceTopics.map((topic) => (
              <div key={topic.title} className="mobile-card">
                <div className="mobile-card-body" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      margin: '0 auto 12px',
                    }}
                  >
                    {topic.icon}
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>
                    {topic.title}
                  </h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/products/science" className="btn btn-primary">
              查看完整科研背景 →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Structure</span>
            <h2 className="section-title">产品资料结构</h2>
            <p className="section-desc">把“页面长什么样”也沉淀成标准结构，方便后续继续工程化。</p>
          </div>

          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {productPageStructure.map((item) => (
                <div key={item.letter} style={{ textAlign: 'center', padding: '20px', background: 'var(--bg-gray)', borderRadius: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--primary-dark)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      margin: '0 auto 12px',
                    }}
                  >
                    {item.letter}
                  </div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>{item.desc}</p>
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
