'use client'

import Link from 'next/link'
import { BookOpen, Users, Award, Rocket, ChevronRight, Play } from 'lucide-react'

const schools = [
  {
    name: '产品学院',
    description: '深入了解HIGO产品线，掌握核心卖点',
    icon: BookOpen,
    color: 'bg-emerald-500',
    href: '/schools/products',
  },
  {
    name: '销售学院',
    description: '学习成功九步ABC法则，提升销售能力',
    icon: Rocket,
    color: 'bg-blue-500',
    href: '/schools/sales',
  },
  {
    name: '团队学院',
    description: '复制成功经验，建立高效团队',
    icon: Users,
    color: 'bg-purple-500',
    href: '/schools/team',
  },
  {
    name: '领导力学院',
    description: '培养领袖气质，带领团队走向卓越',
    icon: Award,
    color: 'bg-amber-500',
    href: '/schools/leadership',
  },
]

const chapters = [
  { name: '第一篇章', subtitle: '认知篇', progress: 0 },
  { name: '第二篇章', subtitle: '基础篇', progress: 0 },
  { name: '第三篇章', subtitle: '进阶篇', progress: 0 },
  { name: '第四篇章', subtitle: '高阶篇', progress: 0 },
  { name: '第五篇章', subtitle: '领袖篇', progress: 0 },
]

const learningPath = [
  { step: 1, title: '了解趋势', desc: '认知大健康行业趋势' },
  { step: 2, title: '体验产品', desc: '亲自试用建立信心' },
  { step: 3, title: '学习销售', desc: '掌握成功九步法' },
  { step: 4, title: '开始分享', desc: '迈出事业第一步' },
  { step: 5, title: '建立团队', desc: '复制成功带团队' },
]

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">HIGO商学院</h1>
          <p className="text-emerald-100 text-lg mb-8">
            从产品消费者到事业经营者的完整成长路径
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/login"
              className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
            >
              登录学习
            </Link>
            <Link
              href="/register"
              className="bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition"
            >
              立即注册
            </Link>
          </div>
        </div>
      </section>

      {/* 四大学院 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">四大学院</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {schools.map((school) => (
              <Link
                key={school.name}
                href={school.href}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition text-center"
              >
                <div className={`${school.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <school.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{school.name}</h3>
                <p className="text-sm text-gray-500">{school.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 五大篇章 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">五大篇章</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {chapters.map((chapter) => (
              <div
                key={chapter.name}
                className="bg-white rounded-full px-5 py-3 shadow-sm border border-gray-100 flex items-center gap-2"
              >
                <span className="font-semibold text-gray-900">{chapter.name}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{chapter.subtitle}</span>
                <span className="text-xs text-emerald-600 ml-2">{chapter.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">学习路径</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-6">
              {learningPath.map((item, index) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">准备好开始学习了吗？</h2>
          <p className="text-emerald-100 mb-6">加入HIGO商学院，开启你的事业成长之旅</p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
          >
            <Play className="w-5 h-5" />
            立即开始
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-gray-500 text-sm">
        <p>© 2024 HIGO商学院. All rights reserved.</p>
      </footer>
    </main>
  )
}
