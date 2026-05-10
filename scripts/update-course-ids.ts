import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Updating course IDs to N-01 format...')

  // Map old IDs to new IDs
  const idMapping: Record<string, string> = {
    'n01': 'N-01', 'n02': 'N-02', 'n03': 'N-03', 'n04': 'N-04', 'n05': 'N-05',
    'n06': 'N-06', 'n07': 'N-07', 'n08': 'N-08', 'n09': 'N-09', 'n10': 'N-10',
    'l101': 'L1-01', 'l102': 'L1-02', 'l103': 'L1-03', 'l104': 'L1-04', 'l105': 'L1-05',
    'l106': 'L1-06', 'l107': 'L1-07', 'l108': 'L1-08', 'l109': 'L1-09', 'l110': 'L1-10',
    'l201': 'L2-01', 'l202': 'L2-02', 'l203': 'L2-03', 'l204': 'L2-04', 'l205': 'L2-05',
    'l206': 'L2-06', 'l207': 'L2-07', 'l208': 'L2-08', 'l209': 'L2-09', 'l210': 'L2-10',
    'l301': 'L3-01', 'l302': 'L3-02', 'l303': 'L3-03', 'l304': 'L3-04', 'l305': 'L3-05',
    'l306': 'L3-06', 'l307': 'L3-07', 'l308': 'L3-08', 'l309': 'L3-09', 'l310': 'L3-10',
  }

  // Use raw SQL to update IDs (Prisma doesn't support updating ID directly)
  for (const [oldId, newId] of Object.entries(idMapping)) {
    try {
      await prisma.$executeRaw`UPDATE courses SET id = ${newId} WHERE id = ${oldId}`
      console.log(`Updated: ${oldId} -> ${newId}`)
    } catch (e: any) {
      console.log(`Failed to update ${oldId}: ${e.message}`)
    }
  }

  // Verify
  const courses = await prisma.course.findMany({ orderBy: { id: 'asc' } })
  console.log('\nAll courses:')
  courses.forEach(c => console.log(`  ${c.id} - ${c.title.substring(0, 30)}`))

  console.log('\nDone!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })