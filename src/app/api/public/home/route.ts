import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET() {
  try {
    // Get schools with chapters count
    const schools = await prisma.school.findMany({
      include: {
        _count: { select: { chapters: true } },
      },
      orderBy: { order: 'asc' },
    })

    // Get chapters for display
    const chapters = await prisma.chapter.findMany({
      include: {
        school: { select: { name: true, icon: true, color: true } },
        _count: { select: { modules: true } },
      },
      orderBy: { order: 'asc' },
    })

    // Get total course count
    const totalCourses = await prisma.course.count()

    return NextResponse.json({
      schools,
      chapters,
      stats: {
        totalSchools: schools.length,
        totalChapters: chapters.length,
        totalCourses,
      },
    })
  } catch (error) {
    console.error('Get home data error:', error)
    return NextResponse.json({ error: '获取数据失败' }, { status: 500 })
  }
}
