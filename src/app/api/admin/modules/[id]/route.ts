import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, description, order, chapterId } = body

    const module = await prisma.module.update({
      where: { id: params.id },
      data: { name, description, order, chapterId },
    })

    return NextResponse.json(module)
  } catch (error) {
    console.error('Update module error:', error)
    return NextResponse.json({ error: '更新模块失败' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.module.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete module error:', error)
    return NextResponse.json({ error: '删除模块失败' }, { status: 500 })
  }
}