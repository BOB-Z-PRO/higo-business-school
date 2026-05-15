export type SevenDayLesson = {
  title: string
  duration: string
  href: string
}

export type SevenDayTask = {
  day: number
  title: string
  subtitle: string
  learningGoal: string
  lesson: SevenDayLesson
  actionTasks: string[]
  standardScripts: string[]
  forbiddenPhrases: string[]
  homework: string[]
  complianceNote: string
  nextStep: string
}

export const sevenDayOverview = {
  title: '新人 7 天启动营',
  subtitle: '先建立认知与节奏，再进入稳定经营',
  description:
    '7 天里只做关键动作：理解项目边界、完成首次分享、学会轻邀约、借力会议，并形成可复用的日复盘习惯。',
  nextStageLabel: '进入 30 天经营训练',
  nextStageHref: '/business/survival/30-day',
}

export const sevenDayTasks: SevenDayTask[] = [
  {
    day: 1,
    title: '项目认知与个人定位',
    subtitle: '讲清楚你是谁、你在做什么、为什么做',
    learningGoal: '用 30 秒说清个人定位，不夸张、不承诺收益。',
    lesson: { title: '新人第一天：定位与边界', duration: '12 分钟', href: '/course' },
    actionTasks: ['写出个人介绍三句话版本', '整理你最常见的 3 个问题', '完成 1 次录音自测并回听'],
    standardScripts: ['我在学习一套健康生活方式教育体系，先从自己实践开始。', '我现在阶段主要是学习和分享，不做任何效果承诺。'],
    forbiddenPhrases: ['包你瘦', '保证赚钱', '不做就落后'],
    homework: ['提交 1 段 30 秒自我介绍语音', '记录今天被问到的问题及回答'],
    complianceNote: '第一天重点是边界与表达稳定，不允许医疗化和收益化承诺。',
    nextStep: '明天进入产品认知，先学会讲体验而不是讲功效。',
  },
  {
    day: 2,
    title: '产品体验表达',
    subtitle: '从”产品说明”转向”体验表达”',
    learningGoal: '能用体验结构表达产品，不做诊断、不下结论。',
    lesson: { title: '体验式分享模板', duration: '15 分钟', href: '/course' },
    actionTasks: ['写 1 版体验分享文案', '找 2 位朋友做小范围口头分享', '收集反馈并修改文案'],
    standardScripts: ['我可以分享我自己的使用体验，你可以按需判断是否适合自己。', '每个人状态不同，建议先体验再决定。'],
    forbiddenPhrases: ['治疗', '根治', '立刻见效'],
    homework: ['输出一版 150 字体验文案', '完成 2 次真实分享记录'],
    complianceNote: '坚持”分享体验，不做诊疗建议”。',
    nextStep: '明天开始轻邀约，目标是建立第一次有效对话。',
  },
  {
    day: 3,
    title: '轻邀约入门',
    subtitle: '建立低压力、高质量的一对一沟通',
    learningGoal: '发出自然邀约，不强推、不施压。',
    lesson: { title: '轻邀约三步法', duration: '18 分钟', href: '/course' },
    actionTasks: ['列出 10 位可沟通对象', '完成 5 次轻邀约私聊', '记录回复类型并分类'],
    standardScripts: ['最近我在做一个健康生活方式学习项目，想听听你的看法。', '如果你愿意，我可以把我这周学习到的重点发你看看。'],
    forbiddenPhrases: ['必须参加', '错过就没有', '今天不决定就晚了'],
    homework: ['提交邀约对象与回复统计', '复盘 1 次成功邀约和 1 次失败邀约'],
    complianceNote: '只做邀请，不做逼单式推进。',
    nextStep: '明天进入会议借力，把对话转进系统场景。',
  },
  {
    day: 4,
    title: '借力会议',
    subtitle: '从个人表达转到系统支持',
    learningGoal: '会引导对方进入公开会议或标准讲解场景。',
    lesson: { title: '会议前中后话术', duration: '20 分钟', href: '/course' },
    actionTasks: ['完成 3 次会议邀请', '会前发出会议价值说明', '会后做 1 对 1 跟进'],
    standardScripts: ['今晚有场主题分享，内容比我个人表达更完整。', '你听完再判断是否继续了解，不急着做决定。'],
    forbiddenPhrases: ['来就能成', '听完马上签', '保证有结果'],
    homework: ['记录参会人数与会后反馈', '输出 1 份会后跟进话术'],
    complianceNote: '会议场景也要坚持合规边界，不得夸大。',
    nextStep: '明天进入异议处理，学会稳定回应。',
  },
  {
    day: 5,
    title: '异议处理',
    subtitle: '把质疑变成澄清和筛选',
    learningGoal: '用提问和澄清回应异议，不争辩。',
    lesson: { title: '高频异议回应', duration: '16 分钟', href: '/course' },
    actionTasks: ['整理 5 个高频异议', '为每个异议写 1 条回应', '实战使用并记录效果'],
    standardScripts: ['这个问题很关键，我可以把我理解的边界先说清楚。', '你可以先了解，不需要现在做任何决定。'],
    forbiddenPhrases: ['你想太多', '这都不懂', '不做你会后悔'],
    homework: ['提交异议-回应对照表', '复盘 2 次真实沟通'],
    complianceNote: '异议处理重在尊重与清晰，不做情绪施压。',
    nextStep: '明天做内容沉淀，形成可复用资产。',
  },
  {
    day: 6,
    title: '内容沉淀',
    subtitle: '把临场表达沉淀为标准素材',
    learningGoal: '形成一套可重复使用的个人内容库。',
    lesson: { title: '内容资产化方法', duration: '14 分钟', href: '/course' },
    actionTasks: ['整理 3 条常用分享内容', '制作 1 张个人分享卡片', '同步到团队知识库'],
    standardScripts: ['这是我最近持续在用的表达模板，方便你参考。', '内容仅作学习交流，不构成任何承诺。'],
    forbiddenPhrases: ['官方保证', '绝对有效', '人人适用'],
    homework: ['提交个人内容包（文本版）', '记录内容使用反馈'],
    complianceNote: '素材沉淀时统一增加合规提示。',
    nextStep: '明天做首周复盘，准备进入 30 天节奏。',
  },
  {
    day: 7,
    title: '首周复盘与升级',
    subtitle: '复盘数据、动作和表达，进入长期节奏',
    learningGoal: '完成首周复盘并制定下周执行计划。',
    lesson: { title: '首周复盘模板', duration: '22 分钟', href: '/course' },
    actionTasks: ['复盘本周触达与回应数据', '总结 3 个做得好的动作', '制定下周执行清单'],
    standardScripts: ['这周我先把动作做扎实，下一周继续按节奏执行。', '我会保持合规表达，先长期稳定输出价值。'],
    forbiddenPhrases: ['马上翻倍', '下周一定爆发', '轻松躺赢'],
    homework: ['提交首周复盘表', '确认 30 天经营训练入口与时间表'],
    complianceNote: '从启动营到经营期，合规边界要持续一致。',
    nextStep: '进入 30 天经营训练，重点转向节奏稳定与团队协作。',
  },
]
