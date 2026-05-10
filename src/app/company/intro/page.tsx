'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Target, Globe, Zap, TrendingUp, ChevronRight, Award, Users, FlaskConical, Heart } from 'lucide-react'

const milestones = [
  { year: '2020', title: '启动纪元', desc: '开启HIGO大健康战略，奠定长寿科技基础' },
  { year: '2021-2023', title: '科研突破', desc: 'Gn系列体系成立，GnAKG/GnCell立项' },
  { year: '2024', title: '全球化启动', desc: 'HIGO电商平台发布，马来西亚中心启用' },
  { year: '2025', title: '集团化升级', desc: '美国总部独立运营，韩国越南成立分公司' },
  { year: '2026', title: '生态闭环', desc: '全新工厂投产，抗衰老医学中心启用' },
  { year: '2027-2028', title: '全球视野', desc: '全球品牌布局，登陆NASDAQ' },
]

const global布局 = [
  { region: 'US 北美总部', location: '美国加州', facilities: '西部工厂3万㎡ cGMP | 东部工厂5万㎡ NSF', icon: '🇺🇸' },
  { region: 'CN 亚洲枢纽', location: '中国/东南亚', facilities: '跨境网络覆盖200+城市', icon: '🇨🇳' },
  { region: 'EU 欧洲辐射', location: '德国/瑞士', facilities: '抗衰老诊所合作，欧盟认证通道', icon: '🇪🇺' },
]

const advantages = [
  { icon: '🔬', title: '科研壁垒', desc: '与IAAMC深度合作，哈佛/斯坦福科学家团队审方', color: '#805AD5' },
  { icon: '🏭', title: '制造实力', desc: '美国双工厂（cGMP/FDA/NSF），制药级标准', color: '#3182CE' },
  { icon: '📊', title: '临床验证', desc: '通过RCT试验，生物年龄逆转8.5-34岁有据可查', color: '#38A169' },
  { icon: '🌐', title: '全球生态', desc: '科研+生产+医疗+销售+服务五维一体生态体系', color: '#D69E2E' },
]

const scientists = [
  { name: 'David A. Horne, Ph.D.', title: 'City of Hope 国家医学中心副教务长', specialties: ['MIT化学博士', 'NCI癌症治疗首席研究员', '主导开发AOH1996'], icon: '👨‍🔬' },
  { name: '史友根教授', title: '国际知名线粒体生物学家', specialties: ['线粒体功能与衰老机制专家', 'Nature/Cell发表论文', 'NAD+提升机制阐明'], icon: '🧬' },
  { name: 'Ralph A. DeFronzo, M.D.', title: '德克萨斯大学健康科学中心', specialties: ['糖尿病与代谢全球权威', '500+篇论文引用10万次', 'ADA杰出贡献奖'], icon: '👨‍⚕️' },
  { name: '黄文栋教授', title: '抗衰老医学与营养学专家', specialties: ['营养基因组学研究先驱', '精准营养干预方案', '功能医学临床经验'], icon: '📚' },
]

const achievements = [
  { num: '140W+', label: '注册会员', color: '#38A169' },
  { num: '92%', label: '复购率', color: '#3182CE' },
  { num: '400+', label: '钻石会员', color: '#805AD5' },
  { num: '30+', label: '黑钻会员', color: '#D69E2E' },
]

const fourProducts = [
  { name: 'GN AKG', subtitle: '打开长寿开关', icon: '🧬', color: '#805AD5' },
  { name: 'GN CELL', subtitle: '细胞的清道夫', icon: '🔬', color: '#38A169' },
  { name: 'GN 荷尔蒙', subtitle: '重返二次青春', icon: '⚖️', color: '#ED8936' },
  { name: 'GN 大脑', subtitle: '智慧升级保鲜', icon: '🧠', color: '#3182CE' },
]

const certifications = [
  'FDA Registered', 'cGMP', 'Non-GMO', 'Lab Tested', 'HALAL', 'NSF International', 'SGS Tested', 'ISO 9001:2015'
]

export default function CompanyIntroPage() {
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

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} /> 返回公司篇
          </button>
          <div style={{ marginTop: '20px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>HIGO全球生物科技集团</h1>
            <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '16px' }}>以人为本的战略设计 · 重新定义人类生命边界的长寿科技平台</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, fontStyle: 'italic' }}>ANCIENT WISDOM MEETS FRONTIER SCIENCE</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Mission</span>
            <h2 className="section-title">探索生命极光之旅</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            <div className="mobile-card">
              <div className="mobile-card-header" style={{ background: '#38A169' }}>
                <Target size={18} color="white" />
                <span>使命愿景</span>
              </div>
              <div className="mobile-card-body">
                <p style={{ color: 'var(--text-dark)', fontSize: '0.9375rem', lineHeight: 1.7, fontWeight: 500 }}>
                  点燃长期成长的动力，让你对健康、年轻态和美好生活的追求更有方向。
                </p>
              </div>
            </div>
            <div className="mobile-card">
              <div className="mobile-card-header" style={{ background: '#805AD5' }}>
                <Zap size={18} color="white" />
                <span>科技突破</span>
              </div>
              <div className="mobile-card-body">
                <p style={{ color: 'var(--text-dark)', fontSize: '0.9375rem', lineHeight: 1.7, fontWeight: 500 }}>
                  使基因组学成果再次突破人类寿命极限，实现人体生态重建。
                </p>
              </div>
            </div>
            <div className="mobile-card">
              <div className="mobile-card-header" style={{ background: '#3182CE' }}>
                <Globe size={18} color="white" />
                <span>产业布局</span>
              </div>
              <div className="mobile-card-body">
                <p style={{ color: 'var(--text-dark)', fontSize: '0.9375rem', lineHeight: 1.7, fontWeight: 500 }}>
                  海购生物科技集团 × 研发、生产、医疗、销售、服务一体的全球布局。
                </p>
              </div>
            </div>
            <div className="mobile-card">
              <div className="mobile-card-header" style={{ background: '#D69E2E' }}>
                <TrendingUp size={18} color="white" />
                <span>财富机会</span>
              </div>
              <div className="mobile-card-body">
                <p style={{ color: 'var(--text-dark)', fontSize: '0.9375rem', lineHeight: 1.7, fontWeight: 500 }}>
                  四大红利的生态系统，成就没有试错成本、人人可为的创富机遇。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Missions */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Missions</span>
            <h2 className="section-title">HIGO的三重使命</h2>
          </div>
          <div className="mobile-card-grid" style={{ marginTop: '24px' }}>
            <div className="mobile-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '6px', background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)' }} />
              <div className="mobile-card-body">
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '2rem' }}>⚡</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>征服衰老</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  将健康寿命延长10-20年，让100岁的青年依然跑马拉松。
                </p>
              </div>
            </div>
            <div className="mobile-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '6px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)' }} />
              <div className="mobile-card-body">
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '2rem' }}>💎</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>创造价值</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  为1亿家庭提供零试错成本、实现财富自由的创业机会。
                </p>
              </div>
            </div>
            <div className="mobile-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '6px', background: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)' }} />
              <div className="mobile-card-body">
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '2rem' }}>🚀</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>推动革命</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  做全球长寿经济的标准制定者，而非跟随者。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Timeline</span>
            <h2 className="section-title">全球化进程全景图</h2>
          </div>
          <div className="mobile-card-stack" style={{ marginTop: '24px' }}>
            {milestones.map((item, index) => (
              <div key={item.year} className="mobile-card">
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '80px', height: '48px', background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                      {item.year}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Layout */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Global</span>
            <h2 className="section-title">全球三大洲战略布局</h2>
          </div>
          <div className="mobile-card-grid" style={{ marginTop: '24px' }}>
            {global布局.map((region) => (
              <div key={region.region} className="mobile-card">
                <div className="mobile-card-header" style={{ background: '#1A365D' }}>
                  <span style={{ fontSize: '1.5rem' }}>{region.icon}</span>
                  <span>{region.region}</span>
                </div>
                <div className="mobile-card-body">
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '8px' }}>{region.location}</p>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{region.facilities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGO Advantages */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Advantages</span>
            <h2 className="section-title">延寿科技风向标</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {advantages.map((adv) => (
              <div key={adv.title} className="mobile-card">
                <div style={{ height: '6px', background: adv.color }} />
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', background: adv.color + '20', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                      {adv.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{adv.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{adv.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientists */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Scientists</span>
            <h2 className="section-title">核心科学家团队</h2>
            <p className="section-desc">与IAAMC美国国际抗衰老医学会深度合作</p>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {scientists.map((scientist) => (
              <div key={scientist.name} className="mobile-card">
                <div className="mobile-card-header" style={{ background: '#1A365D' }}>
                  <span style={{ fontSize: '1.25rem' }}>{scientist.icon}</span>
                  <span style={{ fontSize: '0.8125rem' }}>{scientist.name}</span>
                </div>
                <div className="mobile-card-body">
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem', marginBottom: '8px' }}>{scientist.title}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {scientist.specialties.map((spec) => (
                      <span key={spec} style={{ color: 'var(--text-dark)', fontSize: '0.8125rem' }}>• {spec}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Products</span>
            <h2 className="section-title">四大王牌基因系列</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {fourProducts.map((product) => (
              <Link key={product.name} href={`/products/${product.name.toLowerCase().replace(' ', '')}`} className="mobile-card mobile-card-link">
                <div style={{ height: '6px', background: product.color }} />
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '48px', height: '48px', background: product.color + '20', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                      {product.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{product.name}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{product.subtitle}</p>
                    </div>
                    <ChevronRight size={18} color="var(--text-light)" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Results</span>
            <h2 className="section-title">阶段性成果</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {achievements.map((item) => (
              <div key={item.label} className="mobile-card" style={{ textAlign: 'center' }}>
                <div className="mobile-card-body">
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: item.color, marginBottom: '4px' }}>{item.num}</div>
                  <div style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Certifications</span>
            <h2 className="section-title">多重国际权威认证</h2>
          </div>
          <div className="mobile-card" style={{ marginTop: '24px' }}>
            <div className="mobile-card-body">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {certifications.map((cert) => (
                  <span key={cert} style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '0.8125rem', fontWeight: 500 }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
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
