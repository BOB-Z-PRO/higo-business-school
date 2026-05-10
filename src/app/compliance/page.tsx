'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, FileText, Scale } from 'lucide-react'

const companyRules = [
  { title: '经营者基本守则', icon: '📋', desc: '遵守国家法律法规，遵守公司制度，诚实守信' },
  { title: '诚信经营原则', icon: '🤝', desc: '真实宣传，不夸大效果，不虚假承诺' },
  { title: '客户沟通原则', icon: '💬', desc: '尊重客户知情权，如实介绍产品功效' },
  { title: '团队管理原则', icon: '👥', desc: '正确引导团队成员，杜绝违规宣传' },
]

const fiveBans = [
  { id: 1, title: '禁止夸大产品效果', desc: '不得声称产品能改善疾病或承诺特定效果，所有体验均因人而异' },
  { id: 2, title: '禁止虚假宣传', desc: '不得伪造资质、案例、数据，一经发现取消经营权' },
  { id: 3, title: '禁止疾病治疗承诺', desc: '产品为食品保健品，不能宣传任何疾病治疗效果' },
  { id: 4, title: '禁止收益承诺', desc: '绝对禁止承诺任何收益，禁止暗示收益确定' },
  { id: 5, title: '禁止伪造滥用认证与案例', desc: '案例必须真实，不得改编夸大，所有案例要注明"因人而异"' },
]

const productGuidelines = [
  { allowed: '说明产品成分和原理', allowedIcon: CheckCircle },
  { allowed: '分享真实使用感受和体验', allowedIcon: CheckCircle },
  { allowed: '展示检测报告作为参考（注明因人而异）', allowedIcon: CheckCircle },
  { allowed: '说明产品为基因抗衰食品', allowedIcon: CheckCircle },
  { forbidden: '声称产品能治疗疾病', forbiddenIcon: XCircle },
  { forbidden: '承诺吃了产品就会达到某种效果', forbiddenIcon: XCircle },
  { forbidden: '用检测数据为效果做承诺', forbiddenIcon: XCircle },
  { forbidden: '夸大案例或伪造见证', forbiddenIcon: XCircle },
]

const incomeGuidelines = [
  { allowed: '说明奖金制度的计算方式', allowedIcon: CheckCircle },
  { allowed: '分享真实收入经历（注明因人而异）', allowedIcon: CheckCircle },
  { allowed: '说明事业需要努力和时间的投入', allowedIcon: CheckCircle },
  { allowed: '强调收入取决于个人努力和团队建设', allowedIcon: CheckCircle },
  { forbidden: '承诺每月能赚多少钱', forbiddenIcon: XCircle },
  { forbidden: '暗示人人加入都能月入过万', forbiddenIcon: XCircle },
  { forbidden: '用金字塔结构的高层收入做演示', forbiddenIcon: XCircle },
  { forbidden: '声称零风险高回报', forbiddenIcon: XCircle },
]

const caseGuidelines = [
  { allowed: '使用真实案例，注明姓名或昵称', allowedIcon: CheckCircle },
  { allowed: '分享时注明"因人而异"', allowedIcon: CheckCircle },
  { allowed: '展示检测报告作为参考（注明因人而异）', allowedIcon: CheckCircle },
  { allowed: '分享产品给自己带来的改变', allowedIcon: CheckCircle },
  { forbidden: '夸大效果或无中生有', forbiddenIcon: XCircle },
  { forbidden: '用别人案例说自己吃了同样效果', forbiddenIcon: XCircle },
  { forbidden: '用案例图片做效果承诺', forbiddenIcon: XCircle },
  { forbidden: '在案例中暗示产品能治病', forbiddenIcon: XCircle },
]

const complianceQA = [
  { q: '可以说“吃了 AKG 后发色状态改善”吗？', a: '可以分享自己的真实体验，但必须注明“因人而异”，也不能暗示别人使用后一定会有相同变化。' },
  { q: '可以用别人的检测报告推荐产品吗？', a: '可以展示检测报告作为参考，说明"这位家人的检测结果显示...（因人而异）"，但不能用别人的报告为产品效果做承诺。' },
  { q: '可以晒收入截图吗？', a: '可以分享真实收入（注明因人而异），但不能承诺收益，不能暗示"你也可以月入X万"。' },
  { q: '别人问能不能治好XX病怎么回答？', a: '绝对不能承诺治疗效果。可以说"产品是基因抗衰食品，帮助细胞提升活力，建议先了解体验"。建议邀请参加产品专场会了解。' },
  { q: '可以用“富婆”或“逆龄”这类词形容自己吗？', a: '“富婆”这类词属于夸大宣传，不建议使用。关于状态变化，建议统一使用“年轻态管理”或“状态改善”这类更稳妥的表达，并注明因人而异。' },
  { q: '早会内容可以转发到朋友圈吗？', a: '可以转发公司统一提供的早会内容，但禁止添加任何收益承诺或疾病治疗描述。转发前请检查是否有“必然”“一定”等绝对化用语。' },
  { q: '可以在群里发红包奖励业绩吗？', a: '可以有小额奖励行为，但禁止以"承诺明确收益"、"稳赚"等名义发红包。红包奖励应是庆祝小胜利，而非承诺收益。' },
  { q: '新人刚加入要建群讲课吗？', a: '新人应先完成N-01~N-10课程学习再建群，且内容必须使用公司统一提供的课件，不建议自己随意发挥讲内容。' },
]

export default function CompliancePage() {
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
            <Link href="/products" className="nav-link">产品篇</Link>
            <Link href="/business" className="nav-link">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link active">合规中心</Link>
          </nav>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={16} /> 返回首页
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>⚖️</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>合规中心</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                合规是HIGO事业的底线。每一位经营者都必须学习并遵守合规规范。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Rules */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '6px' }}>新增风控工具</div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-dark)' }}>合规表达替换库</h2>
            </div>
            <Link href="/compliance/phrasebook" className="btn btn-primary">
              进入替换库
            </Link>
          </div>

          <div className="section-header">
            <span className="section-badge">Rules</span>
            <h2 className="section-title">公司守则</h2>
            <p className="section-desc">经营者四大基本守则</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
            {companyRules.map((rule) => (
              <div key={rule.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{rule.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{rule.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Bans */}
      <section className="section" style={{ background: '#FFF5F5' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: '#E53E3E' }}>Critical</span>
            <h2 className="section-title">五大禁忌</h2>
            <p className="section-desc">触碰任一红线，直接取消经营权</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginTop: '40px' }}>
            {fiveBans.map((ban) => (
              <div key={ban.id} style={{ background: 'white', borderRadius: '12px', padding: '20px', borderTop: '4px solid #E53E3E', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '32px', height: '32px', background: '#E53E3E', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', marginBottom: '12px' }}>
                  {ban.id}
                </div>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{ban.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.6 }}>{ban.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Guidelines */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Product</span>
            <h2 className="section-title">产品表达规范</h2>
            <p className="section-desc">什么可以说，什么不能说</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: '#F0FFF4', borderRadius: '16px', padding: '24px', border: '1px solid #68D391' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CheckCircle size={20} color="#38A169" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#38A169', margin: 0 }}>可以这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {productGuidelines.filter(g => g.allowed).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.allowed}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FFF5F5', borderRadius: '16px', padding: '24px', border: '1px solid #FC8181' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <XCircle size={20} color="#E53E3E" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#E53E3E', margin: 0 }}>不可以这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {productGuidelines.filter(g => g.forbidden).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <XCircle size={16} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.forbidden}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Guidelines */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Income</span>
            <h2 className="section-title">收益表达规范</h2>
            <p className="section-desc">谈收入时的正确姿势</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: '#F0FFF4', borderRadius: '16px', padding: '24px', border: '1px solid #68D391' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CheckCircle size={20} color="#38A169" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#38A169', margin: 0 }}>可以这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {incomeGuidelines.filter(g => g.allowed).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.allowed}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FFF5F5', borderRadius: '16px', padding: '24px', border: '1px solid #FC8181' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <XCircle size={20} color="#E53E3E" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#E53E3E', margin: 0 }}>不可以这样说</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {incomeGuidelines.filter(g => g.forbidden).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <XCircle size={16} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.forbidden}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Guidelines */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Cases</span>
            <h2 className="section-title">案例使用规范</h2>
            <p className="section-desc">真实案例的正确使用方式</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: '#F0FFF4', borderRadius: '16px', padding: '24px', border: '1px solid #68D391' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CheckCircle size={20} color="#38A169" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#38A169', margin: 0 }}>正确示范</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {caseGuidelines.filter(g => g.allowed).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.allowed}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FFF5F5', borderRadius: '16px', padding: '24px', border: '1px solid #FC8181' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <XCircle size={20} color="#E53E3E" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#E53E3E', margin: 0 }}>错误示范</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {caseGuidelines.filter(g => g.forbidden).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <XCircle size={16} color="#E53E3E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.875rem' }}>{item.forbidden}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance QA */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Q&A</span>
            <h2 className="section-title">合规问答</h2>
            <p className="section-desc">常见合规问题解答</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
            {complianceQA.map((item, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '24px', height: '24px', background: 'var(--primary-dark)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>
                    Q
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.9375rem' }}>{item.q}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', paddingLeft: '36px' }}>
                  <div style={{ width: '24px', height: '24px', background: '#38A169', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>
                    A
                  </div>
                  <span style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.a}</span>
                </div>
              </div>
            ))}
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

      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><i className="fas fa-home"></i><span>首页</span></Link>
        <Link href="/company" className="mobile-nav-item"><i className="fas fa-building"></i><span>公司</span></Link>
        <Link href="/products" className="mobile-nav-item"><i className="fas fa-capsules"></i><span>产品</span></Link>
        <Link href="/compliance" className="mobile-nav-item active"><i className="fas fa-balance-scale"></i><span>合规</span></Link>
      </div>
    </div>
  )
}
