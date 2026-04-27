import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const search = searchParams.get('search') || ''

  try {
    const where = search ? {
      title: { contains: search, mode: 'insensitive' as const },
    } : {}

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          module: { select: { name: true } },
          _count: { select: { enrollments: true } },
        },
        orderBy: { order: 'asc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.course.count({ where }),
    ])

    return NextResponse.json({
      courses,
      total,
      totalPages: Math.ceil(total / pageSize),
    })
  } catch (error) {
    console.error('Courses list error:', error)
    return NextResponse.json({ error: '获取课程列表失败' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, type, duration, order, moduleId } = body

    if (!title) {
      return NextResponse.json({ error: '请填写课程名称' }, { status: 400 })
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        type: type || 'TEXT',
        duration: duration || 0,
        order: order || 0,
        moduleId,
      },
      include: {
        module: { select: { name: true } },
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error('Create course error:', error)
    return NextResponse.json({ error: '创建课程失败' }, { status: 500 })
  }
}