'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const chaptersData: Record<string, { name: string; icon: string; gradient: string; bgColor: string; description: string; keyPoints: string[]; courses: { id: string; title: string; type: string; duration: string; school: string; completed: boolean }[] }> = {
  'company': { name: '公司篇', icon: '🏢', gradient: 'from-amber-500 to-amber-600', bgColor: 'bg-amber-500/10', description: '了解HIGO是谁，建立信任基础。', keyPoints: ['47年历史沉淀', 'FDA/cGMP认证', '全球四大基地'], courses: [{ id: 'C-01', title: '为什么大健康是未来20年最大的趋势', type: 'VIDEO', duration: '15:30', school: '新人成长学院', completed: false }, { id: 'C-02', title: 'HIGO47年历史与美国FDA认证', type: 'TEXT', duration: '10:00', school: '新人成长学院', completed: false }, { id: 'C-03', title: 'HIGO全球四大基地介绍', type: 'VIDEO', duration: '12:00', school: '新人成长学院', completed: false }] },
  'product': { name: '产品篇', icon: '🧬', gradient: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-500/10', description: '掌握产品知识，具备销售能力。', keyPoints: ['GnAKG抗衰', 'GnCELL原理', '荷尔蒙平衡'], courses: [{ id: 'P-01', title: 'AKG充电年轻8.5-34岁原理', type: 'VIDEO', duration: '20:45', school: '新人成长学院', completed: false }, { id: 'P-02', title: 'CELL饿死癌细胞/慢性炎症原理', type: 'VIDEO', duration: '18:00', school: '新人成长学院', completed: false }, { id: 'P-03', title: '荷尔蒙平衡与8大腺体', type: 'VIDEO', duration: '15:00', school: '新人成长学院', completed: false }] },
  'business': { name: '经营篇', icon: '📈', gradient: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', description: '学习经营方法，会做市场。', keyPoints: ['成功九步法', 'ABC法则', '形象价值'], courses: [{ id: 'B-01', title: '成功九步法第一步：梦想', type: 'AUDIO', duration: '08:20', school: '新人成长学院', completed: false }, { id: 'B-02', title: 'ABC法则：如何推懂到位', type: 'VIDEO', duration: '18:00', school: '新人成长学院', completed: false }, { id: 'B-03', title: '形象价值：我的形象价值百万', type: 'VIDEO', duration: '22:15', school: '初阶领导力学院', completed: false }] },
  'team': { name: '团队篇', icon: '👥', gradient: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-500/10', description: '建设团队，实现被动收入。', keyPoints: ['团队启动', '会议体系', '骨干培养'], courses: [{ id: 'T-01', title: '新人正确起步：六字真言', type: 'VIDEO', duration: '16:40', school: '初阶领导力学院', completed: false }, { id: 'T-02', title: '团队建设：如何带出高效团队', type: 'VIDEO', duration: '25:00', school: '中阶领导力学院', completed: false }] },
  'mindset': { name: '心态篇', icon: '❤️', gradient: 'from-red-500 to-red-600', bgColor: 'bg-red-500/10', description: '五大心态、情绪管理，稳定压倒一切。', keyPoints: ['五大心态', '情绪管理', '抗压能力'], courses: [{ id: 'M-01', title: '心态管理：保持积极状态', type: 'AUDIO', duration: '12:00', school: '初阶领导力学院', completed: false }, { id: 'M-02', title: '心态修炼：领导者的内在力量', type: 'AUDIO', duration: '12:00', school: '高阶领导力学院', completed: false }] },
  'practice': { name: '实操篇', icon: '🎯', gradient: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-500/10', description: '实战演练，即学即用，快速落地。', keyPoints: ['话术练习', '邀约技巧', '成交话术'], courses: [{ id: 'PR-01', title: '电话邀约话术精讲', type: 'VIDEO', duration: '15:00', school: '初阶领导力学院', completed: false }, { id: 'PR-02', title: '产品介绍话术', type: 'VIDEO', duration: '18:00', school: '初阶领导力学院', completed: false }] },
}

const typeColors: Record<string, string> = { VIDEO: 'bg-red-500/20 text-red-400', TEXT: 'bg-blue-500/20 text-blue-400', AUDIO: 'bg-amber-500/20 text-amber-400' }

export default function ChapterDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const chapter = chaptersData[slug]

  if (!chapter) return <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-white">篇章不存在</h1><Link href="/chapters" className="text-emerald-400">返回篇章列表</Link></div>

  return (
    <div className="min-h-screen">
      <header className="header"><div className="header-inner"><Link href="/" className="logo"><div className="logo-icon">H</div><div><div className="logo-text">HIGO商学院</div><div className="logo-sub">HIGO Business School</div></div></Link><nav className="nav"><Link href="/#schools" className="nav-link">四大学院</Link><Link href="/#chapters" className="nav-link active">六大篇章</Link><Link href="/course" className="nav-link">全部课程</Link></nav></div></header>
      <div className="content-wrapper pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/chapters" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition mb-6"><ArrowLeft className="w-5 h-5" />返回篇章列表</Link>
          <div className={`bg-gradient-to-br ${chapter.gradient} rounded-2xl p-8 mb-8 text-white`}>
            <div className="flex items-center gap-6 mb-6"><div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">{chapter.icon}</div><div><h1 className="text-2xl font-bold mb-2">{chapter.name}</h1></div></div>
            <p className="text-white/90 mb-4">{chapter.description}</p>
            <div className="flex flex-wrap gap-2">{chapter.keyPoints.map(point => <span key={point} className="bg-white/20 px-3 py-1 rounded-full text-sm">{point}</span>)}</div>
          </div>
          <div className="glass card overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between"><h2 className="text-xl font-bold text-white">课程列表</h2><span className="text-gray-400 text-sm">0/{chapter.courses.length} 已完成</span></div>
            <div className="divide-y divide-white/5">
              {chapter.courses.map((course, index) => (
                <Link key={course.id} href={`/course/${index + 1}`} className="flex items-center gap-4 p-4 hover:bg-white/5 transition">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 font-medium">{index + 1}</div>
                  <div className="flex-1 min-w-0"><div className="text-gray-200 font-medium truncate">{course.title}</div><div className="flex items-center gap-3 text-sm text-gray-500 mt-1"><span className={`px-2 py-0.5 rounded text-xs ${typeColors[course.type]}`}>{course.type}</span><span>{course.school}</span><span>·</span><span>{course.duration}</span></div></div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav"><Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link><Link href="/course" className="mobile-nav-item"><i className="fas fa-book"></i><span>课程</span></Link><Link href="/chapters" className="mobile-nav-item active"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link></div>
    </div>
  )
}