'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Users, Search, Plus, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: string
  higoUsername: string | null
  memberId: string | null
  createdAt: string
}

export default function AdminUsersPage() {
  const searchParams = useSearchParams()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [showModal, setShowModal] = useState(searchParams.get('action') === 'add')
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER',
    higoUsername: '',
    memberId: '',
  })

  const pageSize = 10

  useEffect(() => {
    fetchUsers()
  }, [page, search])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/users?page=${page}&pageSize=${pageSize}&search=${search}`)
      if (res.ok) {
        const data = await res.json()
        setUsers(data.users)
        setTotalPages(data.totalPages)
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingUser ? 'PUT' : 'POST'
    const url = editingUser ? `/api/admin/users/${editingUser.id}` : '/api/admin/users'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setShowModal(false)
        setEditingUser(null)
        resetForm()
        fetchUsers()
      } else {
        const data = await res.json()
        alert(data.error || '操作失败')
      }
    } catch (error) {
      alert('操作失败')
    }
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      password: '',
      role: user.role,
      higoUsername: user.higoUsername || '',
      memberId: user.memberId || '',
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个用户吗？')) return

    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchUsers()
      }
    } catch (error) {
      alert('删除失败')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', password: '', role: 'USER', higoUsername: '', memberId: '' })
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>用户管理</h1>
          <p style={{ color: '#718096', marginTop: 4 }}>管理系统用户账号</p>
        </div>
        <button
          onClick={() => { resetForm(); setEditingUser(null); setShowModal(true); }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
        >
          <Plus size={18} /> 添加用户
        </button>
      </div>

      {/* Search */}
      <div style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
            <input
              type="text"
              placeholder="搜索用户名、邮箱..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              style={{ width: '100%', padding: '12px 12px 12px 44px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.875rem', outline: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>用户</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>邮箱</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>HIGO信息</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>角色</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>注册时间</th>
              <th style={{ padding: '16px 20px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>加载中...</td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>暂无用户</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, background: '#EDF2F7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#4A5568' }}>
                        {user.name.charAt(0)}
                      </div>
                      <span style={{ fontWeight: 500, color: '#1A202C' }}>{user.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>{user.email}</td>
                  <td style={{ padding: '16px 20px', color: '#4A5568' }}>
                    {user.higoUsername || '-'}
                    {user.memberId && <span style={{ color: '#A0AEC0', marginLeft: 8 }}>ID: {user.memberId}</span>}
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: 50,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      background: user.role === 'ADMIN' ? '#FED7D7' : '#C6F6D5',
                      color: user.role === 'ADMIN' ? '#C53030' : '#276749',
                    }}>
                      {user.role === 'ADMIN' ? '管理员' : '用户'}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#718096', fontSize: '0.875rem' }}>
                    {new Date(user.createdAt).toLocaleDateString('zh-CN')}
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                      <button onClick={() => handleEdit(user)} style={{ padding: 8, background: '#EBF8FF', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#3182CE' }}>
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(user.id)} style={{ padding: 8, background: '#FFF5F5', border: 'none', borderRadius: 8, cursor: 'pointer', color: '#E53E3E' }}>
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
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{ padding: '8px 12px', background: 'white', border: '1px solid #E2E8F0', borderRadius: 8, cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.5 : 1 }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{ padding: '8px 12px', background: 'white', border: '1px solid #E2E8F0', borderRadius: 8, cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.5 : 1 }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, width: '100%', maxWidth: 480, maxHeight: '90vh', overflow: 'auto' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 24 }}>
              {editingUser ? '编辑用户' : '添加用户'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>姓名 *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>邮箱 *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>
                  密码 {editingUser ? '(不填则保持不变)' : '*'}
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={!editingUser}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>角色</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                >
                  <option value="USER">普通用户</option>
                  <option value="ADMIN">管理员</option>
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>HIGO用户名</label>
                <input
                  type="text"
                  value={formData.higoUsername}
                  onChange={(e) => setFormData({ ...formData, higoUsername: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>会员ID</label>
                <input
                  type="text"
                  value={formData.memberId}
                  onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingUser(null); resetForm(); }}
                  style={{ flex: 1, padding: '14px', background: '#E2E8F0', color: '#4A5568', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
                >
                  取消
                </button>
                <button
                  type="submit"
                  style={{ flex: 1, padding: '14px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
                >
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