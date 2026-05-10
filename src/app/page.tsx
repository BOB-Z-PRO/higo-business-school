'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen">
      {/* Header - PRD一级导航 */}
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
            <Link href="/business" className="nav-link active">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
            <Link href="/about" className="nav-link">关于HIGO</Link>
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

      {/* Hero Section - PRD Module 1 */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)' }}>
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
            <span className="hero-badge">HIGO全球商学院</span>
            <h1 className="hero-title">统一认知 · 标准学习 · 系统复制</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              <span className="hero-highlight">核心理念：</span>从新人到经营者，从经营者到领导人，围绕生存空间、生活空间、生命空间，建立全球统一的HIGO成长学习体系。
            </p>
            <div className="hero-buttons">
              <Link href="/business/survival" className="btn btn-primary btn-lg">新人从这里开始</Link>
              <Link href="/business" className="btn btn-secondary btn-lg">进入经营篇</Link>
              <Link href="/products" className="btn btn-secondary btn-lg">查看产品体系</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: 三大家园成长地图 */}
      <section className="section" id="home-spaces">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Growth Path</span>
            <h2 className="section-title">三大家园成长地图</h2>
            <p className="section-desc">从新人到领导人的完整成长路径</p>
          </div>
          <div className="home-spaces-grid">
            {/* 生存空间 */}
            <div className="home-space-card survival">
              <div className="home-space-header">
                <div className="home-space-icon">🏠</div>
                <div>
                  <h3>生存空间</h3>
                  <span className="home-space-tag">新人启动期</span>
                </div>
              </div>
              <div className="home-space-content">
                <p>自用 + 分享，建立第一份收入能力</p>
                <div className="home-space-goals">
                  <span>认识公司</span>
                  <span>认识产品</span>
                  <span>看懂模式</span>
                  <span>敢于分享</span>
                </div>
              </div>
              <Link href="/business/survival" className="home-space-btn">进入学习 →</Link>
            </div>

            {/* 生活空间 */}
            <div className="home-space-card living">
              <div className="home-space-header">
                <div className="home-space-icon">🌟</div>
                <div>
                  <h3>生活空间</h3>
                  <span className="home-space-tag">稳定经营期</span>
                </div>
              </div>
              <div className="home-space-content">
                <p>稳定经营，带新人，建立小团队</p>
                <div className="home-space-goals">
                  <span>建立稳定分享</span>
                  <span>建立成交能力</span>
                  <span>带动新人</span>
                  <span>建立氛围</span>
                </div>
              </div>
              <Link href="/business/living" className="home-space-btn">进入学习 →</Link>
            </div>

            {/* 生命空间 */}
            <div className="home-space-card life">
              <div className="home-space-header">
                <div className="home-space-icon">👑</div>
                <div>
                  <h3>生命空间</h3>
                  <span className="home-space-tag">领导人成就期</span>
                </div>
              </div>
              <div className="home-space-content">
                <p>系统复制，培养领导人，实现事业化发展</p>
                <div className="home-space-goals">
                  <span>组织思维</span>
                  <span>会议系统</span>
                  <span>讲师系统</span>
                  <span>文化复制</span>
                </div>
              </div>
              <Link href="/business/life" className="home-space-btn">进入学习 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: 四大学习入口 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Learning</span>
            <h2 className="section-title">四大学习入口</h2>
            <p className="section-desc">找到你的学习入口</p>
          </div>
          <div className="learning-entrances">
            <Link href="/company" className="entrance-card">
              <div className="entrance-icon">🏢</div>
              <h4>认识公司</h4>
              <p>了解HIGO全球布局、科研实力、资质认证</p>
            </Link>
            <Link href="/products" className="entrance-card">
              <div className="entrance-icon">🧬</div>
              <h4>认识产品</h4>
              <p>四大爆品详解、科研背景、产品优势</p>
            </Link>
            <Link href="/business" className="entrance-card">
              <div className="entrance-icon">📈</div>
              <h4>学会经营</h4>
              <p>三大家园成长路径、经营方法论</p>
            </Link>
            <Link href="/meetings" className="entrance-card">
              <div className="entrance-icon">🎤</div>
              <h4>学会开会</h4>
              <p>招商说明会、产品分享会、早会精选</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Module 4: 新人必看 */}
      <section className="section" id="newcomer">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Newcomer</span>
            <h2 className="section-title">新人必看</h2>
            <p className="section-desc">快速了解HIGO的七个核心问题</p>
          </div>
          <div className="newcomer-cards">
            <Link href="/company" className="newcomer-card">
              <span className="newcomer-num">01</span>
              <h4>为什么要了解HIGO</h4>
              <p>HIGO是什么公司？实力如何？</p>
            </Link>
            <Link href="/products" className="newcomer-card">
              <span className="newcomer-num">02</span>
              <h4>为什么要吃产品</h4>
              <p>产品解决什么问题？科学依据？</p>
            </Link>
            <Link href="/business/survival" className="newcomer-card">
              <span className="newcomer-num">03</span>
              <h4>为什么要分享经营</h4>
              <p>普通人如何通过HIGO实现成长？</p>
            </Link>
            <Link href="/business/survival/objections" className="newcomer-card">
              <span className="newcomer-num">04</span>
              <h4>新人常见30个疑问</h4>
              <p>最常见问题与标准回答</p>
            </Link>
            <Link href="/business/survival" className="newcomer-card">
              <span className="newcomer-num">05</span>
              <h4>7天新人学习路径</h4>
              <p>系统化学习，快速入门</p>
            </Link>
            <Link href="/compliance" className="newcomer-card">
              <span className="newcomer-num">06</span>
              <h4>合规经营必修</h4>
              <p>五大禁忌与规范表达</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Module 5: 精选课程 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Courses</span>
            <h2 className="section-title">精选课程</h2>
            <p className="section-desc">核心学习内容推荐</p>
          </div>
          <div className="featured-courses">
            <Link href="/course/N-01" className="featured-course-card">
              <div className="featured-course-tag">新人必修</div>
              <h4>HIGO是什么</h4>
              <p>新人第一课，一页纸说清楚</p>
              <span className="featured-course-meta">15分钟 · 视频</span>
            </Link>
            <Link href="/course/N-03" className="featured-course-card">
              <div className="featured-course-tag">产品基础</div>
              <h4>GnAKG产品原理</h4>
              <p>普通人能听懂的科学讲解</p>
              <span className="featured-course-meta">30分钟 · 视频</span>
            </Link>
            <Link href="/meetings/opportunity" className="featured-course-card">
              <div className="featured-course-tag">招商必备</div>
              <h4>招商说明会</h4>
              <p>标准流程与逐字稿</p>
              <span className="featured-course-meta">45分钟 · 视频+文字</span>
            </Link>
            <Link href="/business/survival" className="featured-course-card">
              <div className="featured-course-tag">经营规范</div>
              <h4>新人合规表达必修</h4>
              <p>五大禁忌与标准话术</p>
              <span className="featured-course-meta">20分钟 · 视频</span>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/business/survival" className="btn btn-primary">查看全部课程 →</Link>
          </div>
        </div>
      </section>

      {/* Module 6: 会议中心推荐 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Meetings</span>
            <h2 className="section-title">会议中心精选</h2>
            <p className="section-desc">标准化会议学习与复制</p>
          </div>
          <div className="meeting-cards">
            <Link href="/meetings/opportunity" className="meeting-card">
              <div className="meeting-icon">🎯</div>
              <div className="meeting-info">
                <h4>招商说明会</h4>
                <p>让新人和意向人看懂HIGO事业</p>
                <span className="meeting-meta">招商核心 · 45分钟</span>
              </div>
            </Link>
            <Link href="/meetings/product" className="meeting-card">
              <div className="meeting-icon">🧬</div>
              <div className="meeting-info">
                <h4>产品分享会</h4>
                <p>建立产品信任，让新人愿意自用</p>
                <span className="meeting-meta">产品专场 · 30分钟</span>
              </div>
            </Link>
            <Link href="/meetings/newcomer" className="meeting-card">
              <div className="meeting-icon">🌱</div>
              <div className="meeting-info">
                <h4>新人启动会</h4>
                <p>让新人知道从哪里开始</p>
                <span className="meeting-meta">新人必看 · 20分钟</span>
              </div>
            </Link>
            <Link href="/meetings/morning" className="meeting-card">
              <div className="meeting-icon">☀️</div>
              <div className="meeting-info">
                <h4>早会精选</h4>
                <p>统一思想、建立氛围、持续学习</p>
                <span className="meeting-meta">每日精选</span>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/meetings" className="btn btn-secondary">进入会议中心 →</Link>
          </div>
        </div>
      </section>

      {/* Module 7: 合规提醒 */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px' }}>
              ⚠️ 合规经营提醒
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '24px', opacity: 0.95 }}>
              严禁夸大宣传、虚假宣传、疾病治疗承诺、收益保证承诺。<br />
              所有经营者必须按照公司统一话术与合规规范进行分享。
            </p>
            <Link href="/compliance" style={{ display: 'inline-block', background: 'white', color: '#E53E3E', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              了解合规规范 →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand-mobile">
            <div className="footer-logo">
              <div className="footer-logo-icon">H</div>
              <div>
                <div className="footer-logo-text">HIGO全球商学院</div>
                <div className="footer-logo-sub">HIGO Global Business School</div>
              </div>
            </div>
            <p className="footer-desc">统一认知 · 标准学习 · 系统复制</p>
          </div>

          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">H</div>
                <div>
                  <div className="footer-logo-text">HIGO全球商学院</div>
                  <div className="footer-logo-sub">HIGO Global Business School</div>
                </div>
              </div>
              <p className="footer-desc">统一认知 · 标准学习 · 系统复制</p>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">快速链接</h5>
              <div className="footer-links">
                <Link href="/company">公司篇</Link>
                <Link href="/products">产品篇</Link>
                <Link href="/business">经营篇</Link>
                <Link href="/meetings">会议中心</Link>
              </div>
            </div>
            <div className="footer-links-group">
              <h5 className="footer-title">资源中心</h5>
              <div className="footer-links">
                <Link href="/resources">素材中心</Link>
                <Link href="/compliance">合规中心</Link>
                <Link href="/about">关于HIGO</Link>
                <Link href="/login">会员登录</Link>
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
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item active">
          <i className="fas fa-home"></i>
          <span>首页</span>
        </Link>
        <Link href="/company" className="mobile-nav-item">
          <i className="fas fa-building"></i>
          <span>公司</span>
        </Link>
        <Link href="/products" className="mobile-nav-item">
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