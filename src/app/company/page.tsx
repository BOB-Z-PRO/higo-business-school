import Link from 'next/link'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

const companySections = [
  {
    icon: '🏢',
    title: '公司介绍',
    desc: '了解 HIGO 全球生物科技集团的基本信息、发展和愿景。',
    href: '/company/intro',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
  },
  {
    icon: '🌍',
    title: '海购国际战略',
    desc: '了解公司的初心、使命、定位和全球化布局。',
    href: '/company/strategy',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #10b981 100%)',
  },
  {
    icon: '📋',
    title: '海购五句话',
    desc: '一个生态系统、两个体制、三大家园、四大红利、全球市场。',
    href: '/company/five-sentences',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)',
  },
  {
    icon: '🗺️',
    title: '全球布局',
    desc: '美国、马来西亚、韩国、越南、加拿大、日本。',
    href: '/company/global',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
  },
  {
    icon: '🏆',
    title: '企业实力',
    desc: '科研实力、供应链、物流、客服、支付体系。',
    href: '/company/strength',
    gradient: 'linear-gradient(135deg, #92400e 0%, #d4af37 100%)',
  },
  {
    icon: '✅',
    title: '资质认证',
    desc: 'FDA、cGMP、产品认证、检测报告。',
    href: '/company/certifications',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
  },
  {
    icon: '🏛',
    title: '企业文化',
    desc: '核心价值观、团队精神、行为准则。',
    href: '/company/culture',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
  },
  {
    icon: '❤️',
    title: '爱心基金会',
    desc: '公益项目、媒体报道、社会责任。',
    href: '/company/foundation',
    gradient: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)',
  },
  {
    icon: '🔮',
    title: '未来前景',
    desc: '大健康趋势、跨境电商、基因抗衰市场分析。',
    href: '/company/future',
    gradient: 'linear-gradient(135deg, #111827 0%, #2563eb 100%)',
  },
]

const stats = [
  { num: '6年', label: '深耕生命科学与健康管理' },
  { num: '4大洲', label: '全球业务与服务布局' },
  { num: '7大', label: '国际认证与质量标准' },
  { num: '100+', label: '专家与顾问支持网络' },
]

const countries = [
  { flag: '🇺🇸', name: '美国', role: '全球总部' },
  { flag: '🇲🇾', name: '马来西亚', role: '全球运营中心' },
  { flag: '🇰🇷', name: '韩国', role: '首尔分公司' },
  { flag: '🇻🇳', name: '越南', role: '胡志明分公司' },
]

export default function CompanyPage() {
  return (
    <div className="academy-page-shell">
      <Header activePath="/company" />

      <section className="academy-hero" style={{ ['--hero-start' as string]: '#0f172a', ['--hero-end' as string]: '#1e3a8a' }}>
        <div className="container academy-hero-grid">
          <div className="academy-hero-inner">
            <span className="academy-kicker">Corporate Story</span>
            <h1>公司篇</h1>
            <p className="academy-hero-copy">了解 HIGO 是谁，建立基础信任，并用更专业的结构认识公司的科研、布局、文化与长期战略。</p>
          </div>

          <div className="academy-hero-aside">
            <div className="academy-hero-stat">
              <strong>全球布局</strong>
              <span>从科研、制造到市场拓展，形成国际化运营骨架</span>
            </div>
            <div className="academy-hero-stat">
              <strong>长期主义</strong>
              <span>强调组织使命、产业协同和可持续成长叙事</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="academy-grid-4">
            {stats.map((stat) => (
              <div key={stat.label} className="academy-stat-card">
                <strong>{stat.num}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Company</span>
            <h2 className="premium-title">公司介绍模块</h2>
            <p className="premium-desc content-narrow">全面了解 HIGO 全球生物科技集团的核心叙事与结构化信息。</p>
          </div>

          <div className="academy-grid-3" style={{ marginTop: '2rem' }}>
            {companySections.map((section) => (
              <Link key={section.href} href={section.href} className="academy-link-card">
                <div className="academy-link-card-top" style={{ background: section.gradient }}>
                  <div className="academy-link-card-row">
                    <span className="academy-link-card-icon">{section.icon}</span>
                    <div>
                      <h3>{section.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.82rem', lineHeight: 1.7 }}>{section.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="academy-link-card-body">
                  <span className="academy-link-card-cta">了解详情 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section" style={{ background: 'rgba(226, 232, 240, 0.42)' }}>
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">About HIGO</span>
            <h2 className="premium-title">关于 HIGO</h2>
          </div>

          <div className="academy-grid-2" style={{ marginTop: '2rem' }}>
            <div className="academy-panel mobile-readable">
              <h3>HIGO 全球生物科技集团</h3>
              <p>
                HIGO GLOBAL BIOTECH GROUP（海购全球生物科技集团）是一家专注于基因抗衰科技的跨国企业，致力于用基因科技创造生命奇迹。
              </p>
              <p>
                公司自 2020 年成立以来，在美国、马来西亚、韩国、越南、加拿大、日本等国家设有运营中心或分支机构，业务遍及全球 4 大洲。
              </p>
              <p>
                HIGO 整合了全球科研资源，拥有由哈佛、杜克、斯坦福等院校背景学者组成的专家支持网络，持续深耕基因抗衰与健康管理方向。
              </p>
              <div className="academy-cta-row" style={{ marginTop: '1rem' }}>
                <Link href="/company/intro" className="btn btn-primary">
                  查看完整介绍
                </Link>
              </div>
            </div>

            <div className="academy-grid-2">
              {countries.map((country) => (
                <div key={country.name} className="academy-feature-card" style={{ textAlign: 'center', ['--accent-color' as string]: '#1d4ed8' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>{country.flag}</div>
                  <h3>{country.name}</h3>
                  <p>{country.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
