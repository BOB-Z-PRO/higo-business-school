'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Globe, Users, Award, TrendingUp, Heart, Shield, Star } from 'lucide-react'

const stats = [
  { value: '6+', label: '年深耕基因抗衰', icon: '📅' },
  { value: '6', label: '个国家布局', icon: '🌍' },
  { value: '4', label: '大洲覆盖', icon: '🌎' },
  { value: '100+', label: '顶尖专家', icon: '👨‍🔬' },
  { value: '7', label: '大国际认证', icon: '🏅' },
  { value: '4', label: '大产品线', icon: '🧬' },
]

const milestones = [
  { year: '2020', event: 'HIGO全球生物科技集团成立，美国总部启用' },
  { year: '2021', event: '启动基因抗衰核心技术研发' },
  { year: '2022', event: '马来西亚、韩国、越南市场布局' },
  { year: '2023', event: '与美国顶级科研机构达成战略合作' },
  { year: '2024', event: 'GnAKG、GnCELL、GnHORMONE、GnBRAIN四大产品全球上市' },
  { year: '2025', event: '全球业务快速扩展' },
  { year: '2026', event: 'HIGO全球商学院正式上线' },
]

const values = [
  { icon: '🌿', title: '真实', desc: '诚信为本，真实宣传，不夸大不虚假' },
  { icon: '🤝', title: '分享', desc: '分享创造价值，帮助他人成就自己' },
  { icon: '📚', title: '学习', desc: '持续学习成长，成为更好的经营者' },
  { icon: '⏳', title: '长期', desc: '把HIGO当作终身事业来经营' },
]

const globalPresence = [
  { region: '北美', location: '美国 · 总部', flag: '🇺🇸', focus: '技术研发与全球战略' },
  { region: '亚洲', location: '马来西亚 · 全球运营中心', flag: '🇲🇾', focus: '东南亚市场运营' },
  { region: '亚洲', location: '韩国 · 首尔分公司', flag: '🇰🇷', focus: '东亚市场拓展' },
  { region: '亚洲', location: '越南 · 胡志明分公司', flag: '🇻🇳', focus: '越南及周边市场' },
  { region: '北美', location: '加拿大 · 多伦多办事处', flag: '🇨🇦', focus: '北美市场深耕' },
  { region: '亚洲', location: '日本 · 东京办事处', flag: '🇯🇵', focus: '东亚高端市场' },
]

const certifications = [
  { name: 'FDA', full: '美国食品药品监督管理局', desc: '美国市场的最高标准认证' },
  { name: 'cGMP', full: '动态药品生产管理规范', desc: '药品生产质量保障' },
  { name: 'ISO9001', full: '国际质量管理体系', desc: '全球认可的质量标准' },
  { name: 'ISO22000', full: '食品安全管理体系', desc: '食品安全的国际标准' },
  { name: 'HACCP', full: '危害分析与关键控制点', desc: '食品安全预防体系' },
  { name: 'KDA', full: '韩国食品药品认证', desc: '韩国市场准入' },
  { name: 'NSF', full: '美国国家卫生基金会', desc: '产品质量与安全认证' },
]

export default function AboutPage() {
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
            <Link href="/company" className="nav-link">公司篇</Link>
            <Link href="/products" className="nav-link">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
            <Link href="/about" className="nav-link active">关于HIGO</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>🌐</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>关于HIGO</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                做全球抗衰老健康的推动者和引领者 · 让每一个普通人都能通过科技手段享受顶尖生物科技带来的健康抗衰老福祉
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">About</span>
            <h2 className="section-title">HIGO概览</h2>
            <p className="section-desc">用数字了解HIGO</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', marginTop: '40px' }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ background: 'white', borderRadius: '16px', padding: '24px 16px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Introduction</span>
            <h2 className="section-title">公司介绍</h2>
            <p className="section-desc">HIGO是谁</p>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>HIGO Global Biotech Group</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '16px' }}>
                  HIGO Global Biotech Group（海购全球生物科技集团），2020年创立于美国，6年专注基因抗衰科技研究与应用。集团汇聚来自哈佛、杜克、斯坦福等世界顶级学府的100余位科学家，在美国、马来西亚、韩国、越南等地设有研发中心和运营机构。
                </p>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
                  旗下GnAKG、GnCELL、GnHORMONE、GnBRAIN四大基因抗衰产品已在美国FDA认证工厂生产并热销多个国家，致力于让每一个普通人都能通过科技手段享受顶尖生物科技带来的健康抗衰老福祉。
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: '🧬', text: '基因抗衰科技' },
                  { icon: '🏥', text: 'FDA认证' },
                  { icon: '🌍', text: '全球布局' },
                  { icon: '👨‍🔬', text: '顶级专家' },
                ].map((item) => (
                  <div key={item.text} style={{ background: 'var(--bg-gray)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">History</span>
            <h2 className="section-title">发展历程</h2>
            <p className="section-desc">6年深耕前行</p>
          </div>
          <div style={{ marginTop: '40px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--primary)', transform: 'translateX(-50%)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {milestones.map((item, index) => (
                <div key={item.year} style={{ display: 'flex', alignItems: 'center', gap: '24px', position: 'relative' }}>
                  <div style={{ flex: 1, textAlign: 'right', paddingRight: '40px' }}>
                    {index % 2 === 0 && (
                      <div style={{ background: 'white', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'inline-block' }}>
                        <span style={{ fontWeight: 700, color: 'var(--primary-dark)', marginRight: '8px' }}>{item.year}</span>
                        <span style={{ color: 'var(--text-gray)' }}>{item.event}</span>
                      </div>
                    )}
                  </div>
                  <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', position: 'absolute', left: '50%', transform: 'translateX(-50%)', border: '3px solid white', boxShadow: '0 0 0 2px var(--primary)' }} />
                  <div style={{ flex: 1, paddingLeft: '40px' }}>
                    {index % 2 !== 0 && (
                      <div style={{ background: 'white', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'inline-block' }}>
                        <span style={{ fontWeight: 700, color: 'var(--primary-dark)', marginRight: '8px' }}>{item.year}</span>
                        <span style={{ color: 'var(--text-gray)' }}>{item.event}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Values</span>
            <h2 className="section-title">核心价值观</h2>
            <p className="section-desc">HIGO人的精神底色</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
            {values.map((value) => (
              <div key={value.title} style={{ background: 'white', borderRadius: '16px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{value.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Global</span>
            <h2 className="section-title">全球布局</h2>
            <p className="section-desc">业务遍及4大洲6个国家</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {globalPresence.map((item) => (
              <div key={item.location} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '2.5rem' }}>{item.flag}</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.location}</div>
                  <div style={{ color: 'var(--text-gray)', fontSize: '0.8125rem' }}>{item.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Certifications</span>
            <h2 className="section-title">国际认证</h2>
            <p className="section-desc">7大国际认证，品质保证</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', marginTop: '40px' }}>
            {certifications.map((cert) => (
              <div key={cert.name} style={{ background: 'white', borderRadius: '12px', padding: '20px 12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', margin: '0 auto 12px' }}>
                  {cert.name}
                </div>
                <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>{cert.full}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.6875rem' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGO商学院 */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📚</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>HIGO全球商学院</h2>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, lineHeight: 1.7, marginBottom: '24px' }}>
                HIGO全球商学院是集团旗下的官方培训平台，为全球经营者提供从产品知识、销售技能到团队管理的全方位学习资源。
              </p>
              <Link href="/" style={{ display: 'inline-block', background: 'white', color: '#805AD5', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                立即进入学习 →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { label: '生存空间', desc: '新人入门第一课' },
                { label: '生活空间', desc: '稳定经营期' },
                { label: '生命空间', desc: '领导人成就期' },
                { label: '会议中心', desc: '六大会议体系' },
              ].map((item) => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '12px', padding: '20px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{item.label}</h4>
                  <p style={{ fontSize: '0.8125rem', opacity: 0.9 }}>{item.desc}</p>
                </div>
              ))}
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

      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link>
        <Link href="/company" className="mobile-nav-item"><i className="fas fa-building"></i><span>公司</span></Link>
        <Link href="/products" className="mobile-nav-item"><i className="fas fa-capsules"></i><span>产品</span></Link>
        <Link href="/about" className="mobile-nav-item active"><i className="fas fa-globe"></i><span>关于</span></Link>
      </div>
    </div>
  )
}