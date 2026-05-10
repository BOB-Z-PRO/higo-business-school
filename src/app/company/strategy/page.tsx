'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Target, Heart, Globe, Crown, Users, TrendingUp, DollarSign } from 'lucide-react'

// 海购国际战略研讨会 - 官方数据
const original = {
  vision: '用基因科技，创造生命奇迹',
  mission: '为会员构建一个没有试错成本的创业空间，实现从生存，生活到生命的阶层跨越',
  positioning: '大健康产业链，头部产业中的皇冠',
  productPositioning: '生命科技 · 基因修复 · 人体生态重建',
}

const twoSystems = {
  title: '两个体制',
  items: [
    {
      name: '全员股权分红制',
      desc: '公司红利及市场高层利润反哺机制',
      detail: '10% 奖金置换 → 公司 20% 股权分红',
      breakdown: [
        '15% → 9个级别系数加权分红',
        '5% → 功勋福利平均分红',
      ],
    },
    {
      name: '功勋福利制',
      desc: '三星代理或以上享受功勋福利',
      benefits: [
        { level: '三星代理', benefit: '海购爱心基金守护' },
        { level: '二钻石', benefit: '四周业绩合格，买员工社保' },
        { level: '二钻石', benefit: '温泉度假及体检福利' },
        { level: '一黑钻以上', benefit: '新山市黑钻别墅入住规划' },
        { level: '三黑钻以上', benefit: '美国洛杉矶黑钻别墅入住规划' },
        { level: '钻石以上', benefit: '海二代留学计划福利' },
        { level: '所有会员', benefit: '海购会员账号世袭继承' },
      ],
    },
  ],
}

const threeHomes = [
  {
    name: '生存空间',
    icon: '🏕',
    color: '#38A169',
    target: '1-2个月快速建立职业生态',
    income: '周收入 500$',
    goal: '先养活自己，再养活家人',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
  },
  {
    name: '发展空间',
    icon: '🌱',
    color: '#3182CE',
    target: '从生存空间进入发展空间',
    income: '周收入 2000$ 以上',
    goal: '拥有对生活的选择权',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
  },
  {
    name: '自由空间',
    icon: '🚀',
    color: '#805AD5',
    target: '从发展空间进入到自由空间',
    income: '周收入 10000$（三星钻石）',
    goal: '实现家庭阶层跃升、全球管道收益、财富自由',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
  },
]

const fourBonuses = [
  {
    name: '生命红利',
    icon: '🧬',
    color: '#E53E3E',
    points: [
      'Gn抑癌剂 - 阻断癌细胞裂变',
      'Gn脑动力 - 大脑回春更年轻',
      'Gn生殖修复 - 修复男女生殖，肾气充沛',
      'GnAKG - 人类长寿科技的天花板',
      '轻松逆龄8.5-34岁',
      '修复受损DNA，让DNA保持完整性',
    ],
    highlight: '生命红利，将形成新一轮经济红利的风口',
  },
  {
    name: '支付红利',
    icon: '💳',
    color: '#D69E2E',
    points: [
      '全球首创：消费支付 = PV值 = $',
      '国际VIS卡绑定全球各种支付系统（支付宝）',
      '在全球任何场景消费支付时，都变成高频跳动的市场业绩(PV值)',
      '提现更快、更方便、更安全',
      '实现全球全场景消费支付都产生PV值',
    ],
    highlight: '全球首创，消费即生意',
  },
  {
    name: '连锁红利',
    icon: '🏪',
    color: '#38A169',
    points: [
      '海购国际商城会员跨界分润系统',
      '会员与会员店的互联',
      '会员与生产商的互联',
      '国内与国际的互联',
      '打造国际系统万店连锁，实现百业跨界互联价值',
      '万店连锁，一连终身',
    ],
    highlight: '开一家店，连终身收入',
  },
  {
    name: '数据红利',
    icon: '📊',
    color: '#3182CE',
    points: [
      '有效数据 $ 生态数据 $ 金融价值',
      '生命黑科技系列爆品引流',
      '打造全球会员制消费，分享分润生态系统',
      '通过支付红利，强关系链接全球会员',
      '形成最具活跃度，超大流量的有效数据',
      '实现多渠道数据变现',
    ],
    highlight: '人人创造数据，人人享有数据红利分配权',
  },
]

const levelBonus = [
  { level: '三黑钻', ratio: '400%' },
  { level: '二黑钻', ratio: '340%' },
  { level: '一黑钻', ratio: '280%' },
  { level: '三钻石', ratio: '220%' },
  { level: '二钻石', ratio: '160%' },
  { level: '一钻石', ratio: '100%' },
  { level: '三星代理', ratio: '80%' },
  { level: '二星代理', ratio: '60%' },
  { level: '一星代理', ratio: '基准' },
]

export default function CompanyStrategyPage() {
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

      <section style={{ background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🌍</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>海购国际战略</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                了解公司的初心、使命、定位和全球化布局
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Strategy</span>
            <h2 className="section-title">初心与定位</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <Target size={48} color="#38A169" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>愿景 Vision</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{strategy.vision}</p>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <Heart size={48} color="#E53E3E" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>使命 Mission</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{strategy.mission}</p>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <Globe size={48} color="#3182CE" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>定位 Positioning</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{strategy.positioning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Sentences */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core</span>
            <h2 className="section-title">海购五句话</h2>
            <p className="section-desc">理解HIGO商业生态的核心框架</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
            {fiveSentences.map((item) => (
              <div key={item.num} style={{ background: 'white', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '48px', height: '48px', background: '#38A169', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0 }}>
                  {item.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9375rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Layout */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Global</span>
            <h2 className="section-title">全球布局</h2>
            <p className="section-desc">6个国家 · 4大洲</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {globalLayout.map((location) => (
              <div key={location.country} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '2rem' }}>{location.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{location.country}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#38A169', background: '#38A16910', padding: '2px 8px', borderRadius: '50px' }}>{location.role}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{location.focus}</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginTop: '4px' }}>{location.region}</p>
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

      {/* Market Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Features</span>
            <h2 className="section-title">市场特点</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {marketFeatures.map((feature) => (
              <div key={feature.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{feature.icon}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '8px' }}>{feature.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{feature.desc}</p>
              </div>
            ))}
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