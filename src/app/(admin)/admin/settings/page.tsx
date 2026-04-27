'use client'

import { useEffect, useState } from 'react'
import { Save, Image, FileText, Globe, Phone, Mail, Bell } from 'lucide-react'

interface SiteSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  address: string
  socialLinks: string
  bannerText: string
  footerText: string
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'HIGO商学院',
    siteDescription: 'HIGO商学院是在线学习管理系统，提供从产品消费者到事业经营者的完整成长路径。',
    contactEmail: 'support@higo.com',
    contactPhone: '400-888-8888',
    address: '',
    socialLinks: '',
    bannerText: '打造可复制、标准化、分层培训的HIGO全生命周期成长体系',
    footerText: '让每一位普通人都能在健康与财富之路上走得更远',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings')
      if (res.ok) {
        const data = await res.json()
        if (data.settings) {
          setSettings(data.settings)
        }
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      if (res.ok) {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      }
    } catch (error) {
      alert('保存失败')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 40, color: '#718096' }}>
        加载中...
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A202C' }}>网站设置</h1>
          <p style={{ color: '#718096', marginTop: 4 }}>管理系统基本信息和配置</p>
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: saving ? '#9AE6B4' : '#38A169', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', boxShadow: '0 4px 12px rgba(56, 161, 105, 0.3)' }}
        >
          <Save size={18} />
          {saving ? '保存中...' : saved ? '已保存!' : '保存设置'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Basic Info */}
        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, background: '#EBF8FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={20} style={{ color: '#3182CE' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: 600, color: '#1A202C' }}>基本信息</h3>
              <p style={{ fontSize: '0.75rem', color: '#718096' }}>网站名称、描述等</p>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>网站名称</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>网站描述</label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
              rows={3}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>首页标语</label>
            <input
              type="text"
              value={settings.bannerText}
              onChange={(e) => setSettings({ ...settings, bannerText: e.target.value })}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, background: '#F0FFF4', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={20} style={{ color: '#38A169' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: 600, color: '#1A202C' }}>联系方式</h3>
              <p style={{ fontSize: '0.75rem', color: '#718096' }}>客服电话、邮箱等</p>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>客服电话</label>
            <input
              type="text"
              value={settings.contactPhone}
              onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>客服邮箱</label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>公司地址</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, background: '#FAF5FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={20} style={{ color: '#805AD5' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: 600, color: '#1A202C' }}>页脚设置</h3>
              <p style={{ fontSize: '0.75rem', color: '#718096' }}>底部版权信息</p>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>页脚文字</label>
            <textarea
              value={settings.footerText}
              onChange={(e) => setSettings({ ...settings, footerText: e.target.value })}
              rows={3}
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }}
            />
          </div>
        </div>

        {/* Social Links */}
        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, background: '#FFFBEB', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={20} style={{ color: '#D69E2E' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: 600, color: '#1A202C' }}>社交媒体</h3>
              <p style={{ fontSize: '0.75rem', color: '#718096' }}>社交媒体链接</p>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#4A5568', marginBottom: 6 }}>社交链接 (JSON格式)</label>
            <textarea
              value={settings.socialLinks}
              onChange={(e) => setSettings({ ...settings, socialLinks: e.target.value })}
              rows={4}
              placeholder='{"wechat": "", "weibo": "", "douyin": ""}'
              style={{ width: '100%', padding: '12px 14px', border: '2px solid #E2E8F0', borderRadius: 10, fontSize: '0.875rem', outline: 'none', resize: 'vertical', fontFamily: 'monospace' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}