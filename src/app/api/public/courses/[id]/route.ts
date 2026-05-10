import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id },
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
        teacher: {
          select: { id: true, name: true, title: true, avatar: true },
        },
      },
    })

    if (!course) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 })
    }

    return NextResponse.json({ course })
  } catch (error) {
    console.error('Get course error:', error)
    return NextResponse.json({ error: '获取课程失败' }, { status: 500 })
  }
}
