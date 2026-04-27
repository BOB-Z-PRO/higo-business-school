'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, CheckCircle, TrendingUp } from 'lucide-react'

const schoolsData: Record<string, { name: string; subtitle: string; icon: string; gradient: string; courses: { id: string; title: string; type: string; duration: string }[]; modules: string[]; description: string }> = {
  'new': { name: '新人成长学院', subtitle: '生存家园 · 入门第一步', icon: '🌱', gradient: 'from-emerald-500 to-emerald-700', description: '入门应知应会，学习HIGO事业的核心基础。', modules: ['趋势认知', '公司背书', '产品体验', '成功九步', 'ABC法则'], courses: [{ id: 'N-01', title: '为什么大健康是未来20年最大的趋势', type: 'VIDEO', duration: '15:30' }, { id: 'N-02', title: 'HIGO47年历史与美国FDA认证', type: 'TEXT', duration: '10:00' }, { id: 'N-03', title: 'GnAKG细胞级抗衰原理', type: 'VIDEO', duration: '20:45' }, { id: 'N-04', title: 'GnCELL饿死癌细胞原理', type: 'VIDEO', duration: '18:00' }, { id: 'N-05', title: '成功九步法第一步：梦想', type: 'AUDIO', duration: '08:20' }] },
  'svip': { name: '初阶领导力学院', subtitle: '生活家园 · 生存技能', icon: '🔮', gradient: 'from-blue-500 to-blue-700', description: 'SVIP级别生存家园，学习团队建设基础和领导力入门。', modules: ['团队建设', '领导力入门', '目标设定', '形象价值', '服务定江山'], courses: [{ id: 'L1-01', title: '形象价值：我的形象价值百万', type: 'VIDEO', duration: '22:15' }, { id: 'L1-02', title: '服务定江山：五服四大基石', type: 'TEXT', duration: '12:30' }, { id: 'L1-03', title: '成功九步第三步：学习', type: 'AUDIO', duration: '10:00' }] },
  'diamond': { name: '中阶领导力学院', subtitle: '生活家园 · 团队建设', icon: '💎', gradient: 'from-purple-500 to-purple-700', description: '钻石级别生活家园，学习团队复制和绩效提升方法。', modules: ['团队复制', '绩效提升', '人才培养', '业务沟通', '时间管理'], courses: [{ id: 'L2-01', title: '团队建设：如何带出高效团队', type: 'VIDEO', duration: '25:00' }, { id: 'L2-02', title: '成功九步第六步：团队建设', type: 'VIDEO', duration: '20:00' }] },
  'black': { name: '高阶领导力学院', subtitle: '生命家园 · 领袖传承', icon: '👑', gradient: 'from-amber-500 to-amber-700', description: '黑钻级别生命家园，学习战略规划和组织文化建设。', modules: ['战略规划', '文化建设', '心态修炼', '资源整合', '永续发展'], courses: [{ id: 'L3-01', title: '战略规划：未来3-5年愿景', type: 'VIDEO', duration: '30:00' }, { id: 'L3-02', title: '组织文化建设：打造铁军团队', type: 'VIDEO', duration: '25:00' }] },
}

const typeColors: Record<string, string> = { VIDEO: 'bg-red-500/20 text-red-400', TEXT: 'bg-blue-500/20 text-blue-400', AUDIO: 'bg-amber-500/20 text-amber-400' }

export default function SchoolDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const school = schoolsData[slug]

  if (!school) return <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-white">学院不存在</h1><Link href="/" className="text-emerald-400">返回首页</Link></div>

  return (
    <div className="min-h-screen">
      <header className="header"><div className="header-inner"><Link href="/" className="logo"><div className="logo-icon">H</div><div><div className="logo-text">HIGO商学院</div><div className="logo-sub">HIGO Business School</div></div></Link><nav className="nav"><Link href="/#schools" className="nav-link active">四大学院</Link><Link href="/#chapters" className="nav-link">六大篇章</Link><Link href="/course" className="nav-link">全部课程</Link></nav></div></header>
      <div className="content-wrapper pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition mb-6"><ArrowLeft className="w-5 h-5" />返回首页</Link>
          <div className={`bg-gradient-to-br ${school.gradient} rounded-2xl p-8 mb-8 text-white`}>
            <div className="flex items-center gap-6 mb-6"><div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">{school.icon}</div><div><h1 className="text-2xl font-bold mb-2">{school.name}</h1><p className="text-white/80">{school.subtitle}</p></div></div>
            <p className="text-white/90 mb-4">{school.description}</p>
            <div className="flex flex-wrap gap-2">{school.modules.map(mod => <span key={mod} className="bg-white/20 px-3 py-1 rounded-full text-sm">{mod}</span>)}</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass card p-4 text-center"><BookOpen className="w-6 h-6 text-emerald-400 mx-auto mb-2" /><div className="text-2xl font-bold text-white">{school.courses.length}</div><div className="text-gray-400 text-sm">课程总数</div></div>
            <div className="glass card p-4 text-center"><CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" /><div className="text-2xl font-bold text-white">0</div><div className="text-gray-400 text-sm">已完成</div></div>
            <div className="glass card p-4 text-center"><Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" /><div className="text-2xl font-bold text-white">0h</div><div className="text-gray-400 text-sm">总时长</div></div>
            <div className="glass card p-4 text-center"><TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" /><div className="text-2xl font-bold text-white">0%</div><div className="text-gray-400 text-sm">完成进度</div></div>
          </div>
          <div className="glass card overflow-hidden">
            <div className="p-6 border-b border-white/10"><h2 className="text-xl font-bold text-white">课程列表</h2></div>
            <div className="divide-y divide-white/5">
              {school.courses.map((course, index) => (
                <Link key={course.id} href={`/course/${index + 1}`} className="flex items-center gap-4 p-4 hover:bg-white/5 transition">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 font-medium">{index + 1}</div>
                  <div className="flex-1 min-w-0"><div className="text-gray-200 font-medium truncate">{course.title}</div><div className="flex items-center gap-3 text-sm text-gray-500 mt-1"><span className={`px-2 py-0.5 rounded text-xs ${typeColors[course.type]}`}>{course.type}</span><span>{course.duration}</span></div></div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav"><Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link><Link href="/course" className="mobile-nav-item"><i className="fas fa-book"></i><span>课程</span></Link><Link href="/chapters" className="mobile-nav-item"><i className="fas fa-graduation-cap"></i><span>篇章</span></Link></div>
    </div>
  )
}