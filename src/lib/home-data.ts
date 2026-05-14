export const homeHero = {
  badge: 'HIGO GLOBAL BUSINESS SCHOOL',
  title: 'HIGO 全球商学院',
  subtitle: '国际生命科技经营者成长系统',
}

export const homeSpaces = [
  {
    id: 'survival',
    icon: '01',
    name: '新人7天启动营',
    tag: '新人第一入口',
    description: '7天完成认知、表达、行动与复盘闭环，建立稳定起步节奏。',
    goals: ['每日任务', '标准话术', '行动清单', '合规底线'],
    href: '/business/survival/7-day',
  },
  {
    id: 'scripts',
    icon: '02',
    name: '话术训练库',
    tag: '表达训练',
    description: '按邀约、产品、机会、跟进等场景训练经营者表达稳定性。',
    goals: ['分类训练', '推荐说法', '不建议说法', '复制应用'],
    href: '/scripts',
  },
  {
    id: 'playbooks',
    icon: '03',
    name: '会议SOP库',
    tag: '团队复制工具',
    description: '沉淀主持流程、主讲结构与会后复盘动作，提升会议复制效率。',
    goals: ['流程模板', '主持稿', '复盘表', '标准化执行'],
    href: '/meetings/playbooks',
  },
  {
    id: 'compliance',
    icon: '04',
    name: '合规表达替换库',
    tag: '全员风控工具',
    description: '建立“不要说 / 可以说”对照库，降低高风险表达。',
    goals: ['风险识别', '替换表达', '场景示例', '团队统一口径'],
    href: '/compliance/phrasebook',
  },
]

export const learningEntrances = [
  {
    href: '/business/survival/7-day',
    icon: '7D',
    title: '新人7天启动营',
    description: '新人第一入口',
  },
  {
    href: '/scripts',
    icon: 'SC',
    title: '话术训练库',
    description: '经营者表达训练',
  },
  {
    href: '/meetings/playbooks',
    icon: 'SOP',
    title: '会议SOP库',
    description: '团队复制工具',
  },
  {
    href: '/compliance/phrasebook',
    icon: 'OK',
    title: '合规表达替换库',
    description: '全员风控工具',
  },
]

export const newcomerLinks = [
  {
    href: '/business/survival/7-day',
    number: '01',
    title: '新人7天启动营',
    description: '先建立第一周执行闭环。',
  },
  {
    href: '/scripts',
    number: '02',
    title: '话术训练库',
    description: '先练稳定表达再做转化。',
  },
  {
    href: '/meetings/playbooks',
    number: '03',
    title: '会议SOP库',
    description: '借力会议系统提升效率。',
  },
  {
    href: '/compliance/phrasebook',
    number: '04',
    title: '合规表达替换库',
    description: '先过风控边界再做传播。',
  },
  {
    href: '/products',
    number: '05',
    title: '产品学院',
    description: '理解产品定位与场景边界。',
  },
]

export const featuredCourses = [
  {
    href: '/business/survival/7-day',
    tag: '行动训练',
    title: '7天行动训练路径',
    description: '按天执行学习、表达、行动和复盘任务。',
    meta: '7天 · 每日任务',
  },
  {
    href: '/scripts',
    tag: '表达训练',
    title: '高频场景话术演练',
    description: '针对邀约、产品、机会说明和跟进场景进行实战训练。',
    meta: '场景化 · 可复制',
  },
  {
    href: '/meetings/playbooks',
    tag: '会议复制',
    title: '会议SOP执行手册',
    description: '统一主持流程、主讲结构与会后复盘动作。',
    meta: 'SOP · 团队协同',
  },
]

export const featuredMeetings = [
  {
    href: '/meetings/playbooks/newcomer',
    icon: 'N',
    title: '新人启动会',
    description: '明确新人第一周训练重点与会后动作。',
    meta: '30分钟 · SOP',
  },
  {
    href: '/meetings/playbooks/product',
    icon: 'P',
    title: '产品分享会',
    description: '围绕产品定位、体验逻辑和表达边界组织分享。',
    meta: '40分钟 · SOP',
  },
  {
    href: '/meetings/playbooks/opportunity',
    icon: 'O',
    title: '机会说明会',
    description: '讲清路径与学习方式，不做收益确定性承诺。',
    meta: '45分钟 · SOP',
  },
]
