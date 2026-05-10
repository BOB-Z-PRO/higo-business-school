import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating L2 and L3 modules...')

  // L2 (中阶领导力学院) modules - chapter-team
  const l2Modules = await Promise.all([
    prisma.module.upsert({
      where: { id: 'l2-module-1' },
      update: {},
      create: { id: 'l2-module-1', name: '梦想与目标', description: '如何设定有效目标并坚持达成', order: 1, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-2' },
      update: {},
      create: { id: 'l2-module-2', name: '领导力修炼', description: '从管理者到领袖的转变', order: 2, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-3' },
      update: {},
      create: { id: 'l2-module-3', name: '团队文化', description: '打造高绩效团队文化', order: 3, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-4' },
      update: {},
      create: { id: 'l2-module-4', name: '授权与激励', description: '如何有效授权和激励团队', order: 4, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-5' },
      update: {},
      create: { id: 'l2-module-5', name: '会议经营', description: '早会夕会周会经营方法', order: 5, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-6' },
      update: {},
      create: { id: 'l2-module-6', name: '绩效追踪', description: '数据化管理团队绩效', order: 6, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-7' },
      update: {},
      create: { id: 'l2-module-7', name: '人才复制', description: '如何复制经销商人才', order: 7, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-8' },
      update: {},
      create: { id: 'l2-module-8', name: '沟通密码', description: '团队沟通的核心技巧', order: 8, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-9' },
      update: {},
      create: { id: 'l2-module-9', name: '问题解决', description: '团队常见问题处理方法', order: 9, chapterId: 'chapter-team' },
    }),
    prisma.module.upsert({
      where: { id: 'l2-module-10' },
      update: {},
      create: { id: 'l2-module-10', name: '卓越之路', description: '卓越经销商成长路径', order: 10, chapterId: 'chapter-team' },
    }),
  ])
  console.log('L2 modules created:', l2Modules.length)

  // L3 (高阶领导力学院) modules - chapter-practice
  const l3Modules = await Promise.all([
    prisma.module.upsert({
      where: { id: 'l3-module-1' },
      update: {},
      create: { id: 'l3-module-1', name: '系统思维', description: '从点到面建立系统思维', order: 1, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-2' },
      update: {},
      create: { id: 'l3-module-2', name: '战略规划', description: '长期事业战略规划', order: 2, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-3' },
      update: {},
      create: { id: 'l3-module-3', name: '领袖风范', description: '卓越领袖的形象与气质', order: 3, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-4' },
      update: {},
      create: { id: 'l3-module-4', name: '传承与复制', description: '如何传承经验给下一代', order: 4, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-5' },
      update: {},
      create: { id: 'l3-module-5', name: '资源整合', description: '整合各方资源扩大事业', order: 5, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-6' },
      update: {},
      create: { id: 'l3-module-6', name: '影响力打造', description: '个人品牌与影响力建设', order: 6, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-7' },
      update: {},
      create: { id: 'l3-module-7', name: '危机管理', description: '面对挑战与危机的处理', order: 7, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-8' },
      update: {},
      create: { id: 'l3-module-8', name: '全球视野', description: 'HIGO全球化战略布局', order: 8, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-9' },
      update: {},
      create: { id: 'l3-module-9', name: '身心合一', description: '领袖的健康与能量管理', order: 9, chapterId: 'chapter-practice' },
    }),
    prisma.module.upsert({
      where: { id: 'l3-module-10' },
      update: {},
      create: { id: 'l3-module-10', name: '荣耀加冕', description: '巅峰成就与荣耀时刻', order: 10, chapterId: 'chapter-practice' },
    }),
  ])
  console.log('L3 modules created:', l3Modules.length)

  console.log('All modules created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })