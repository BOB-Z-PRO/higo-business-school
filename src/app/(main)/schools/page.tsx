'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BookOpen, Users, Award, Rocket, ChevronRight, ArrowLeft } from 'lucide-react'

function ParticlesBackground() {
  return (
    <div className="particles-container">
      <div className="dna-container">
        {[...Array(4)].map((_, i) => (
          <div key={`dna-${i}`}>
            <div
              className="dna-strand"
              style={{
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 0.7}s`,
                height: `${60 + Math.random() * 40}px`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="cells-container">
        {[...Array(5)].map((_, i) => (
          <div
            key={`cell-${i}`}
            className="cell"
            style={{
              width: `${50 + i * 15}px`,
              height: `${50 + i * 15}px`,
              left: `${8 + i * 18}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const schools = [
  {
    name: '产品学院',
    description: '深入了解HIGO产品线，掌握核心卖点和使用方法。学习AKG、Cell、荷尔蒙等产品的原理、功效和见证案例。',
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-700',
    bgColor: 'bg-emerald-500/10',
    chapters: 12,
    courses: 48,
    modules: ['产品原理', '功效说明', '见证案例', '使用指南'],
  },
  {
    name: '销售学院',
    description: '学习成功九步法、ABC法则、形象价值等销售核心技能，提升沟通和成交能力。',
    icon: Rocket,
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-500/10',
    chapters: 8,
    courses: 32,
    modules: ['成功九步', 'ABC法则', '形象价值', '成交技巧'],
  },
  {
    name: '团队学院',
    description: '复制成功经验，建立高效协作的团队。学习团队建设、领导力和系统化运作。',
    icon: Users,
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-500/10',
    chapters: 10,
    courses: 40,
    modules: ['团队建设', '领导力', '系统运作', '复制成功'],
  },
  {
    name: '领导力学院',
    description: '培养领袖气质，学习如何带领团队走向卓越，成为真正的事業經營者。',
    icon: Award,
    color: 'from-amber-500 to-amber-700',
    bgColor: 'bg-amber-500/10',
    chapters: 6,
    courses: 24,
    modules: ['心态修炼', '目标设定', '时间管理', '领袖品质'],
  },
]

export default function SchoolsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <ParticlesBackground />

      <div className="content-wrapper">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">HIGO商学院</span>
              </Link>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              返回首页
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">四大学院</span>
            </h1>
            <p className="text-xl text-gray-400">选择你想要学习的学院，开始你的成长之旅</p>
          </div>
        </section>

        {/* Schools Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schools.map((school, index) => (
                <div
                  key={school.name}
                  className="card overflow-hidden fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header with gradient */}
                  <div className={`p-6 bg-gradient-to-br ${school.color}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                        <school.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{school.name}</h2>
                        <p className="text-white/80 text-sm">
                          {school.chapters} 篇章 · {school.courses} 课程
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{school.description}</p>

                    {/* Modules */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        核心模块
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {school.modules.map((module) => (
                          <span
                            key={module}
                            className={`${school.bgColor} text-sm px-3 py-1 rounded-full ${school.color.replace('from-', 'text-').replace(' to-', '/')}`}
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">学习进度</span>
                        <span className="text-emerald-400">0%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '0%' }} />
                      </div>
                    </div>

                    {/* Action */}
                    <Link
                      href="/login"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      开始学习
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>© 2024 HIGO商学院. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
