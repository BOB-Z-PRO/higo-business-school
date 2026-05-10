'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Book, Search, Plus, Edit, Trash2, ChevronLeft, ChevronRight, Save, X, Upload, FileText, Video, Music, Image, Presentation } from 'lucide-react'

interface School {
  id: string
  name: string
  chapters: Chapter[]
}

interface Chapter {
  id: string
  name: string
  modules: Module[]
}

interface Module {
  id: string
  name: string
}

interface Course {
  id: string
  title: string
  description: string | null
  content: string | null
  type: string
  duration: number
  order: number
  module: { id: string; name: string; chapter: { id: string; name: string; school: { id: string; name: string } } }
  _count: { enrollments: number }
}

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  answer: number
}

export default function AdminCoursesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [showModal, setShowModal] = useState(searchParams.get('action') === 'add')
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [schools, setSchools] = useState<School[]>([])

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    type: 'TEXT',
    duration: 30,
    order: 0,
    schoolId: '',
    chapterId: '',
    moduleId: '',
    videoUrl: '',
    audioUrl: '',
    pptUrl: '',
  })

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([
    { id: '1', question: '', options: ['', '', '', ''], answer: 0 }
  ])

  const pageSize = 10

  useEffect(() => {
    fetchCourses()
    fetchSchools()
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

  const fetchSchools = async () => {
    try {
      const res = await fetch('/api/admin/schools?includeChapters=true')
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

    const payload = {
      ...formData,
      content: formData.content + '\n\n## 课后考核\n' + quizQuestions.map((q, i) =>
        `${i + 1}. ${q.question}\n${q.options.map((o, oi) => `${String.fromCharCode(65 + oi)}. ${o}`).join('\n')}`
      ).join('\n\n')
    }

    const method = editingCourse ? 'PUT' : 'POST'
    const url = editingCourse ? `/api/admin/courses/${editingCourse.id}` : '/api/admin/courses'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
      content: course.content || '',
      type: course.type,
      duration: course.duration,
      order: course.order,
      schoolId: course.module?.chapter?.school?.id || '',
      chapterId: course.module?.chapter?.id || '',
      moduleId: course.module?.id || '',
      videoUrl: '',
      audioUrl: '',
      pptUrl: '',
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这门课程吗？')) return
    try {
      const res = await fetch(`/api/admin/courses/${id}`, { method: 'DELETE' })
      if (res.ok) fetchCourses()
    } catch (error) {
      alert('删除失败')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '', description: '', content: '', type: 'TEXT',
      duration: 30, order: 0, schoolId: '', chapterId: '', moduleId: '',
      videoUrl: '', audioUrl: '', pptUrl: ''
    })
    setQuizQuestions([{ id: '1', question: '', options: ['', '', '', ''], answer: 0 }])
  }

  const getChaptersForSchool = (schoolId: string) => {
    const school = schools.find(s => s.id === schoolId)
    return school?.chapters || []
  }

  const getModulesForChapter = (chapterId: string) => {
    for (const school of schools) {
      const chapter = school.chapters.find(c => c.id === chapterId)
      if (chapter) return chapter.modules
    }
    return []
  }

  const handleQuizQuestionChange = (qId: string, field: string, value: any) => {
    setQuizQuestions(prev => prev.map(q =>
      q.id === qId ? { ...q, [field]: value } : q
    ))
  }

  const handleQuizOptionChange = (qId: string, optIdx: number, value: string) => {
    setQuizQuestions(prev => prev.map(q =>
      q.id === qId ? {
        ...q,
        options: q.options.map((o, i) => i === optIdx ? value : o)
      } : q
    ))
  }

  const addQuizQuestion = () => {
    setQuizQuestions(prev => [...prev, {
      id: String(prev.length + 1),
      question: '',
      options: ['', '', '', ''],
      answer: 0
    }])
  }

  const removeQuizQuestion = (qId: string) => {
    setQuizQuestions(prev => prev.filter(q => q.id !== qId))
  }

  const typeLabels: Record<string, string> = { TEXT: '文字', VIDEO: '视频', AUDIO: '音频', IMAGE: '图文' }
  const typeColors: Record<string, string> = { TEXT: '#3182CE', VIDEO: '#E53E3E', AUDIO: '#D69E2E', IMAGE: '#805AD5' }
  const typeIcons: Record<string, React.ElementType> = { TEXT: FileText, VIDEO: Video, AUDIO: Music, IMAGE: Image }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>课程管理</h1>
          <p style={{ color: '#718096', marginTop: 4 }}>管理系统课程内容，支持多媒体和考核题目</p>
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
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>学院/篇章/模块</th>
              <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>时长</th>
              <th style={{ padding: '16px 20px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>加载中...</td></tr>
            ) : courses.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: 40, textAlign: 'center', color: '#718096' }}>暂无课程</td></tr>
            ) : (
              courses.map((course) => {
                const TypeIcon = typeIcons[course.type] || FileText
                return (
                  <tr key={course.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 40, height: 40, background: '#EDF2F7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <TypeIcon size={20} style={{ color: '#4A5568' }} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 500, color: '#1A202C' }}>{course.title}</div>
                          <div style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{course.id}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <span style={{ padding: '4px 10px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 500, background: typeColors[course.type] + '20', color: typeColors[course.type] }}>
                        {typeLabels[course.type] || course.type}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ fontSize: '0.875rem', color: '#4A5568' }}>
                        <div>{course.module?.chapter?.school?.name || '-'}</div>
                        <div style={{ color: '#A0AEC0' }}>{course.module?.chapter?.name || '-'} / {course.module?.name || '-'}</div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', color: '#4A5568' }}>{course.duration}分钟</td>
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
                )
              })
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderTop: '1px solid #E2E8F0' }}>
            <span style={{ color: '#718096', fontSize: '0.875rem' }}>第 {page} 页，共 {totalPages} 页</span>
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

      {/* CMS Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 1000, padding: '20px', overflow: 'auto' }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, width: '100%', maxWidth: 900 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                {editingCourse ? '编辑课程' : '添加课程'} - CMS编辑器
              </h2>
              <button onClick={() => { setShowModal(false); setEditingCourse(null); resetForm(); }} style={{ padding: 8, background: '#EDF2F7', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Info Section */}
              <div style={{ background: '#F7FAFC', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 16, color: '#1A202C' }}>基本信息</h3>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程ID</label>
                  <input
                    type="text"
                    value={editingCourse?.id || '自动生成'}
                    disabled
                    style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', background: '#E2E8F0' }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程名称 *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="例如：HIGO是什么 — 一页纸说清楚"
                    style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程描述</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                    placeholder="简短描述课程内容..."
                    style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>所属学院 *</label>
                    <select
                      value={formData.schoolId}
                      onChange={(e) => { setFormData({ ...formData, schoolId: e.target.value, chapterId: '', moduleId: '' }); }}
                      required
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                    >
                      <option value="">选择学院</option>
                      {schools.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>所属篇章 *</label>
                    <select
                      value={formData.chapterId}
                      onChange={(e) => { setFormData({ ...formData, chapterId: e.target.value, moduleId: '' }); }}
                      required
                      disabled={!formData.schoolId}
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', opacity: !formData.schoolId ? 0.5 : 1 }}
                    >
                      <option value="">选择篇章</option>
                      {getChaptersForSchool(formData.schoolId).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>所属模块 *</label>
                    <select
                      value={formData.moduleId}
                      onChange={(e) => setFormData({ ...formData, moduleId: e.target.value })}
                      required
                      disabled={!formData.chapterId}
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', opacity: !formData.chapterId ? 0.5 : 1 }}
                    >
                      <option value="">选择模块</option>
                      {getModulesForChapter(formData.chapterId).map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Content Type Section */}
              <div style={{ background: '#F7FAFC', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 16, color: '#1A202C' }}>内容类型</h3>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  {[
                    { value: 'TEXT', label: '文字图文', icon: FileText, color: '#3182CE' },
                    { value: 'VIDEO', label: '视频课程', icon: Video, color: '#E53E3E' },
                    { value: 'AUDIO', label: '音频课程', icon: Music, color: '#D69E2E' },
                    { value: 'IMAGE', label: '图片PPT', icon: Presentation, color: '#805AD5' },
                  ].map(type => {
                    const Icon = type.icon
                    return (
                      <label
                        key={type.value}
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 8,
                          padding: '16px 12px',
                          border: `2px solid ${formData.type === type.value ? type.color : '#E2E8F0'}`,
                          borderRadius: 10,
                          cursor: 'pointer',
                          background: formData.type === type.value ? type.color + '10' : 'white',
                          transition: 'all 0.2s'
                        }}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={formData.type === type.value}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          style={{ display: 'none' }}
                        />
                        <Icon size={24} style={{ color: type.color }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#4A5568' }}>{type.label}</span>
                      </label>
                    )
                  })}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>课程时长(分钟)</label>
                    <input
                      type="number"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>排序</label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                    />
                  </div>
                </div>

                {/* Media URLs */}
                {(formData.type === 'VIDEO' || formData.type === 'AUDIO') && (
                  <div style={{ marginTop: 16 }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>
                      {formData.type === 'VIDEO' ? '视频' : '音频'}URL
                    </label>
                    <input
                      type="url"
                      value={formData.type === 'VIDEO' ? formData.videoUrl : formData.audioUrl}
                      onChange={(e) => setFormData(formData.type === 'VIDEO'
                        ? { ...formData, videoUrl: e.target.value }
                        : { ...formData, audioUrl: e.target.value }
                      )}
                      placeholder={`请输入${formData.type === 'VIDEO' ? '视频' : '音频'}链接`}
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                    />
                  </div>
                )}

                {formData.type === 'IMAGE' && (
                  <div style={{ marginTop: 16 }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>PPT/PDF URL</label>
                    <input
                      type="url"
                      value={formData.pptUrl}
                      onChange={(e) => setFormData({ ...formData, pptUrl: e.target.value })}
                      placeholder="请输入PPT或PDF链接"
                      style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
                    />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div style={{ background: '#F7FAFC', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 16, color: '#1A202C' }}>课程内容 (Markdown格式)</h3>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={15}
                  placeholder={`# 课程标题

## 一、章节标题

这里是课程内容，支持Markdown格式...

### 支持的格式：
- **粗体**、*斜体*
- 表格
- 列表
- > 引用
- [链接](url)`}
                  style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.875rem', outline: 'none', resize: 'vertical', fontFamily: 'monospace' }}
                />
              </div>

              {/* Quiz Section */}
              <div style={{ background: '#F7FAFC', borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1A202C' }}>课后考核题目</h3>
                  <button
                    type="button"
                    onClick={addQuizQuestion}
                    style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px', background: '#3182CE', color: 'white', border: 'none', borderRadius: 8, fontSize: '0.875rem', cursor: 'pointer' }}
                  >
                    <Plus size={14} /> 添加题目
                  </button>
                </div>

                {quizQuestions.map((q, qIdx) => (
                  <div key={q.id} style={{ background: 'white', borderRadius: 10, padding: 16, marginBottom: 12, border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <span style={{ fontWeight: 600, color: '#1A202C' }}>题目 {qIdx + 1}</span>
                      {quizQuestions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeQuizQuestion(q.id)}
                          style={{ padding: 4, background: '#FFF5F5', border: 'none', borderRadius: 4, cursor: 'pointer', color: '#E53E3E' }}
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={q.question}
                      onChange={(e) => handleQuizQuestionChange(q.id, 'question', e.target.value)}
                      placeholder="请输入题目内容"
                      style={{ width: '100%', padding: '10px 12px', border: '2px solid #E2E8F0', borderRadius: 8, fontSize: '0.875rem', outline: 'none', marginBottom: 12 }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <input
                            type="radio"
                            name={`answer-${q.id}`}
                            checked={q.answer === optIdx}
                            onChange={() => handleQuizQuestionChange(q.id, 'answer', optIdx)}
                            style={{ width: 18, height: 18 }}
                          />
                          <input
                            type="text"
                            value={opt}
                            onChange={(e) => handleQuizOptionChange(q.id, optIdx, e.target.value)}
                            placeholder={`选项${String.fromCharCode(65 + optIdx)}`}
                            style={{ flex: 1, padding: '8px 10px', border: '2px solid #E2E8F0', borderRadius: 6, fontSize: '0.8125rem', outline: 'none' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingCourse(null); resetForm(); }}
                  style={{ flex: 1, padding: '14px', background: '#E2E8F0', color: '#4A5568', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer' }}
                >
                  取消
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, padding: '14px', background: '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <Save size={18} /> 保存课程
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}