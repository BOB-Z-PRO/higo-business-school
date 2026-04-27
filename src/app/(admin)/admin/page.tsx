'use client'

import { useEffect, useState } from 'react'
import { Users, Book, GraduationCap, TrendingUp, Clock, Trophy } from 'lucide-react'

interface Stats {
  totalUsers: number
  totalCourses: number
  totalEnrollments: number
  activeUsers: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalCourses: 0,
    totalEnrollments: 0,
    activeUsers: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { label: '总用户数', value: stats.totalUsers, icon: Users, color: '#3182CE', bg: '#EBF8FF' },
    { label: '课程总数', value: stats.totalCourses, icon: Book, color: '#38A169', bg: '#F0FFF4' },
    { label: '报名人次', value: stats.totalEnrollments, icon: GraduationCap, color: '#805AD5', bg: '#FAF5FF' },
    { label: '活跃用户', value: stats.activeUsers, icon: TrendingUp, color: '#D69E2E', bg: '#FFFBEB' },
  ]

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>控制台</h1>
        <p style={{ color: '#718096', marginTop: 4 }}>欢迎回来！以下是系统概览。</p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        {statCards.map((card) => (
          <div key={card.label} style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: 8 }}>{card.label}</p>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#1A202C' }}>
                  {loading ? '-' : card.value}
                </h3>
              </div>
              <div style={{ width: 56, height: 56, background: card.bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <card.icon size={28} style={{ color: card.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A202C', marginBottom: 20 }}>快捷操作</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { label: '添加用户', icon: 'fa-user-plus', href: '/admin/users?action=add', color: '#3182CE' },
            { label: '添加课程', icon: 'fa-plus', href: '/admin/courses?action=add', color: '#38A169' },
            { label: '添加学院', icon: 'fa-university', href: '/admin/schools?action=add', color: '#805AD5' },
            { label: '系统设置', icon: 'fa-cog', href: '/admin/settings', color: '#718096' },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 24,
                background: '#F7FAFC',
                borderRadius: 12,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ width: 48, height: 48, background: 'white', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <i className={`fas ${action.icon}`} style={{ color: action.color, fontSize: 20 }}></i>
              </div>
              <span style={{ color: '#1A202C', fontSize: '0.875rem', fontWeight: 500 }}>{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div style={{ marginTop: 24, background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A202C', marginBottom: 20 }}>最近活动</h2>
        <div style={{ textAlign: 'center', padding: 40, color: '#A0AEC0' }}>
          <Clock size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
          <p>暂无最近活动记录</p>
        </div>
      </div>
    </div>
  )
}