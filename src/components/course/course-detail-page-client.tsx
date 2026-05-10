'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, BookOpen, CheckCircle, Clock, FileText, Music, Play, Trophy } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

const typeIcons: Record<string, React.ElementType> = { VIDEO: Play, TEXT: FileText, AUDIO: Music }
const typeLabels: Record<string, string> = { VIDEO: '视频课程', TEXT: '图文课程', AUDIO: '音频课程' }
const typeColors: Record<string, string> = { VIDEO: '#E53E3E', TEXT: '#3182CE', AUDIO: '#D69E2E' }

type CourseDetailPageClientProps = {
  courseId: string
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
  {
    id: '1',
    question: '本节课的核心要点更接近哪一项？',
    options: ['产品理解与表达', '公司年会安排', '办公流程', '销售报表'],
    answer: 0,
  },
  {
    id: '2',
    question: '课程学习后最重要的原则是什么？',
    options: ['追求夸张表达', '保持统一与合规表达', '承诺明确结果', '绕过标准资料'],
    answer: 1,
  },
]

export default function CourseDetailPageClient({ courseId }: CourseDetailPageClientProps) {
  const router = useRouter()
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await fetch(`/api/public/courses/${courseId}`)
        if (!response.ok) {
          setError('课程不存在或暂时无法访问')
          return
        }

        const data = await response.json()
        setCourse(data.course)
      } catch {
        setError('课程加载失败，请稍后重试')
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [courseId])

  function handleQuizAnswer(questionId: string, optionIndex: number) {
    setQuizAnswers((previous) => ({ ...previous, [questionId]: optionIndex }))
  }

  function handleSubmitQuiz() {
    const correctAnswers = sampleQuiz.filter((item) => quizAnswers[item.id] === item.answer).length
    const score = Math.round((correctAnswers / sampleQuiz.length) * 100)

    if (score >= 60) {
      setQuizCompleted(true)
      setProgress(100)
      return
    }

    window.alert(`当前得分为 ${score}% ，请回顾课程后再次作答。`)
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
          <Link href="/course" style={{ color: 'var(--primary-blue)' }}>
            返回课程列表
          </Link>
        </div>
      </div>
    )
  }

  const TypeIcon = typeIcons[course.type] || Play

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/course" />

      <section className="course-detail-header">
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              marginBottom: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={16} /> 返回
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span
              style={{
                background: typeColors[course.type] || '#E53E3E',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '0.875rem',
              }}
            >
              {typeLabels[course.type] || '视频课程'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
              <Clock size={16} /> {course.duration} 分钟
            </span>
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '0.875rem',
              }}
            >
              {course.id}
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>{course.title}</h1>
          <p style={{ opacity: 0.9, fontSize: '1rem' }}>
            {course.module?.chapter?.school?.name || 'HIGO 商学院'} · {course.module?.chapter?.name || '课程内容'}
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="course-detail-content">
            <div className="course-detail-main" style={{ padding: '32px' }}>
              {course.type === 'VIDEO' && (
                <div
                  style={{
                    background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '60px',
                    textAlign: 'center',
                    marginBottom: '32px',
                    color: 'white',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <TypeIcon size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>课程视频</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>视频内容即将上线</p>
                </div>
              )}

              {course.type === 'AUDIO' && (
                <div
                  style={{
                    background: 'linear-gradient(135deg, #744210 0%, #975A16 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '60px',
                    textAlign: 'center',
                    marginBottom: '32px',
                    color: 'white',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Music size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>音频课程</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>音频内容即将上线</p>
                </div>
              )}

              <div className="detail-section">
                <h3 className="detail-title">课程介绍</h3>
                <div className="detail-content">
                  <p>{course.description || '暂无课程介绍'}</p>
                </div>
              </div>

              {course.content && (
                <div className="detail-section">
                  <h3 className="detail-title">课程正文</h3>
                  <div
                    className="markdown-content"
                    style={{ background: 'var(--bg-white)', padding: '24px', borderRadius: 'var(--radius-lg)' }}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{course.content}</ReactMarkdown>
                  </div>
                </div>
              )}

              <div className="detail-section" style={{ marginTop: '32px' }}>
                <h3 className="detail-title">课后练习</h3>
                <div style={{ background: 'var(--bg-white)', padding: '24px', borderRadius: 'var(--radius-lg)' }}>
                  {sampleQuiz.map((question, index) => (
                    <div key={question.id} style={{ marginBottom: '24px' }}>
                      <p style={{ fontWeight: 600, marginBottom: '12px' }}>
                        {index + 1}. {question.question}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {question.options.map((option, optionIndex) => (
                          <label
                            key={option}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '12px',
                              background: quizAnswers[question.id] === optionIndex ? '#EBF8FF' : 'var(--bg-gray)',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              border:
                                quizAnswers[question.id] === optionIndex
                                  ? '2px solid var(--primary-blue)'
                                  : '2px solid transparent',
                            }}
                          >
                            <input
                              type="radio"
                              name={`quiz-${question.id}`}
                              checked={quizAnswers[question.id] === optionIndex}
                              onChange={() => handleQuizAnswer(question.id, optionIndex)}
                            />
                            <span>{option}</span>
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
                      cursor: 'pointer',
                    }}
                  >
                    提交答案
                  </button>
                </div>
              </div>

              {quizCompleted && (
                <div
                  className="detail-section"
                  style={{
                    marginTop: '32px',
                    background: '#F0FFF4',
                    padding: '24px',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px solid #38A169',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={48} style={{ color: '#38A169' }} />
                    <div>
                      <h3 style={{ color: '#38A169', marginBottom: '4px' }}>学习完成</h3>
                      <p style={{ color: 'var(--text-gray)' }}>你已完成本课程的学习与基础练习。</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="course-detail-sidebar">
              <div className="sidebar-section">
                <h4 className="sidebar-section-title">
                  <BookOpen size={18} style={{ color: 'var(--primary-blue)' }} />
                  课程信息
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px',
                      background: 'var(--bg-gray)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <span style={{ color: 'var(--text-gray)' }}>课程 ID</span>
                    <span style={{ fontWeight: 500, color: 'var(--primary-blue)' }}>{course.id}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px',
                      background: 'var(--bg-gray)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <span style={{ color: 'var(--text-gray)' }}>课程类型</span>
                    <span style={{ fontWeight: 500 }}>{typeLabels[course.type] || '视频课程'}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px',
                      background: 'var(--bg-gray)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <span style={{ color: 'var(--text-gray)' }}>课程时长</span>
                    <span style={{ fontWeight: 500 }}>{course.duration} 分钟</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px',
                      background: 'var(--bg-gray)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <span style={{ color: 'var(--text-gray)' }}>所属篇章</span>
                    <span style={{ fontWeight: 500 }}>{course.module?.chapter?.name || '-'}</span>
                  </div>
                </div>
              </div>

              <div
                className="sidebar-section"
                style={{
                  background:
                    quizCompleted || progress === 100
                      ? 'linear-gradient(135deg, #38A169 0%, #68D391 100%)'
                      : 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
                  color: 'white',
                }}
              >
                <h4 className="sidebar-section-title" style={{ color: 'white' }}>
                  <Trophy size={18} />
                  学习进度
                </h4>
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{quizCompleted ? 100 : progress}%</div>
                  <div style={{ opacity: 0.9 }}>
                    {progress === 0 && '未开始'}
                    {progress > 0 && progress < 100 && '学习中'}
                    {progress === 100 && !quizCompleted && '待复盘'}
                    {quizCompleted && '已完成'}
                  </div>
                </div>
                {progress === 0 && (
                  <button
                    onClick={() => setProgress(60)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255,255,255,0.2)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      color: 'white',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    开始学习
                  </button>
                )}
                {progress === 60 && (
                  <button
                    onClick={() => setProgress(100)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'white',
                      color: 'var(--primary-blue)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    完成学习
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileNav activePath="/course" items={mobileNavItems} />
    </div>
  )
}
