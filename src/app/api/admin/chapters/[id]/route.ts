import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, description, order, schoolId } = body

    const chapter = await prisma.chapter.update({
      where: { id: params.id },
      data: { name, description, order, schoolId },
    })

    return NextResponse.json(chapter)
  } catch (error) {
    console.error('Update chapter error:', error)
    return NextResponse.json({ error: '更新篇章失败' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.chapter.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete chapter error:', error)
    return NextResponse.json({ error: '删除篇章失败' }, { status: 500 })
  }
}
