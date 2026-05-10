import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { answers } = body // { questionId: correctAnswer }
    const courseId = params.id

    const quiz = await prisma.quiz.findFirst({
      where: { courseId },
      include: {
        questions: true,
      },
    })

    if (!quiz) {
      return NextResponse.json({ error: '测验不存在' }, { status: 404 })
    }

    let correctCount = 0
    const results = quiz.questions.map((q) => {
      const userAnswer = answers[q.id]
      const isCorrect = userAnswer === q.correctAnswer
      if (isCorrect) correctCount++
      return {
        questionId: q.id,
        question: q.question,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation,
      }
    })

    const totalQuestions = quiz.questions.length
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
    const passed = score >= 60

    return NextResponse.json({
      score,
      passed,
      correctCount,
      totalQuestions,
      results,
    })
  } catch (error) {
    console.error('Submit quiz error:', error)
    return NextResponse.json({ error: '提交测验失败' }, { status: 500 })
  }
}
