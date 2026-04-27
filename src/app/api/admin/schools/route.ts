import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      include: {
        _count: { select: { chapters: true } },
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ schools })
  } catch (error) {
    console.error('Schools list error:', error)
    return NextResponse.json({ error: '获取学院列表失败' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, icon, color, order } = body

    if (!name) {
      return NextResponse.json({ error: '请填写学院名称' }, { status: 400 })
    }

    const school = await prisma.school.create({
      data: { name, description, icon, color, order: order || 0 },
    })

    return NextResponse.json(school)
  } catch (error) {
    console.error('Create school error:', error)
    return NextResponse.json({ error: '创建学院失败' }, { status: 500 })
  }
}