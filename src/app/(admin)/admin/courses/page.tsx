'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Book, Search, Plus, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string | null
  type: string
  duration: number
  order: number
  module: { name: string }
  _count: { enrollments: number }
}

export default function AdminCoursesPage() {
  const searchParams = useSearchParams()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [showModal, setShowModal] = useState(searchParams.get('action') === 'add')
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'TEXT',
    duration: 0,
    order: 0,
    moduleId: '',
  })
  const [modules, setModules] = useState<{ id: string; name: string }[]>([])

  const pageSize = 10

  useEffect(() => {
    fetchCourses()
    fetchModules()
  }, [page, search])

  const fetchCourses = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/courses?page=${page}&pageSize=${pageSize}&search=${search}`)
      if (res.ok) {
        const data = await res.json()
        setCourses(data.courses)
        setTotalPages(data.totalPages)
      }
    } catch (error) {
      console.error('Failed to fetch courses:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchModules = async () => {
    try {
      const res = await fetch('/api/admin/modules')
      if (res.ok) {
        const data = await res.json()
        setModules(data.modules)
      }
    } catch (error) {
      console.error('Failed to fetch modules:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingCourse ? 'PUT' : 'POST'
    const url = editingCourse ? `/api/admin/courses/${editingCourse.id}` : '/api/admin/courses'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setShowModal(false)
        setEditingCourse(null)
        resetForm()
        fetchCourses()
      } else {
        const data = await res.json()
        alert(data.error || '操作失败')
      }
    } catch (error) {
      alert('操作失败')
    }
  }

  const handleEdit = (course: Course) => {
    setEditingCourse(course)
    setFormData({
      title: course.title,
      description: course.description || '',
      type: course.type,
      duration: course.duration,
      order: course.order,
      moduleId: '',
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这门课程吗？')) return

    try {
      const res = await fetch(`/api/admin/courses/${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchCourses()
      }
    } catch (error) {
      alert('删除失败')
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', type: 'TEXT', duration: 0, order: 0, moduleId: '' })
  }

  const typeLabels: Record<string, string> = { TEXT: '文字', VIDEO: '视频', AUDIO: '音频', IMAGE: '图片' }
  const typeColors: Record<string, string> = { TEXT: '#3182CE', VIDEO: '#E53E3E', AUDIO: '#D69E2E', IMAGE: '#805AD5' }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>课程管理</h1>
          <p style={{ color: '#718096', marginTop: 4 }}>管理系统课程内容</p>
        </div>
        <button
          onClick={() => { resetForm(); setEditingCourse(null); setShowModal(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
        >
          <Plus size={18} /> 添加课程
        </button>
      </div>

      {/* Search */}
      <div style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
            <input
              type="text"
              placeholder="搜索课程名称..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              style={{ width: '100%', padding: '12px 12px 12px 44px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.875rem', outline: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Courses Table */}
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>课程</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>类型</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>所属模块</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>时长(分钟)</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>报名人数</th>
              <th style={{ padding: '16px 20px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>加载中...</td>
              </tr>
            ) : courses.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>暂无课程</td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, background: '#EDF2F7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Book size={20} style={{ color: '#4A5568' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: '#1A202C' }}>{course.title}</div>
                        {course.description && <div style={{ fontSize: '0.75rem', color: '#A0AEC0', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.description}</div>}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: 50,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      background: typeColors[course.type] + '20',
                      color: typeColors[course.type],
                    }}>
                      {typeLabels[course.type] || course.type}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{course.module?.name || '-'}</td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{course.duration}</td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{course._count?.enrollments || 0}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                      <button onClick={() => handleEdit(course)} style={{ padding: 8, background: '#EBF8FF', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#3182CE' }}>
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(course.id)} style={{ padding: 8, background: '#FFF5F5', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#E53E3E' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderTop: '1px solid #E2E8F0' }}>
            <span style={{ color: '#718096', fontSize: '0.875rem' }}>
              第 {page} 页，共 {totalPages} 页
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ padding: '8px 12px', background: 'white', border: '1px solid #E2E8F0', borderRadius: 8, cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.5 : 1 }}>
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ padding: '8px 12px', background: 'white', border: '1px solid #E2E8F0', borderRadius: 8, cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.5 : 1 }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, width: '100%', maxWidth: 500, maxHeight: '90vh', overflow: 'auto' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 24 }}>
              {editingCourse ? '编辑课程' : '添加课程'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程名称 *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程描述</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程类型</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                  >
                    <option value="TEXT">文字</option>
                    <option value="VIDEO">视频</option>
                    <option value="AUDIO">音频</option>
                    <option value="IMAGE">图片</option>
                  </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>时长(分钟)</label>
                  <input
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                    style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>排序</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="button" onClick={() => { setShowModal(false); setEditingCourse(null); resetForm(); }} style={{ flex: 1, padding: '14px', background: '#E2E8F0', color: '#4A5568', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}>
                  取消
                </button>
                <button type="submit" style={{ flex: 1, padding: '14px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}>
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}