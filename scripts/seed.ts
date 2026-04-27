import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始初始化数据...')

  // 创建学院
  const schools = await Promise.all([
    prisma.school.upsert({
      where: { id: 'school-new' },
      update: {},
      create: {
        id: 'school-new',
        name: '新人成长学院',
        description: '新人入门，了解HIGO',
        icon: '🌱',
        color: '#38A169',
        order: 1,
      },
    }),
    prisma.school.upsert({
      where: { id: 'school-svip' },
      update: {},
      create: {
        id: 'school-svip',
        name: '初阶领导力学院',
        description: '生存家园 · 入门第一步',
        icon: '🔮',
        color: '#3182CE',
        order: 2,
      },
    }),
    prisma.school.upsert({
      where: { id: 'school-diamond' },
      update: {},
      create: {
        id: 'school-diamond',
        name: '中阶领导力学院',
        description: '生活家园 · 团队建设',
        icon: '💎',
        color: '#805AD5',
        order: 3,
      },
    }),
    prisma.school.upsert({
      where: { id: 'school-black' },
      update: {},
      create: {
        id: 'school-black',
        name: '高阶领导力学院',
        description: '生命家园 · 领袖传承',
        icon: '👑',
        color: '#D69E2E',
        order: 4,
      },
    }),
  ])
  console.log('学院创建完成')

  // 创建篇章
  const chapters = await Promise.all([
    prisma.chapter.upsert({
      where: { id: 'chapter-company' },
      update: {},
      create: { id: 'chapter-company', name: '公司篇', description: '了解HIGO是谁，建立信任基础', order: 1, schoolId: 'school-new' },
    }),
    prisma.chapter.upsert({
      where: { id: 'chapter-product' },
      update: {},
      create: { id: 'chapter-product', name: '产品篇', description: '掌握产品知识，具备销售能力', order: 2, schoolId: 'school-new' },
    }),
    prisma.chapter.upsert({
      where: { id: 'chapter-business' },
      update: {},
      create: { id: 'chapter-business', name: '经营篇', description: '学习经营方法，会做市场', order: 3, schoolId: 'school-svip' },
    }),
    prisma.chapter.upsert({
      where: { id: 'chapter-team' },
      update: {},
      create: { id: 'chapter-team', name: '团队篇', description: '建设团队，实现被动收入', order: 4, schoolId: 'school-diamond' },
    }),
    prisma.chapter.upsert({
      where: { id: 'chapter-mindset' },
      update: {},
      create: { id: 'chapter-mindset', name: '心态篇', description: '五大心态、情绪管理，稳定压倒一切', order: 5, schoolId: 'school-svip' },
    }),
    prisma.chapter.upsert({
      where: { id: 'chapter-practice' },
      update: {},
      create: { id: 'chapter-practice', name: '实操篇', description: '实战演练，即学即用，快速落地', order: 6, schoolId: 'school-black' },
    }),
  ])
  console.log('篇章创建完成')

  // 创建模块
  const modules = await Promise.all([
    // 公司篇模块
    prisma.module.upsert({
      where: { id: 'module-company-1' },
      update: {},
      create: { id: 'module-company-1', name: 'HIGO是什么', description: '全面了解HIGO公司', order: 1, chapterId: 'chapter-company' },
    }),
    prisma.module.upsert({
      where: { id: 'module-company-2' },
      update: {},
      create: { id: 'module-company-2', name: '为什么要做HIGO', description: '分析行业趋势和机遇', order: 2, chapterId: 'chapter-company' },
    }),
    // 产品篇模块
    prisma.module.upsert({
      where: { id: 'module-product-1' },
      update: {},
      create: { id: 'module-product-1', name: 'GnAKG产品原理', description: '了解AKG细胞级抗衰原理', order: 1, chapterId: 'chapter-product' },
    }),
    prisma.module.upsert({
      where: { id: 'module-product-2' },
      update: {},
      create: { id: 'module-product-2', name: 'GnCELL产品原理', description: '了解CELL产品的抗衰机制', order: 2, chapterId: 'chapter-product' },
    }),
    // 经营篇模块
    prisma.module.upsert({
      where: { id: 'module-business-1' },
      update: {},
      create: { id: 'module-business-1', name: '成功九步', description: '销售行动框架', order: 1, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'module-business-2' },
      update: {},
      create: { id: 'module-business-2', name: 'ABC法则', description: '沟通工具和使用方法', order: 2, chapterId: 'chapter-business' },
    }),
    // 团队篇模块
    prisma.module.upsert({
      where: { id: 'module-team-1' },
      update: {},
      create: { id: 'module-team-1', name: '团队建设', description: '如何带团队', order: 1, chapterId: 'chapter-team' },
    }),
    // 心态篇模块
    prisma.module.upsert({
      where: { id: 'module-mindset-1' },
      update: {},
      create: { id: 'module-mindset-1', name: '服务定江山', description: '客户服务和心态管理', order: 1, chapterId: 'chapter-mindset' },
    }),
    // 实操篇模块
    prisma.module.upsert({
      where: { id: 'module-practice-1' },
      update: {},
      create: { id: 'module-practice-1', name: '新人起步', description: '新人入门实操', order: 1, chapterId: 'chapter-practice' },
    }),
  ])
  console.log('模块创建完成')

  // 创建课程
  const courses = await Promise.all([
    prisma.course.upsert({
      where: { id: 'course-n01' },
      update: {},
      create: {
        id: 'course-n01',
        title: 'HIGO是什么',
        description: '本课程将帮助您全面了解HIGO是什么，包括公司历史、全球布局、产品体系等核心内容。',
        content: '## HIGO简介\n\nHIGO是一家专注于生物科技的公司...',
        type: 'VIDEO',
        duration: 15,
        order: 1,
        moduleId: 'module-company-1',
      },
    }),
    prisma.course.upsert({
      where: { id: 'course-n02' },
      update: {},
      create: {
        id: 'course-n02',
        title: '为什么要做HIGO',
        description: '深入分析为什么现在是进入HIGO的最佳时机',
        content: '## 为什么要做HIGO\n\n大健康是未来20年最大的趋势...',
        type: 'VIDEO',
        duration: 20,
        order: 2,
        moduleId: 'module-company-2',
      },
    }),
    prisma.course.upsert({
      where: { id: 'course-n03' },
      update: {},
      create: {
        id: 'course-n03',
        title: 'GnAKG产品原理',
        description: '深入浅出了解GnAKG的抗衰原理',
        content: '## GnAKG抗衰原理\n\nAKG是细胞能量的关键分子...',
        type: 'VIDEO',
        duration: 30,
        order: 1,
        moduleId: 'module-product-1',
      },
    }),
    prisma.course.upsert({
      where: { id: 'course-n04' },
      update: {},
      create: {
        id: 'course-n04',
        title: 'GnCELL产品原理',
        description: '了解CELL产品的抗衰机制',
        content: '## GnCELL抗衰机制\n\nCELL技术帮助细胞修复...',
        type: 'VIDEO',
        duration: 25,
        order: 2,
        moduleId: 'module-product-2',
      },
    }),
    prisma.course.upsert({
      where: { id: 'course-l101' },
      update: {},
      create: {
        id: 'course-l101',
        title: '成功九步第一步-梦想',
        description: '建立梦想，明确目标',
        content: '## 成功九步\n\n第一步：梦想\n\n梦想是人生的引擎...',
        type: 'VIDEO',
        duration: 20,
        order: 1,
        moduleId: 'module-business-1',
      },
    }),
    prisma.course.upsert({
      where: { id: 'course-l102' },
      update: {},
      create: {
        id: 'course-l102',
        title: 'ABC法则',
        description: '学会推懂客户',
        content: '## ABC法则\n\nA是老师或推荐人\nB是你\nC是客户',
        type: 'VIDEO',
        duration: 25,
        order: 2,
        moduleId: 'module-business-2',
      },
    }),
  ])
  console.log('课程创建完成')

  console.log('数据初始化完成！')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })