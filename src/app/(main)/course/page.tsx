'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ArrowLeft } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string | null
  type: string
  duration: number
  order: number
  module: {
    name: string
    chapter: {
      name: string
      school: {
        name: string
      }
    }
  }
}

export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/public/courses')
        if (res.ok) {
          const data = await res.json()
          setCourses(data.courses || [])
        }
      } catch (e) {
        console.error('Failed to fetch courses:', e)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  // Group courses by school and chapter
  const schoolMap = new Map<string, Map<string, Course[]>>()
  courses.forEach(course => {
    const schoolName = course.module?.chapter?.school?.name || '未知学院'
    const chapterName = course.module?.chapter?.name || '未知篇章'
    if (!schoolMap.has(schoolName)) schoolMap.set(schoolName, new Map())
    const chapterMap = schoolMap.get(schoolName)!
    if (!chapterMap.has(chapterName)) chapterMap.set(chapterName, [])
    chapterMap.get(chapterName)!.push(course)
  })

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                          (course.description || '').toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'all' ||
      course.module?.chapter?.name?.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const categories = [
    { id: 'all', name: '全部', icon: '📚' },
    { id: '公司', name: '公司篇', icon: '🏢' },
    { id: '产品', name: '产品篇', icon: '🧬' },
    { id: '经营', name: '经营篇', icon: '💼' },
    { id: '团队', name: '团队篇', icon: '👥' },
    { id: '心态', name: '心态篇', icon: '❤️' },
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
            <ArrowLeft size={16} /> 返回首页
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
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-gray)' }}>
              加载中...
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-search"></i>
              <p>没有找到匹配的课程</p>
            </div>
          ) : (
            <div className="course-grid">
              {filteredCourses.map((course) => (
                <Link key={course.id} href={`/course/${course.id}`} className="course-card">
                  <div className={`course-card-header ${course.module?.chapter?.name?.toLowerCase()}`}></div>
                  <div className="course-card-body">
                    <div className="course-card-meta">
                      <span className="course-num">{course.id}</span>
                      <span className="course-duration"><i className="far fa-clock"></i> {course.duration}分钟</span>
                    </div>
                    <h4 className="course-title">{course.title}</h4>
                    <p className="course-subtitle">{course.description?.substring(0, 50) || ''}</p>
                    <div className="course-card-footer">
                      <span className={`course-category ${course.module?.chapter?.name?.toLowerCase()}`}>
                        {course.module?.chapter?.name || '未知篇章'}
                      </span>
                      <span className="course-status pending">待学习</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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