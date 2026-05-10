import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const courseId = params.id

    const quiz = await prisma.quiz.findFirst({
      where: { courseId },
      include: {
        questions: {
          orderBy: { order: 'asc' },
        },
      },
    })

    if (!quiz) {
      return NextResponse.json({ quiz: null })
    }

    return NextResponse.json({ quiz })
  } catch (error) {
    console.error('Get quiz error:', error)
    return NextResponse.json({ error: '获取测验失败' }, { status: 500 })
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { questions } = body
    const courseId = params.id

    if (!questions || !Array.isArray(questions)) {
      return NextResponse.json({ error: '请提供测验题目' }, { status: 400 })
    }

    // Delete existing quiz if any
    const existingQuiz = await prisma.quiz.findFirst({ where: { courseId } })
    if (existingQuiz) {
      await prisma.quizQuestion.deleteMany({ where: { quizId: existingQuiz.id } })
      await prisma.quiz.delete({ where: { id: existingQuiz.id } })
    }

    // Create new quiz
    const quiz = await prisma.quiz.create({
      data: {
        courseId,
        questions: {
          create: questions.map((q: any, index: number) => ({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation || null,
            order: index,
          })),
        },
      },
      include: {
        questions: {
          orderBy: { order: 'asc' },
        },
      },
    })

    return NextResponse.json({ quiz })
  } catch (error) {
    console.error('Create quiz error:', error)
    return NextResponse.json({ error: '创建测验失败' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const courseId = params.id

    const existingQuiz = await prisma.quiz.findFirst({ where: { courseId } })
    if (existingQuiz) {
      await prisma.quizQuestion.deleteMany({ where: { quizId: existingQuiz.id } })
      await prisma.quiz.delete({ where: { id: existingQuiz.id } })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete quiz error:', error)
    return NextResponse.json({ error: '删除测验失败' }, { status: 500 })
  }
}