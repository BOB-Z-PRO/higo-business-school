'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Play, FileText, Music, Clock, BookOpen, CheckCircle } from 'lucide-react'

const courseData: Record<string, { title: string; type: string; duration: string; school: string; chapter: string; description: string; completed: boolean }> = {
  '1': { title: '为什么大健康是未来20年最大的趋势', type: 'VIDEO', duration: '15:30', school: '新人成长学院', chapter: '公司篇', description: '本课程将深入分析大健康产业的发展趋势，解释为什么现在是进入大健康领域的最佳时机。', completed: false },
  '2': { title: 'HIGO47年历史与美国FDA认证', type: 'TEXT', duration: '10:00', school: '新人成长学院', chapter: '公司篇', description: '了解HIGO47年的发展历程，以及公司如何获得美国FDA认证。', completed: false },
  '3': { title: 'AKG充电年轻8.5-34岁原理', type: 'VIDEO', duration: '20:45', school: '新人成长学院', chapter: '产品篇', description: '深入了解AKG如何通过细胞级抗衰机制帮助人体实现年轻化效果。', completed: false },
}

const typeIcons: Record<string, React.ElementType> = { VIDEO: Play, TEXT: FileText, AUDIO: Music }
const typeColors: Record<string, string> = { VIDEO: 'text-red-400 bg-red-400/10', TEXT: 'text-blue-400 bg-blue-400/10', AUDIO: 'text-amber-400 bg-amber-400/10' }

export default function CourseDetailPage() {
  const params = useParams()
  const id = params.id as string
  const course = courseData[id] || { title: '课程内容', type: 'VIDEO', duration: '15:00', school: '新人成长学院', chapter: '公司篇', description: '课程详细内容...', completed: false }
  const TypeIcon = typeIcons[course.type] || Play

  return (
    <div className="min-h-screen">
      <header className="header"><div className="header-inner"><Link href="/" className="logo"><div className="logo-icon">H</div><div><div className="logo-text">HIGO商学院</div><div className="logo-sub">HIGO Business School</div></div></Link><nav className="nav"><Link href="/#schools" className="nav-link">四大学院</Link><Link href="/#chapters" className="nav-link">六大篇章</Link><Link href="/course" className="nav-link active">全部课程</Link></nav></div></header>
      <div className="content-wrapper pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/course" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition mb-6"><ArrowLeft className="w-5 h-5" />返回课程列表</Link>
          <div className="glass card overflow-hidden mb-6">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative"><div className={`w-16 h-16 rounded-2xl ${typeColors[course.type]} flex items-center justify-center`}><TypeIcon className="w-8 h-8" /></div><div className="absolute bottom-4 right-4"><span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[course.type]}`}>{course.type}</span></div>
            </div>
          </div>
          <div className="glass card p-6 mb-6">
            <h1 className="text-2xl font-bold text-white mb-4">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4"><span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{course.school}</span><span>·</span><span>{course.chapter}</span><span>·</span><span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration}</span></div>
            <p className="text-gray-300 leading-relaxed">{course.description}</p>
          </div>
          <div className="glass card p-6">
            <h3 className="text-lg font-bold text-white mb-4">课程资料</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href={`/course/${id}/transcript`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition"><FileText className="w-6 h-6 text-blue-400" /><div><div className="text-gray-200 font-medium">课程文字稿</div><div className="text-gray-500 text-sm">查看完整内容</div></div></Link>
              <Link href={`/course/${id}/notes`} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition"><BookOpen className="w-6 h-6 text-emerald-400" /><div><div className="text-gray-200 font-medium">学习笔记</div><div className="text-gray-500 text-sm">核心要点总结</div></div></Link>
              <button className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition"><CheckCircle className="w-6 h-6 text-purple-400" /><div><div className="text-gray-200 font-medium">标记已完成</div><div className="text-gray-500 text-sm">记录学习进度</div></div></button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav"><Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link><Link href="/course" className="mobile-nav-item active"><i className="fas fa-book"></i><span>课程</span></Link><Link href="/chapters" className="mobile-nav-item"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link></div>
    </div>
  )
}