export type BusinessSpaceFeature = {
  icon: string
  title: string
  desc: string
}

export type BusinessSpace = {
  id: 'survival' | 'living' | 'life'
  icon: string
  name: string
  subtitle: string
  color: string
  gradient: string
  level: string
  description: string
  goals: string[]
  features: BusinessSpaceFeature[]
  courses: number
  duration: string
}

export const businessSpaces: BusinessSpace[] = [
  {
    id: 'survival',
    icon: '🌱',
    name: '生存空间',
    subtitle: '新人启动期',
    color: '#38A169',
    gradient: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
    level: '新人 → 三星 SVIP',
    description: '从不了解到愿意学习、愿意自用、愿意分享，先把基础认知和标准动作做扎实。',
    goals: ['认识公司', '认识产品', '理解模式', '完成自用', '开始分享', '借力会议'],
    features: [
      { icon: '📚', title: '该学什么', desc: '聚焦公司基础、产品基础和表达基础。' },
      { icon: '🧠', title: '该会什么', desc: '能用简洁语言讲清 HIGO 是什么、产品支持什么。' },
      { icon: '✅', title: '该做什么', desc: '完成新人课程、每日学习并建立行动节奏。' },
    ],
    courses: 10,
    duration: '约 15 天',
  },
  {
    id: 'living',
    icon: '🏠',
    name: '生活空间',
    subtitle: '稳定经营期',
    color: '#805AD5',
    gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
    level: '一星 → 三星钻石',
    description: '从自己会分享到能够带动新人，逐步建立稳定学习、会议借力和团队氛围。',
    goals: ['稳定分享', '建立成交动作', '带动新人', '形成共学氛围', '理解会议系统'],
    features: [
      { icon: '📚', title: '该学什么', desc: '产品讲解、机会说明与沟通转化的基础逻辑。' },
      { icon: '🧠', title: '该会什么', desc: '能做 3 分钟产品分享，也能做简版机会说明。' },
      { icon: '✅', title: '该做什么', desc: '保持每周学习和带新动作，形成稳定节奏。' },
    ],
    courses: 12,
    duration: '约 30 天',
  },
  {
    id: 'life',
    icon: '⭐',
    name: '生命空间',
    subtitle: '复制增长期',
    color: '#D69E2E',
    gradient: 'linear-gradient(135deg, #D69E2E 0%, #F6E05E 100%)',
    level: '一星 → 三星黑钻',
    description: '把个人动作升级为团队系统，逐步建立复制、会议、讲师与文化机制。',
    goals: ['组织思维', '会议系统', '讲师系统', '新人复制', '合规文化', '长期布局'],
    features: [
      { icon: '📚', title: '该学什么', desc: '组织架构、会议设计与团队培养方法。' },
      { icon: '🧠', title: '该会什么', desc: '能搭建学习路径，也能主持关键会议。' },
      { icon: '✅', title: '该做什么', desc: '沉淀可复制流程，推动团队长期成长。' },
    ],
    courses: 16,
    duration: '约 60 天',
  },
]

export const businessObjections = [
  { icon: '🏢', title: '关于公司', count: 10, color: '#1A365D' },
  { icon: '🧬', title: '关于产品', count: 10, color: '#38A169' },
  { icon: '💼', title: '关于经营', count: 10, color: '#3182CE' },
  { icon: '🤝', title: '关于分享', count: 10, color: '#805AD5' },
  { icon: '⚠️', title: '关于合规', count: 10, color: '#E53E3E' },
]
