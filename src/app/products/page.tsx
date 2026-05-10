'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Droplets, Activity, Brain, ChevronRight } from 'lucide-react'

const products = [
  {
    slug: 'gnakg',
    icon: '🧬',
    name: 'GnAKG',
    subtitle: '基因抗衰基础核心',
    description: 'HIGO基因抗衰产品体系的基础核心，通过补充α-酮戊二酸（AKG）来激活细胞活力，延缓衰老进程。',
    color: '#805AD5',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    targetUsers: ['健康管理人群', '抗衰关注人群', '精力下降人群', '代谢压力人群'],
    keyBenefits: ['充电年轻8.5-34岁', '白发转黑', '血压正常', '代谢提升']
  },
  {
    slug: 'gncell',
    icon: '🔬',
    name: 'GnCELL',
    subtitle: '细胞修复系统',
    description: '专注于细胞修复与再生的创新产品，帮助修复受损细胞，恢复机体年轻态。',
    color: '#38A169',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    targetUsers: ['慢性炎症人群', '免疫力低下人群', '衰老加速人群', '亚健康人群'],
    keyBenefits: ['饿死癌细胞', '慢性炎症消退', '肿瘤缩小', '关节不疼']
  },
  {
    slug: 'gn-hormone',
    icon: '⚖️',
    name: 'GN荷尔蒙',
    subtitle: '荷尔蒙平衡调节',
    description: '通过天然成分调节人体八大腺体，恢复荷尔蒙平衡，改善相关症状。',
    color: '#ED8936',
    gradient: 'linear-gradient(135deg, #ED8936 0%, #F6AD55 100%)',
    targetUsers: ['更年期人群', '内分泌失调人群', '情绪波动人群', '睡眠障碍人群'],
    keyBenefits: ['更年期症状消失', '睡眠改善', '情绪稳定', '能量提升']
  },
  {
    slug: 'gn-brain',
    icon: '🧠',
    name: 'GN大脑',
    subtitle: '脑健康与认知增强',
    description: '专注于大脑健康的创新产品，提升认知功能，保护脑细胞健康。',
    color: '#3182CE',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
    targetUsers: ['脑力工作者', '记忆力下降人群', '认知衰退人群', '学生群体'],
    keyBenefits: ['记忆力提升', '专注力增强', '反应速度加快', '睡眠质量改善']
  },
]

const scienceTopics = [
  { icon: '🧬', title: 'DNA修复', desc: '激活DNA修复机制' },
  { icon: '📈', title: 'NAD+', desc: '提升细胞能量水平' },
  { icon: '⏱️', title: '端粒', desc: '延长端粒长度' },
  { icon: '⚡', title: '线粒体', desc: '增强线粒体功能' },
  { icon: '🧪', title: '荷尔蒙轴', desc: '调节HPA/HPG轴' },
  { icon: '🛡️', title: '免疫炎症', desc: '平衡免疫与炎症' },
]

export default function ProductsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">H</div>
            <div>
              <div className="logo-text">HIGO全球商学院</div>
              <div className="logo-sub">HIGO Global Business School</div>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/company" className="nav-link">公司篇</Link>
            <Link href="/products" className="nav-link active">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🧬</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>产品篇</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                四大爆品详解，了解产品科学原理、配方成分、使用方法和标准讲解。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Products</span>
            <h2 className="section-title">四大爆品</h2>
            <p className="section-desc">HIGO核心产品体系，围绕基因抗衰科技</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="product-card-large">
                <div style={{ background: product.gradient, padding: '24px', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{product.name}</h3>
                      <p style={{ opacity: 0.9, fontSize: '0.875rem' }}>{product.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '16px' }}>{product.description}</p>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 600 }}>核心功效</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {product.keyBenefits.map((benefit) => (
                        <span key={benefit} style={{ background: product.color + '15', color: product.color, padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 500 }}>
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: product.color, fontSize: '0.875rem', fontWeight: 600 }}>
                    了解详情 <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Science Background - Mobile Cards */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Science</span>
            <h2 className="section-title">科研背景</h2>
          </div>

          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {scienceTopics.map((topic) => (
              <div key={topic.title} className="mobile-card">
                <div className="mobile-card-body" style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 12px' }}>
                    {topic.icon}
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{topic.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/products/science" className="btn btn-primary">查看完整科研背景 →</Link>
          </div>
        </div>
      </section>

      {/* Product Structure */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Structure</span>
            <h2 className="section-title">产品篇结构</h2>
            <p className="section-desc">每个产品页面的标准结构</p>
          </div>

          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
              {[
                { letter: 'A', title: '产品定位', desc: '一句话说明' },
                { letter: 'B', title: '适用人群', desc: '目标用户' },
                { letter: 'C', title: '科学原理', desc: '底层机制' },
                { letter: 'D', title: '配方成分', desc: '成分逻辑' },
                { letter: 'E', title: '产品优势', desc: '核心卖点' },
              ].map((item) => (
                <div key={item.letter} style={{ textAlign: 'center', padding: '20px', background: 'var(--bg-gray)', borderRadius: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--primary-dark)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, margin: '0 auto 12px' }}>
                    {item.letter}
                  </div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '16px' }}>
              {[
                { letter: 'F', title: '使用方法', desc: '建议用法' },
                { letter: 'G', title: '官方资料', desc: '图片/视频/PPT' },
                { letter: 'H', title: '标准讲解', desc: '1/3/10/30分钟' },
                { letter: 'I', title: '合规话术', desc: '推荐/禁止表达' },
              ].map((item) => (
                <div key={item.letter} style={{ textAlign: 'center', padding: '20px', background: 'var(--bg-gray)', borderRadius: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--primary-dark)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, margin: '0 auto 12px' }}>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item">
          <i className="fas fa-home"></i>
          <span>首页</span>
        </Link>
        <Link href="/company" className="mobile-nav-item">
          <i className="fas fa-building"></i>
          <span>公司</span>
        </Link>
        <Link href="/products" className="mobile-nav-item active">
          <i className="fas fa-capsules"></i>
          <span>产品</span>
        </Link>
        <Link href="/business" className="mobile-nav-item">
          <i className="fas fa-chart-line"></i>
          <span>经营</span>
        </Link>
      </div>
    </div>
  )
}