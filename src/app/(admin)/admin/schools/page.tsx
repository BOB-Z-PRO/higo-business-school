'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, Plus, Edit, Trash2 } from 'lucide-react'

interface School {
  id: string
  name: string
  description: string | null
  icon: string | null
  color: string | null
  order: number
  _count: { chapters: number }
}

export default function AdminSchoolsPage() {
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingSchool, setEditingSchool] = useState<School | null>(null)
  const [formData, setFormData] = useState({ name: '', description: '', icon: '', color: '', order: 0 })

  useEffect(() => {
    fetchSchools()
  }, [])

  const fetchSchools = async () => {
    try {
      const res = await fetch('/api/admin/schools')
      if (res.ok) {
        const data = await res.json()
        setSchools(data.schools)
      }
    } catch (error) {
      console.error('Failed to fetch schools:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingSchool ? 'PUT' : 'POST'
    const url = editingSchool ? `/api/admin/schools/${editingSchool.id}` : '/api/admin/schools'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setShowModal(false)
        setEditingSchool(null)
        resetForm()
        fetchSchools()
      }
    } catch (error) {
      alert('操作失败')
    }
  }

  const handleEdit = (school: School) => {
    setEditingSchool(school)
    setFormData({
      name: school.name,
      description: school.description || '',
      icon: school.icon || '',
      color: school.color || '',
      order: school.order,
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个学院吗？')) return
    try {
      await fetch(`/api/admin/schools/${id}`, { method: 'DELETE' })
      fetchSchools()
    } catch (error) {
      alert('删除失败')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', description: '', icon: '', color: '', order: 0 })
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>学院管理</h1>
          <p style={{ color: '#718096', marginTop: 4 }}>管理系统学院</p>
        </div>
        <button
          onClick={() => { resetForm(); setEditingSchool(null); setShowModal(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
        >
          <Plus size={18} /> 添加学院
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {loading ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 40, color: '#718096' }}>加载中...</div>
        ) : schools.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 40, color: '#718096' }}>暂无学院</div>
        ) : (
          schools.map((school) => (
            <div key={school.id} style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, background: school.color || '#3182CE', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  {school.icon || '🎓'}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A202C' }}>{school.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#718096', marginTop: 4 }}>{school._count.chapters} 个篇章</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={() => handleEdit(school)} style={{ padding: 8, background: '#EBF8FF', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#3182CE' }}>
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDelete(school.id)} style={{ padding: 8, background: '#FFF5F5', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#E53E3E' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              {school.description && <p style={{ marginTop: 12, fontSize: '0.875rem', color: '#718096' }}>{school.description}</p>}
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, width: '100%', maxWidth: 480 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 24 }}>
              {editingSchool ? '编辑学院' : '添加学院'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>学院名称 *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>描述</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>图标(Emoji)</label>
                  <input type="text" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="🎓" style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>颜色</label>
                  <input type="text" value={formData.color} onChange={(e) => setFormData({ ...formData, color: e.target.value })} placeholder="#3182CE" style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }} />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>排序</label>
                <input type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })} style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="button" onClick={() => { setShowModal(false); setEditingSchool(null); resetForm(); }} style={{ flex: 1, padding: '14px', background: '#E2E8F0', color: '#4A5568', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}>取消</button>
                <button type="submit" style={{ flex: 1, padding: '14px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}>保存</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}