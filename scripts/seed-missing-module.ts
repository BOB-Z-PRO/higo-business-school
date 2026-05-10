import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating missing module-product-3...')

  const module = await prisma.module.upsert({
    where: { id: 'module-product-3' },
    update: {},
    create: {
      id: 'module-product-3',
      name: 'GnHORMONE产品原理',
      description: '了解荷尔蒙平衡与抗衰关系',
      order: 3,
      chapterId: 'chapter-product',
    },
  })
  console.log('Created:', module.id, module.name)

  console.log('Done!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })