import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const chapters = await prisma.chapter.findMany({
      include: {
        school: {
          select: { id: true, name: true, icon: true, color: true },
        },
        modules: {
          include: {
            courses: {
              select: {
                id: true,
                title: true,
                type: true,
                duration: true,
                description: true,
                order: true,
              },
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(chapters)
  } catch (error) {
    console.error('Get chapters error:', error)
    return NextResponse.json({ error: '获取篇章失败' }, { status: 500 })
  }
}