'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BookOpen, Users, Award, Rocket, ChevronRight, Play, Star, Target, TrendingUp } from 'lucide-react'

// Animated Background Component
function ParticlesBackground() {
  return (
    <div className="particles-container">
      {/* DNA Strands */}
      <div className="dna-container">
        {[...Array(6)].map((_, i) => (
          <div key={`dna-${i}`}>
            <div
              className="dna-strand"
              style={{
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                height: `${80 + Math.random() * 60}px`,
              }}
            />
            <div
              className="dna-node"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Cells */}
      <div className="cells-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={`cell-${i}`}
            className="cell"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Molecules */}
      <div className="molecules-container">
        {[...Array(12)].map((_, i) => (
          <div
            key={`mol-${i}`}
            className="molecule"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Chapter data
const chapters = [
  { name: '第一篇章', subtitle: '认知篇', icon: TrendingUp, progress: 0 },
  { name: '第二篇章', subtitle: '基础篇', icon: BookOpen, progress: 0 },
  { name: '第三篇章', subtitle: '进阶篇', icon: Star, progress: 0 },
  { name: '第四篇章', subtitle: '高阶篇', icon: Award, progress: 0 },
  { name: '第五篇章', subtitle: '领袖篇', icon: Target, progress: 0 },
]

// School data
const schools = [
  {
    name: '产品学院',
    description: '深入了解HIGO产品线，掌握核心卖点',
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-700',
    chapters: 12,
    courses: 48,
  },
  {
    name: '销售学院',
    description: '学习成功九步法、ABC法则',
    icon: Rocket,
    color: 'from-blue-500 to-blue-700',
    chapters: 8,
    courses: 32,
  },
  {
    name: '团队学院',
    description: '复制成功经验，建立高效团队',
    icon: Users,
    color: 'from-purple-500 to-purple-700',
    chapters: 10,
    courses: 40,
  },
  {
    name: '领导力学院',
    description: '培养领袖气质，带领团队走向卓越',
    icon: Award,
    color: 'from-amber-500 to-amber-700',
    chapters: 6,
    courses: 24,
  },
]

// Learning path
const learningPath = [
  { step: 1, title: '了解趋势', desc: '认知大健康行业趋势' },
  { step: 2, title: '体验产品', desc: '亲自试用建立信心' },
  { step: 3, title: '学习销售', desc: '掌握成功九步法' },
  { step: 4, title: '开始分享', desc: '迈出事业第一步' },
  { step: 5, title: '建立团队', desc: '复制成功带团队' },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <ParticlesBackground />

      <div className="content-wrapper">
        {/* Header Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">HIGO商学院</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="nav-link font-medium">首页</Link>
              <Link href="/schools" className="nav-link font-medium">四大学院</Link>
              <Link href="/team" className="nav-link font-medium">团队篇</Link>
              <Link href="/mindset" className="nav-link font-medium">心态篇</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/login" className="btn-secondary text-sm py-2 px-4">
                登录
              </Link>
              <Link href="/register" className="btn-primary text-sm py-2 px-4">
                立即注册
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-300 text-sm">在线学习平台</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              <span className="gradient-text">HIGO商学院</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in stagger-1">
              从产品消费者到事业经营者的完整成长路径
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in stagger-2">
              <Link href="/login" className="btn-primary inline-flex items-center gap-2">
                <Play className="w-5 h-5" />
                开始学习
              </Link>
              <Link href="/schools" className="btn-secondary inline-flex items-center gap-2">
                了解课程
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Five Chapters Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">五大篇章</h2>
              <p className="text-gray-400">循序渐进的学习路径，助你成为事业经营者</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.name}
                  className="chapter-badge fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <chapter.icon className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <span className="font-semibold text-white">{chapter.name}</span>
                    <span className="text-gray-400 mx-2">|</span>
                    <span className="text-emerald-300">{chapter.subtitle}</span>
                  </div>
                  <span className="text-xs text-emerald-400 ml-2">{chapter.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four Schools Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">四大学院</h2>
              <p className="text-gray-400">专业体系化的课程内容，助你全面提升</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schools.map((school, index) => (
                <div
                  key={school.name}
                  className="card p-6 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${school.color} flex items-center justify-center mb-4`}>
                    <school.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{school.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{school.chapters} 篇章</span>
                    <span>{school.courses} 课程</span>
                  </div>
                  <Link
                    href="/schools"
                    className="mt-4 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
                  >
                    开始学习
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">学习路径</h2>
              <p className="text-gray-400">五步走战略，助你从入门到精通</p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-purple-500 rounded-full hidden md:block" />

              <div className="space-y-8">
                {learningPath.map((item, index) => (
                  <div
                    key={item.step}
                    className={`flex items-center gap-6 fade-in ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass card p-6 inline-block">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center font-bold text-white z-10 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass card p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开始学习了吗？</h2>
              <p className="text-gray-400 mb-8">加入HIGO商学院，开启你的事业成长之旅</p>
              <Link href="/register" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                <Play className="w-6 h-6" />
                立即开始
                <ChevronRight className="w-6 h-6" />
              </Link>
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
