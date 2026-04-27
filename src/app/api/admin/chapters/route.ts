import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const chapters = await prisma.chapter.findMany({
      include: {
        school: { select: { name: true } },
        _count: { select: { modules: true } },
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ chapters })
  } catch (error) {
    console.error('Chapters list error:', error)
    return NextResponse.json({ error: '获取篇章列表失败' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, order, schoolId } = body

    if (!name || !schoolId) {
      return NextResponse.json({ error: '请填写必填项' }, { status: 400 })
    }

    const chapter = await prisma.chapter.create({
      data: { name, description, order: order || 0, schoolId },
    })

    return NextResponse.json(chapter)
  } catch (error) {
    console.error('Create chapter error:', error)
    return NextResponse.json({ error: '创建篇章失败' }, { status: 500 })
  }
}