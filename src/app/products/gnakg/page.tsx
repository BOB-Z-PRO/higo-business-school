'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle, XCircle, PlayCircle, FileText, Download, Clock, Users, AlertTriangle } from 'lucide-react'

const product = {
  id: 'gnakg',
  name: 'GnAKG',
  fullName: 'GnAKG 基因激活胶囊',
  tagline: 'HIGO 基因抗衰产品体系的基础核心',
  icon: '🧬',
  color: '#805AD5',
  gradient: 'linear-gradient(135deg, #805AD5 0%, #B794F4 100%)',
}

const targetUsers = [
  { icon: '👤', text: '健康管理人群' },
  { icon: '⏰', text: '抗衰关注人群' },
  { icon: '⚡', text: '精力下降人群' },
  { icon: '🏋️', text: '代谢压力人群' },
  { icon: '🧠', text: '脑力工作者' },
  { icon: '💪', text: '体能下降人群' },
]

const scienceBackground = [
  { title: 'NAD+ 水平提升', desc: 'AKG可以提升体内NAD+水平，NAD+是细胞能量代谢的关键辅酶，随年龄增长而下降。' },
  { title: 'DNA 修复', desc: '支持SIRT1等长寿蛋白活性，促进DNA损伤修复，维持基因稳定性。' },
  { title: '线粒体功能', desc: '改善线粒体功能，提升细胞能量ATP产生，增强细胞活力。' },
  { title: 'α-酮戊二酸', desc: 'AKG是三羧酸循环的重要中间产物，为细胞提供持续能量支持。' },
]

const ingredients = [
  { name: 'α-酮戊二酸 (AKG)', source: '天然代谢物', function: '细胞能量代谢核心因子' },
  { name: '维生素C', source: '抗氧化剂', function: '保护AKG活性，增强吸收' },
  { name: '维生素B6', source: '辅酶因子', function: '促进氨基酸代谢' },
  { name: '锌', source: '矿物质', function: '支持DNA合成与修复' },
  { name: '镁', source: '矿物质', function: '参与300+酶促反应' },
]

const benefits = [
  { title: '充电年轻态', desc: '帮助恢复细胞活力，改善精力和体能状态' },
  { title: '提升能量', desc: '支持线粒体功能，增强日常能量水平' },
  { title: '抗氧化防护', desc: '中和自由基，减少氧化应激损伤' },
  { title: '代谢支持', desc: '促进糖、脂肪、蛋白质代谢平衡' },
]

const allowedExpressions = [
  '帮助提升细胞能量水平',
  '支持DNA损伤修复',
  '改善精力和体能',
  '延缓衰老进程（针对细胞层面）',
  '帮助维持身体年轻态',
  '体验反馈：精力改善、体力恢复',
]

const forbiddenExpressions = [
  '治疗疾病、宣称改善严重疾病',
  '承诺发色状态与身体指标快速改变',
  '延长寿命、延长端粒',
  '吃几天就有明显效果',
  '所有人都能达到同样效果',
  '替代药物治疗',
]

const scripts = {
  oneMinute: 'GnAKG是HIGO基因抗衰产品体系的基础核心。它含有α-酮戊二酸，是细胞能量代谢的关键因子。随着年龄增长，我们体内AKG水平下降，导致能量不足、精力下降。补充AKG可以帮助提升细胞能量，支持DNA修复，让身体恢复更好状态。',
  threeMinute: '很多人过了30岁，会明显感觉精力不如以前，体力恢复变慢。这不是你的问题，而是细胞层面的衰老在发生。细胞能量代谢需要一种叫NAD+的辅酶，而AKG正是提升NAD+水平的关键。GnAKG含有高纯度AKG，帮助你的细胞恢复年轻时的能量水平。支持DNA修复，提升线粒体功能，让身体从内到外展现活力。',
  tenMinute: `今天给大家介绍一款HIGO的明星产品——GnAKG基因激活胶囊。我们都知道衰老是不可逆的生理过程，但科学告诉我们，衰老的速度是可以干预的。\n\n细胞是人体最小的功能单位，细胞年轻，人就年轻。而细胞的年轻状态，取决于两个关键：能量代谢和基因稳定。\n\nGnAKG的核心成分α-酮戊二酸（AKG），是三羧酸循环的重要中间产物，也是合成NAD+的前体。NAD+被称为"长寿因子"，在DNA修复、能量代谢中发挥关键作用。但从30岁开始，人体内NAD+水平急剧下降，到60岁时只剩一半。\n\n补充GnAKG可以帮助：1）提升NAD+水平，支持SIRT1等长寿蛋白；2）促进线粒体功能，提升ATP能量产生；3）支持DNA损伤修复，维持基因稳定性。\n\n所以GnAKG不是让你返老还童，而是帮助你的细胞保持更年轻的工作状态。效果因人而异，建议坚持服用90天以上让细胞完成更新周期。`,
}

const complianceNote = 'GnAKG为基因抗衰食品，不是药物，不能宣传任何疾病治疗效果。案例分享必须注明"因人而异"，禁止承诺任何特定效果。'

export default function GnAKGPage() {
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

      <section style={{ background: product.gradient, color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回产品篇
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>{product.icon}</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{product.name}</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '8px' }}>{product.tagline}</p>
              <p style={{ fontSize: '1rem', opacity: 0.85 }}>{product.fullName}</p>
            </div>
          </div>
        </div>
      </section>

      {/* A. Product Positioning */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">A. 产品定位</span>
            <h2 className="section-title">一句话定位</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: product.color, lineHeight: 1.6 }}>
              {product.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* B. Target Users */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">B. 适用人群</span>
            <h2 className="section-title">谁适合使用</h2>
            <p className="section-desc">注意：避免疾病治疗承诺</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {targetUsers.map((user) => (
              <div key={user.text} style={{ background: 'white', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2rem' }}>{user.icon}</div>
                <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{user.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Science Background */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">C. 科学原理</span>
            <h2 className="section-title">科学背景</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '40px' }}>
            {scienceBackground.map((item) => (
              <div key={item.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: product.color, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. Ingredients */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">D. 配方成分</span>
            <h2 className="section-title">核心成分</h2>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dark)', fontWeight: 600 }}>成分名称</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dark)', fontWeight: 600 }}>来源</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dark)', fontWeight: 600 }}>作用</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ing) => (
                  <tr key={ing.name} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', color: 'var(--text-dark)', fontWeight: 500 }}>{ing.name}</td>
                    <td style={{ padding: '16px', color: 'var(--text-gray)' }}>{ing.source}</td>
                    <td style={{ padding: '16px', color: 'var(--text-gray)' }}>{ing.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* E. Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">E. 产品优势</span>
            <h2 className="section-title">核心功效</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {benefits.map((benefit) => (
              <div key={benefit.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ width: '56px', height: '56px', background: product.gradient, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Usage Guide */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">F. 使用方法</span>
            <h2 className="section-title">建议用法</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>推荐用法</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['每日2次，每次1-2粒', '建议空腹服用效果更佳', '配合大量饮水', '坚持服用90天以上'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-gray)' }}>
                    <CheckCircle size={16} color={product.color} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>注意事项</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['未成年人禁用', '孕妇、哺乳期妇女禁用', '对本品过敏者禁用', '服用其他药物请间隔2小时'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-gray)' }}>
                    <AlertTriangle size={16} color="#E53E3E" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* G. Official Materials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">G. 官方资料</span>
            <h2 className="section-title">产品资料</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {[
              { icon: FileText, title: '产品手册', desc: '完整产品介绍PDF' },
              { icon: PlayCircle, title: '产品视频', desc: '1分钟产品介绍' },
              { icon: FileText, title: 'PPT课件', desc: '产品讲解PPT' },
              { icon: FileText, title: '检测报告', desc: '第三方检测报告' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'white', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer' }}>
                <item.icon size={32} color={product.color} style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-gray)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H. Standard Scripts */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">H. 标准讲解</span>
            <h2 className="section-title">话术模板</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
            {[
              { duration: '1分钟', script: scripts.oneMinute, color: '#38A169' },
              { duration: '3分钟', script: scripts.threeMinute, color: '#3182CE' },
              { duration: '10分钟', script: scripts.tenMinute, color: '#805AD5' },
            ].map((item) => (
              <div key={item.duration} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ background: item.color, color: 'white', padding: '4px 16px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600 }}>
                    {item.duration}
                  </span>
                  <Clock size={16} color="var(--text-light)" />
                  <span style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>讲解时长</span>
                </div>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{item.script}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I. Compliance */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">I. 合规话术</span>
            <h2 className="section-title">表达规范</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: '#F0FFF4', borderRadius: '16px', padding: '24px', border: '1px solid #68D391' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CheckCircle size={20} color="#38A169" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#38A169', margin: 0 }}>可以这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {allowedExpressions.map((expr) => (
                  <div key={expr} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{expr}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FFF5F5', borderRadius: '16px', padding: '24px', border: '1px solid #FC8181' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <XCircle size={20} color="#E53E3E" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#E53E3E', margin: 0 }}>禁止这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {forbiddenExpressions.map((expr) => (
                  <div key={expr} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <XCircle size={16} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{expr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Reminder */}
      <section style={{ background: '#FFF5F5', padding: '24px 0' }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #E53E3E' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertTriangle size={20} color="#E53E3E" />
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>合规提醒</span>
            </div>
            <p style={{ color: 'var(--text-gray)', marginTop: '12px', lineHeight: 1.7, marginBottom: 0 }}>
              {complianceNote}
            </p>
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
