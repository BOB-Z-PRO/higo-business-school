import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SETTINGS_KEYS = [
  'siteName',
  'siteDescription',
  'contactEmail',
  'contactPhone',
  'address',
  'socialLinks',
  'bannerText',
  'footerText',
]

export async function GET() {
  try {
    const settings = await prisma.siteSettings.findMany()

    const settingsMap: Record<string, string> = {}
    for (const key of SETTINGS_KEYS) {
      const found = settings.find((s) => s.key === key)
      settingsMap[key] = found?.value || ''
    }

    return NextResponse.json({ settings: settingsMap })
  } catch (error) {
    console.error('Get settings error:', error)
    return NextResponse.json({ error: '获取设置失败' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    for (const key of SETTINGS_KEYS) {
      if (body[key] !== undefined) {
        await prisma.siteSettings.upsert({
          where: { key },
          update: { value: body[key] },
          create: { key, value: body[key] },
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Save settings error:', error)
    return NextResponse.json({ error: '保存设置失败' }, { status: 500 })
  }
}