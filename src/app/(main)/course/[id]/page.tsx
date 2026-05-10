import type { Metadata } from 'next'
import CourseDetailPageClient from '@/components/course/course-detail-page-client'

type CourseDetailPageProps = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  return {
    title: `课程详情 | ${params.id} | HIGO 全球商学院`,
    description: `查看课程 ${params.id} 的学习内容、基础信息与练习入口。`,
  }
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return <CourseDetailPageClient courseId={params.id} />
}
