'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, CheckCircle, Play, FileText, Music } from 'lucide-react'

const chaptersData: Record<string, {
  name: string
  icon: string
  color: string
  bgColor: string
  description: string
  keyPoints: string[]
  courses: {
    id: string
    num: string
    title: string
    subtitle: string
    duration: string
    school: string
    type: string
  }[]
}> = {
  'company': {
    name: '公司篇',
    icon: '🏢',
    color: '#D69E2E',
    bgColor: '#FEFCBF',
    description: '了解HIGO是谁，建立信任基础。通过学习公司历史、全球布局、FDA认证等内容，建立对公司和产品的信心。',
    keyPoints: ['47年历史沉淀', 'FDA/cGMP认证', '全球四大基地', '品牌背书'],
    courses: [
      { id: 'N-01', num: 'N-01', title: '🏢 HIGO是什么', subtitle: '一页纸说清楚', duration: '15分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-02', num: 'N-02', title: '📈 为什么要做HIGO', subtitle: '趋势与机遇', duration: '20分钟', school: '新人成长学院', type: 'VIDEO' },
    ]
  },
  'product': {
    name: '产品篇',
    icon: '🧬',
    color: '#38A169',
    bgColor: '#C6F6D5',
    description: '掌握产品知识，具备销售能力。深入学习AKG、CELL、荷尔蒙等产品原理，能够专业地向客户介绍产品。',
    keyPoints: ['GnAKG抗衰原理', 'GnCELL细胞修复', '荷尔蒙平衡', '产品见证'],
    courses: [
      { id: 'N-03', num: 'N-03', title: '🧬 GnAKG产品原理', subtitle: '普通人能听懂的讲解', duration: '30分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-04', num: 'N-04', title: '🔬 GnCELL产品原理', subtitle: '细胞修复系统', duration: '25分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-05', num: 'N-05', title: '⚖️ GnHORMONE产品原理', subtitle: '荷尔蒙平衡', duration: '25分钟', school: '新人成长学院', type: 'VIDEO' },
    ]
  },
  'business': {
    name: '经营篇',
    icon: '💼',
    color: '#3182CE',
    bgColor: '#BEE3F8',
    description: '学习经营方法，会做市场。掌握成功九步法、ABC法则、形象价值等核心技能。',
    keyPoints: ['成功九步法', 'ABC法则', '形象价值', '服务定江山'],
    courses: [
      { id: 'N-06', num: 'N-06', title: '💼 HIGO商业模式', subtitle: '四句话讲明白', duration: '20分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-07', num: 'N-07', title: '🚀 如何启动市场', subtitle: '新人起步六步曲', duration: '30分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-08', num: 'N-08', title: '📞 邀约话术', subtitle: 'ABC法则三种场景', duration: '30分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-09', num: 'N-09', title: '🎯 如何讲产品', subtitle: '产品讲解三板斧', duration: '30分钟', school: '新人成长学院', type: 'VIDEO' },
      { id: 'N-10', num: 'N-10', title: '🎤 如何讲机会', subtitle: '30分钟事业说明会', duration: '30分钟', school: '新人成长学院', type: 'VIDEO' },
    ]
  },
  'team': {
    name: '团队篇',
    icon: '👥',
    color: '#805AD5',
    bgColor: '#E9D8FD',
    description: '建设团队，实现被动收入。学习如何招募新人、带团队、会议体系等核心能力。',
    keyPoints: ['团队启动', '招募技巧', '会议体系', '骨干培养'],
    courses: [
      { id: 'L1-01', num: 'L1-01', title: '👥 如何带团队', subtitle: '团队建设基础', duration: '25分钟', school: '初阶领导力学院', type: 'VIDEO' },
      { id: 'L1-02', num: 'L1-02', title: '🤝 如何招募新人', subtitle: '招募话术与技巧', duration: '30分钟', school: '初阶领导力学院', type: 'VIDEO' },
    ]
  },
  'mindset': {
    name: '心态篇',
    icon: '❤️',
    color: '#E53E3E',
    bgColor: '#FED7D7',
    description: '五大心态、情绪管理，稳定压倒一切。心态决定成败，这是贯穿所有阶段的核心主题。',
    keyPoints: ['五大心态', '情绪管理', '抗压能力', '持续成长'],
    courses: [
      { id: 'L1-05', num: 'L1-05', title: '❤️ 五大心态', subtitle: '成功者的心态', duration: '20分钟', school: '初阶领导力学院', type: 'VIDEO' },
      { id: 'L1-06', num: 'L1-06', title: '🧘 情绪管理', subtitle: '如何保持积极', duration: '25分钟', school: '初阶领导力学院', type: 'VIDEO' },
    ]
  },
  'practice': {
    name: '实操篇',
    icon: '🎯',
    color: '#DD6B20',
    bgColor: '#FEEBC8',
    description: '实战演练，即学即用，快速落地。话术练习、邀约技巧、成交话术等实战内容。',
    keyPoints: ['话术练习', '邀约技巧', '成交话术', '客户跟进'],
    courses: [
      { id: 'P-01', num: 'P-01', title: '📞 电话邀约话术', subtitle: '高效邀约技巧', duration: '20分钟', school: '初阶领导力学院', type: 'VIDEO' },
      { id: 'P-02', num: 'P-02', title: '💬 产品介绍话术', subtitle: '产品讲解三板斧', duration: '25分钟', school: '初阶领导力学院', type: 'VIDEO' },
    ]
  },
}

const typeColors: Record<string, string> = {
  VIDEO: '#E53E3E',
  TEXT: '#3182CE',
  AUDIO: '#D69E2E'
}

const typeLabels: Record<string, string> = {
  VIDEO: '视频',
  TEXT: '文字',
  AUDIO: '音频'
}

export default function ChapterDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const chapter = chaptersData[slug]

  if (!chapter) {
    return (
      <div className="min-h-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>篇章不存在</h1>
          <Link href="/chapters" style={{ color: 'var(--primary-blue)' }}>返回篇章列表</Link>
        </div>
      </div>
    )
  }

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

      {/* Chapter Header */}
      <section style={{ background: `linear-gradient(135deg, ${chapter.color} 0%, ${chapter.color}cc 100%)`, padding: '80px 0 60px', color: 'white' }}>
        <div className="container">
          <Link href="/chapters" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px' }}>
            <i className="fas fa-arrow-left"></i> 返回篇章列表
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.3)' }}>
              {chapter.icon}
            </div>
            <div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '8px' }}>{chapter.name}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '16px' }}>{chapter.description}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {chapter.keyPoints.map((point, index) => (
                  <span key={index} style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.875rem' }}>{point}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                <i className="fas fa-book-open" style={{ marginRight: '8px', color: chapter.color }}></i>
                课程列表
              </h2>
              <span style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>共 {chapter.courses.length} 门课程</span>
            </div>
            <div>
              {chapter.courses.map((course, index) => (
                <Link key={course.id} href={`/course/${course.id}`} className="course-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', borderBottom: index < chapter.courses.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', background: chapter.bgColor, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                    {course.title.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, color: 'var(--text-dark)', marginBottom: '4px' }}>{course.title}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-light)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ background: typeColors[course.type], color: 'white', padding: '2px 8px', borderRadius: '50px', fontSize: '0.75rem' }}>{typeLabels[course.type]}</span>
                      </span>
                      <span><i className="fas fa-clock" style={{ marginRight: '4px' }}></i>{course.duration}</span>
                      <span>{course.school}</span>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <span style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)' }}>
                      <i className="fas fa-play" style={{ fontSize: '0.75rem' }}></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Chapter Summary */}
          <div className="card" style={{ marginTop: '24px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '16px' }}>
              <i className="fas fa-star" style={{ marginRight: '8px', color: chapter.color }}></i>
              篇章总结
            </h3>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
              {chapter.name}是HIGO商学院的核心篇章之一。通过系统学习本篇章的{chapter.courses.length}门课程，您将全面掌握{chapter.keyPoints.join('、')}等核心能力，为后续学习和事业发展打下坚实基础。
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link>
        <Link href="/course" className="mobile-nav-item"><i className="fas fa-book"></i><span>课程</span></Link>
        <Link href="/chapters" className="mobile-nav-item active"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link>
      </div>
    </div>
  )
}