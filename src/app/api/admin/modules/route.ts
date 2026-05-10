import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET() {
  try {
    const modules = await prisma.module.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        order: true,
        chapter: { select: { id: true, name: true } },
        _count: { select: { courses: true } },
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ modules })
  } catch (error) {
    console.error('Modules list error:', error)
    return NextResponse.json({ error: '获取模块列表失败' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, order, chapterId } = body

    if (!name || !chapterId) {
      return NextResponse.json({ error: '请填写必填项' }, { status: 400 })
    }

    const module = await prisma.module.create({
      data: { name, description, order: order || 0, chapterId },
    })

    return NextResponse.json(module)
  } catch (error) {
    console.error('Create module error:', error)
    return NextResponse.json({ error: '创建模块失败' }, { status: 500 })
  }
}
