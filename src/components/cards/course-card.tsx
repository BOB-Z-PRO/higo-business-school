import Link from 'next/link'

type CourseCardProps = {
  href: string
  tag: string
  title: string
  description: string
  meta: string
}

export default function CourseCard({ href, tag, title, description, meta }: CourseCardProps) {
  return (
    <Link href={href} className="featured-course-card premium-card mobile-compact-card">
      <div className="featured-course-head">
        <div className="featured-course-tag">{tag}</div>
        <span className="featured-course-meta">{meta}</span>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span className="featured-course-link">进入内容</span>
    </Link>
  )
}
