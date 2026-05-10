'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, FlaskConical, Dna, HeartPulse, Brain, ChevronRight } from 'lucide-react'

const scienceTopics = [
  { icon: '🧬', title: '基因抗衰', desc: '通过修复受损DNA，激活细胞活力，延缓衰老进程', color: '#805AD5' },
  { icon: '⚡', title: 'NAD+水平', desc: 'NAD+是细胞能量代谢的关键辅酶，随年龄下降导致衰老', color: '#38A169' },
  { icon: '🔬', title: 'Sirtuins激活', desc: 'AKG激活长寿蛋白Sirtuins，促进细胞修复和代谢', color: '#3182CE' },
  { icon: '🛡', title: '端粒保护', desc: '保护端粒长度，延缓细胞分裂次数达到抗衰老', color: '#D69E2E' },
  { icon: '🔥', title: '线粒体功能', desc: '增强线粒体能量生产，提升细胞活力和代谢水平', color: '#E53E3E' },
  { icon: '🦠', title: '自噬作用', desc: '清除受损细胞和蛋白质，重建健康细胞环境', color: '#1A365D' },
]

const technologyFlow = [
  { step: '01', title: 'DNA损伤检测', desc: '精准评估细胞DNA损伤程度' },
  { step: '02', title: 'AKG补充', desc: '补充α-酮戊二酸，激活细胞活力' },
  { step: '03', title: 'Sirtuins激活', desc: '激活长寿蛋白，修复细胞损伤' },
  { step: '04', title: '端粒延长', desc: '保护并延长端粒，延缓细胞衰老' },
  { step: '05', title: '能量提升', desc: '增强线粒体功能，提升整体能量' },
]

export default function ProductSciencePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">H</div>
            <div>
              <div className="logo-text">HIGO全球商学院</div>
              <div className="logo-sub">HIGO Global Business School</div>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/company" className="nav-link">公司篇</Link>
            <Link href="/products" className="nav-link active">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', color: 'white', padding: '60px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} /> 返回产品篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '20px' }}>
            <div style={{ fontSize: '3.5rem' }}>🔬</div>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>科研背景</h1>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>基因抗衰科技的科学原理与技术支撑</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Topics */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Science</span>
            <h2 className="section-title">核心科学原理</h2>
          </div>
          <div className="mobile-card-grid-2" style={{ marginTop: '24px' }}>
            {scienceTopics.map((topic) => (
              <div key={topic.title} className="mobile-card">
                <div className="mobile-card-header" style={{ background: topic.color }}>
                  <span style={{ fontSize: '1.25rem' }}>{topic.icon}</span>
                  <span>{topic.title}</span>
                </div>
                <div className="mobile-card-body">
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, fontSize: '0.9375rem' }}>{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Flow */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Process</span>
            <h2 className="section-title">技术流程</h2>
          </div>
          <div className="mobile-card-stack" style={{ marginTop: '24px' }}>
            {technologyFlow.map((item, index) => (
              <div key={item.step} className="mobile-card">
                <div className="mobile-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0 }}>
                      {item.step}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{item.desc}</p>
                    </div>
                    {index < technologyFlow.length - 1 && (
                      <ChevronRight size={20} color="var(--text-light)" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Research */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Research</span>
            <h2 className="section-title">临床研究数据</h2>
          </div>
          <div className="mobile-card" style={{ marginTop: '24px' }}>
            <div className="mobile-card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)', borderRadius: '12px', color: 'white' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>8.5岁</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>平均逆龄效果</div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, #38A169 0%, #68D391 100%)', borderRadius: '12px', color: 'white' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>34岁</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>最大逆龄效果</div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, #3182CE 0%, #63B3ED 100%)', borderRadius: '12px', color: 'white' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>180天</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>人体试验周期</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, fontSize: '0.875rem', textAlign: 'center' }}>
                以上数据基于HIGO与美国顶级科研机构合作的人体试验结果，实际效果因人而异。
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div>© 2026 HIGO全球商学院. All rights reserved.</div>
            <div>HIGO全球生物科技集团 · 培训中心</div>
          </div>
        </div>
      </footer>
    </div>
  )
}