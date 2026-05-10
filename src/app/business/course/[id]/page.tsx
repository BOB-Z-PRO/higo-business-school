'use client'

import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Clock, Users, Target, CheckCircle, AlertTriangle, ChevronRight, Play, FileText, Headphones } from 'lucide-react'
import { coursesData } from '@/lib/courses-data'

export default function CourseDetailPage() {
  const router = useRouter()
  const params = useParams()
  const courseId = params.id as string
  const course = coursesData[courseId]

  if (!course) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
        <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>课程未找到</h1>
          <p style={{ color: 'var(--text-gray)', marginBottom: '24px' }}>课程ID: {courseId}</p>
          <Link href="/business" className="btn btn-primary">
            返回经营篇
          </Link>
        </div>
      </div>
    )
  }

  const TypeIcon = course.type === '视频' ? Play : course.type === '音频' ? Headphones : FileText
  const sectionColor = courseId.startsWith('N') ? '#38A169' : courseId.startsWith('L2') ? '#805AD5' : '#D69E2E'
  const sectionGradient = courseId.startsWith('N') ? 'linear-gradient(135deg, #38A169 0%, #68D391 100%)' : courseId.startsWith('L2') ? 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)' : 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)'
  const sectionName = courseId.startsWith('N') ? '生存空间' : courseId.startsWith('L2') ? '生活空间' : '生命空间'

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      {/* Header */}
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
          </nav>
        </div>
      </header>

      {/* Hero - Mobile Optimized */}
      <section style={{ background: sectionGradient, color: 'white', padding: '48px 0 60px' }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}
          >
            <ArrowLeft size={16} /> 返回
          </button>
          <div className="course-hero-content">
            <div className="course-hero-icon">
              <TypeIcon size={28} />
            </div>
            <div className="course-hero-info">
              <div className="course-hero-tags">
                <span className="course-hero-tag">{sectionName}</span>
                <span className="course-hero-tag">{course.type}</span>
              </div>
              <h1 className="course-hero-title">{course.title}</h1>
              <div className="course-hero-meta">
                <span><Clock size={14} /> {course.duration}</span>
                <span>{course.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Grid - Mobile Dual Column */}
      <section style={{ background: 'white', padding: '16px 0', marginTop: '-20px' }}>
        <div className="container">
          <div className="mobile-card-grid-2">
            <div className="mobile-card-item">
              <div className="mobile-card-label">课程ID</div>
              <div className="mobile-card-value">{course.id}</div>
            </div>
            <div className="mobile-card-item">
              <div className="mobile-card-label">学习时长</div>
              <div className="mobile-card-value">{course.duration}</div>
            </div>
            <div className="mobile-card-item">
              <div className="mobile-card-label">课程类型</div>
              <div className="mobile-card-value">{course.type}</div>
            </div>
            <div className="mobile-card-item">
              <div className="mobile-card-label">所属分类</div>
              <div className="mobile-card-value">{course.category}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Learning Objectives - Mobile Cards */}
      <section className="section">
        <div className="container">
          <div className="mobile-card-stack">
            <div className="mobile-card">
              <div className="mobile-card-header" style={{ background: sectionColor }}>
                <Users size={18} color="white" />
                <span>适用人群</span>
              </div>
              <div className="mobile-card-body">
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, fontSize: '0.9375rem' }}>{course.targetAudience}</p>
              </div>
            </div>
            <div className="mobile-card">
              <div className="mobile-card-header" style={{ background: sectionColor }}>
                <Target size={18} color="white" />
                <span>学习目标</span>
              </div>
              <div className="mobile-card-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {course.learningObjectives.map((obj, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle size={16} color={sectionColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.5 }}>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Content</span>
            <h2 className="section-title">课程内容</h2>
          </div>
          <div className="mobile-card" style={{ marginTop: '24px' }}>
            <div className="mobile-card-body">
              <div style={{ color: 'var(--text-gray)', lineHeight: 1.8, fontSize: '0.9375rem', whiteSpace: 'pre-wrap' }}>
                {course.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points - Mobile Dual Column Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">KeyPoints</span>
            <h2 className="section-title">核心要点</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {course.keyPoints.map((point, i) => (
              <div key={i} className="mobile-card">
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', background: sectionColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <p style={{ color: 'var(--text-dark)', lineHeight: 1.5, fontSize: '0.875rem', flex: 1 }}>{point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Sentences - Mobile Cards */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Golden</span>
            <h2 className="section-title">金句摘录</h2>
          </div>
          <div className="mobile-card-grid" style={{ marginTop: '24px' }}>
            {course.goldenSentences.map((sentence, i) => (
              <div key={i} className="mobile-card mobile-card-golden" style={{ background: sectionGradient }}>
                <div className="mobile-card-body">
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px', opacity: 0.4 }}>"</div>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'white' }}>{sentence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripts Section - Mobile Cards */}
      {course.scripts && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Scripts</span>
              <h2 className="section-title">话术模板</h2>
            </div>
            <div className="mobile-card-stack" style={{ marginTop: '24px' }}>
              {course.scripts.oneMinute && (
                <div className="mobile-card">
                  <div className="mobile-card-header" style={{ background: '#E53E3E' }}>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>1'</span>
                    <span>1分钟版本</span>
                  </div>
                  <div className="mobile-card-body">
                    <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>{course.scripts.oneMinute}</p>
                  </div>
                </div>
              )}
              {course.scripts.threeMinutes && (
                <div className="mobile-card">
                  <div className="mobile-card-header" style={{ background: '#D69E2E' }}>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>3'</span>
                    <span>3分钟版本</span>
                  </div>
                  <div className="mobile-card-body">
                    <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>{course.scripts.threeMinutes}</p>
                  </div>
                </div>
              )}
              {course.scripts.tenMinutes && (
                <div className="mobile-card">
                  <div className="mobile-card-header" style={{ background: '#38A169' }}>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>10'</span>
                    <span>10分钟版本</span>
                  </div>
                  <div className="mobile-card-body">
                    <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>{course.scripts.tenMinutes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Compliance Notes - Mobile Card */}
      {course.complianceNotes && course.complianceNotes.length > 0 && (
        <section className="section" style={{ background: '#FFF5F5' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge" style={{ background: '#E53E3E' }}>Compliance</span>
              <h2 className="section-title">合规提醒</h2>
            </div>
            <div className="mobile-card" style={{ marginTop: '24px', border: '1px solid #FED7D7' }}>
              <div className="mobile-card-header" style={{ background: '#E53E3E' }}>
                <AlertTriangle size={18} color="white" />
                <span>重要提示</span>
              </div>
              <div className="mobile-card-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {course.complianceNotes.map((note, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#E53E3E', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Courses - Mobile Dual Column */}
      {course.relatedCourses && course.relatedCourses.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Related</span>
              <h2 className="section-title">相关课程</h2>
            </div>
            <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
              {course.relatedCourses.map((relId) => {
                const relCourse = coursesData[relId]
                if (!relCourse) return null
                return (
                  <Link key={relId} href={`/business/course/${relId}`} className="mobile-card mobile-card-link">
                    <div className="mobile-card-body">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '44px', height: '44px', background: sectionColor + '20', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: sectionColor, flexShrink: 0 }}>
                          {relId}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{relCourse.title}</h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{relCourse.duration}</span>
                        </div>
                        <ChevronRight size={18} color="var(--text-light)" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation - Mobile Stacked */}
      <section style={{ background: 'white', padding: '20px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="mobile-nav-buttons">
            <Link href={`/business/${courseId.startsWith('N') ? 'survival' : courseId.startsWith('L2') ? 'living' : 'life'}`} className="btn btn-secondary-outline">
              <ArrowLeft size={16} /> 返回{ sectionName }
            </Link>
            <Link href="/business" className="btn btn-primary">
              经营篇首页
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item">
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
        <Link href="/business" className="mobile-nav-item active">
          <i className="fas fa-chart-line"></i>
          <span>经营</span>
        </Link>
      </div>
    </div>
  )
}