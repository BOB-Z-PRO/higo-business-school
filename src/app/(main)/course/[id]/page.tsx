'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Play, FileText, Music, Clock, BookOpen, CheckCircle, Star, Users, Trophy } from 'lucide-react'

const courseData: Record<string, {
  title: string
  type: string
  duration: string
  school: string
  chapter: string
  category: string
  description: string
  keyPoints: string[]
  relatedCourses: { id: string; title: string; duration: string }[]
}> = {
  'N-01': {
    title: '🏢 HIGO是什么',
    type: 'VIDEO',
    duration: '15分钟',
    school: '新人成长学院',
    chapter: '公司篇',
    category: 'company',
    description: '本课程将帮助您全面了解HIGO是什么，包括公司历史、全球布局、产品体系等核心内容。通过生动的讲解，让您在最短时间内掌握HIGO的全貌。',
    keyPoints: ['HIGO 47年历史沉淀', '全球四大基地布局', '美国FDA/cGMP认证', '产品线全面介绍'],
    relatedCourses: [
      { id: 'N-02', title: '📈 为什么要做HIGO', duration: '20分钟' },
      { id: 'N-03', title: '🧬 GnAKG产品原理', duration: '30分钟' },
    ]
  },
  'N-02': {
    title: '📈 为什么要做HIGO',
    type: 'VIDEO',
    duration: '20分钟',
    school: '新人成长学院',
    chapter: '公司篇',
    category: 'company',
    description: '深入分析为什么现在是进入HIGO的最佳时机，包括大健康趋势、跨境电商机遇、分享经济红利等核心内容。',
    keyPoints: ['大健康是未来20年最大趋势', '跨境电商元年机遇', '分享经济红利期', '时势造英雄'],
    relatedCourses: [
      { id: 'N-01', title: '🏢 HIGO是什么', duration: '15分钟' },
      { id: 'N-06', title: '💼 HIGO商业模式', duration: '20分钟' },
    ]
  },
  'N-03': {
    title: '🧬 GnAKG产品原理',
    type: 'VIDEO',
    duration: '30分钟',
    school: '新人成长学院',
    chapter: '产品篇',
    category: 'product',
    description: '深入浅出了解GnAKG的抗衰原理，包括细胞级抗衰机制、充电年轻8.5-34岁的科学依据，以及真实案例分享。',
    keyPoints: ['AKG细胞级抗衰原理', '充电年轻8.5-34岁', '科学实验数据支撑', '真实见证案例'],
    relatedCourses: [
      { id: 'N-04', title: '🔬 GnCELL产品原理', duration: '25分钟' },
      { id: 'N-05', title: '⚖️ GnHORMONE产品原理', duration: '25分钟' },
    ]
  },
}

const getCourseData = (id: string) => {
  if (courseData[id]) return courseData[id]
  return {
    title: '课程内容',
    type: 'VIDEO',
    duration: '15分钟',
    school: '新人成长学院',
    chapter: '公司篇',
    category: 'company',
    description: '课程详细内容...',
    keyPoints: ['核心知识点一', '核心知识点二', '核心知识点三'],
    relatedCourses: []
  }
}

const typeIcons: Record<string, React.ElementType> = { VIDEO: Play, TEXT: FileText, AUDIO: Music }
const typeLabels: Record<string, string> = { VIDEO: '视频课程', TEXT: '文字课程', AUDIO: '音频课程' }
const typeColors: Record<string, string> = {
  VIDEO: '#E53E3E',
  TEXT: '#3182CE',
  AUDIO: '#D69E2E'
}

export default function CourseDetailPage() {
  const params = useParams()
  const id = params.id as string
  const course = getCourseData(id)
  const TypeIcon = typeIcons[course.type as keyof typeof typeIcons] || Play

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
            <Link href="/course" className="nav-link active">全部课程</Link>
            <Link href="/chapters" className="nav-link">六大篇章</Link>
          </nav>
        </div>
      </header>

      {/* Course Header */}
      <section className="course-detail-header">
        <div className="container">
          <Link href="/course" className="back-btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px' }}>
            <i className="fas fa-arrow-left"></i> 返回课程列表
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ background: typeColors[course.type], padding: '4px 12px', borderRadius: '50px', fontSize: '0.875rem' }}>{typeLabels[course.type]}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
              <i className="fas fa-clock"></i> {course.duration}
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>{course.title}</h1>
          <p style={{ opacity: 0.9, fontSize: '1rem' }}>{course.school} · {course.chapter}</p>
        </div>
      </section>

      {/* Course Content */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="course-detail-content">
            {/* Main Content */}
            <div className="course-detail-main" style={{ padding: '32px' }}>
              {/* Video Placeholder */}
              <div style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', borderRadius: 'var(--radius-lg)', padding: '60px', textAlign: 'center', marginBottom: '32px', color: 'white' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Play size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>课程视频</h3>
                <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>视频内容即将上线</p>
              </div>

              {/* Course Description */}
              <div className="detail-section">
                <h3 className="detail-title">课程介绍</h3>
                <div className="detail-content">
                  <p>{course.description}</p>
                </div>
              </div>

              {/* Key Points */}
              <div className="detail-section">
                <h3 className="detail-title">核心要点</h3>
                <div>
                  {course.keyPoints.map((point, index) => (
                    <div key={index} className="key-point" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '24px', height: '24px', background: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', flexShrink: 0 }}>{index + 1}</div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="quote-box">
                <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '0' }}>"学习本课程后，您将掌握{course.chapter}的核心知识，为后续学习打下坚实基础。"</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="course-detail-sidebar">
              {/* Course Info */}
              <div className="sidebar-section">
                <h4 className="sidebar-section-title">
                  <BookOpen size={18} style={{ color: 'var(--primary-blue)' }} />
                  课程信息
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>课程类型</span>
                    <span style={{ fontWeight: 500 }}>{typeLabels[course.type]}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>课程时长</span>
                    <span style={{ fontWeight: 500 }}>{course.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>所属学院</span>
                    <span style={{ fontWeight: 500 }}>{course.school}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>所属篇章</span>
                    <span style={{ fontWeight: 500 }}>{course.chapter}</span>
                  </div>
                </div>
              </div>

              {/* Related Courses */}
              {course.relatedCourses.length > 0 && (
                <div className="sidebar-section">
                  <h4 className="sidebar-section-title">
                    <BookOpen size={18} style={{ color: 'var(--primary-blue)' }} />
                    相关课程
                  </h4>
                  <div className="chapter-list">
                    {course.relatedCourses.map((related) => (
                      <Link key={related.id} href={`/course/${related.id}`} className="chapter-item">
                        <div className="chapter-num" style={{ background: 'var(--primary-blue)', color: 'white' }}>
                          <i className="fas fa-play"></i>
                        </div>
                        <div className="chapter-info">
                          <div className="chapter-name">{related.title}</div>
                          <div className="chapter-duration">{related.duration}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Progress */}
              <div className="sidebar-section" style={{ background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', color: 'white' }}>
                <h4 className="sidebar-section-title" style={{ color: 'white' }}>
                  <Trophy size={18} />
                  学习进度
                </h4>
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>0%</div>
                  <div style={{ opacity: 0.9 }}>未开始学习</div>
                </div>
                <button style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 'var(--radius-md)', color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                  开始学习
                </button>
              </div>
            </div>
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