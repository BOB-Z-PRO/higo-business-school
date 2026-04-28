'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'

const schools = [
  { id: 'new', name: '新人成长学院', subtitle: '新人入门，了解HIGO', icon: '🌱', color: '#38A169', gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', courses: 10, duration: '约15天', tags: ['公司篇', '产品篇', '经营篇'] },
  { id: 'svip', name: '初阶领导力学院', subtitle: '生存家园 · 入门第一步', icon: '🔮', color: '#3182CE', gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)', courses: 10, duration: '约30天', tags: ['经营篇', '团队篇', '心态篇'] },
  { id: 'diamond', name: '中阶领导力学院', subtitle: '生活家园 · 团队建设', icon: '💎', color: '#805AD5', gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', courses: 10, duration: '约60天', tags: ['团队篇', '产品篇', '心态篇'] },
  { id: 'black', name: '高阶领导力学院', subtitle: '生命家园 · 领袖传承', icon: '👑', color: '#D69E2E', gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)', courses: 10, duration: '约90天', tags: ['团队篇', '心态篇', '经营篇'] },
]

const chapters = [
  { name: '公司篇', icon: '🏢', color: '#D69E2E', bgColor: '#FEFCBF', description: '了解HIGO是谁，建立信任基础', tags: ['FDA认证', '全球布局'], slug: 'company' },
  { name: '产品篇', icon: '🧬', color: '#38A169', bgColor: '#C6F6D5', description: '掌握产品知识，具备销售能力', tags: ['GnAKG', 'GnCELL'], slug: 'product' },
  { name: '经营篇', icon: '📈', color: '#3182CE', bgColor: '#BEE3F8', description: '学习经营方法，会做市场', tags: ['成功九步', 'ABC法则'], slug: 'business' },
  { name: '团队篇', icon: '👥', color: '#805AD5', bgColor: '#E9D8FD', description: '建设团队，实现被动收入', tags: ['团队启动', '会议体系'], slug: 'team' },
  { name: '心态篇', icon: '❤️', color: '#E53E3E', bgColor: '#FED7D7', description: '五大心态、情绪管理，稳定压倒一切', tags: ['贯穿始终'], slug: 'mindset' },
  { name: '实操篇', icon: '🎯', color: '#DD6B20', bgColor: '#FEEBC8', description: '实战演练，即学即用，快速落地', tags: ['话术练习', '邀约技巧'], slug: 'practice' },
]

const learningSteps = [
  { icon: '🌱', name: '新人成长学院', range: 'N-01 ~ N-10', level: '入门期', color: '#38A169', desc: '了解HIGO，建立信任基础，学习核心产品知识' },
  { icon: '🔮', name: '初阶领导力学院', range: 'L1-01 ~ L1-10', level: 'SVIP', color: '#3182CE', desc: '学会推懂客户，掌握成功九步和ABC法则' },
  { icon: '💎', name: '中阶领导力学院', range: 'L2-01 ~ L2-10', level: '钻石', color: '#805AD5', desc: '团队复制与绩效提升，培养核心骨干' },
  { icon: '👑', name: '高阶领导力学院', range: 'L3-01 ~ L3-10', level: '黑钻', color: '#D69E2E', desc: '战略规划与文化建设，成为真正的领袖' },
]

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">H</div>
            <div>
              <div className="logo-text">HIGO商学院</div>
              <div className="logo-sub">HIGO Business School</div>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/#schools" className="nav-link active">四大学院</Link>
            <Link href="/#chapters" className="nav-link">六大篇章</Link>
            <Link href="/course" className="nav-link">全部课程</Link>
            <Link href="/#about" className="nav-link">关于我们</Link>
            {session ? (
              <>
                <Link href="/profile" className="nav-link" style={{ color: '#38A169', fontWeight: 600 }}>
                  <i className="fas fa-user" style={{ marginRight: 4 }}></i>
                  {session.user?.name || '我的'}
                </Link>
                <button onClick={() => signOut({ callbackUrl: '/' })} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E53E3E' }}>
                  退出
                </button>
              </>
            ) : (
              <Link href="/login" className="nav-link" style={{ color: '#38A169', fontWeight: 600 }}>登录</Link>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-particles">
          <div className="dna-container">
            <div className="dna-strand"></div>
            <div className="dna-strand"></div>
            <div className="dna-strand"></div>
            <div className="dna-strand"></div>
            <div className="dna-strand"></div>
            <div className="dna-strand"></div>
          </div>
          <div className="cells-container">
            <div className="cell cell-1"></div>
            <div className="cell cell-2"></div>
            <div className="cell cell-3"></div>
            <div className="cell cell-4"></div>
            <div className="cell cell-5"></div>
            <div className="cell cell-6"></div>
          </div>
          <div className="molecules-container">
            <div className="molecule mol-1"></div>
            <div className="molecule mol-2"></div>
            <div className="molecule mol-3"></div>
            <div className="molecule mol-4"></div>
            <div className="molecule mol-5"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">HIGO全球生物科技集团</span>
            <h1 className="hero-title">打造可复制、标准化、分层培训的<br />HIGO全生命周期成长体系</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              <span className="hero-highlight">核心理念：</span>从"产品消费者"到"事业经营者"的完整蜕变之路
            </p>
            <div className="hero-buttons">
              <Link href="/login" className="btn btn-primary btn-lg">开始学习</Link>
              <Link href="/#chapters" className="btn btn-secondary btn-lg">了解课程体系</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">47</div>
                <div className="stat-label">精品课程</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">特色学院</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">核心篇章</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Schools Section */}
      <section className="section" id="schools">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Schools</span>
            <h2 className="section-title">四大学院 · 完整成长路径</h2>
            <p className="section-desc">从新人到领袖，每个阶段都有明确的学习目标和发展路径</p>
          </div>
          <div className="schools-grid">
            {schools.map((school) => (
              <div key={school.id} className="school-card" style={{ borderColor: school.color }}>
                <div className="school-card-header" style={{ background: school.gradient }}>
                  <div className="school-icon-large">{school.icon}</div>
                  <div className="school-code" style={{ background: 'rgba(255,255,255,0.2)' }}>{school.id === 'new' ? 'N' : school.id === 'svip' ? 'L1' : school.id === 'diamond' ? 'L2' : 'L3'}</div>
                </div>
                <div className="school-card-body">
                  <h3 className="school-name">{school.name}</h3>
                  <p className="school-subtitle">{school.subtitle}</p>
                  <div className="school-meta">
                    <span><i className="fas fa-book"></i> {school.courses}门课程</span>
                    <span><i className="fas fa-clock"></i> {school.duration}</span>
                  </div>
                  <div className="school-tags">
                    {school.tags.map((tag) => (
                      <span key={tag} className="school-tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/school/${school.id}`} className="school-btn" style={{ background: school.gradient }}>
                    开始学习 <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Path</span>
            <h2 className="section-title">学习路径图</h2>
            <p className="section-desc">清晰的晋级路径，让你的成长有方向、有目标、有动力</p>
          </div>
          <div className="learning-path-wrapper">
            <div className="learning-path-grid">
              {learningSteps.map((step, index) => (
                <div key={step.name} className="learning-path-card combined" style={{ background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`, border: `2px solid ${step.color}30` }}>
                  <div className="path-main" style={{ borderBottom: `2px solid ${step.color}20`, paddingBottom: 16, marginBottom: 12 }}>
                    <div className="path-row">
                      <div className="path-icon-circle" style={{ background: step.color }}>
                        <span className="path-emoji">{step.icon}</span>
                      </div>
                      {index < learningSteps.length - 1 && <span className="path-arrow-right" style={{ color: step.color }}>→</span>}
                      <div className="path-info">
                        <h4 className="path-name">{step.name}</h4>
                        <p className="path-range">{step.range}</p>
                        <span className="path-level" style={{ background: step.color + '25', color: step.color }}>{step.level}</span>
                      </div>
                    </div>
                    <p className="path-desc" style={{ marginTop: 12 }}>{step.desc}</p>
                  </div>
                  <div className="path-footer-item" style={{ background: step.color + '15', borderColor: step.color + '60' }}>
                    <span>{index === 0 ? '新人入门' : index === 1 ? '一星~三星SVIP' : index === 2 ? '一星~三星钻石' : '一星~三星黑钻'}</span>
                    <small>{index === 0 ? '了解HIGO' : index === 1 ? '初阶领导力' : index === 2 ? '中阶领导力' : '高阶领导力'}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Five Chapters Section */}
      <section className="section" id="chapters">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Chapters</span>
            <h2 className="section-title">六大篇章体系</h2>
            <p className="section-desc">系统化学习，构建完整的知识体系和能力框架</p>
          </div>
          <div className="chapters-grid">
            {chapters.map((chapter) => (
              <Link key={chapter.name} href={`/chapters/${chapter.slug}`} className="chapter-card">
                <div className="chapter-bar" style={{ background: `linear-gradient(90deg, ${chapter.color}, ${chapter.color}80)` }}></div>
                <div className="chapter-content">
                  <div className="chapter-icon-box" style={{ background: chapter.bgColor }}>
                    <span className="chapter-icon">{chapter.icon}</span>
                  </div>
                  <h4 className="chapter-name">{chapter.name}</h4>
                  <p className="chapter-desc">{chapter.description}</p>
                  <div className="chapter-tags">
                    {chapter.tags.map((tag) => (
                      <span key={tag} className="chapter-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Features</span>
            <h2 className="section-title" style={{ color: 'white' }}>为什么选择HIGO商学院</h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>专业、系统、实用的培训体系</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '📚', title: '系统化课程', desc: '47门精品课程，覆盖从入门到领袖的全部能力要求' },
              { icon: '🎯', title: '实战导向', desc: '每门课程都包含具体可操作的实战方法和工具' },
              { icon: '🏆', title: '权威认证', desc: '结合全球顶级科研背书与专业培训体系' },
              { icon: '♾️', title: '持续更新', desc: '课程内容持续迭代更新，与时俱进' },
            ].map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-badge">About</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>关于HIGO商学院</h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: 24 }}>
                HIGO商学院是HIGO全球生物科技集团旗下的专业培训平台，致力于为每一位会员提供从"产品消费者"到"事业经营者"的完整成长路径。
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: 24 }}>
                依托全球研发中心和科研团队，我们整合了最专业的产品知识，最实用的经营方法，最系统的团队建设理念，帮助每一位伙伴在健康与财富之路上走得更远。
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
                {[
                  { title: '四大学院', desc: '完整成长体系' },
                  { title: '47门课程', desc: '精品实战内容' },
                  { title: '从新人到领袖', desc: '完整晋升路径' },
                  { title: '多端支持', desc: 'H5/小程序/APP' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #10B981, #059669)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem', flexShrink: 0 }}>
                      ✓
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-stats">
              <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 'var(--radius-xl)', padding: 48, color: 'white', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎓</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>HIGO商学院</h3>
                <p style={{ opacity: 0.9, fontSize: '0.875rem' }}>让每一位普通人都能在这里成长</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32 }}>
                  <div><div style={{ fontSize: '2rem', fontWeight: 700 }}>47+</div><div style={{ fontSize: '0.75rem', opacity: 0.8 }}>课程数</div></div>
                  <div><div style={{ fontSize: '2rem', fontWeight: 700 }}>4</div><div style={{ fontSize: '0.75rem', opacity: 0.8 }}>学院数</div></div>
                  <div><div style={{ fontSize: '2rem', fontWeight: 700 }}>6</div><div style={{ fontSize: '0.75rem', opacity: 0.8 }}>篇章数</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          {/* Footer Brand - Mobile Only */}
          <div className="footer-brand-mobile">
            <div className="footer-logo">
              <div className="footer-logo-icon">H</div>
              <div>
                <div className="footer-logo-text">HIGO商学院</div>
                <div className="footer-logo-sub">HIGO Business School</div>
              </div>
            </div>
            <p className="footer-desc">让每一位普通人都能在健康与财富之路上走得更远</p>
          </div>

          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">H</div>
                <div>
                  <div className="footer-logo-text">HIGO商学院</div>
                  <div className="footer-logo-sub">HIGO Business School</div>
                </div>
              </div>
              <p className="footer-desc">让每一位普通人都能在健康与财富之路上走得更远</p>
              <div className="footer-social">
                <a href="#"><i className="fas fa-globe"></i></a>
                <a href="#"><i className="fas fa-envelope"></i></a>
                <a href="#"><i className="fas fa-phone"></i></a>
              </div>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">快速链接</h5>
              <div className="footer-links">
                <Link href="/#schools">四大学院</Link>
                <Link href="/#chapters">六大篇章</Link>
                <Link href="/#about">关于我们</Link>
                <Link href="/login">会员登录</Link>
              </div>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">学习资源</h5>
              <div className="footer-links">
                <Link href="/chapters/company">公司篇</Link>
                <Link href="/chapters/product">产品篇</Link>
                <Link href="/chapters/business">经营篇</Link>
                <Link href="/chapters/team">团队篇</Link>
                <Link href="/chapters/mindset">心态篇</Link>
                <Link href="/chapters/practice">实操篇</Link>
              </div>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">联系我们</h5>
              <div className="footer-links">
                <a href="mailto:support@higo.com"><i className="fas fa-envelope"></i> support@higo.com</a>
                <a href="tel:400-888-8888"><i className="fas fa-phone"></i> 400-888-8888</a>
                <a href="https://www.higo.com"><i className="fas fa-globe"></i> www.higo.com</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 HIGO商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
        {/* Mobile Bottom Nav */}
        <div className="mobile-nav">
          <Link href="/" className="mobile-nav-item active">
            <i className="fas fa-home"></i>
            <span>首页</span>
          </Link>
          <Link href="/#schools" className="mobile-nav-item">
            <i className="fas fa-university"></i>
            <span>四大学院</span>
          </Link>
          <Link href="/chapters" className="mobile-nav-item">
            <i className="fas fa-th-large"></i>
            <span>六大体系</span>
          </Link>
          <Link href="/profile" className="mobile-nav-item">
            <i className="fas fa-user"></i>
            <span>我的</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}