'use client'

import Link from 'next/link'
import { BookOpen, Users, Award, Rocket, ChevronRight } from 'lucide-react'

const schools = [
  {
    name: '产品学院',
    description: '深入了解HIGO产品线，掌握核心卖点和使用方法',
    icon: BookOpen,
    color: 'bg-emerald-500',
    chapters: 12,
    courses: 48,
    href: '/schools/products',
  },
  {
    name: '销售学院',
    description: '学习成功九步法、ABC法则，提升销售沟通能力',
    icon: Rocket,
    color: 'bg-blue-500',
    chapters: 8,
    courses: 32,
    href: '/schools/sales',
  },
  {
    name: '团队学院',
    description: '复制成功经验，建立高效协作的团队',
    icon: Users,
    color: 'bg-purple-500',
    chapters: 10,
    courses: 40,
    href: '/schools/team',
  },
  {
    name: '领导力学院',
    description: '培养领袖气质，带领团队走向卓越',
    icon: Award,
    color: 'bg-amber-500',
    chapters: 6,
    courses: 24,
    href: '/schools/leadership',
  },
]

export default function SchoolsPage() {
  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">四大学院</h1>
        <p className="text-gray-600">选择你想要学习的学院，开始你的成长之旅</p>
      </div>

      <div className="grid gap-6">
        {schools.map((school) => (
          <Link
            key={school.name}
            href={school.href}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition group"
          >
            <div className="flex items-start gap-4">
              <div className={`${school.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition`}>
                <school.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{school.name}</h2>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-gray-600 mb-4">{school.description}</p>
                <div className="flex gap-6 text-sm text-gray-500">
                  <span>{school.chapters} 个篇章</span>
                  <span>{school.courses} 节课程</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
