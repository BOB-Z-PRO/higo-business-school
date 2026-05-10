import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating remaining modules...')

  // L1 (初阶领导力学院) modules - chapter-business
  const l1Modules = await Promise.all([
    prisma.module.upsert({
      where: { id: 'l1-module-1' },
      update: {},
      create: { id: 'l1-module-1', name: 'SVIP入门全解', description: 'SVIP权益与目标规划', order: 1, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-2' },
      update: {},
      create: { id: 'l1-module-2', name: '活跃度经营', description: '活跃度是什么，如何保持', order: 2, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-3' },
      update: {},
      create: { id: 'l1-module-3', name: '三星SVIP晋升', description: '如何达成三星SVIP', order: 3, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-4' },
      update: {},
      create: { id: 'l1-module-4', name: '讲计划艺术', description: 'ABC法则与讲计划技巧', order: 4, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-5' },
      update: {},
      create: { id: 'l1-module-5', name: '有效沟通', description: '挖掘需求四步法', order: 5, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-6' },
      update: {},
      create: { id: 'l1-module-6', name: '解答异议', description: '十大常见问题应对', order: 6, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-7' },
      update: {},
      create: { id: 'l1-module-7', name: '小型招商会', description: '如何主持小型招商会', order: 7, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-8' },
      update: {},
      create: { id: 'l1-module-8', name: '新人跟进', description: '新人跟进七步曲', order: 8, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-9' },
      update: {},
      create: { id: 'l1-module-9', name: '心态建设', description: '五大心态与五大原则', order: 9, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'l1-module-10' },
      update: {},
      create: { id: 'l1-module-10', name: '行动力养成', description: '为什么要每天3讲', order: 10, chapterId: 'chapter-business' },
    }),
  ])
  console.log('L1 modules created:', l1Modules.length)

  // module-business-3,4,5 - these go with chapter-business
  const bizModules = await Promise.all([
    prisma.module.upsert({
      where: { id: 'module-business-3' },
      update: {},
      create: { id: 'module-business-3', name: '形象价值', description: '自我包装与形象建设', order: 3, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'module-business-4' },
      update: {},
      create: { id: 'module-business-4', name: '服务定江山', description: '客户服务与心态管理', order: 4, chapterId: 'chapter-business' },
    }),
    prisma.module.upsert({
      where: { id: 'module-business-5' },
      update: {},
      create: { id: 'module-business-5', name: '邀约话术', description: '三种场景的邀约技巧', order: 5, chapterId: 'chapter-business' },
    }),
  ])
  console.log('Business modules 3-5 created:', bizModules.length)

  console.log('All remaining modules created!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })