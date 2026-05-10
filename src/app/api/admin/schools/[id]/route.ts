import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, description, icon, color, order } = body

    const school = await prisma.school.update({
      where: { id: params.id },
      data: { name, description, icon, color, order },
    })

    return NextResponse.json(school)
  } catch (error) {
    console.error('Update school error:', error)
    return NextResponse.json({ error: '更新学院失败' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.school.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete school error:', error)
    return NextResponse.json({ error: '删除学院失败' }, { status: 500 })
  }
}
