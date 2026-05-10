import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET() {
  try {
    const [totalUsers, totalCourses, totalEnrollments] = await Promise.all([
      prisma.user.count(),
      prisma.course.count(),
      prisma.enrollment.count(),
    ])

    // 计算最近7天活跃用户（有学习记录的用户）
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const activeUsers = await prisma.courseProgress.count({
      where: {
        lastAccessAt: {
          gte: sevenDaysAgo,
        },
      },
    })

    return NextResponse.json({
      totalUsers,
      totalCourses,
      totalEnrollments,
      activeUsers,
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json(
      { error: '获取统计数据失败' },
      { status: 500 }
    )
  }
}
