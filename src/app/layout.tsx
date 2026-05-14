import type { Metadata, Viewport } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'HIGO 商学院 - 从产品消费者到事业经营者',
  description: 'HIGO 商学院是在线学习与经营支持系统，提供从产品消费者到事业经营者的完整成长路径。',
  manifest: '/manifest.json',
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0f172a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased saas-workbench">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
