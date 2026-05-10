export type MeetingPlaybookType = 'newcomer' | 'product' | 'opportunity'

export type MeetingPlaybook = {
  id: string
  title: string
  type: MeetingPlaybookType
  targetAudience: string
  meetingGoal: string
  duration: string
  agenda: string[]
  hostOpening: string
  speakerOutline: string[]
  caseTemplate: string
  followUpScripts: string[]
  reviewChecklist: string[]
  complianceNotes: string[]
  relatedMaterials: string[]
}

export const meetingPlaybooks: MeetingPlaybook[] = [
  {
    id: 'newcomer-starter',
    title: '新人启动会',
    type: 'newcomer',
    targetAudience: '刚加入系统、刚开始了解 HIGO 的新人和推荐人',
    meetingGoal: '降低新人陌生感，明确 7 天路径，帮助新人知道先学什么、先做什么、哪些话不能说。',
    duration: '30 分钟',
    agenda: [
      '主持人欢迎',
      '推荐人介绍',
      'HIGO 一句话认知',
      '为什么先学习',
      '为什么先自用',
      '新人 7 天路径',
      '合规提醒',
      '今日任务布置',
      '会后复盘',
    ],
    hostOpening:
      '欢迎大家来到新人启动会。今天这场会的目的不是让大家立刻做决定，而是帮助大家知道从哪里开始学、先做什么、哪些表达不能碰。先把起步走稳，后面才会更轻松。',
    speakerOutline: [
      '先解释 HIGO 的基础定位和学习方式',
      '说明为什么新人阶段以体验、学习和记录为主',
      '介绍 7 天启动营每天的核心动作',
      '强调借力会议和系统资料，而不是个人乱讲',
    ],
    caseTemplate:
      '可以分享“我为什么决定先学习和体验”的个人感受，重点讲认知变化和行动节奏，不讲收入刺激和疗效承诺。',
    followUpScripts: [
      '今天先别着急记所有内容，你只需要把 Day 1 和 Day 2 跑完，我们明天再一起复盘。',
      '如果你对某部分不清楚，可以先把问题记录下来，我们用系统课程一起对答案。',
    ],
    reviewChecklist: [
      '新人是否知道 7 天启动营入口',
      '新人是否知道当天的学习任务',
      '新人是否知道不能说哪些高风险表达',
      '推荐人是否安排了第一次复盘时间',
    ],
    complianceNotes: [
      '不能把启动会讲成“快速赚钱说明会”',
      '不能在欢迎环节中加入收益承诺',
      '不能要求新人立刻自行讲产品效果',
    ],
    relatedMaterials: ['新人 7 天启动营', '新人疑义问答', '合规中心'],
  },
  {
    id: 'product-sharing',
    title: '产品分享会',
    type: 'product',
    targetAudience: '对产品方向感兴趣的新人、用户和意向了解者',
    meetingGoal: '建立产品基础认知，讲清产品定位、科学背景、使用建议和表达边界，引导自用体验。',
    duration: '40 分钟',
    agenda: [
      '主持人开场',
      '今日产品主题',
      '产品一句话定位',
      '科学背景',
      '使用建议',
      '体验反馈',
      '禁止表达',
      'Q&A',
      '会后跟进',
    ],
    hostOpening:
      '今天这场产品分享会的目标，是帮助大家理解产品定位和资料逻辑，而不是让大家去记疗效话术。产品表达一定要以支持性、合规性和真实体验为前提。',
    speakerOutline: [
      '先讲产品属于哪个健康管理方向',
      '再讲科学背景和成分逻辑',
      '说明适用场景、使用建议和体验记录方式',
      '最后明确什么不能说，尤其是疾病和效果承诺',
    ],
    caseTemplate:
      '案例建议使用“我在持续体验中感受到的变化”这种结构，务必注明“因人而异”，不把个人感受包装成普遍结果。',
    followUpScripts: [
      '如果你对某一款产品感兴趣，我们可以先从资料和体验记录表开始。',
      '今天先不急着下结论，先把你最有感觉的一点记下来，后面再继续了解。',
    ],
    reviewChecklist: [
      '产品定位是否讲清楚',
      '是否使用了统一资料和标准表达',
      '是否明确提醒了禁止表达',
      '会后是否安排了体验记录和资料补充',
    ],
    complianceNotes: [
      '不能宣传疾病治疗效果',
      '不能用个案承诺结果',
      '不能暗示产品替代药物或医疗建议',
    ],
    relatedMaterials: ['产品篇', '产品合规话术', '合规表达替换库'],
  },
  {
    id: 'opportunity-briefing',
    title: '机会说明会',
    type: 'opportunity',
    targetAudience: '对 HIGO 平台路径、学习方式和成长模式感兴趣的意向伙伴',
    meetingGoal: '帮助意向人理解 HIGO 是什么、如何学习和成长，不承诺收益，不夸大机会。',
    duration: '45 分钟',
    agenda: [
      '主持人开场',
      '为什么关注大健康',
      'HIGO 是什么',
      '产品体系',
      '经营路径',
      '三大空间',
      '标准学习方式',
      '风险与合规提醒',
      '下一步行动',
    ],
    hostOpening:
      '今天这场说明会的重点，是帮助大家更完整地理解 HIGO 的学习和经营路径，而不是让大家现场做决定。先判断是否适合自己，再考虑下一步。',
    speakerOutline: [
      '从趋势切入，但不夸张行业红利',
      '讲 HIGO 的平台定位和产品体系',
      '讲三大空间和学习路径',
      '讲会议借力、系统学习和合规经营',
    ],
    caseTemplate:
      '可分享“我是如何从学习开始逐步建立认知”的成长案例，强调过程、学习和动作，不强调短期结果。',
    followUpScripts: [
      '你今天最有感触的是平台、产品还是学习方式？我们可以从你最关心的部分继续聊。',
      '如果你愿意下一步继续了解，我建议先完成新人 7 天启动营，再决定是否深入。',
    ],
    reviewChecklist: [
      '是否避免了收益承诺和速度承诺',
      '是否把平台定位讲成学习与复制系统',
      '是否明确说明合规边界',
      '是否给出清晰的下一步学习入口',
    ],
    complianceNotes: [
      '不能承诺收入和回报',
      '不能把说明会包装成“稳赚机会”',
      '不能用个别成功案例暗示普遍结果',
    ],
    relatedMaterials: ['经营篇', '新人 7 天启动营', '合规中心'],
  },
]

export const meetingPlaybookTypeMeta: Record<
  MeetingPlaybookType,
  { title: string; color: string; description: string }
> = {
  newcomer: {
    title: '新人启动会',
    color: '#3182CE',
    description: '帮助新人建立第一轮统一认知、行动节奏和合规边界。',
  },
  product: {
    title: '产品分享会',
    color: '#805AD5',
    description: '帮助团队围绕产品定位、科学背景和表达边界开展标准化分享。',
  },
  opportunity: {
    title: '机会说明会',
    color: '#38A169',
    description: '帮助意向伙伴理解平台路径、学习方式和成长逻辑，不做收益承诺。',
  },
}
