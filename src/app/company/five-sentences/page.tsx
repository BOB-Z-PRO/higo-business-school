'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Layers, Building, Home, TrendingUp, Globe, Users, Award, Wallet, ShoppingBag, Database } from 'lucide-react'

const content = {
  title: '海购五句话',
  subtitle: '全球会员消费分享终身分润的生态系统',
}

const fiveSentences = [
  {
    num: '一',
    icon: '🔄',
    title: '一个生态系统',
    desc: '海购是完整的商业生态系统，集产品、平台、教育、服务于一体',
    details: [
      '产品系统：GnAKG、GnCELL、GnHORMONE、GnBRAIN四大基因抗衰产品',
      '平台系统：海购国际商城，连接全球消费者和创业者',
      '支付系统：VIS卡绑定全球支付系统，消费即产生PV值',
      '万店连锁：实现百业跨界互联，打造国际系统万店连锁',
    ],
    color: '#1A365D',
  },
  {
    num: '二',
    icon: '⚖️',
    title: '两个体制',
    desc: '全员股权分红制 + 功勋福利制',
    details: [
      '全员股权分红制：10%奖金置换公司20%股权分红',
      '15%按9个级别系数加权分红，5%功勋福利平均分红',
      '功勋福利制：三星代理及以上享受多层级福利保障',
      '海购会员账号可世袭继承',
    ],
    color: '#38A169',
  },
  {
    num: '三',
    icon: '🏠',
    title: '三大家园',
    desc: '完整的经营者成长路径',
    details: [
      '生存空间（Survival Home）：周收入500$，1-2个月快速建立',
      '生活空间（Living Home）：周收入2000$，拥有对生活的选择权',
      '生命空间（Home of Life）：周收入10000$，实现家庭阶层跃升',
      '从生存到生活到生命，实现阶层跨越',
    ],
    color: '#3182CE',
  },
  {
    num: '四',
    icon: '💰',
    title: '四大红利',
    desc: '全方位的收益来源',
    details: [
      '生命红利：四大基因抗衰产品，轻松逆龄8.5-34岁',
      '支付红利：全球首创VIS卡，消费即产生PV值，提现更快更安全',
      '连锁红利：万店连锁，一连终身，流量红利+推店奖励+营业额提点',
      '数据红利：有效数据变现，流量多渠道变现，主体上市时共享资本价值',
    ],
    color: '#D69E2E',
  },
  {
    num: '五',
    icon: '🌍',
    title: '全球市场',
    desc: '业务覆盖全球6个国家',
    details: [
      '美国：全球总部，技术研发',
      '马来西亚：全球运营中心，东南亚市场运营',
      '韩国、越南：东亚/东南亚市场',
      '加拿大、日本：北美/东亚高端市场',
    ],
    color: '#805AD5',
  },
]

const fourDividends = [
  {
    icon: '🧬',
    title: '生命红利',
    color: '#38A169',
    points: [
      'GnAKG：人类长寿科技的天花板，轻松逆龄8.5-34岁',
      'Gn抑癌剂：阻断癌细胞裂变',
      'Gn脑动力：大脑回春更年轻',
      'Gn生殖修复：修复男女生殖，肾气充沛',
    ],
    highlight: '将形成新一轮经济红利的风口',
  },
  {
    icon: '💳',
    title: '支付红利',
    color: '#3182CE',
    points: [
      'VIS卡绑定全球各种支付系统（支付宝等）',
      '消费支付=PV值，高频跳动的市场业绩',
      '全球任何场景消费都产生PV值',
      '提现更快、更方便、更安全',
    ],
    highlight: '全球首创，行业领先',
  },
  {
    icon: '🏪',
    title: '连锁红利',
    color: '#D69E2E',
    points: [
      '万店连锁：一连终身',
      '在海购国际商城开店=流量红利',
      '推店奖励机制',
      '店铺营业额提点',
    ],
    highlight: '实现百业跨界互联价值',
  },
  {
    icon: '📊',
    title: '数据红利',
    color: '#805AD5',
    points: [
      '有效数据：人人贡献数据，人人共享数据价值',
      '生态数据：打造全球会员制消费生态',
      '金融价值：主体或并购上市时共享资本溢价',
      '多渠道数据变现',
    ],
    highlight: '超大流量的有效数据',
  },
]

const threeHomes = [
  {
    name: '生存空间',
    english: 'Survival Home',
    icon: '🏠',
    color: '#38A169',
    requirement: '1-2个月',
    income: '周收入500$',
    goal: '快速建立职业生态，先养活自己，在养活家人',
  },
  {
    name: '生活空间',
    english: 'Living Home',
    icon: '🌟',
    color: '#805AD5',
    requirement: '持续经营',
    income: '周收入2000$',
    goal: '拥有对生活的选择权',
  },
  {
    name: '生命空间',
    english: 'Home of Life',
    icon: '👑',
    color: '#D69E2E',
    requirement: '成就领袖',
    income: '周收入10000$',
    goal: '实现家庭阶层跃升、全球管道收益、财富自由',
  },
]

export default function CompanyFiveSentencesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
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
            <Link href="/company" className="nav-link active">公司篇</Link>
            <Link href="/products" className="nav-link">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>📋</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{content.title}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                全球会员消费分享终身分润的生态系统
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Sentences Detail */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core</span>
            <h2 className="section-title">五句话详解</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
            {fiveSentences.map((item) => (
              <div key={item.num} style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ width: '64px', height: '64px', background: item.color, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.5rem', flexShrink: 0 }}>
                    {item.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)' }}>{item.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1rem', marginBottom: '16px' }}>{item.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                      {item.details.map((detail, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-gray)', padding: '12px 16px', borderRadius: '8px' }}>
                          <div style={{ width: '8px', height: '8px', background: item.color, borderRadius: '50%', flexShrink: 0 }} />
                          <span style={{ color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Dividends */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Dividends</span>
            <h2 className="section-title">四大红利</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            {fourDividends.map((dividend) => (
              <div key={dividend.title} style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: dividend.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>
                    {dividend.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: dividend.color }}>{dividend.title}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {dividend.points.map((point, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', background: dividend.color, borderRadius: '50%', marginTop: '6px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem', lineHeight: 1.5 }}>{point}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: dividend.color + '15', padding: '8px 12px', borderRadius: '8px' }}>
                  <span style={{ color: dividend.color, fontSize: '0.8125rem', fontWeight: 600 }}>{dividend.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Homes */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes</span>
            <h2 className="section-title">三大家园</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {threeHomes.map((home) => (
              <div key={home.name} style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>{home.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: home.color, marginBottom: '4px' }}>{home.name}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '16px' }}>{home.english}</p>
                <div style={{ background: home.color + '15', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: home.color }}>{home.income}</div>
                </div>
                <p style={{ color: 'var(--text-dark)', fontSize: '0.875rem', lineHeight: 1.6 }}>{home.goal}</p>
                <div style={{ marginTop: '12px', color: 'var(--text-gray)', fontSize: '0.75rem' }}>入门周期：{home.requirement}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Positioning */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Positioning</span>
            <h2 className="section-title">海购的产业定位</h2>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)', borderRadius: '16px', padding: '48px', color: 'white', marginTop: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '24px' }}>👑</div>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>大健康产业链</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px' }}>头部产业中的皇冠</p>
            <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              海购站在大健康产业的历史风口，以基因抗衰科技为核心，致力于成为全球抗衰老健康的推动者和引领者
            </p>
          </div>
        </div>
      </section>

      {/* Product Positioning */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Products</span>
            <h2 className="section-title">海购的产品功能定位</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '64px', height: '64px', background: '#38A169', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '2rem' }}>🧬</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>生命科技</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>
                以基因抗衰科技为核心，通过修复受损DNA，让DNA保持完整性，实现人体生态重建
              </p>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '64px', height: '64px', background: '#3182CE', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '2rem' }}>🔬</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>基因修复，系列产品</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>
                GnAKG、GnCELL、GnHORMONE、GnBRAIN四大基因抗衰产品，覆盖人体各大系统
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Value */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Value</span>
            <h2 className="section-title">海购商业模式价值定位</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔗</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>重新定义"分享"价值</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>
                海购重新定义"分享"价值，链接拥有世界。通过分享健康与事业机会，让每一位普通人都能参与全球商业价值分配
              </p>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌐</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>重建行业生态</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>
                海购重建行业生态，创新改变世界。以跨境电商平台为基础，整合全球资源，打造全新的商业生态系统
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Vision</span>
            <h2 className="section-title">海购的初心与使命</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', borderRadius: '16px', padding: '32px', color: 'white' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>初心</h3>
              <p style={{ lineHeight: 1.8, opacity: 0.95 }}>
                为会员构建一个没有试错成本的创业空间，实现从生存，生活到生命的阶层跨越！
              </p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '16px', padding: '32px', color: 'white' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>使命</h3>
              <p style={{ lineHeight: 1.8, opacity: 0.95 }}>
                用基因科技，创造生命奇迹！把会员对健康、逆龄、美丽与财富的追求变成现实！
              </p>
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', marginTop: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>价值远景</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-gray)', lineHeight: 1.8 }}>
              安得广厦千万间，大庇天下寒士俱欢颜
            </p>
            <p style={{ fontSize: '1rem', color: '#D69E2E', marginTop: '8px' }}>
              海购就是广厦千万间，让天下寒士俱欢颜 — 拥抱海购，一生足够！
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>
    </div>
  )
}