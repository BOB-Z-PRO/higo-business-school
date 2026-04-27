'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowLeft } from 'lucide-react'

const courses = [
  // 新人成长学院 - 公司篇
  { id: 'N-01', num: 'N-01', title: '🏢 HIGO是什么', subtitle: '一页纸说清楚', duration: '15分钟', school: '新人成长学院', chapter: '公司篇', category: 'company' },
  { id: 'N-02', num: 'N-02', title: '📈 为什么要做HIGO', subtitle: '趋势与机遇', duration: '20分钟', school: '新人成长学院', chapter: '公司篇', category: 'company' },
  // 新人成长学院 - 产品篇
  { id: 'N-03', num: 'N-03', title: '🧬 GnAKG产品原理', subtitle: '普通人能听懂的讲解', duration: '30分钟', school: '新人成长学院', chapter: '产品篇', category: 'product' },
  { id: 'N-04', num: 'N-04', title: '🔬 GnCELL产品原理', subtitle: '细胞修复系统', duration: '25分钟', school: '新人成长学院', chapter: '产品篇', category: 'product' },
  { id: 'N-05', num: 'N-05', title: '⚖️ GnHORMONE产品原理', subtitle: '荷尔蒙平衡', duration: '25分钟', school: '新人成长学院', chapter: '产品篇', category: 'product' },
  // 新人成长学院 - 经营篇
  { id: 'N-06', num: 'N-06', title: '💼 HIGO商业模式', subtitle: '四句话讲明白', duration: '20分钟', school: '新人成长学院', chapter: '经营篇', category: 'business' },
  { id: 'N-07', num: 'N-07', title: '🚀 如何启动市场', subtitle: '新人起步六步曲', duration: '30分钟', school: '新人成长学院', chapter: '经营篇', category: 'business' },
  { id: 'N-08', num: 'N-08', title: '📞 邀约话术', subtitle: 'ABC法则三种场景', duration: '30分钟', school: '新人成长学院', chapter: '经营篇', category: 'business' },
  { id: 'N-09', num: 'N-09', title: '🎯 如何讲产品', subtitle: '产品讲解三板斧', duration: '30分钟', school: '新人成长学院', chapter: '经营篇', category: 'business' },
  { id: 'N-10', num: 'N-10', title: '🎤 如何讲机会', subtitle: '30分钟事业说明会', duration: '30分钟', school: '新人成长学院', chapter: '经营篇', category: 'business' },
  // 初阶领导力学院
  { id: 'L1-01', num: 'L1-01', title: '👥 如何带团队', subtitle: '团队建设基础', duration: '25分钟', school: '初阶领导力学院', chapter: '团队篇', category: 'team' },
  { id: 'L1-02', num: 'L1-02', title: '🤝 如何招募新人', subtitle: '招募话术与技巧', duration: '30分钟', school: '初阶领导力学院', chapter: '团队篇', category: 'team' },
  { id: 'L1-03', num: 'L1-03', title: '📈 成功九步法', subtitle: '第三步到第五步', duration: '35分钟', school: '初阶领导力学院', chapter: '经营篇', category: 'business' },
  { id: 'L1-04', num: 'L1-04', title: '⭐ 形象价值百万', subtitle: '自我包装与呈现', duration: '25分钟', school: '初阶领导力学院', chapter: '经营篇', category: 'business' },
  { id: 'L1-05', num: 'L1-05', title: '❤️ 五大心态', subtitle: '成功者的心态', duration: '20分钟', school: '初阶领导力学院', chapter: '心态篇', category: 'mindset' },
]

const categoryMap: Record<string, { school: string; chapters: { name: string; icon: string }[] }> = {
  'company': { school: '新人成长学院', chapters: [{ name: '公司篇', icon: '🏢' }] },
  'product': { school: '新人成长学院', chapters: [{ name: '产品篇', icon: '🧬' }] },
  'business': { school: '新人成长学院', chapters: [{ name: '经营篇', icon: '💼' }] },
  'team': { school: '初阶领导力学院', chapters: [{ name: '团队篇', icon: '👥' }] },
  'mindset': { school: '初阶领导力学院', chapters: [{ name: '心态篇', icon: '❤️' }] },
}

export default function CoursePage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                          course.subtitle.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { id: 'all', name: '全部', icon: '📚' },
    { id: 'company', name: '公司篇', icon: '🏢' },
    { id: 'product', name: '产品篇', icon: '🧬' },
    { id: 'business', name: '经营篇', icon: '💼' },
    { id: 'team', name: '团队篇', icon: '👥' },
    { id: 'mindset', name: '心态篇', icon: '❤️' },
  ]

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
            <Link href="/" className="nav-link">首页</Link>
            <Link href="/course" className="nav-link active">全部课程</Link>
            <Link href="/chapters" className="nav-link">六大篇章</Link>
          </nav>
        </div>
      </header>

      {/* Course Page Header */}
      <section className="course-list-header">
        <div className="container">
          <Link href="/" className="back-btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px' }}>
            <i className="fas fa-arrow-left"></i> 返回首页
          </Link>
          <h1>全部课程</h1>
          <p>系统化学习，构建完整的知识体系和能力框架</p>
          <div className="course-stats">
            <div className="course-stat">
              <div className="course-stat-num">{courses.length}</div>
              <div className="course-stat-label">精品课程</div>
            </div>
            <div className="course-stat">
              <div className="course-stat-num">4</div>
              <div className="course-stat-label">特色学院</div>
            </div>
            <div className="course-stat">
              <div className="course-stat-num">5</div>
              <div className="course-stat-label">核心篇章</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="search-filter-card">
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="搜索课程..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section">
        <div className="container">
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`} className="course-card">
                <div className={`course-card-header ${course.category}`}></div>
                <div className="course-card-body">
                  <div className="course-card-meta">
                    <span className="course-num">{course.num}</span>
                    <span className="course-duration"><i className="far fa-clock"></i> {course.duration}</span>
                  </div>
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-subtitle">{course.subtitle}</p>
                  <div className="course-card-footer">
                    <span className={`course-category ${course.category}`}>{course.chapter}</span>
                    <span className="course-status pending">待学习</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredCourses.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-search"></i>
              <p>没有找到匹配的课程</p>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link>
        <Link href="/course" className="mobile-nav-item active"><i className="fas fa-book"></i><span>课程</span></Link>
        <Link href="/chapters" className="mobile-nav-item"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link>
      </div>
    </div>
  )
}