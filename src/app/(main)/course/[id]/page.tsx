'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, Play, FileText, Music, Clock, BookOpen, CheckCircle, Trophy, ChevronRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const typeIcons: Record<string, React.ElementType> = { VIDEO: Play, TEXT: FileText, AUDIO: Music }
const typeLabels: Record<string, string> = { VIDEO: '视频课程', TEXT: '图文课程', AUDIO: '音频课程' }
const typeColors: Record<string, string> = {
  VIDEO: '#E53E3E',
  TEXT: '#3182CE',
  AUDIO: '#D69E2E'
}

interface Course {
  id: string
  title: string
  description: string | null
  content: string | null
  type: string
  duration: number
  order: number
  module: {
    id: string
    name: string
    chapter: {
      id: string
      name: string
      school: {
        id: string
        name: string
      }
    }
  }
}

interface Quiz {
  id: string
  question: string
  options: string[]
  answer: number
}

const sampleQuiz: Quiz[] = [
  { id: '1', question: '本节课的核心要点是什么？', options: ['A. 产品原理', 'B. 公司历史', 'C. 市场营销', 'D. 团队管理'], answer: 0 },
  { id: '2', question: 'HIGO的定位是什么？', options: ['A. 电商平台', 'B. 专注基因抗衰科技的跨国企业', 'C. 医疗机构', 'D. 保险公司'], answer: 1 },
]

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/public/courses/${id}`)
        if (res.ok) {
          const data = await res.json()
          setCourse(data.course)
        } else {
          setError('课程不存在')
        }
      } catch (e) {
        setError('加载失败')
      } finally {
        setLoading(false)
      }
    }
    fetchCourse()
  }, [id])

  const handleStartLearning = () => {
    setProgress(50)
  }

  const handleCompleteLearning = () => {
    setProgress(100)
    setShowQuiz(true)
  }

  const handleQuizAnswer = (questionId: string, optionIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmitQuiz = () => {
    let correct = 0
    sampleQuiz.forEach(q => {
      if (quizAnswers[q.id] === q.answer) correct++
    })
    const score = Math.round((correct / sampleQuiz.length) * 100)
    if (score >= 60) {
      setQuizCompleted(true)
    } else {
      alert(`得分${score}%，需要60%才能通过，请重新学习后再次答题`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-light)' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner"></div>
          <p style={{ marginTop: '16px', color: 'var(--text-gray)' }}>加载中...</p>
        </div>
      </div>
    )
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-light)' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{error || '课程不存在'}</h2>
          <Link href="/course" style={{ color: 'var(--primary-blue)' }}>返回课程列表</Link>
        </div>
      </div>
    )
  }

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
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> 返回
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ background: typeColors[course.type] || '#E53E3E', padding: '4px 12px', borderRadius: '50px', fontSize: '0.875rem' }}>{typeLabels[course.type] || '视频课程'}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
              <Clock size={16} /> {course.duration}分钟
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.875rem' }}>{course.id}</span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>{course.title}</h1>
          <p style={{ opacity: 0.9, fontSize: '1rem' }}>{course.module?.chapter?.school?.name || 'HIGO商学院'} · {course.module?.chapter?.name || ''}</p>
        </div>
      </section>

      {/* Course Content */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="course-detail-content">
            {/* Main Content */}
            <div className="course-detail-main" style={{ padding: '32px' }}>
              {/* Media Placeholder based on type */}
              {course.type === 'VIDEO' && (
                <div style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', borderRadius: 'var(--radius-lg)', padding: '60px', textAlign: 'center', marginBottom: '32px', color: 'white' }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <TypeIcon size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>课程视频</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>视频内容即将上线</p>
                </div>
              )}

              {course.type === 'AUDIO' && (
                <div style={{ background: 'linear-gradient(135deg, #744210 0%, #975A16 100%)', borderRadius: 'var(--radius-lg)', padding: '60px', textAlign: 'center', marginBottom: '32px', color: 'white' }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Music size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>音频课程</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>音频内容即将上线</p>
                </div>
              )}

              {/* Course Description */}
              <div className="detail-section">
                <h3 className="detail-title">课程介绍</h3>
                <div className="detail-content">
                  <p>{course.description || '暂无课程介绍'}</p>
                </div>
              </div>

              {/* Course Content - Markdown Rendered */}
              {course.content && (
                <div className="detail-section">
                  <h3 className="detail-title">课程正文</h3>
                  <div className="markdown-content" style={{
                    background: 'var(--bg-white)',
                    padding: '24px',
                    borderRadius: 'var(--radius-lg)',
                  }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {course.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {/* Quiz Section */}
              {progress === 100 && !quizCompleted && (
                <div className="detail-section" style={{ marginTop: '32px' }}>
                  <h3 className="detail-title">课后考核</h3>
                  <div style={{ background: 'var(--bg-white)', padding: '24px', borderRadius: 'var(--radius-lg)' }}>
                    {sampleQuiz.map((q, qIdx) => (
                      <div key={q.id} style={{ marginBottom: '24px' }}>
                        <p style={{ fontWeight: 600, marginBottom: '12px' }}>{qIdx + 1}. {q.question}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {q.options.map((opt, optIdx) => (
                            <label
                              key={optIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px',
                                background: quizAnswers[q.id] === optIdx ? '#EBF8FF' : 'var(--bg-gray)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                border: quizAnswers[q.id] === optIdx ? '2px solid var(--primary-blue)' : '2px solid transparent'
                              }}
                            >
                              <input
                                type="radio"
                                name={`quiz-${q.id}`}
                                checked={quizAnswers[q.id] === optIdx}
                                onChange={() => handleQuizAnswer(q.id, optIdx)}
                                style={{ width: '18px', height: '18px' }}
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={handleSubmitQuiz}
                      style={{
                        width: '100%',
                        padding: '14px',
                        background: 'var(--primary-blue)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        cursor: 'pointer'
                      }}
                    >
                      提交答案
                    </button>
                  </div>
                </div>
              )}

              {quizCompleted && (
                <div className="detail-section" style={{ marginTop: '32px', background: '#F0FFF4', padding: '24px', borderRadius: 'var(--radius-lg)', border: '2px solid #38A169' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={48} style={{ color: '#38A169' }} />
                    <div>
                      <h3 style={{ color: '#38A169', marginBottom: '4px' }}>恭喜完成学习！</h3>
                      <p style={{ color: 'var(--text-gray)' }}>您已完成本课程的学习和考核</p>
                    </div>
                  </div>
                </div>
              )}
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
                    <span style={{ color: 'var(--text-gray)' }}>课程ID</span>
                    <span style={{ fontWeight: 500, color: 'var(--primary-blue)' }}>{course.id}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>课程类型</span>
                    <span style={{ fontWeight: 500 }}>{typeLabels[course.type] || '视频课程'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>课程时长</span>
                    <span style={{ fontWeight: 500 }}>{course.duration}分钟</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>所属学院</span>
                    <span style={{ fontWeight: 500 }}>{course.module?.chapter?.school?.name || '-'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>所属篇章</span>
                    <span style={{ fontWeight: 500 }}>{course.module?.chapter?.name || '-'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-gray)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--text-gray)' }}>所属模块</span>
                    <span style={{ fontWeight: 500 }}>{course.module?.name || '-'}</span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="sidebar-section" style={{ background: progress === 100 && quizCompleted ? 'linear-gradient(135deg, #38A169 0%, #68D391 100%)' : 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)', color: 'white' }}>
                <h4 className="sidebar-section-title" style={{ color: 'white' }}>
                  <Trophy size={18} />
                  学习进度
                </h4>
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{progress}%</div>
                  <div style={{ opacity: 0.9 }}>
                    {progress === 0 && '未开始'}
                    {progress > 0 && progress < 100 && '学习中'}
                    {progress === 100 && !quizCompleted && '待考核'}
                    {quizCompleted && '已完成'}
                  </div>
                  <div style={{ marginTop: '12px', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: 'white', borderRadius: '4px', transition: 'width 0.3s' }} />
                  </div>
                </div>
                {progress === 0 && (
                  <button
                    onClick={handleStartLearning}
                    style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 'var(--radius-md)', color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                    开始学习
                  </button>
                )}
                {progress === 50 && (
                  <button
                    onClick={handleCompleteLearning}
                    style={{ width: '100%', padding: '12px', background: 'white', color: 'var(--primary-blue)', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
                    完成学习
                  </button>
                )}
                {progress === 100 && !quizCompleted && (
                  <button
                    onClick={() => setShowQuiz(true)}
                    style={{ width: '100%', padding: '12px', background: 'white', color: 'var(--primary-blue)', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
                    开始考核
                  </button>
                )}
                {quizCompleted && (
                  <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)' }}>
                    <CheckCircle size={24} style={{ marginBottom: '4px' }} />
                    <div style={{ fontWeight: 600 }}>学习完成</div>
                  </div>
                )}
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