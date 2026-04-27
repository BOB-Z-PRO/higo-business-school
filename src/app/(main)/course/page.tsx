'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Video, FileText, Music, Search, ArrowLeft } from 'lucide-react'

const courses = [
  { id: 1, title: '为什么大健康是未来20年最大的趋势', type: 'VIDEO', duration: '15:30', school: '新人成长学院', chapter: '公司篇' },
  { id: 2, title: 'HIGO47年历史与美国FDA认证', type: 'TEXT', duration: '10:00', school: '新人成长学院', chapter: '公司篇' },
  { id: 3, title: 'AKG充电年轻8.5-34岁原理', type: 'VIDEO', duration: '20:45', school: '新人成长学院', chapter: '产品篇' },
  { id: 4, title: '成功九步法第一步：梦想', type: 'AUDIO', duration: '08:20', school: '新人成长学院', chapter: '经营篇' },
  { id: 5, title: 'ABC法则：如何推懂到位', type: 'VIDEO', duration: '18:00', school: '初阶领导力学院', chapter: '经营篇' },
]

const typeIcons: Record<string, React.ElementType> = { VIDEO: Video, TEXT: FileText, AUDIO: Music }
const typeColors: Record<string, string> = { VIDEO: 'text-red-400 bg-red-400/10', TEXT: 'text-blue-400 bg-blue-400/10', AUDIO: 'text-amber-400 bg-amber-400/10' }

export default function CoursePage() {
  const [search, setSearch] = useState('')
  return (
    <div className="min-h-screen">
      <header className="header"><div className="header-inner"><Link href="/" className="logo"><div className="logo-icon">H</div><div><div className="logo-text">HIGO商学院</div><div className="logo-sub">HIGO Business School</div></div></Link><nav className="nav"><Link href="/#schools" className="nav-link">四大学院</Link><Link href="/#chapters" className="nav-link">六大篇章</Link><Link href="/course" className="nav-link active">全部课程</Link></nav></div></header>
      <div className="content-wrapper pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition mb-6"><ArrowLeft className="w-5 h-5" />返回首页</Link>
          <h1 className="text-3xl font-bold gradient-text mb-2">全部课程</h1>
          <p className="text-gray-400 mb-8">系统化学习，构建完整的知识体系和能力框架</p>
          <div className="glass card p-4 mb-6">
            <div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /><input type="text" placeholder="搜索课程..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-emerald-500" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => c.title.includes(search)).map((course) => {
              const Icon = typeIcons[course.type] || Video
              return (
                <Link key={course.id} href={`/course/${course.id}`} className="glass card overflow-hidden hover:border-emerald-500/50 transition">
                  <div className="h-36 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"><div className={`w-12 h-12 rounded-xl ${typeColors[course.type]} flex items-center justify-center`}><Icon className="w-6 h-6" /></div></div>
                  <div className="p-4"><h3 className="text-gray-200 font-medium mb-2">{course.title}</h3><div className="flex items-center gap-2 text-sm text-gray-500"><span>{course.school}</span><span>·</span><span>{course.chapter}</span></div></div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mobile-nav"><Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link><Link href="/course" className="mobile-nav-item active"><i className="fas fa-book"></i><span>课程</span></Link><Link href="/chapters" className="mobile-nav-item"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link></div>
    </div>
  )
}