import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { coursesData } from '@/lib/courses-data'
import { mobileNavItems } from '@/lib/site-data'

type PageProps = { params: { id: string } }

export function generateMetadata({ params }: PageProps): Metadata {
  const course = coursesData[params.id]
  if (!course) return { title: '课程不存在 | HIGO 全球商学院' }
  return { title: `${course.title} | HIGO 全球商学院`, description: `${course.category} · ${course.duration}` }
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = coursesData[params.id]
  if (!course) notFound()

  const related = course.relatedCourses.map((id) => coursesData[id]).filter(Boolean)

  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">{course.category}</span>
            <h1>{course.title}</h1>
            <p className="module-hero-subtitle">
              {course.id} · {course.duration} · {course.type}
            </p>
            <p className="module-hero-description">{course.targetAudience}</p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-grid-2 seven-day-hero-grid">
            <div className="seven-day-summary-card">
              <span className="ui-eyebrow">学习目标</span>
              <ul className="seven-day-list" style={{ marginTop: '1rem' }}>
                {course.learningObjectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="seven-day-next-stage">
              <span className="ui-eyebrow">核心要点</span>
              <ul className="seven-day-list" style={{ marginTop: '1rem' }}>
                {course.keyPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Course Content</span>
            <h2 className="ui-title">课程内容</h2>
          </div>
          <article className="seven-day-card">
            <div className="seven-day-card-body">
              <p className="ui-readable" style={{ whiteSpace: 'pre-wrap' }}>
                {course.content}
              </p>
            </div>
          </article>
        </div>
      </section>

      {course.goldenSentences.length > 0 && (
        <section className="ui-section">
          <div className="container">
            <div className="ui-section-header">
              <span className="ui-eyebrow">Golden Lines</span>
              <h2 className="ui-title">金句摘录</h2>
            </div>
            <div className="seven-day-stack">
              {course.goldenSentences.map((item) => (
                <div key={item} className="seven-day-stack-card">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {course.complianceNotes.length > 0 && (
        <ComplianceNotice description={course.complianceNotes.join('；')} />
      )}

      {related.length > 0 && (
        <section className="ui-section">
          <div className="container">
            <div className="ui-section-header">
              <span className="ui-eyebrow">Related</span>
              <h2 className="ui-title">相关课程</h2>
            </div>
            <div className="academy-overview-link-grid">
              {related.map((item) => (
                <Link key={item.id} href={`/business/course/${item.id}`} className="academy-overview-link">
                  <h3>{item.title}</h3>
                  <p>
                    {item.id} · {item.duration}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
