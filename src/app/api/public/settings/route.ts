import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PUBLIC_SETTINGS_KEYS = [
  'siteName',
  'siteDescription',
  'contactEmail',
  'contactPhone',
  'address',
  'bannerText',
  'footerText',
]

export async function GET() {
  try {
    const settings = await prisma.siteSettings.findMany({
      where: { key: { in: PUBLIC_SETTINGS_KEYS } },
    })

    const settingsMap: Record<string, string> = {}
    for (const s of settings) {
      settingsMap[s.key] = s.value
    }

    // Set defaults if not found
    const defaults: Record<string, string> = {
      siteName: 'HIGO商学院',
      siteDescription: 'HIGO商学院是在线学习管理系统，提供从产品消费者到事业经营者的完整成长路径。',
      contactEmail: 'support@higo.com',
      contactPhone: '400-888-8888',
      address: '',
      bannerText: '打造可复制、标准化、分层培训的HIGO全生命周期成长体系',
      footerText: '让每一位普通人都能在健康与财富之路上走得更远',
    }

    for (const key of PUBLIC_SETTINGS_KEYS) {
      if (!settingsMap[key]) {
        settingsMap[key] = defaults[key] || ''
      }
    }

    return NextResponse.json(settingsMap)
  } catch (error) {
    console.error('Get public settings error:', error)
    return NextResponse.json({ error: '获取设置失败' }, { status: 500 })
  }
}