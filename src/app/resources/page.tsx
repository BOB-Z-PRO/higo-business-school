import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

const resourceCategories = [
  { id: 'company', icon: '🏢', title: '公司资料', count: 12, color: '#0f172a', items: ['公司简介 PPT', '公司资质文件', '高管介绍', '宣传视频'] },
  { id: 'product', icon: '🧬', title: '产品资料', count: 24, color: '#10b981', items: ['产品手册', '检测报告', '科学文献', '产品视频'] },
  { id: 'system', icon: '📋', title: '制度资料', count: 8, color: '#2563eb', items: ['奖金制度', '晋升路径', 'SVIP 权益', '钻石权益'] },
  { id: 'ppt', icon: '📊', title: '讲课 PPT', count: 36, color: '#1e3a8a', items: ['招商 PPT', '产品 PPT', '团队建设 PPT', '心态培训 PPT'] },
  { id: 'script', icon: '📝', title: '标准话术', count: 20, color: '#d4af37', items: ['邀约话术', '成交话术', '带教话术', '异议处理'] },
  { id: 'poster', icon: '🖼️', title: '宣传海报', count: 48, color: '#dc2626', items: ['产品海报', '活动海报', '励志海报', '节日海报'] },
  { id: 'case', icon: '💬', title: '案例分享', count: 30, color: '#f97316', items: ['产品见证', '成长故事', '团队故事', '创业分享'] },
  { id: 'compliance', icon: '✅', title: '合规资料', count: 6, color: '#475569', items: ['合规手册', '禁止表达', '审核标准', '风险提示'] },
]

const metadataFields = ['标题', '类型', '所属模块', '适合阶段', '适合对象', '文件格式', '内容摘要', '使用场景', '官方审核', '是否可下载', '上传时间', '更新时间']

export default function ResourcesPage() {
  return (
    <div className="academy-page-shell">
      <Header activePath="/resources" />

      <section className="academy-hero" style={{ ['--hero-start' as string]: '#111827', ['--hero-end' as string]: '#1e3a8a' }}>
        <div className="container academy-hero-grid">
          <div className="academy-hero-inner">
            <span className="academy-kicker">Resource Center</span>
            <h1>素材中心</h1>
            <p className="academy-hero-copy">资料库服务经营者学习，不是杂乱网盘。所有素材都经过合规审核，并以更清晰的分类结构支持移动端检索与阅读。</p>
          </div>

          <div className="academy-hero-aside">
            <div className="academy-hero-stat">
              <strong>8 大分类</strong>
              <span>覆盖公司、产品、制度、海报、案例与合规资料</span>
            </div>
            <div className="academy-hero-stat">
              <strong>184+ 素材</strong>
              <span>为学习、讲解、会议和跟进沉淀可复用内容资产</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Resources</span>
            <h2 className="premium-title">素材分类</h2>
            <p className="premium-desc content-narrow">8 大分类，184 个素材，持续更新。</p>
          </div>

          <div className="academy-grid-4" style={{ marginTop: '2rem' }}>
            {resourceCategories.map((cat) => (
              <article key={cat.id} className="academy-link-card">
                <div className="academy-link-card-top" style={{ background: `linear-gradient(135deg, ${cat.color} 0%, color-mix(in srgb, ${cat.color} 68%, white) 100%)` }}>
                  <div className="academy-link-card-row">
                    <span className="academy-link-card-icon">{cat.icon}</span>
                    <div>
                      <h3>{cat.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.82rem', lineHeight: 1.7 }}>{cat.count} 个素材</p>
                    </div>
                  </div>
                </div>
                <div className="academy-link-card-body">
                  <div className="academy-soft-list">
                    {cat.items.map((item, index) => (
                      <div key={item} className="academy-soft-list-item" style={{ ['--accent-color' as string]: cat.color }}>
                        <span className="academy-soft-list-num">{index + 1}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section" style={{ background: 'rgba(226, 232, 240, 0.42)' }}>
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Features</span>
            <h2 className="premium-title">素材详情页字段</h2>
            <p className="premium-desc content-narrow">每个素材都包含完整的元数据，便于筛选、讲解和二次复用。</p>
          </div>

          <div className="academy-grid-4" style={{ marginTop: '2rem' }}>
            {metadataFields.map((field) => (
              <div key={field} className="academy-feature-card" style={{ ['--accent-color' as string]: '#10b981' }}>
                <div className="academy-feature-card-head">
                  <span className="academy-feature-card-mark">✓</span>
                  <h3>{field}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav activePath="/resources" items={mobileNavItems} />
    </div>
  )
}
