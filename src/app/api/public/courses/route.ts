import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        module: {
          include: {
            chapter: {
              include: {
                school: {
                  select: { id: true, name: true, icon: true, color: true },
                },
              },
            },
          },
        },
      },
      orderBy: [
        { module: { chapter: { school: { order: 'asc' } } } },
        { module: { order: 'asc' } },
        { order: 'asc' },
      ],
    })

    return NextResponse.json({ courses })
  } catch (error) {
    console.error('Get courses error:', error)
    return NextResponse.json({ error: '获取课程失败' }, { status: 500 })
  }
}
