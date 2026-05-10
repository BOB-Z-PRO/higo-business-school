'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Building2, Droplets, TrendingUp, Users, AlertTriangle } from 'lucide-react'

const objectionCategories = [
  {
    id: 'company',
    icon: '🏢',
    title: '关于公司',
    color: '#1A365D',
    questions: [
      { q: 'HIGO到底是什么公司？', a: 'HIGO是HIGO Global Biotech Group（海购全球生物科技集团），一家专注于基因抗衰科技的跨国企业，2020年成立，在美国、马来西亚、韩国、越南、加拿大、日本等地设有运营中心。' },
      { q: '公司在哪里？', a: '美国是公司总部所在地，马来西亚是全球运营中心，此外还有韩国、越南、加拿大、日本等分公司或分支机构。' },
      { q: '公司实力怎么证明？', a: '公司拥有FDA、cGMP等七大国际认证，专家团队来自哈佛、杜克、斯坦福等世界顶级学者。' },
      { q: '为什么说HIGO有全球布局？', a: '业务遍及6个国家、4大洲，在美国、马来西亚、韩国、越南、加拿大、日本等地都有运营中心或分支机构。' },
      { q: '公司未来前景在哪里？', a: '大健康是未来20年最大的趋势，基因抗衰是革命性的产品赛道，HIGO有6年的技术沉淀和全球布局。' },
    ]
  },
  {
    id: 'product',
    icon: '🧬',
    title: '关于产品',
    color: '#38A169',
    questions: [
      { q: '为什么我要吃产品？', a: '产品解决的是细胞衰老问题，通过基因抗衰科技帮助人们实现健康衰老。自己的身体状态自己最清楚。' },
      { q: '不吃产品能不能做？', a: '可以先了解，但自用产品是最好的建立信心的方式。只有自己体验过，才能真正讲清楚产品价值。' },
      { q: '产品到底解决什么问题？', a: '四大产品分别针对：AKG激活细胞活力、CELL修复受损细胞、荷尔蒙平衡调节、大脑认知功能增强。' },
      { q: '产品安全吗？', a: '有FDA、cGMP等七大国际认证，采用美国制造标准，成分天然，安全性有保障。' },
      { q: '吃多久有感觉？', a: '因人而异，一般3天-1个月会有感觉。细胞更新时间需要90天，建议坚持服用。' },
    ]
  },
  {
    id: 'business',
    icon: '💼',
    title: '关于经营',
    color: '#3182CE',
    questions: [
      { q: '我不会销售怎么办？', a: '不需要传统销售技巧。只需要分享自己的真实体验和使用感受，借力公司和产品。' },
      { q: '我没有人脉怎么办？', a: '人脉是经营出来的，不是等出来的。先从身边人开始，建立信任后自然会有更多人脉。' },
      { q: '我怕被拒绝怎么办？', a: '被拒绝是筛选，不是否定。每一次拒绝都是筛选出真正需要的人的机会。' },
      { q: '我是不是要投资很多钱？', a: '只需要购买自用产品即可，没有囤货压力，没有高额入门费。' },
      { q: '这个事业能不能长期做？', a: 'HIGO成立于2020年，全球布局，大健康是长期趋势，事业可以传承。' },
    ]
  },
  {
    id: 'sharing',
    icon: '🤝',
    title: '关于分享',
    color: '#805AD5',
    questions: [
      { q: '我怎么开口？', a: '从自己的真实体验开始，分享产品给自己带来的改变。ABC法则：让A（老师/视频）先建立信任，B（你）跟进，C（客户）自然成交。' },
      { q: '发朋友圈会不会被别人反感？', a: '用价值分享代替产品推销。分享健康知识、产品原理、自己的改变，而不是硬广告。' },
      { q: '怎么邀请别人听会？', a: '"我最近了解了一个很有趣的健康项目，有空听听吗？\"而不是直接推销产品。' },
      { q: '不懂产品能不能分享？', a: '可以先分享机会，但最终还是要学习产品知识。建议先参加一场完整的招商说明会。' },
      { q: '别人问专业问题怎么回答？', a: '\"这个问题很好，我让专业老师来回答你\"然后邀请他参加产品专场会。' },
    ]
  },
  {
    id: 'compliance',
    icon: '⚠️',
    title: '关于合规',
    color: '#E53E3E',
    questions: [
      { q: '哪些话不能讲？', a: '不能夸大产品效果、不能承诺治疗、不能保证收益、不能做虚假宣传。' },
      { q: '能不能说治病？', a: '不能。产品是食品和保健品，不是药物，不能宣传任何疾病治疗效果。' },
      { q: '能不能承诺收益？', a: '绝对不能。禁止承诺任何收益，禁止暗示人人必赚，禁止用个别案例代表普遍结果。' },
      { q: '能不能夸大案例？', a: '不能。案例必须真实，不得改编夸大，所有案例都要注明\"因人而异\"。' },
      { q: '能不能用别人检测结果做承诺？', a: '不能。检测报告只能作为参考，不能用别人的检测结果为产品效果做承诺。' },
    ]
  },
]

export default function ObjectionsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      {/* Header */}
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
            <Link href="/business" className="nav-link active">经营篇</Link>
            <Link href="/meetings" className="nav-link">会议中心</Link>
            <Link href="/resources" className="nav-link">素材中心</Link>
            <Link href="/compliance" className="nav-link">合规中心</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <button
            onClick={() => router.back()}
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> 返回生存空间
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>💬</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>新人疑义解答</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                生存空间第一优先级模块，解决新人最关心的50个核心问题。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: 'white', padding: '32px 0' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-gray)', borderRadius: '16px', padding: '24px', borderLeft: '4px solid #E53E3E' }}>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: 'var(--text-dark)' }}>每个问题包含：</strong>问题标题 → 新人真实心理 → 标准回答 → 深度解释 → 可以怎么说 → 不可以怎么说 → 推荐学习课程 → 推荐会议视频
            </p>
          </div>
        </div>
      </section>

      {/* Objection Categories */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {objectionCategories.map((category) => (
              <div key={category.id} className="objection-category">
                <div style={{ background: category.color, padding: '16px 24px', borderRadius: '16px 16px 0 0', color: 'white', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{category.title}</h2>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, fontSize: '0.875rem' }}>{category.questions.length}个问题</span>
                </div>
                <div style={{ background: 'white', borderRadius: '0 0 16px 16px', padding: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {category.questions.map((item, index) => (
                      <div key={index} className="objection-item">
                        <div className="objection-q">
                          <span style={{ color: category.color, fontWeight: 700, marginRight: '8px' }}>Q{index + 1}.</span>
                          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{item.q}</span>
                        </div>
                        <div className="objection-a">
                          <span style={{ color: category.color, fontWeight: 700, marginRight: '8px' }}>A:</span>
                          <span style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{item.a}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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