import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      include: {
        chapters: {
          include: {
            modules: {
              include: {
                courses: {
                  select: {
                    id: true,
                    title: true,
                    type: true,
                    duration: true,
                    order: true,
                  },
                  orderBy: { order: 'asc' },
                },
              },
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(schools)
  } catch (error) {
    console.error('Get schools error:', error)
    return NextResponse.json({ error: '获取学院失败' }, { status: 500 })
  }
}
