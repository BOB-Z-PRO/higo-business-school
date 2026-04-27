'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const chaptersData: Record<string, {
  name: string
  badge: string
  badgeIcon: string
  description: string
  color: string
  gradientStart: string
  gradientEnd: string
  stats: { num: string; label: string }[]
  type: 'modules' | 'products' | 'rules'
  modules?: {
    icon: string
    title: string
    description: string
    meta: string
    highlight?: string
    highlightColor?: string
  }[]
  products?: {
    name: string
    icon: string
    subtitle: string
    gradientClass: string
    features: { icon: string; title: string; description: string }[]
    certifications: string[]
  }[]
  rules?: {
    type: 'do' | 'dont'
    color: string
    iconColor: string
    items: string[]
  }[]
  courses: {
    id: string
    num: string
    title: string
    subtitle: string
    duration: string
    category: string
    categoryClass: string
  }[]
}> = {
  'company': {
    name: '公司篇',
    badge: '信任基石',
    badgeIcon: 'fa-building',
    description: '了解HIGO是谁，建立信任基础，解决"这家公司靠谱吗"的问题',
    color: '#D69E2E',
    gradientStart: '#D69E2E',
    gradientEnd: '#F6E05E',
    stats: [
      { num: 'HIGO', label: '全球生物科技集团' },
      { num: '6', label: '全球分公司' },
      { num: '7+', label: '国际认证' },
    ],
    type: 'modules',
    modules: [
      { icon: '🏢', title: '公司介绍', description: 'HIGO全球生物科技集团创立背景、核心团队、愿景使命价值观，发展历程', meta: '5个子话题', highlight: '必读', highlightColor: '#D69E2E' },
      { icon: '🔬', title: '科研实力', description: '美国研发实验室、核心技术团队、科研专利、与权威机构合作', meta: '4个子话题', highlight: '必读', highlightColor: '#D69E2E' },
      { icon: '📈', title: '未来前景', description: '大健康行业趋势、跨境电商赛道、基因抗衰市场规模、公司战略规划', meta: '4个子话题' },
      { icon: '🌏', title: '国际战略布局', description: '初心、使命、产业定位、商业模式定位', meta: '4个子话题' },
      { icon: '🔑', title: '海购五句话', description: '一个生态系统、二个体制、三大家园、四大红利 — 理解HIGO商业模式核心', meta: '5个子话题', highlight: '核心', highlightColor: '#D69E2E' },
      { icon: '🎯', title: '企业文化', description: '核心价值观、团队精神、行为准则', meta: '3个子话题' },
      { icon: '❤️', title: 'HIGO爱心基金会', description: '基金会介绍、公益项目、参与方式', meta: '3个子话题' },
      { icon: '🏭', title: '全球分公司', description: '美国总部、马来西亚运营中心、韩国/越南/加拿大/日本分公司（含图文视频）', meta: '6个分公司', highlight: '重要', highlightColor: '#D69E2E' },
      { icon: '🏗️', title: '组织架构', description: '公司组织架构图、各部门职能说明', meta: '2个子话题' },
      { icon: '🚚', title: '运营支持', description: '物流体系、支付系统、客服中心', meta: '3个子话题' },
      { icon: '📜', title: '资质认证', description: 'FDA认证、cGMP认证、其他国际认证、第三方检测报告', meta: '4个子话题', highlight: '信任背书', highlightColor: '#D69E2E' },
    ],
    courses: [
      { id: 'N-01', num: 'N-01', title: '🏢 HIGO是什么', subtitle: '一页纸说清楚', duration: '15分钟', category: '公司篇', categoryClass: 'company' },
      { id: 'N-02', num: 'N-02', title: '📈 为什么要做HIGO', subtitle: '趋势与机遇', duration: '20分钟', category: '公司篇', categoryClass: 'company' },
    ]
  },
  'product': {
    name: '产品篇',
    badge: '专业背书',
    badgeIcon: 'fa-flask',
    description: '掌握产品知识，具备销售能力，解决"产品为什么有效"的问题',
    color: '#38A169',
    gradientStart: '#38A169',
    gradientEnd: '#68D391',
    stats: [
      { num: '4', label: '核心产品' },
      { num: '7+', label: '国际认证' },
      { num: '30+', label: '见证案例' },
    ],
    type: 'products',
    products: [
      {
        name: 'GnAKG',
        icon: '🧬',
        subtitle: '基因抗衰科技 · 年轻8.5-34岁',
        gradientClass: 'akg',
        features: [
          { icon: '📚', title: '科学原理', description: 'NAD+补充、Sirtuins激活，五大抗衰机制' },
          { icon: '🧪', title: '核心成分', description: 'α-酮戊二酸 + 8种协同成分' },
          { icon: '✨', title: '核心功效', description: '抗炎/抗自由基/代谢平衡/细胞修复/端粒保护' },
          { icon: '📊', title: '试验数据', description: '180天/29人/平均年轻8.5岁/最大34岁' },
        ],
        certifications: ['FDA认证', 'cGMP认证', '非转基因', 'SGS检测']
      },
      {
        name: 'GnCELL',
        icon: '🔬',
        subtitle: '靶向自噬技术 · 细胞修复系统',
        gradientClass: 'cell',
        features: [
          { icon: '📚', title: '科学原理', description: '靶向自噬技术、细胞清理机制' },
          { icon: '🎯', title: '三大靶向', description: '饿死癌细胞/慢性炎症/免疫调节' },
          { icon: '✨', title: '核心功效', description: '细胞修复/炎症消除/免疫增强' },
          { icon: '📊', title: '见证案例', description: '乙肝转阴/肿瘤缩小/关节改善' },
        ],
        certifications: ['FDA认证', 'cGMP认证', 'HALAL认证', 'SGS检测']
      },
      {
        name: 'GnHORMONE',
        icon: '⚖️',
        subtitle: '荷尔蒙平衡 · 八大腺体调节',
        gradientClass: 'hormone',
        features: [
          { icon: '📚', title: '科学原理', description: '八大腺体系统、荷尔蒙平衡调节' },
          { icon: '♂️♀️', title: '男女配方', description: '男士款：雄性激素/精力/体能\n女士款：雌性激素/更年期/情绪' },
          { icon: '✨', title: '核心功效', description: '更年期症状/精力/睡眠/性功能/情绪' },
          { icon: '📊', title: '见证案例', description: '更年期症状消失/睡眠改善/精力充沛' },
        ],
        certifications: ['FDA认证', 'cGMP认证', '纯天然', 'SGS检测']
      },
      {
        name: 'GnBRAIN',
        icon: '🧠',
        subtitle: '大脑功能 · 神经修复',
        gradientClass: 'brain',
        features: [
          { icon: '📚', title: '科学原理', description: '神经修复技术、认知功能提升' },
          { icon: '🎯', title: '核心功效', description: '记忆力/专注力/睡眠质量/情绪' },
          { icon: '✨', title: '适用人群', description: '脑力劳动者/记忆力下降/睡眠障碍' },
          { icon: '📊', title: '见证案例', description: '睡眠改善/专注力提升/记忆力增强' },
        ],
        certifications: ['FDA认证', 'cGMP认证', '脑健康认证', 'SGS检测']
      },
    ],
    courses: [
      { id: 'N-03', num: 'N-03', title: '🧬 GnAKG产品原理', subtitle: '普通人能听懂的讲解', duration: '30分钟', category: '产品篇', categoryClass: 'product' },
      { id: 'N-04', num: 'N-04', title: '🔬 GnCELL产品原理', subtitle: '细胞修复系统', duration: '25分钟', category: '产品篇', categoryClass: 'product' },
      { id: 'N-05', num: 'N-05', title: '⚖️ GnHORMONE产品原理', subtitle: '荷尔蒙平衡', duration: '25分钟', category: '产品篇', categoryClass: 'product' },
    ]
  },
  'business': {
    name: '经营篇',
    badge: '行动指南',
    badgeIcon: 'fa-chart-line',
    description: '学习经营方法，会做市场，解决"怎么找人、怎么成交"的问题',
    color: '#3182CE',
    gradientStart: '#3182CE',
    gradientEnd: '#63B3ED',
    stats: [
      { num: '10', label: '核心课程' },
      { num: '4', label: '阶段学院' },
      { num: '5', label: '严禁事项' },
    ],
    type: 'rules',
    rules: [
      {
        type: 'do',
        color: '#38A169',
        iconColor: '#38A169',
        items: [
          '"AKG有助于延缓衰老"',
          '"产品是膳食营养补充剂"',
          '"效果因人而异"',
          '"建议配合健康的生活方式"',
          '"如有疾病请遵医嘱"',
        ]
      },
      {
        type: 'dont',
        color: '#E53E3E',
        iconColor: '#E53E3E',
        items: [
          '不能声称AKG能治病',
          '不能声称产品能替代药物',
          '不能夸大见效时间',
          '不能返佣扰乱市场',
          '不能跨区域经营',
        ]
      }
    ],
    modules: [
      { icon: '📋', title: '公司守则', description: '经营者守则、行为规范、奖惩制度', meta: '必读', highlight: '重要', highlightColor: '#E53E3E' },
      { icon: '⚖️', title: '规范经营', description: '四大铁律、晋升条件、违规处罚', meta: '必读', highlight: '重要', highlightColor: '#E53E3E' },
      { icon: '🧠', title: '心态学院', description: '五大心态，五大原则、心态进阶', meta: '7门课程', highlight: '贯穿始终', highlightColor: '#3182CE' },
      { icon: '💎', title: 'SVIP学院', description: '初阶领导力学院 · 生存家园 · 经营能力', meta: 'L1-01~L1-10' },
      { icon: '💠', title: '钻石学院', description: '中阶领导力学院 · 生活家园 · 团队能力', meta: 'L2-01~L2-10' },
      { icon: '👑', title: '黑钻学院', description: '高阶领导力学院 · 生命家园 · 领袖能力', meta: 'L3-01~L3-10' },
    ],
    courses: [
      { id: 'N-06', num: 'N-06', title: '💼 HIGO商业模式', subtitle: '四句话讲明白', duration: '20分钟', category: '经营篇', categoryClass: 'business' },
      { id: 'N-07', num: 'N-07', title: '🚀 如何启动市场', subtitle: '新人起步六步曲', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
      { id: 'N-08', num: 'N-08', title: '📞 邀约话术', subtitle: 'ABC法则三种场景', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
      { id: 'N-09', num: 'N-09', title: '🎯 如何讲产品', subtitle: '产品讲解三板斧', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
      { id: 'N-10', num: 'N-10', title: '🎤 如何讲机会', subtitle: '30分钟事业说明会', duration: '30分钟', category: '经营篇', categoryClass: 'business' },
    ]
  },
  'team': {
    name: '团队篇',
    badge: '复制扩张',
    badgeIcon: 'fa-users',
    description: '建设团队，实现被动收入，从"自己干"到"带人干"，解决"怎么带人"的问题',
    color: '#805AD5',
    gradientStart: '#805AD5',
    gradientEnd: '#B794F4',
    stats: [
      { num: '团队启动', label: '成功九步法' },
      { num: '会议体系', label: '早会/晚会/周会' },
      { num: '领导力', label: '影响力复制' },
    ],
    type: 'modules',
    modules: [
      { icon: '🚀', title: '团队启动', description: '成功九步法详解、如何做团队启动、启动会流程与关键节点', meta: '4个子话题', highlight: '核心', highlightColor: '#805AD5' },
      { icon: '📅', title: '会议体系', description: '早会/晚会/周会体系，会议流程标准化，会议记录与追踪', meta: '3个子话题', highlight: '核心', highlightColor: '#805AD5' },
      { icon: '🔥', title: '团队激励', description: '动势建设、激励机制设计、如何做团队激励', meta: '3个子话题' },
      { icon: '⚡', title: '领袖影响力', description: '如何影响核心圈、领袖魅力培养、复制系统建立', meta: '4个子话题' },
      { icon: '🏛️', title: '团队文化与价值观', description: '文化的力量、价值观建设、团队精神塑造', meta: '3个子话题' },
      { icon: '📢', title: '案例分享', description: '见证的力量、如何做案例分享、案例收集与整理', meta: '3个子话题' },
      { icon: '💪', title: '深度沟通', description: '团队凝聚力打造、沟通技巧、问题处理与解决', meta: '3个子话题' },
      { icon: '⏰', title: '时间管理与效率', description: '领导人时间表、优先级管理、效率提升方法', meta: '3个子话题' },
      { icon: '🎯', title: '目标设定与达成', description: '月计划与周计划、目标分解与追踪、达成路径', meta: '4个子话题' },
      { icon: '🗺️', title: '战略布局', description: '市场拓展思维、区域规划、战略思维培养', meta: '4个子话题' },
      { icon: '🤝', title: '资源整合与借力', description: '整合做大市场、资源链接与合作、借力思维', meta: '3个子话题' },
      { icon: '🏗️', title: '百年基业', description: '系统化运营思维、系统建设、基业长青', meta: '4个子话题' },
    ],
    courses: [
      { id: 'L1-01', num: 'L1-01', title: '👥 如何带团队', subtitle: '团队建设基础', duration: '25分钟', category: '团队篇', categoryClass: 'team' },
      { id: 'L1-02', num: 'L1-02', title: '🤝 如何招募新人', subtitle: '招募话术与技巧', duration: '30分钟', category: '团队篇', categoryClass: 'team' },
    ]
  },
  'mindset': {
    name: '心态篇',
    badge: '内在力量',
    badgeIcon: 'fa-heart',
    description: '五大心态、情绪管理，稳定压倒一切，解决"如何持续"的问题',
    color: '#E53E3E',
    gradientStart: '#E53E3E',
    gradientEnd: '#FC8181',
    stats: [
      { num: '5', label: '核心心态' },
      { num: '贯穿', label: '始终学习' },
      { num: '7+', label: '相关课程' },
    ],
    type: 'modules',
    modules: [
      { icon: '❤️', title: '五大心态', description: '相信、听话、照做、坚持、感恩', meta: '核心基础' },
      { icon: '🌟', title: '积极心态', description: '乐观面对挑战、相信自己能够成功', meta: '3个子话题' },
      { icon: '💪', title: '抗压能力', description: '如何在压力下保持冷静、化压力为动力', meta: '3个子话题' },
      { icon: '🎯', title: '目标心态', description: '聚焦目标、不被干扰、坚持到底', meta: '3个子话题' },
      { icon: '🤝', title: '感恩心态', description: '感恩公司、感恩团队、感恩客户', meta: '3个子话题' },
      { icon: '📚', title: '学习心态', description: '空杯心态、持续学习、不断成长', meta: '3个子话题' },
    ],
    courses: [
      { id: 'L1-05', num: 'L1-05', title: '❤️ 五大心态', subtitle: '成功者的心态', duration: '20分钟', category: '心态篇', categoryClass: 'mindset' },
      { id: 'L1-06', num: 'L1-06', title: '🧘 情绪管理', subtitle: '如何保持积极', duration: '25分钟', category: '心态篇', categoryClass: 'mindset' },
    ]
  },
  'practice': {
    name: '实操篇',
    badge: '即学即用',
    badgeIcon: 'fa-bullseye',
    description: '实战演练，快速落地，解决"怎么做"的问题',
    color: '#DD6B20',
    gradientStart: '#DD6B20',
    gradientEnd: '#ED8936',
    stats: [
      { num: '11', label: '实操课程' },
      { num: '4', label: '下单方式' },
      { num: '3', label: '支付方式' },
    ],
    type: 'modules',
    modules: [
      { icon: '🛒', title: '新会员注册购买', description: '完整的新会员注册流程和首单购买步骤', meta: '必学' },
      { icon: '🔄', title: '老会员复购', description: '老会员如何进行复购操作', meta: '必学' },
      { icon: '💰', title: '如何用积分下单', description: '积分获取、积分抵扣、下单使用积分', meta: '必学' },
      { icon: '📦', title: '如何在保税仓下单', description: '保税仓下单流程、注意事项', meta: '实操' },
      { icon: '🌏', title: '如何在香港包税直邮下单', description: '香港仓直邮流程、包税政策说明', meta: '实操' },
      { icon: '💳', title: '如何用VISA支付', description: 'VISA卡支付流程、安全验证', meta: '必学' },
      { icon: '📱', title: '如何用支付宝支付', description: '支付宝支付流程、限额说明', meta: '必学' },
      { icon: '💵', title: '如何转现金积分', description: '积分转现金操作流程', meta: '实操' },
      { icon: '🏧', title: '如何提现', description: '佣金提现流程、到账时间', meta: '必学' },
      { icon: '🎧', title: '如何跟客服沟通', description: '联系客服的正确方式、常见问题咨询', meta: '必学' },
    ],
    courses: [
      { id: 'PR-01', num: 'PR-01', title: '🛒 新会员注册购买', subtitle: '完整注册购买流程', duration: '15分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-02', num: 'PR-02', title: '🔄 老会员复购', subtitle: '复购操作指南', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-03', num: 'PR-03', title: '💰 积分下单教程', subtitle: '积分获取与使用', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-04', num: 'PR-04', title: '📦 保税仓下单', subtitle: '保税仓操作流程', duration: '15分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-05', num: 'PR-05', title: '🌏 香港直邮下单', subtitle: '包税直邮操作', duration: '15分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-06', num: 'PR-06', title: '💳 VISA支付', subtitle: '国际支付教程', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-07', num: 'PR-07', title: '📱 支付宝支付', subtitle: '国内支付教程', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-08', num: 'PR-08', title: '💵 转现金积分', subtitle: '积分转现金操作', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-09', num: 'PR-09', title: '🏧 佣金提现', subtitle: '提现操作教程', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
      { id: 'PR-10', num: 'PR-10', title: '🎧 客服沟通', subtitle: '联系客服的正确方式', duration: '10分钟', category: '实操篇', categoryClass: 'practice' },
    ]
  },
}

export default function ChapterDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const chapter = chaptersData[slug]

  if (!chapter) {
    return (
      <div className="min-h-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light)' }}>
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

      {/* Chapter Hero */}
      <section style={{ background: `linear-gradient(135deg, ${chapter.gradientStart} 0%, ${chapter.gradientEnd} 100%)`, color: 'white', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '6px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: '16px' }}>
            <i className={`fas ${chapter.badgeIcon}`} style={{ marginRight: '8px' }}></i>
            {chapter.badge}
          </span>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>{chapter.name}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 32px' }}>{chapter.description}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '48px' }}>
            {chapter.stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>{stat.num}</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section (for business chapter) */}
      {chapter.type === 'rules' && chapter.rules && (
        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {chapter.rules.map((rule, index) => (
                <div key={index} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '16px', borderLeft: `4px solid ${rule.color}` }}>
                  <h4 style={{ color: rule.color, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className={`fas fa-${rule.type === 'do' ? 'check-circle' : 'times-circle'}`}></i>
                    {rule.type === 'do' ? '正确示范' : '严禁事项'}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {rule.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--text-gray)' }}>
                        <i className={`fas fa-${rule.type === 'do' ? 'check' : 'times'}`} style={{ color: rule.color, width: '16px' }}></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Module Grid */}
      {chapter.type === 'modules' && chapter.modules && (
        <section className="section" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge">{chapter.name.slice(0, 2)}</span>
              <h2 className="section-title">{chapter.name}模块</h2>
              <p className="section-desc">{chapter.description}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {chapter.modules.map((module, index) => (
                <div key={index} className="module-card" style={{ background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', border: '1px solid var(--border)', transition: 'var(--transition)' }}>
                  <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', background: `linear-gradient(135deg, ${chapter.gradientStart}15, ${chapter.gradientEnd}15)` }}>
                    {module.icon}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '8px' }}>{module.title}</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>{module.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                      <span><i className="far fa-clock"></i> {module.meta}</span>
                      {module.highlight && (
                        <span style={{ color: module.highlightColor }}><i className="fas fa-star"></i> {module.highlight}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Grid (for product chapter) */}
      {chapter.type === 'products' && chapter.products && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Products</span>
              <h2 className="section-title">四大爆品专区</h2>
              <p className="section-desc">GnAKG · GnCELL · GnHORMONE · GnBRAIN</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
              {chapter.products.map((product, index) => (
                <div key={index} className="product-card" style={{ background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
                  <div style={{ padding: '32px', color: 'white', textAlign: 'center', background: `linear-gradient(135deg, ${chapter.gradientStart}, ${chapter.gradientEnd})` }}>
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{product.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{product.name}</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9375rem' }}>{product.subtitle}</p>
                  </div>
                  <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                      {product.features.map((feature, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{ width: '32px', height: '32px', background: 'var(--bg-gray)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.875rem' }}>{feature.icon}</div>
                          <div style={{ flex: 1 }}>
                            <strong style={{ display: 'block', color: 'var(--text-dark)', marginBottom: '2px' }}>{feature.title}</strong>
                            <span style={{ fontSize: '0.875rem', color: 'var(--text-gray)', whiteSpace: 'pre-line' }}>{feature.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {product.certifications.map((cert, i) => (
                        <span key={i} style={{ background: 'var(--bg-gray)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', color: 'var(--text-gray)' }}>{cert}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Courses */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Courses</span>
            <h2 className="section-title">{chapter.name}相关课程</h2>
            <p className="section-desc">各学院中属于{chapter.name}的课程</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {chapter.courses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`} className="course-card">
                <div className={`course-card-header ${course.categoryClass}`}></div>
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