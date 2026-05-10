import Link from 'next/link'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

const meetingTypes = [
  {
    id: 'opportunity',
    icon: '🎯',
    title: '招商说明会',
    desc: '让新人和意向人看懂 HIGO 事业。',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #10b981 100%)',
    items: ['招商说明会基础版', '招商说明会完整版', '主持人开场白'],
  },
  {
    id: 'product',
    icon: '🧬',
    title: '产品分享会',
    desc: '建立产品信任，让新人愿意自用。',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    items: ['AKG 产品专场', 'CELL 产品专场', '荷尔蒙产品专场'],
  },
  {
    id: 'newcomer',
    icon: '🌱',
    title: '新人启动会',
    desc: '让新人知道从哪里开始。',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #06b6d4 100%)',
    items: ['欢迎新人流程', '新人最容易犯的错误', '7 天学习路径'],
  },
  {
    id: 'morning',
    icon: '☀️',
    title: '早会精选',
    desc: '统一思想、建立氛围、持续学习。',
    color: '#d4af37',
    gradient: 'linear-gradient(135deg, #92400e 0%, #d4af37 100%)',
    items: ['早会主题', '分享人结构', '复盘与提醒'],
  },
  {
    id: 'leader',
    icon: '👑',
    title: '领导人会议',
    desc: '培养团队负责人。',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #9a3412 0%, #f97316 100%)',
    items: ['领导人会议主题', '核心问题讨论', '团队管理重点'],
  },
  {
    id: 'ppt',
    icon: '📊',
    title: '讲课 PPT 中心',
    desc: '让经营者学习“怎么讲”。',
    color: '#0f172a',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    items: ['招商说明会课件', '产品讲解 PPT', '团队建设 PPT'],
  },
]

const standardBlocks = [
  { num: '1', title: '会议标题', desc: '清晰标注场景与目的' },
  { num: '2', title: '会议类型', desc: '快速识别适用模板' },
  { num: '3', title: '适合对象', desc: '明确谁来听、谁来讲' },
  { num: '4', title: '学习目标', desc: '每次会议聚焦一个结果' },
  { num: '5', title: '视频/音频', desc: '统一学习材料入口' },
  { num: '6', title: 'PPT 下载', desc: '配套标准课件' },
  { num: '7', title: '逐字稿', desc: '沉淀可复制表达' },
  { num: '8', title: '精华摘要', desc: '方便会后复盘' },
  { num: '9', title: '金句', desc: '提炼核心表达' },
  { num: '10', title: '合规提醒', desc: '稳住表达边界' },
  { num: '11', title: '推荐下一步', desc: '串联后续学习动作' },
]

export default function MeetingsPage() {
  return (
    <div className="academy-page-shell">
      <Header activePath="/meetings" />

      <section className="academy-hero" style={{ ['--hero-start' as string]: '#0f172a', ['--hero-end' as string]: '#0f766e' }}>
        <div className="container academy-hero-grid">
          <div className="academy-hero-inner">
            <span className="academy-kicker">Meeting Center</span>
            <h1>会议中心</h1>
            <p className="academy-hero-copy">
              会议是复制发动机。标准化会议学习与复制，帮助你建立高效、合规、易于落地的团队运作系统。
            </p>
          </div>

          <div className="academy-hero-aside">
            <div className="academy-hero-stat">
              <strong>6 类会议</strong>
              <span>覆盖招商、产品、新人带教、早会与领导人培养场景</span>
            </div>
            <div className="academy-hero-stat">
              <strong>SOP 先行</strong>
              <span>从流程、主持稿到复盘动作，统一成训练手册式结构</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="academy-overview-link-grid" style={{ marginBottom: '2rem' }}>
            <Link href="/meetings/playbooks" className="academy-overview-link">
              <h3>会议 SOP 库</h3>
              <p>新增复制模块，集中查看会议目标、流程、主持稿与会后复盘结构。</p>
            </Link>
          </div>

          <div className="premium-section-header">
            <span className="premium-badge">Meeting Center</span>
            <h2 className="premium-title">六大会议类型</h2>
            <p className="premium-desc content-narrow">系统化会议学习与复制，保持内容专业感与移动端阅读节奏。</p>
          </div>

          <div className="academy-grid-3" style={{ marginTop: '2rem' }}>
            {meetingTypes.map((type) => (
              <article key={type.id} className="academy-link-card">
                <div className="academy-link-card-top" style={{ background: type.gradient }}>
                  <div className="academy-link-card-row">
                    <span className="academy-link-card-icon">{type.icon}</span>
                    <div>
                      <h3>{type.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.82rem', lineHeight: 1.7 }}>{type.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="academy-link-card-body">
                  <div className="academy-soft-list">
                    {type.items.map((item, index) => (
                      <div key={item} className="academy-soft-list-item" style={{ ['--accent-color' as string]: type.color }}>
                        <span className="academy-soft-list-num">{index + 1}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/meetings/${type.id}`} className="academy-link-card-cta">
                    查看全部 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section" style={{ background: 'rgba(226, 232, 240, 0.42)' }}>
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Standard</span>
            <h2 className="premium-title">会议详情页结构</h2>
            <p className="premium-desc content-narrow">每个会议页面的标准结构，统一学习与输出体验。</p>
          </div>

          <div className="academy-grid-4" style={{ marginTop: '2rem' }}>
            {standardBlocks.map((item) => (
              <div key={item.num} className="academy-feature-card" style={{ ['--accent-color' as string]: '#0f766e' }}>
                <div className="academy-feature-card-head">
                  <span className="academy-feature-card-mark">{item.num}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="academy-cta-row" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
            <Link href="/meetings/playbooks" className="btn btn-primary">
              查看标准化会议流程
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav activePath="/meetings" items={mobileNavItems} />
    </div>
  )
}
