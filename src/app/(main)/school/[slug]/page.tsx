'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, CheckCircle, TrendingUp, Users, Star, Award, Target, Heart, Zap } from 'lucide-react'

const schoolsData: Record<string, {
  name: string
  subtitle: string
  icon: string
  gradient: string
  gradientStart: string
  gradientEnd: string
  badge: string
  badgeIcon: string
  description: string
  stats: { num: string; label: string }[]
  chapters: {
    id: string
    name: string
    icon: string
    bgClass: string
    description: string
    courses: { id: string; num: string; title: string; subtitle: string; duration: string; category: string; categoryClass: string }[]
  }[]
  overview: {
    title: string
    content: string[]
  }
  teachers: {
    name: string
    title: string
    avatar: string
    color: string
  }[]
  rules: {
    icon: string
    title: string
    desc: string
  }[]
}> = {
  'new': {
    name: '新人成长学院',
    subtitle: '新人入门，了解HIGO',
    icon: '🌱',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    gradientStart: '#38A169',
    gradientEnd: '#68D391',
    badge: '生存家园',
    badgeIcon: 'fa-seedling',
    description: '新人成长学院是每一位HIGO伙伴的起点。我们致力于帮助新人快速了解HIGO、掌握基础技能，建立对产品和事业信心。',
    stats: [
      { num: '10', label: '课程数量' },
      { num: '15', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
    chapters: [
      {
        id: 'company',
        name: '公司篇 — 了解HIGO是谁',
        icon: '🏢',
        bgClass: 'company',
        description: '2门课程 · 建立信任基础',
        courses: [
          { id: 'N-01', num: 'N-01', title: '🏢 HIGO是什么', subtitle: '一页纸说清楚', duration: '15分钟', category: '公司篇', categoryClass: 'company' },
          { id: 'N-02', num: 'N-02', title: '📈 为什么要做HIGO', subtitle: '趋势与机遇', duration: '20分钟', category: '公司篇', categoryClass: 'company' },
        ],
      },
      {
        id: 'product',
        name: '产品篇 — 掌握产品知识',
        icon: '🧬',
        bgClass: 'product',
        description: '3门课程 · 具备销售能力',
        courses: [
          { id: 'N-03', num: 'N-03', title: '🧬 GnAKG产品原理', subtitle: '普通人能听懂的讲解', duration: '30分钟', category: '产品篇', categoryClass: 'product' },
          { id: 'N-04', num: 'N-04', title: '🔬 GnCELL产品原理', subtitle: '细胞修复系统', duration: '25分钟', category: '产品篇', categoryClass: 'product' },
          { id: 'N-05', num: 'N-05', title: '⚖️ GnHORMONE产品原理', subtitle: '荷尔蒙平衡', duration: '25分钟', category: '产品篇', categoryClass: 'product' },
        ],
      },
      {
        id: 'business',
        name: '经营篇 — 学习经营方法',
        icon: '💼',
        bgClass: 'business',
        description: '5门课程 · 会做市场',
        courses: [
          { id: 'N-06', num: 'N-06', title: '💼 HIGO商业模式', subtitle: '四句话讲明白', duration: '20分钟', category: '经营篇', categoryClass: 'business' },
          { id: 'N-07', num: 'N-07', title: '🚀 如何启动市场', subtitle: '新人起步六步曲', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
          { id: 'N-08', num: 'N-08', title: '📞 邀约话术', subtitle: 'ABC法则三种场景', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
          { id: 'N-09', num: 'N-09', title: '🎯 如何讲产品', subtitle: '产品讲解三板斧', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
          { id: 'N-10', num: 'N-10', title: '🎤 如何讲机会', subtitle: '30分钟事业说明会', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
        ],
      },
    ],
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
    ]
  },
  'svip': {
    name: '初阶领导力学院',
    subtitle: '从生存到生活 — 学会带团队的必经之路',
    icon: '🔮',
    gradient: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)',
    gradientStart: '#3182CE',
    gradientEnd: '#63B3ED',
    badge: '生活家园',
    badgeIcon: 'fa-star',
    description: '初阶领导力学院帮助你从"自己干"转变为"带人干"，学会团队建设的基础技能。',
    stats: [
      { num: '10', label: '课程数量' },
      { num: '30', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
    chapters: [
      {
        id: 'team',
        name: '团队篇 — 建设你的团队',
        icon: '👥',
        bgClass: 'team',
        description: '4门课程 · 团队启动',
        courses: [
          { id: 'L1-01', num: 'L1-01', title: '👥 如何带团队', subtitle: '团队建设基础', duration: '25分钟', category: '团队篇', categoryClass: 'team' },
          { id: 'L1-02', num: 'L1-02', title: '🤝 如何招募新人', subtitle: '招募话术与技巧', duration: '30分钟', category: '团队篇', categoryClass: 'team' },
        ],
      },
      {
        id: 'business',
        name: '经营篇 — 深化经营能力',
        icon: '💼',
        bgClass: 'business',
        description: '3门课程 · 经营深化',
        courses: [
          { id: 'L1-03', num: 'L1-03', title: '📈 成功九步法', subtitle: '第三步到第五步', duration: '35分钟', category: '经营篇', categoryClass: 'business' },
          { id: 'L1-04', num: 'L1-04', title: '⭐ 形象价值百万', subtitle: '自我包装与呈现', duration: '25分钟', category: '经营篇', categoryClass: 'business' },
        ],
      },
      {
        id: 'mindset',
        name: '心态篇 — 稳定压倒一切',
        icon: '❤️',
        bgClass: 'mindset',
        description: '3门课程 · 心态建设',
        courses: [
          { id: 'L1-05', num: 'L1-05', title: '❤️ 五大心态', subtitle: '成功者的心态', duration: '20分钟', category: '心态篇', categoryClass: 'mindset' },
          { id: 'L1-06', num: 'L1-06', title: '🧘 情绪管理', subtitle: '如何保持积极', duration: '25分钟', category: '心态篇', categoryClass: 'mindset' },
        ],
      },
    ],
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
    ]
  },
  'diamond': {
    name: '中阶领导力学院',
    subtitle: '从生活到生命 — 打造高效团队',
    icon: '💎',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    gradientStart: '#805AD5',
    gradientEnd: '#B794F4',
    badge: '生活家园',
    badgeIcon: 'fa-gem',
    description: '中阶领导力学院专注于团队复制与绩效提升，培养核心骨干。',
    stats: [
      { num: '10', label: '课程数量' },
      { num: '60', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
    chapters: [
      {
        id: 'team',
        name: '团队篇 — 团队复制',
        icon: '👥',
        bgClass: 'team',
        description: '4门课程 · 团队复制',
        courses: [
          { id: 'L2-01', num: 'L2-01', title: '👥 如何复制团队', subtitle: '标准化复制流程', duration: '30分钟', category: '团队篇', categoryClass: 'team' },
          { id: 'L2-02', num: 'L2-02', title: '🎯 绩效提升', subtitle: 'KPI与激励机制', duration: '25分钟', category: '团队篇', categoryClass: 'team' },
        ],
      },
      {
        id: 'business',
        name: '经营篇 — 业务沟通',
        icon: '💼',
        bgClass: 'business',
        description: '3门课程 · 业务沟通',
        courses: [
          { id: 'L2-03', num: 'L2-03', title: '💬 一对一沟通', subtitle: '核心骨干沟通技巧', duration: '25分钟', category: '经营篇', categoryClass: 'business' },
          { id: 'L2-04', num: 'L2-04', title: '📊 会议体系', subtitle: '高效会议组织', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
        ],
      },
      {
        id: 'mindset',
        name: '心态篇 — 领导力心态',
        icon: '❤️',
        bgClass: 'mindset',
        description: '3门课程 · 领导力心态',
        courses: [
          { id: 'L2-05', num: 'L2-05', title: '👑 领导者心态', subtitle: '从管理者到领袖', duration: '30分钟', category: '心态篇', categoryClass: 'mindset' },
          { id: 'L2-06', num: 'L2-06', title: '⚡ 抗压能力', subtitle: '如何在压力下成长', duration: '25分钟', category: '心态篇', categoryClass: 'mindset' },
        ],
      },
    ],
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
    ]
  },
  'black': {
    name: '高阶领导力学院',
    subtitle: '生命家园 — 领袖传承与永续发展',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
    gradientStart: '#D69E2E',
    gradientEnd: '#F6E05E',
    badge: '生命家园',
    badgeIcon: 'fa-crown',
    description: '高阶领导力学院学习战略规划和组织文化建设，成为真正的领袖。',
    stats: [
      { num: '10', label: '课程数量' },
      { num: '90', label: '天学习周期' },
      { num: '3', label: '篇章覆盖' },
    ],
    chapters: [
      {
        id: 'business',
        name: '战略篇 — 长远规划',
        icon: '🎯',
        bgClass: 'business',
        description: '4门课程 · 战略规划',
        courses: [
          { id: 'L3-01', num: 'L3-01', title: '🎯 未来3-5年愿景', subtitle: '战略规划制定', duration: '35分钟', category: '战略篇', categoryClass: 'business' },
          { id: 'L3-02', num: 'L3-02', title: '🌍 全球视野', subtitle: '国际市场布局', duration: '30分钟', category: '战略篇', categoryClass: 'business' },
        ],
      },
      {
        id: 'team',
        name: '文化篇 — 组织建设',
        icon: '🏛️',
        bgClass: 'team',
        description: '3门课程 · 文化建设',
        courses: [
          { id: 'L3-03', num: 'L3-03', title: '🏛️ 铁军团队', subtitle: '组织文化建设', duration: '30分钟', category: '文化篇', categoryClass: 'team' },
          { id: 'L3-04', num: 'L3-04', title: '⭐ 人才培养', subtitle: '接班人计划', duration: '25分钟', category: '文化篇', categoryClass: 'team' },
        ],
      },
      {
        id: 'mindset',
        name: '传承篇 — 永续发展',
        icon: '♾️',
        bgClass: 'mindset',
        description: '3门课程 · 永续传承',
        courses: [
          { id: 'L3-05', num: 'L3-05', title: '♾️ 永续发展', subtitle: '事业传承规划', duration: '30分钟', category: '传承篇', categoryClass: 'mindset' },
          { id: 'L3-06', num: 'L3-06', title: '🌟 影响力扩大', subtitle: '个人品牌建设', duration: '25分钟', category: '传承篇', categoryClass: 'mindset' },
        ],
      },
    ],
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
    ]
  },
}

export default function SchoolDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const school = schoolsData[slug]

  if (!school) {
    return (
      <div className="min-h-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-dark)' }}>学院不存在</h1>
          <Link href="/" style={{ color: 'var(--primary-blue)' }}>返回首页</Link>
        </div>
      </div>
    )
  }

  const totalCourses = school.chapters.reduce((sum, ch) => sum + ch.courses.length, 0)

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
      <section className="school-header" style={{ background: school.gradient }}>
        <div className="container">
          <Link href="/" className="back-btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px' }}>
            <i className="fas fa-arrow-left"></i> 返回首页
          </Link>
          <div className="school-header-content">
            <div className="school-logo">{school.icon}</div>
            <div className="school-info">
              <span className="school-badge"><i className={`fas ${school.badgeIcon}`}></i> {school.badge}</span>
              <h1>{school.name}</h1>
              <p>{school.subtitle}</p>
              <div className="school-stats">
                {school.stats.map((stat) => (
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
          <div className="progress-card" style={{ background: school.gradient }}>
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
          {school.chapters.map((chapter) => (
            <div key={chapter.id} className="chapter-section">
              <div className="chapter-header">
                <div className={`chapter-icon ${chapter.bgClass}`}>{chapter.icon}</div>
                <div className="chapter-info">
                  <h3>{chapter.name}</h3>
                  <span>{chapter.description}</span>
                </div>
              </div>
              <div className="course-list">
                {chapter.courses.map((course) => (
                  <Link key={course.id} href={`/course/${course.id}`} className="course-card">
                    <div className={`course-card-header ${chapter.bgClass}`}></div>
                    <div className="course-card-body">
                      <div className="course-card-meta">
                        <span className="course-num">{course.num}</span>
                        <span className="course-duration"><i className="far fa-clock"></i> {course.duration}</span>
                      </div>
                      <h4 className="course-title">{course.title}</h4>
                      <p className="course-subtitle">{course.subtitle}</p>
                      <div className="course-card-footer">
                        <span className={`course-category ${course.categoryClass}`}>{course.category}</span>
                        <span className="course-status pending">待学习</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Graduation Requirements */}
          <div className="chapter-section" style={{ background: school.gradient, color: 'white' }}>
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
              <i className={`fas ${school.badgeIcon}`} style={{ color: school.gradientStart }}></i>
              {school.overview.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {school.overview.content.map((paragraph, index) => (
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
              <Users size={24} style={{ color: school.gradientStart }} />
              导师团队
            </h3>
            <div className="teachers-grid">
              {school.teachers.map((teacher) => (
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
              <Target size={24} style={{ color: school.gradientStart }} />
              学习规范
            </h3>
            <div className="rules-list">
              {school.rules.map((rule, index) => (
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