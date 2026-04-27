'use client'

import Link from 'next/link'
import { ArrowLeft, Building2, FlaskConical, TrendingUp, Users, Heart, Target } from 'lucide-react'

const chapters = [
  {
    slug: 'company',
    name: '公司篇',
    icon: '🏢',
    color: '#D69E2E',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
    bgColor: '#FEFCBF',
    description: '了解HIGO是谁，建立信任基础',
    tags: ['FDA认证', '全球布局'],
    courseCount: 2
  },
  {
    slug: 'product',
    name: '产品篇',
    icon: '🧬',
    color: '#38A169',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    bgColor: '#C6F6D5',
    description: '掌握产品知识，具备销售能力',
    tags: ['GnAKG', 'GnCELL'],
    courseCount: 3
  },
  {
    slug: 'business',
    name: '经营篇',
    icon: '💼',
    color: '#3182CE',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
    bgColor: '#BEE3F8',
    description: '学习经营方法，会做市场',
    tags: ['成功九步', 'ABC法则'],
    courseCount: 5
  },
  {
    slug: 'team',
    name: '团队篇',
    icon: '👥',
    color: '#805AD5',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    bgColor: '#E9D8FD',
    description: '建设团队，实现被动收入',
    tags: ['团队启动', '会议体系'],
    courseCount: 2
  },
  {
    slug: 'mindset',
    name: '心态篇',
    icon: '❤️',
    color: '#E53E3E',
    gradient: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)',
    bgColor: '#FED7D7',
    description: '五大心态、情绪管理，稳定压倒一切',
    tags: ['五大心态', '情绪管理'],
    courseCount: 2
  },
  {
    slug: 'practice',
    name: '实操篇',
    icon: '🎯',
    color: '#DD6B20',
    gradient: 'linear-gradient(135deg, #DD6B20 0%, #ED8936 100%)',
    bgColor: '#FEEBC8',
    description: '实战演练，即学即用，快速落地',
    tags: ['话术练习', '邀约技巧'],
    courseCount: 2
  },
]

export default function ChaptersPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
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
            <Link href="/" className="nav-link">首页</Link>
            <Link href="/course" className="nav-link">全部课程</Link>
            <Link href="/chapters" className="nav-link active">六大篇章</Link>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', padding: '60px 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <Link href="/" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px' }}>
            <i className="fas fa-arrow-left"></i> 返回首页
          </Link>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '12px' }}>六大篇章体系</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '32px' }}>系统化学习，构建完整的知识体系和能力框架</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#00FFCC' }}>6</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>核心篇章</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#00FFCC' }}>16</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>精品课程</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#00FFCC' }}>4</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>学习阶段</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {chapters.map((chapter) => (
              <Link key={chapter.slug} href={`/chapters/${chapter.slug}`} className="card" style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ height: '8px', background: chapter.gradient }}></div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ width: '56px', height: '56px', background: chapter.bgColor, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>
                      {chapter.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{chapter.name}</h3>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9375rem', marginBottom: '16px', lineHeight: 1.6 }}>{chapter.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {chapter.tags.map((tag) => (
                      <span key={tag} style={{ background: 'var(--bg-gray)', padding: '4px 10px', borderRadius: '50px', fontSize: '0.75rem', color: 'var(--text-gray)' }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
                      <i className="fas fa-book-open" style={{ marginRight: '6px' }}></i>
                      {chapter.courseCount} 门课程
                    </span>
                    <span style={{ color: chapter.color, fontSize: '0.875rem', fontWeight: 500 }}>
                      开始学习 <i className="fas fa-arrow-right" style={{ marginLeft: '4px', fontSize: '0.75rem' }}></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item">
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
        <Link href="/" className="mobile-nav-item">
          <i className="fas fa-user"></i>
          <span>我的</span>
        </Link>
      </div>
    </div>
  )
}