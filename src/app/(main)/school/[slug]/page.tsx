'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, Users, Target } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string | null
  duration: number | null
  order: number
  module: {
    id: string
    name: string
    order: number
    chapter: {
      id: string
      name: string
      order: number
      school: {
        id: string
        name: string
        icon: string | null
        color: string | null
        description: string | null
        homeBase: string | null
        learningPath: number
      }
    }
  }
}

// PRD-based school configurations
const schoolConfigs: Record<string, {
  subtitle: string
  badge: string
  gradient: string
  gradientStart: string
  gradientEnd: string
  overview: { title: string; content: string[] }
  teachers: { name: string; title: string; avatar: string; color: string }[]
  rules: { icon: string; title: string; desc: string }[]
  stats: { num: string; label: string }[]
}> = {
  'new': {
    subtitle: '新人入门，了解HIGO',
    badge: '生存家园',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    gradientStart: '#38A169',
    gradientEnd: '#68D391',
    overview: {
      title: '学院介绍',
      content: [
        '新人成长学院是每一位HIGO伙伴的起点，承载着帮助新人快速入门的重要使命。',
        '在新人成长学院，您将系统学习HIGO公司背景、产品知识、商业模式和基础销售技能。',
        '我们相信，只有真正了解HIGO、认可产品、掌握方法的伙伴，才能在这条路上走得更远。',
        '完成本学院全部课程后，您将具备独立开展业务的能力，为进入下一阶段打下坚实基础。'
      ]
    },
    teachers: [
      { name: '曹玥宏', title: '新人成长学院院长', avatar: '👨‍🏫', color: '#38A169' },
      { name: '徐莉', title: '产品培训导师', avatar: '👩‍🔬', color: '#3182CE' },
      { name: '张杰', title: '销售技能导师', avatar: '👨‍💼', color: '#805AD5' },
    ],
    rules: [
      { icon: 'fa-check', title: '完成全部课程', desc: '学习本学院全部10门课程' },
      { icon: 'fa-pencil', title: '通过课后测验', desc: '每门课程结束后完成测验，总分80分以上' },
      { icon: 'fa-comments', title: '参与早会学习', desc: '积极参加线上早会，学习他人经验' },
      { icon: 'fa-user-plus', title: '完成首次分享', desc: '至少完成一次产品或机会分享' },
    ],
    stats: [
      { num: '10', label: '课程数量' },
      { num: '15', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
  },
  'svip': {
    subtitle: '生存家园 · 从生存到生活',
    badge: '生活家园',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
    gradientStart: '#3182CE',
    gradientEnd: '#63B3ED',
    overview: {
      title: '学院介绍',
      content: [
        '初阶领导力学院是帮助您从"自己干"转变为"带人干"的关键阶段。',
        '在这里，您将学习如何建立团队、招募新人、复制团队技能。',
        '我们注重实战，通过成功九步法、形象价值等核心课程，帮助您建立领导力基础。',
        '完成本学院学习后，您将具备独立带团队的能力，开启事业的新篇章。'
      ]
    },
    teachers: [
      { name: '潘玮宸', title: '初阶领导力学院院长', avatar: '👨‍🎓', color: '#3182CE' },
      { name: '高代华', title: '团队建设导师', avatar: '👨‍👥', color: '#805AD5' },
      { name: '玫秀', title: '领导力导师', avatar: '👩‍💼', color: '#38A169' },
    ],
    rules: [
      { icon: 'fa-check', title: '完成全部课程', desc: '学习本学院全部10门课程' },
      { icon: 'fa-users', title: '建立3人小组', desc: '成功招募并带动3位伙伴加入' },
      { icon: 'fa-microphone', title: '主持一次早会', desc: '独立组织并主持一场早会' },
      { icon: 'fa-chart-line', title: '达成月度目标', desc: '完成设定的个人月度业绩目标' },
    ],
    stats: [
      { num: '10', label: '课程数量' },
      { num: '30', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
  },
  'diamond': {
    subtitle: '生活家园 · 打造高效团队',
    badge: '生活家园',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    gradientStart: '#805AD5',
    gradientEnd: '#B794F4',
    overview: {
      title: '学院介绍',
      content: [
        '中阶领导力学院是培养核心骨干的重要阶段。',
        '在这里，您将学习如何复制团队、建立高效的会议体系和沟通机制。',
        '我们注重系统化思维，帮助您从单点突破转向全面团队管理。',
        '完成本学院学习后，您将具备打造高绩效团队的能力。'
      ]
    },
    teachers: [
      { name: '江勋源', title: '中阶领导力学院院长', avatar: '👨‍⚖️', color: '#805AD5' },
      { name: '如云', title: '团队复制导师', avatar: '👨‍🔧', color: '#D69E2E' },
      { name: '顺米', title: '绩效提升导师', avatar: '👩‍🏫', color: '#E53E3E' },
    ],
    rules: [
      { icon: 'fa-check', title: '完成全部课程', desc: '学习本学院全部10门课程' },
      { icon: 'fa-user-friends', title: '培养5位核心', desc: '成功培养5位核心骨干' },
      { icon: 'fa-calendar-alt', title: '建立会议体系', desc: '建立并运营团队周会体系' },
      { icon: 'fa-trophy', title: '达成团队目标', desc: '带领团队完成季度业绩目标' },
    ],
    stats: [
      { num: '10', label: '课程数量' },
      { num: '60', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
  },
  'black': {
    subtitle: '生命家园 · 领袖传承与永续发展',
    badge: '生命家园',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
    gradientStart: '#D69E2E',
    gradientEnd: '#F6E05E',
    overview: {
      title: '学院介绍',
      content: [
        '高阶领导力学院是成就领袖的殿堂。',
        '在这里，您将学习战略规划、组织文化和永续发展的核心智慧。',
        '我们注重领袖品质培养，帮助您建立真正的影响力。',
        '完成本学院学习后，您将成为真正的领袖，开启事业的新纪元。'
      ]
    },
    teachers: [
      { name: '总顾问团', title: '高阶领导力学院导师组', avatar: '👑', color: '#D69E2E' },
      { name: '国际顾问', title: '全球战略导师', avatar: '🌍', color: '#3182CE' },
      { name: '文化顾问', title: '组织文化导师', avatar: '🏛️', color: '#805AD5' },
    ],
    rules: [
      { icon: 'fa-check', title: '完成全部课程', desc: '学习本学院全部10门课程' },
      { icon: 'fa-star', title: '达成SVIP级别', desc: '晋升为至少一星SVIP' },
      { icon: 'fa-building', title: '建立组织架构', desc: '建立完整的团队组织架构' },
      { icon: 'fa-infinity', title: '制定传承计划', desc: '制定事业传承和永续发展计划' },
    ],
    stats: [
      { num: '10', label: '课程数量' },
      { num: '90', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
  },
}

// Map school name to slug
const schoolNameToSlug: Record<string, string> = {
  '新人成长学院': 'new',
  '初阶领导力学院': 'svip',
  '中阶领导力学院': 'diamond',
  '高阶领导力学院': 'black',
}

export default function SchoolDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [schoolData, setSchoolData] = useState<any>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  // Get config based on slug
  const config = schoolConfigs[slug] || schoolConfigs['new']

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch school details
        const res = await fetch('/api/public/schools?includeChapters=true')
        if (res.ok) {
          const data = await res.json()
          // Find school by id or name slug
          let school = data.schools?.find((s: any) =>
            s.id === slug || s.name.toLowerCase().includes(slug)
          )
          // If not found by direct match, try name mapping
          if (!school) {
            const mappedSlug = Object.entries(schoolNameToSlug).find(([name]) =>
              name.includes(slug) || slug.includes(name)
            )?.[1]
            if (mappedSlug) {
              school = data.schools?.find((s: any) =>
                s.name.includes(Object.keys(schoolNameToSlug).find(k => schoolNameToSlug[k] === mappedSlug) || '')
              )
            }
          }
          if (school) {
            setSchoolData(school)
          }
        }

        // Fetch all courses and filter by school
        const coursesRes = await fetch('/api/public/courses')
        if (coursesRes.ok) {
          const coursesData = await coursesRes.json()
          setCourses(coursesData.courses || [])
        }
      } catch (e) {
        console.error('Failed to fetch school data:', e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug])

  // Group courses by chapter
  const chapterMap = new Map<string, { chapter: any; modules: Map<string, Course[]> }>()
  courses.forEach(course => {
    if (!schoolData) return
    const schoolId = course.module?.chapter?.school?.id
    const schoolName = course.module?.chapter?.school?.name
    const schoolSlugFromName = schoolNameToSlug[schoolName]

    // Match by id or slug
    if (schoolId !== schoolData.id && schoolSlugFromName !== slug) return

    const chapterId = course.module.chapter.id
    const moduleId = course.module.id

    if (!chapterMap.has(chapterId)) {
      chapterMap.set(chapterId, {
        chapter: course.module.chapter,
        modules: new Map()
      })
    }
    const chapterEntry = chapterMap.get(chapterId)!
    if (!chapterEntry.modules.has(moduleId)) {
      chapterEntry.modules.set(moduleId, [])
    }
    chapterEntry.modules.get(moduleId)!.push(course)
  })

  // Sort chapters and modules
  const chapters = Array.from(chapterMap.values())
    .sort((a, b) => a.chapter.order - b.chapter.order)
    .map(entry => ({
      ...entry.chapter,
      modules: Array.from(entry.modules.values())
        .sort((a, b) => a[0]?.module.order - b[0]?.module.order)
    }))

  const totalCourses = courses.filter(c => {
    const schoolId = c.module?.chapter?.school?.id
    const schoolName = c.module?.chapter?.school?.name
    const schoolSlugFromName = schoolNameToSlug[schoolName]
    return schoolId === schoolData?.id || schoolSlugFromName === slug
  }).length

  if (loading) {
    return (
      <div className="min-h-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '16px' }}>Loading...</div>
        </div>
      </div>
    )
  }

  const displaySchool = schoolData || { name: '学院', icon: '🎓', description: '' }
  const displayName = schoolData?.name ||
    (slug === 'new' ? '新人成长学院' : slug === 'svip' ? '初阶领导力学院' : slug === 'diamond' ? '中阶领导力学院' : '高阶领导力学院')

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
            <Link href="/#schools" className="nav-link active">四大学院</Link>
          </nav>
        </div>
      </header>

      {/* School Header */}
      <section className="school-header" style={{ background: config.gradient }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> 返回上一页
          </button>
          <div className="school-header-content">
            <div className="school-logo">{displaySchool.icon || '🎓'}</div>
            <div className="school-info">
              <span className="school-badge"><i className="fas fa-home"></i> {config.badge}</span>
              <h1>{displayName}</h1>
              <p>{config.subtitle}</p>
              <div className="school-stats">
                {config.stats.map((stat) => (
                  <div key={stat.label} className="school-stat">
                    <div className="school-stat-num">{stat.num}</div>
                    <div className="school-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Navigation */}
      <nav className="school-nav">
        <div className="container">
          <div className="school-nav-inner">
            <a href="#courses" className="school-nav-item active">课程列表</a>
            <a href="#overview" className="school-nav-item">学院介绍</a>
            <a href="#teachers" className="school-nav-item">导师团队</a>
            <a href="#rules" className="school-nav-item">学习规范</a>
          </div>
        </div>
      </nav>

      {/* Progress Card */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="progress-card" style={{ background: config.gradient }}>
            <div className="progress-info">
              <h3>你的学习进度</h3>
              <p>完成课程即可解锁下一学院</p>
            </div>
            <div className="progress-circle">0/{totalCourses}</div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="section" id="courses">
        <div className="container">
          {chapters.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-book-open"></i>
              <p>暂无课程</p>
            </div>
          ) : (
            chapters.map((chapter) => (
              <div key={chapter.id} className="chapter-section">
                <div className="chapter-header">
                  <div className="chapter-icon">{getChapterIcon(chapter.name)}</div>
                  <div className="chapter-info">
                    <h3>{chapter.name}</h3>
                    <span>{chapter.modules?.length || 0}个模块</span>
                  </div>
                </div>
                <div className="course-list">
                  {chapter.modules?.flatMap((mod: any) =>
                    mod.map((course: Course) => (
                      <Link key={course.id} href={`/course/${course.id}`} className="course-card">
                        <div className="course-card-header"></div>
                        <div className="course-card-body">
                          <div className="course-card-meta">
                            <span className="course-num">{course.id}</span>
                            <span className="course-duration"><i className="far fa-clock"></i> {course.duration || 0}分钟</span>
                          </div>
                          <h4 className="course-title">{course.title}</h4>
                          <p className="course-subtitle">{course.description?.substring(0, 50) || ''}</p>
                          <div className="course-card-footer">
                            <span className="course-category">{mod.name}</span>
                            <span className="course-status pending">待学习</span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) || []}
                </div>
              </div>
            ))
          )}

          {/* Graduation Requirements */}
          <div className="chapter-section" style={{ background: config.gradient, color: 'white' }}>
            <div className="chapter-header" style={{ marginBottom: '0' }}>
              <div className="chapter-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>🎓</div>
              <div className="chapter-info">
                <h3 style={{ color: 'white' }}>毕业条件</h3>
                <span style={{ opacity: '0.9' }}>完成全部{totalCourses}门课程 + 课后测验总分80分以上</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section" id="overview" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="overview-section">
            <h3 className="overview-title">
              <i className="fas fa-info-circle" style={{ color: config.gradientStart }}></i>
              {config.overview.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {config.overview.content.map((paragraph, index) => (
                <p key={index} style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="section" id="teachers">
        <div className="container">
          <div className="overview-section">
            <h3 className="overview-title">
              <Users size={24} style={{ color: config.gradientStart }} />
              导师团队
            </h3>
            <div className="teachers-grid">
              {config.teachers.map((teacher) => (
                <div key={teacher.name} className="teacher-card">
                  <div className="teacher-avatar" style={{ background: teacher.color + '20', color: teacher.color }}>
                    {teacher.avatar}
                  </div>
                  <div className="teacher-name">{teacher.name}</div>
                  <div className="teacher-title">{teacher.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="section" id="rules" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="overview-section">
            <h3 className="overview-title">
              <Target size={24} style={{ color: config.gradientStart }} />
              学习规范
            </h3>
            <div className="rules-list">
              {config.rules.map((rule, index) => (
                <div key={index} className="rule-item">
                  <div className="rule-icon">
                    <i className={`fas ${rule.icon}`}></i>
                  </div>
                  <div className="rule-content">
                    <div className="rule-title">{rule.title}</div>
                    <div className="rule-desc">{rule.desc}</div>
                  </div>
                </div>
              ))}
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

function getChapterIcon(chapterName: string): string {
  if (chapterName.includes('公司')) return '🏢'
  if (chapterName.includes('产品')) return '🧬'
  if (chapterName.includes('经营') || chapterName.includes('商业')) return '💼'
  if (chapterName.includes('团队')) return '👥'
  if (chapterName.includes('心态')) return '❤️'
  if (chapterName.includes('战略')) return '🎯'
  if (chapterName.includes('文化')) return '🏛️'
  if (chapterName.includes('传承')) return '♾️'
  return '📚'
}