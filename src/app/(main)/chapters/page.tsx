'use client'

import Link from 'next/link'
import { ArrowLeft, Building2, FlaskConical, TrendingUp, Users, Heart } from 'lucide-react'

const chapters = [
  { slug: 'company', name: '公司篇', icon: Building2, color: 'from-amber-500 to-amber-600', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30', description: '了解HIGO是谁，建立信任基础', tags: ['FDA认证', '全球布局'], courseCount: 5 },
  { slug: 'product', name: '产品篇', icon: FlaskConical, color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', description: '掌握产品知识，具备销售能力', tags: ['GnAKG', 'GnCELL'], courseCount: 5 },
  { slug: 'business', name: '经营篇', icon: TrendingUp, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', description: '学习经营方法，会做市场', tags: ['成功九步', 'ABC法则'], courseCount: 5 },
  { slug: 'team', name: '团队篇', icon: Users, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', description: '建设团队，实现被动收入', tags: ['团队启动', '会议体系'], courseCount: 5 },
  { slug: 'mindset', name: '心态篇', icon: Heart, color: 'from-red-500 to-red-600', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30', description: '五大心态、情绪管理，稳定压倒一切', tags: ['贯穿始终'], courseCount: 5 },
  { slug: 'practice', name: '实操篇', icon: TrendingUp, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30', description: '实战演练，即学即用，快速落地', tags: ['话术练习', '邀约技巧'], courseCount: 5 },
]

export default function ChaptersPage() {
  return (
    <div className="min-h-screen">
      <header className="header"><div className="header-inner"><Link href="/" className="logo"><div className="logo-icon">H</div><div><div className="logo-text">HIGO商学院</div><div className="logo-sub">HIGO Business School</div></div></Link><nav className="nav"><Link href="/#schools" className="nav-link">四大学院</Link><Link href="/#chapters" className="nav-link active">六大篇章</Link><Link href="/course" className="nav-link">全部课程</Link></nav></div></header>
      <div className="content-wrapper pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition mb-6"><ArrowLeft className="w-5 h-5" />返回首页</Link>
          <h1 className="text-3xl font-bold gradient-text mb-2">六大篇章体系</h1>
          <p className="text-gray-400 mb-8">系统化学习，构建完整的知识体系和能力框架</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => {
              const IconComponent = chapter.icon
              return (
                <Link key={chapter.slug} href={`/chapters/${chapter.slug}`} className={`glass card border-2 ${chapter.borderColor} overflow-hidden hover:scale-105 transition-transform`}>
                  <div className={`h-2 bg-gradient-to-r ${chapter.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4"><div className={`w-12 h-12 rounded-xl ${chapter.bgColor} flex items-center justify-center`}><IconComponent className="w-6 h-6" /></div><div className="flex-1"><h3 className="text-xl font-bold text-white mb-1">{chapter.name}</h3></div></div>
                    <p className="text-gray-300 mb-4">{chapter.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">{chapter.tags.map((tag) => <span key={tag} className={`${chapter.bgColor} px-3 py-1 rounded-full text-sm text-gray-300`}>{tag}</span>)}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10"><span className="text-sm text-gray-400">{chapter.courseCount} 门课程</span><span className="text-emerald-400 text-sm flex items-center gap-1">开始学习 <i className="fas fa-arrow-right text-xs" /></span></div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mobile-nav"><Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link><Link href="/course" className="mobile-nav-item"><i className="fas fa-book"></i><span>课程</span></Link><Link href="/chapters" className="mobile-nav-item active"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link></div>
    </div>
  )
}