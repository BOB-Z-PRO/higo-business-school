export type ScriptCategory =
  | 'invite'
  | 'product'
  | 'opportunity'
  | 'follow-up'
  | 'objection'
  | 'meeting-invite'
  | 'newcomer-coaching'

export type ScriptItem = {
  id: string
  category: ScriptCategory
  title: string
  scenario: string
  recommendedScript: string
  avoidScript: string
  complianceNote: string
  tags: string[]
}

export const scriptCategories: {
  slug: ScriptCategory
  title: string
  shortTitle: string
  description: string
  color: string
}[] = [
  {
    slug: 'invite',
    title: '邀约话术',
    shortTitle: '邀约',
    description: '适用于熟人、兴趣、内容和轻沟通场景，重点是轻邀请而不是压迫成交。',
    color: '#38A169',
  },
  {
    slug: 'product',
    title: '产品话术',
    shortTitle: '产品',
    description: '聚焦产品定位、支持方向和体验表达，不触碰疾病治疗承诺。',
    color: '#805AD5',
  },
  {
    slug: 'opportunity',
    title: '机会话术',
    shortTitle: '机会',
    description: '帮助介绍 HIGO 路径、学习方式和成长方向，不做收益确定性表达。',
    color: '#3182CE',
  },
  {
    slug: 'follow-up',
    title: '跟进话术',
    shortTitle: '跟进',
    description: '用于听会后、看资料后和犹豫期沟通，节奏要稳，避免逼单。',
    color: '#D69E2E',
  },
  {
    slug: 'objection',
    title: '异议处理',
    shortTitle: '异议',
    description: '面对质疑时只做解释和引导，不争辩，不夸张，不替别人做结论。',
    color: '#E53E3E',
  },
  {
    slug: 'meeting-invite',
    title: '会议邀请',
    shortTitle: '会议',
    description: '邀请对方听产品会、说明会或新人启动会，用系统会议代替个人乱讲。',
    color: '#1A365D',
  },
  {
    slug: 'newcomer-coaching',
    title: '新人带教',
    shortTitle: '带教',
    description: '用于欢迎新人、布置任务、提醒合规和陪新人做第一次复盘。',
    color: '#2C5282',
  },
]

export const scriptItems: ScriptItem[] = [
  {
    id: 'invite-1',
    category: 'invite',
    title: '熟人轻邀约',
    scenario: '想邀请熟人了解一个健康管理主题，但不希望对方有销售压力。',
    recommendedScript:
      '我最近在系统学习一个和健康管理、抗衰认知有关的内容，感觉挺有启发的。不是让你现在做决定，就是想邀请你有空一起听听，看是否对你有帮助。',
    avoidScript: '你一定要来听，这个机会错过就没了。',
    complianceNote: '邀约阶段只强调“了解”和“是否有帮助”，不要加入结果承诺。',
    tags: ['熟人', '轻邀约', '低压力'],
  },
  {
    id: 'invite-2',
    category: 'invite',
    title: '健康兴趣邀约',
    scenario: '对方本身关注睡眠、精力、健康管理等话题。',
    recommendedScript:
      '你之前不是也挺关注健康管理吗？我最近在听一套比较系统的内容，里面讲得挺清楚的。你如果有兴趣，我们找个时间一起听听。',
    avoidScript: '你这个情况特别适合这个产品，赶紧来听。',
    complianceNote: '不能根据对方状态直接做产品效果暗示，更不能类比疾病改善。',
    tags: ['健康兴趣', '内容邀约'],
  },
  {
    id: 'invite-3',
    category: 'invite',
    title: '线上内容邀约',
    scenario: '想通过朋友圈或私聊转发内容建立第一轮接触。',
    recommendedScript:
      '我整理了一份关于健康衰老和合规表达的学习内容，内容不长，但很适合刚接触的人。你如果愿意，我发你看看。',
    avoidScript: '我发你的内容看完你就会明白这是最好的选择。',
    complianceNote: '转发资料时，不能暗示“看完就会成交”或“看完就一定认可”。',
    tags: ['线上', '资料转发'],
  },

  {
    id: 'product-1',
    category: 'product',
    title: '1 分钟讲产品体系',
    scenario: '对方第一次问 HIGO 产品是做什么的。',
    recommendedScript:
      'HIGO 的产品体系主要围绕健康衰老、细胞能量、炎症平衡、内分泌支持和脑健康管理等方向展开，重点是支持性的健康管理，不是药物，也不用于疾病治疗。',
    avoidScript: '这些产品什么问题都能覆盖，效果特别快。',
    complianceNote: '只讲体系方向和支持逻辑，不做疗效扩展。',
    tags: ['产品体系', '1分钟', '初次介绍'],
  },
  {
    id: 'product-2',
    category: 'product',
    title: '体验分享表达',
    scenario: '想分享自己的体验，但不想越过合规边界。',
    recommendedScript:
      '我自己目前还在持续体验，能感受到的是精力和状态上的一些变化，但每个人感受不同，所以我只分享自己的真实体验，不替别人下结论。',
    avoidScript: '我有变化，你用了肯定也会一样。',
    complianceNote: '体验只能代表个人感受，不能推导成普遍结果。',
    tags: ['体验', '真实反馈'],
  },
  {
    id: 'product-3',
    category: 'product',
    title: '回应专业问题',
    scenario: '对方追问很细的成分或原理，你暂时答不上来。',
    recommendedScript:
      '这个问题比较专业，我不想凭印象回答。我们可以一起看系统资料，或者一起听产品专场会，再基于统一内容来理解。',
    avoidScript: '没关系，你先用，专业问题以后再说。',
    complianceNote: '专业问题不要硬答，更不能先引导下单再补知识。',
    tags: ['专业问题', '借力资料'],
  },

  {
    id: 'opportunity-1',
    category: 'opportunity',
    title: '介绍 HIGO 路径',
    scenario: '对方对平台和事业方向感兴趣。',
    recommendedScript:
      'HIGO 更像一个经营者成长与复制系统，不是单纯卖资料或卖产品。我们先从学习、体验、合规表达开始，再看自己是否适合继续深入。',
    avoidScript: '这是最适合普通人的创业捷径。',
    complianceNote: '不能把平台包装成捷径、暴富通道或结果确定项目。',
    tags: ['事业介绍', '成长路径'],
  },
  {
    id: 'opportunity-2',
    category: 'opportunity',
    title: '解释自用分享模式',
    scenario: '对方问是不是一定要去卖东西。',
    recommendedScript:
      '这里更强调先自用、先学习、先建立认知。如果后续觉得内容和方式适合自己，再慢慢练习分享，不是要求每个人立刻进入销售状态。',
    avoidScript: '不用担心，随便发发就能有结果。',
    complianceNote: '不能把经营动作说成“随便做就行”，也不能弱化持续学习的重要性。',
    tags: ['自用分享', '模式解释'],
  },
  {
    id: 'opportunity-3',
    category: 'opportunity',
    title: '谈成长空间',
    scenario: '对方问加入以后会经历什么阶段。',
    recommendedScript:
      '一般会先经历新人启动、稳定学习和逐步带人的过程。每个阶段重点不一样，系统会帮助你先把表达和动作做标准，再考虑复制。',
    avoidScript: '照着做很快就能带团队。',
    complianceNote: '成长路径可以讲，但不能承诺速度、收益和复制结果。',
    tags: ['成长阶段', '路径说明'],
  },

  {
    id: 'follow-up-1',
    category: 'follow-up',
    title: '听会后跟进',
    scenario: '对方刚听完说明会，想做一次温和跟进。',
    recommendedScript:
      '刚才那场会信息量挺大，我更想知道你最有感觉的是哪一部分。我们可以先从你感兴趣的点继续了解，不急着现在做决定。',
    avoidScript: '听完你应该已经知道要怎么选了吧？',
    complianceNote: '听会后先收反馈，不要立刻逼对方表态。',
    tags: ['听会后', '跟进'],
  },
  {
    id: 'follow-up-2',
    category: 'follow-up',
    title: '对方说再看看',
    scenario: '对方表示要再考虑一下。',
    recommendedScript:
      '完全可以，先了解清楚再决定更稳。如果你愿意，我可以把对应的课程或资料发你，我们之后再交流你的感受。',
    avoidScript: '你现在不决定，后面就晚了。',
    complianceNote: '尊重对方节奏，不制造时间压力。',
    tags: ['考虑中', '资料补充'],
  },
  {
    id: 'follow-up-3',
    category: 'follow-up',
    title: '对方说没时间',
    scenario: '对方对主题不反感，但总说最近很忙。',
    recommendedScript:
      '理解，那我先不打扰。等你有空的时候，我可以把最短的内容先给你，一次只花几分钟也可以。',
    avoidScript: '再忙也要给自己一个改变的机会。',
    complianceNote: '不要用道德压力和情绪引导推动对方继续听。',
    tags: ['没时间', '节奏放缓'],
  },

  {
    id: 'objection-1',
    category: 'objection',
    title: '这是不是推销',
    scenario: '对方对商业动机比较敏感。',
    recommendedScript:
      '你的担心很正常。我现在更偏向先学习和了解，也不会随便让别人做决定。你可以先把它当成一个健康管理和表达训练的学习内容来看。',
    avoidScript: '不是推销，你完全想多了。',
    complianceNote: '先承认顾虑合理，再解释自己的阶段和边界。',
    tags: ['推销质疑', '顾虑回应'],
  },
  {
    id: 'objection-2',
    category: 'objection',
    title: '我没有人脉怎么办',
    scenario: '新人担心自己没有资源，无法开始。',
    recommendedScript:
      '一开始不需要很多人脉，重点是先把内容学清楚，把表达练标准。很多人也是先从几个最熟悉的人开始练习沟通。',
    avoidScript: '没关系，系统会自动帮你解决客户问题。',
    complianceNote: '不能承诺系统替代行动，也不能制造自动成功预期。',
    tags: ['没人脉', '新人信心'],
  },
  {
    id: 'objection-3',
    category: 'objection',
    title: '产品有没有用',
    scenario: '对方直接追问效果。',
    recommendedScript:
      '我们更建议先从产品定位、资料和真实体验出发来理解，不把它当成治疗工具，也不对效果做统一承诺。是否适合，还是要结合自己的理解和体验来判断。',
    avoidScript: '当然有用，很多人变化都特别大。',
    complianceNote: '不能把别人的案例当成普遍结论，更不能做效果承诺。',
    tags: ['效果追问', '产品边界'],
  },

  {
    id: 'meeting-invite-1',
    category: 'meeting-invite',
    title: '邀请听产品会',
    scenario: '对方对产品方向有兴趣，但不适合你自己展开讲。',
    recommendedScript:
      '如果你对产品逻辑感兴趣，我们可以一起听一场产品分享会。系统讲解会更完整，也更方便你自己判断。',
    avoidScript: '你先来听，听完基本都会想要。',
    complianceNote: '会议邀请只聚焦“了解”和“判断”，不能预设听后结果。',
    tags: ['产品会', '会议邀请'],
  },
  {
    id: 'meeting-invite-2',
    category: 'meeting-invite',
    title: '邀请听机会说明会',
    scenario: '对方对事业路径和平台方式感兴趣。',
    recommendedScript:
      '如果你想更系统地了解 HIGO 是怎么运作的，机会说明会会比零散聊天更清楚。你可以先听，再决定要不要继续了解。',
    avoidScript: '这个说明会特别关键，听完你就会加入。',
    complianceNote: '不能把说明会当成必然转化环节来表达。',
    tags: ['说明会', '系统了解'],
  },
  {
    id: 'meeting-invite-3',
    category: 'meeting-invite',
    title: '邀请新人启动会',
    scenario: '刚加入或刚答应继续了解的人，需要进入标准路径。',
    recommendedScript:
      '你现在最适合的不是一次听很多，而是先进新人启动会。里面会把先学什么、先做什么、哪些话不能说讲得很清楚。',
    avoidScript: '你先来，后面自然就懂了。',
    complianceNote: '明确会议价值和边界，不用模糊表达推进。',
    tags: ['新人会', '标准路径'],
  },

  {
    id: 'newcomer-coaching-1',
    category: 'newcomer-coaching',
    title: '欢迎新人',
    scenario: '新人刚进入系统，需要降低陌生感并明确起点。',
    recommendedScript:
      '欢迎你先从新人路径开始。前 7 天我们不求快，只求把认知、表达和动作做标准，后面会更稳。',
    avoidScript: '既然来了，就尽快开始出结果。',
    complianceNote: '欢迎时先讲节奏和标准，不给结果压力。',
    tags: ['欢迎', '启动'],
  },
  {
    id: 'newcomer-coaching-2',
    category: 'newcomer-coaching',
    title: '布置 7 天任务',
    scenario: '想把新人带进 7 天启动营，而不是散学。',
    recommendedScript:
      '这 7 天你每天只需要完成一小段学习、一个动作练习和一次复盘。我们一起按节奏走，不需要一开始什么都懂。',
    avoidScript: '你先把所有内容一次性看完再说。',
    complianceNote: '任务布置要具体、可执行，避免给新人过载。',
    tags: ['任务布置', '7天启动营'],
  },
  {
    id: 'newcomer-coaching-3',
    category: 'newcomer-coaching',
    title: '提醒合规表达',
    scenario: '新人开始转发资料或尝试开口，需要提前做风控提醒。',
    recommendedScript:
      '你现在可以先用系统里的标准表达，不要自己扩展产品效果和收益想象。遇到拿不准的话，先发给我一起看。',
    avoidScript: '只要你自信一点，说重点就行。',
    complianceNote: '新人最怕“自信但失真”，必须先给表达边界。',
    tags: ['合规提醒', '表达边界'],
  },
]

export const scriptCategoryMap = Object.fromEntries(
  scriptCategories.map((item) => [item.slug, item]),
) as Record<ScriptCategory, (typeof scriptCategories)[number]>
