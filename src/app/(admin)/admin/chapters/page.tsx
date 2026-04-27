'use client'

import { useEffect, useState } from 'react'
import { LayerGroup, Plus, Edit, Trash2 } from 'lucide-react'

interface Chapter {
  id: string
  name: string
  description: string | null
  order: number
  school: { name: string }
  _count: { modules: number }
}

interface School {
  id: string
  name: string
}

export default function AdminChaptersPage() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null)
  const [formData, setFormData] = useState({ name: '', description: '', order: 0, schoolId: '' })

  useEffect(() => {
    fetchChapters()
    fetchSchools()
  }, [])

  const fetchChapters = async () => {
    try {
      const res = await fetch('/api/admin/chapters')
      if (res.ok) {
        const data = await res.json()
        setChapters(data.chapters)
      }
    } catch (error) {
      console.error('Failed to fetch chapters:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchSchools = async () => {
    try {
      const res = await fetch('/api/admin/schools')
      if (res.ok) {
        const data = await res.json()
        setSchools(data.schools)
      }
    } catch (error) {
      console.error('Failed to fetch schools:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingChapter ? 'PUT' : 'POST'
    const url = editingChapter ? `/api/admin/chapters/${editingChapter.id}` : '/api/admin/chapters'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setShowModal(false)
        setEditingChapter(null)
        resetForm()
        fetchChapters()
      }
    } catch (error) {
      alert('操作失败')
    }
  }

  const handleEdit = (chapter: Chapter) => {
    setEditingChapter(chapter)
    setFormData({
      name: chapter.name,
      description: chapter.description || '',
      order: chapter.order,
      schoolId: '',
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个篇章吗？')) return
    try {
      await fetch(`/api/admin/chapters/${id}`, { method: 'DELETE' })
      fetchChapters()
    } catch (error) {
      alert('删除失败')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', description: '', order: 0, schoolId: '' })
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>篇章管理</h1>
          <p style={{ color: '#718096', marginTop: 4 }}>管理系统篇章</p>
        </div>
        <button
          onClick={() => { resetForm(); setEditingChapter(null); setShowModal(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
        >
          <Plus size={18} /> 添加篇章
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>篇章</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>所属学院</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>模块数</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>排序</th>
              <th style={{ padding: '16px 20px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>加载中...</td></tr>
            ) : chapters.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>暂无篇章</td></tr>
            ) : (
              chapters.map((chapter) => (
                <tr key={chapter.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, background: '#EDF2F7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LayerGroup size={20} style={{ color: '#4A5568' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: '#1A202C' }}>{chapter.name}</div>
                        {chapter.description && <div style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{chapter.description}</div>}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{chapter.school?.name || '-'}</td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{chapter._count.modules}</td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{chapter.order}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                      <button onClick={() => handleEdit(chapter)} style={{ padding: 8, background: '#EBF8FF', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#3182CE' }}>
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(chapter.id)} style={{ padding: 8, background: '#FFF5F5', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#E53E3E' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, width: '100%', maxWidth: 480 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 24 }}>
              {editingChapter ? '编辑篇章' : '添加篇章'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>篇章名称 *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>所属学院 *</label>
                <select value={formData.schoolId} onChange={(e) => setFormData({ ...formData, schoolId: e.target.value })} required style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}>
                  <option value="">请选择学院</option>
                  {schools.map((school) => (
                    <option key={school.id} value={school.id}>{school.name}</option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>描述</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>排序</label>
                <input type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })} style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="button" onClick={() => { setShowModal(false); setEditingChapter(null); resetForm(); }} style={{ flex: 1, padding: '14px', background: '#E2E8F0', color: '#4A5568', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}>取消</button>
                <button type="submit" style={{ flex: 1, padding: '14px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}>保存</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}