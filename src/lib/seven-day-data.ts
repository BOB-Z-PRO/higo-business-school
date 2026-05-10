export type SevenDayTask = {
  day: number
  title: string
  subtitle: string
  learningGoal: string
  lesson: {
    title: string
    duration: string
    href: string
  }
  actionTasks: string[]
  standardScripts: string[]
  forbiddenPhrases: string[]
  homework: string[]
  complianceNote: string
  nextStep: string
}

export const sevenDayTasks: SevenDayTask[] = [
  {
    day: 1,
    title: 'HIGO 是什么',
    subtitle: '先讲清定位，再进入后续学习',
    learningGoal: '让新人能用 1 分钟讲清 HIGO 的基础定位，并知道哪些话一开始绝不能说。',
    lesson: {
      title: 'HIGO 是什么 — 一页纸说清楚',
      duration: '15 分钟',
      href: '/course/N-01',
    },
    actionTasks: [
      '读完 HIGO 一句话定位并抄写一遍',
      '把自己的 1 句话介绍发给推荐人确认',
      '练习一次 60 秒自我讲述，不展开收益和疗效',
    ],
    standardScripts: [
      'HIGO 是一个围绕基因抗衰和健康管理的全球化学习与分享平台，我们先从了解产品、了解公司、学习合规表达开始。',
    ],
    forbiddenPhrases: [
      'HIGO 承诺收益',
      'HIGO 产品能治病',
      'HIGO 是零风险创业',
      '加入以后就一定成功',
    ],
    homework: [
      '整理一条你最认可的 HIGO 定位',
      '记录今天最容易讲错的一句话',
    ],
    complianceNote: '第一天只讲平台定位和学习路径，不讲收益，不讲疾病，不讲结果确定性。',
    nextStep: '进入 Day 2，理解为什么先从自用和体验开始。',
  },
  {
    day: 2,
    title: '为什么先自用产品',
    subtitle: '先体验，再表达',
    learningGoal: '让新人明白自用的价值是建立真实感受，而不是一上来就急着推销。',
    lesson: {
      title: '为什么先体验，再分享',
      duration: '20 分钟',
      href: '/business/survival',
    },
    actionTasks: [
      '记录自己当前状态和想改善的方向',
      '建立一份体验记录表，准备持续填写',
      '练习一句“我先体验再判断”的表达',
    ],
    standardScripts: [
      '我现在先从了解和体验开始，不急着下结论，也不夸大产品效果。每个人体验不同，我会如实记录自己的感受。',
    ],
    forbiddenPhrases: [
      '我吃了一定有效',
      '你用了也一定会有效',
      '几天就会明显变化',
      '这个可以替代药物',
    ],
    homework: [
      '写出自己的体验观察维度：睡眠、精力、状态等',
      '把体验记录方式发给推荐人确认',
    ],
    complianceNote: '体验分享必须基于真实感受，并明确“因人而异”，不能外推到别人身上。',
    nextStep: '进入 Day 3，只学习四大产品定位，不碰疾病疗效表达。',
  },
  {
    day: 3,
    title: '四大产品基础认知',
    subtitle: '只讲定位，不讲治疗',
    learningGoal: '让新人记住四大产品的大方向，只练产品定位和健康支持表达。',
    lesson: {
      title: '四大产品基础认知',
      duration: '30 分钟',
      href: '/products',
    },
    actionTasks: [
      '每个产品只记住一句定位',
      '不要扩展疾病案例和疗效承诺',
      '完成一轮四大产品一句话练习',
    ],
    standardScripts: [
      'HIGO 的产品体系主要围绕健康衰老、细胞能量、炎症平衡、内分泌支持和脑健康管理等方向展开，不是药物，也不用于疾病治疗。',
    ],
    forbiddenPhrases: [
      '治疗癌症',
      '替代糖代谢管理方案',
      '让指标更平稳',
      '承诺发色状态改善',
      '优化生物年龄表现多少岁',
    ],
    homework: [
      '给四大产品各写一条不超过 20 个字的定位',
      '标记自己最容易说重的一种产品表达',
    ],
    complianceNote: '产品页可以讲支持方向、使用建议和资料来源，不能把健康支持说成治疗结果。',
    nextStep: '进入 Day 4，学习如何回答新人常见疑问。',
  },
  {
    day: 4,
    title: '新人常见疑问怎么答',
    subtitle: '先降低阻力，再建立信任',
    learningGoal: '帮助新人知道面对质疑时应该如何温和表达，不强推、不争辩、不乱解释。',
    lesson: {
      title: '新人疑义问答',
      duration: '25 分钟',
      href: '/business/survival/objections',
    },
    actionTasks: [
      '找出自己最担心的 3 个问题',
      '每个问题用 1 条标准回答练习',
      '把专业问题交还给老师或系统课程',
    ],
    standardScripts: [
      '我现在也是学习阶段，不会随便乱讲。专业问题可以一起听老师或系统课程，先了解，再判断。',
    ],
    forbiddenPhrases: [
      '你听我的就行',
      '老师说一定有效',
      '你不做一定会后悔',
      '现在不加入就错过了',
    ],
    homework: [
      '把自己最担心的 3 个问题发给推荐人',
      '复盘自己最容易情绪化回应的场景',
    ],
    complianceNote: '遇到异议时只做解释和引导，不使用压迫式、恐吓式或结果导向表达。',
    nextStep: '进入 Day 5，开始第一轮轻邀约练习。',
  },
  {
    day: 5,
    title: '如何不伤人脉地邀约',
    subtitle: '邀约不是逼单',
    learningGoal: '让新人敢于开口，但保持轻邀请、低压力、可退出的表达方式。',
    lesson: {
      title: '邀约话术基础',
      duration: '30 分钟',
      href: '/meetings/opportunity',
    },
    actionTasks: [
      '列出 20 人名单',
      '选出 3 个最容易自然开口的人',
      '发出第一句轻邀约，不提收益和疗效',
    ],
    standardScripts: [
      '我最近在学习一个健康管理和抗衰方向的内容，感觉挺有启发的。不是让你买东西，就是想邀请你有空一起听听，看是否对你有帮助。',
    ],
    forbiddenPhrases: [
      '你一定要来听',
      '听完就知道能赚钱',
      '这个机会稳赚',
      '错过就没有了',
    ],
    homework: [
      '记录 3 次邀约的反馈',
      '复盘自己最不自然的一句邀约',
    ],
    complianceNote: '邀约的目的只是邀请对方了解，不是强迫承诺，也不能加入收益确定性暗示。',
    nextStep: '进入 Day 6，学会如何借力系统说明会。',
  },
  {
    day: 6,
    title: '如何听懂一场说明会',
    subtitle: '先借力，不乱讲',
    learningGoal: '让新人学会通过会议理解内容、记录重点和会后跟进，而不是凭印象转述。',
    lesson: {
      title: '机会说明会',
      duration: '45 分钟',
      href: '/meetings/opportunity',
    },
    actionTasks: [
      '参加或回看一场说明会',
      '记录 3 个听懂的点和 2 个不懂的问题',
      '向推荐人做一次简短复盘',
    ],
    standardScripts: [
      '我自己还在学习，所以先不随便解释太多。你可以和我一起听一场系统说明会，听完我们再交流各自的理解。',
    ],
    forbiddenPhrases: [
      '我给你讲一定讲得清楚',
      '听完马上加入',
      '老师讲的都是真的不用怀疑',
    ],
    homework: [
      '整理一页听会笔记',
      '写出 1 条会后跟进消息',
    ],
    complianceNote: '会议内容也需要合规解读，不能把会议热度直接转化成夸张承诺。',
    nextStep: '进入 Day 7，完成第一周复盘并转入 30 天训练。',
  },
  {
    day: 7,
    title: '第一周复盘与下一步',
    subtitle: '形成启动闭环',
    learningGoal: '帮助新人把第一周学习、动作和问题整理清楚，知道下一步进入什么阶段。',
    lesson: {
      title: '第一周复盘',
      duration: '20 分钟',
      href: '/business/living',
    },
    actionTasks: [
      '完成 7 天学习自评',
      '整理自己的 3 条标准表达',
      '和推荐人进行一次复盘',
    ],
    standardScripts: [
      '这一周我先完成了基础认知、产品定位、轻邀约和听会练习。下一步我会继续在合规前提下稳定学习和行动。',
    ],
    forbiddenPhrases: [
      '我现在已经完全会了',
      '我已经能保证别人也做出来',
      '接下来一定能快速出结果',
    ],
    homework: [
      '回答 5 个复盘问题',
      '确认自己下一阶段最要提升的 1 项能力',
    ],
    complianceNote: '复盘阶段要关注表达是否合规、动作是否真实完成，而不是只看情绪和想象结果。',
    nextStep: '进入生活空间的 30 天经营训练，开始稳定分享与带新人。',
  },
]

export const sevenDayOverview = {
  title: '新人 7 天启动营',
  subtitle: '先认知、再表达、再行动，帮助新人用 7 天完成第一轮启动闭环。',
  description:
    '这不是普通课程列表，而是一条带行动任务、标准话术、禁止表达和复盘要求的启动路径。每天学一点、做一点、复盘一点。',
  nextStageHref: '/business/living',
  nextStageLabel: '进入 30 天经营训练',
}
