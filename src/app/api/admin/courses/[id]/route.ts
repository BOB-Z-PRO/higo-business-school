import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id },
      include: {
        module: true,
        teacher: true,
        _count: { select: { enrollments: true, progress: true } },
      },
    })

    if (!course) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 })
    }

    return NextResponse.json(course)
  } catch (error) {
    console.error('Get course error:', error)
    return NextResponse.json({ error: '获取课程失败' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { title, description, type, duration, order, moduleId, videoUrl, audioUrl, content } = body

    const course = await prisma.course.update({
      where: { id: params.id },
      data: {
        title,
        description,
        type,
        duration,
        order,
        moduleId,
        videoUrl,
        audioUrl,
        content,
      },
      include: {
        module: { select: { name: true } },
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error('Update course error:', error)
    return NextResponse.json({ error: '更新课程失败' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.course.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete course error:', error)
    return NextResponse.json({ error: '删除课程失败' }, { status: 500 })
  }
}
