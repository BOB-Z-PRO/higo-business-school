export const homeHero = {
  badge: 'HIGO 全球商学院',
  title: '经营者成长与复制系统',
  subtitle: '把新人启动、产品学习、经营训练、会议复制和合规表达整理成可执行路径。',
}

export const homeSpaces = [
  {
    id: 'survival',
    icon: '01',
    name: '生存空间',
    tag: '新人启动期',
    description: '完成第一轮认知、体验、开口和复盘，建立稳定起步节奏。',
    goals: ['认识公司', '认识产品', '学习合规', '完成首轮邀约'],
  },
  {
    id: 'living',
    icon: '02',
    name: '生活空间',
    tag: '稳定经营期',
    description: '围绕持续分享、会后跟进和带教动作建立可复用经营节奏。',
    goals: ['稳定分享', '借力会议', '带动新人', '形成复盘'],
  },
  {
    id: 'life',
    icon: '03',
    name: '生命空间',
    tag: '团队复制期',
    description: '建立组织视角、会议系统和标准化带教方法，支持长期复制。',
    goals: ['组织思维', '会议系统', '讲师培养', '文化复制'],
  },
]

export const learningEntrances = [
  { href: '/business/survival/7-day', icon: '7D', title: '新人 7 天启动营', description: '每天明确学什么、说什么、做什么。' },
  { href: '/scripts', icon: 'SC', title: '话术训练库', description: '按邀约、产品、机会与异议场景训练表达。' },
  { href: '/meetings/playbooks', icon: 'SOP', title: '会议 SOP 库', description: '把会议转成可复制流程。' },
  { href: '/compliance/phrasebook', icon: 'OK', title: '合规表达替换库', description: '把高风险说法改成稳健表达。' },
]

export const newcomerLinks = [
  { href: '/company', number: '01', title: '先建立公司认知', description: '知道 HIGO 是什么、从哪里来、为什么做。' },
  { href: '/products', number: '02', title: '再理解产品边界', description: '讲机制、讲体验，不做医疗化承诺。' },
  { href: '/business/survival/7-day', number: '03', title: '进入 7 天启动营', description: '用日任务完成第一轮学习闭环。' },
  { href: '/scripts', number: '04', title: '练标准话术', description: '先合规，再邀约，再跟进。' },
  { href: '/compliance/phrasebook', number: '05', title: '先过合规底线', description: '避免疗效、收益、绝对化表达。' },
]

export const featuredCourses = [
  { href: '/course/N-01', tag: '新人必修', title: 'HIGO 是什么', description: '一节课讲清公司定位与基础认知。', meta: '15 分钟 · 视频' },
  { href: '/products', tag: '产品基础', title: '四大产品认知', description: '先学产品方向，再进入场景表达。', meta: '产品篇 · 入口' },
  { href: '/business/survival/objections', tag: '疑义处理', title: '新人常见疑问', description: '用标准表达稳定回应高频质疑。', meta: '经营篇 · 训练' },
]

export const featuredMeetings = [
  { href: '/meetings/playbooks/newcomer', icon: 'N', title: '新人启动会', description: '帮助新人明确第一周行动。', meta: '30 分钟 · SOP' },
  { href: '/meetings/playbooks/product', icon: 'P', title: '产品分享会', description: '聚焦产品定位与表达边界。', meta: '40 分钟 · SOP' },
  { href: '/meetings/playbooks/opportunity', icon: 'O', title: '机会说明会', description: '讲清路径与学习方式，不做收益承诺。', meta: '45 分钟 · SOP' },
]
