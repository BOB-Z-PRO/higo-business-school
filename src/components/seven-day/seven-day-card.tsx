import Link from 'next/link'
import ActionTaskCard from '@/components/seven-day/action-task-card'
import type { SevenDayTask } from '@/lib/seven-day-data'

type SevenDayCardProps = {
  task: SevenDayTask
}

export default function SevenDayCard({ task }: SevenDayCardProps) {
  return (
    <article className={`seven-day-card premium-card day-tone-${task.day % 2 === 0 ? 'blue' : 'green'}`}>
      <div className="seven-day-card-hero">
        <div className="seven-day-card-hero-main">
          <div className="seven-day-day-badge">DAY {task.day}</div>
          <div>
            <h3>{task.title}</h3>
            <p>{task.subtitle}</p>
          </div>
        </div>
        <button type="button" disabled className="seven-day-status-btn">
            完成按钮待接入
        </button>
      </div>

      <div className="seven-day-card-body">
        <div className="seven-day-learning-goal">
          <div className="seven-day-label">学习目标</div>
          <p className="mobile-readable">{task.learningGoal}</p>
        </div>

        <div className="seven-day-highlight-card action-card">
          <div>
            <div className="seven-day-label">今日推荐学习</div>
            <div className="seven-day-highlight-title">{task.lesson.title}</div>
            <div className="seven-day-highlight-meta">{task.lesson.duration}</div>
          </div>
          <Link href={task.lesson.href} className="btn btn-primary">
            去学习
          </Link>
        </div>

        <div className="seven-day-block">
          <div className="seven-day-label">今日动作</div>
          <div className="seven-day-action-list">
            {task.actionTasks.map((item, index) => (
              <ActionTaskCard
                key={item}
                title={`动作 ${index + 1}`}
                description={item}
                example={index === 0 ? task.standardScripts[0] : undefined}
              />
            ))}
          </div>
        </div>

        <div className="seven-day-support-grid">
          <div className="seven-day-note-card script-good-card">
            <div className="seven-day-note-title">标准话术</div>
            {task.standardScripts.map((script) => (
              <p key={script}>
                {script}
              </p>
            ))}
          </div>

          <div className="seven-day-note-card script-risk-card">
            <div className="seven-day-note-title">禁止表达</div>
            <div className="seven-day-chip-list">
              {task.forbiddenPhrases.map((phrase) => (
                <span key={phrase} className="seven-day-chip">
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="seven-day-footer-grid">
          <div className="seven-day-stack-card">
            <div className="seven-day-note-title">作业与复盘</div>
            <ul className="seven-day-list">
              {task.homework.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="seven-day-stack-card seven-day-warning-card">
            <div className="seven-day-note-title">合规提醒</div>
            <p>{task.complianceNote}</p>
          </div>

          <div className="seven-day-stack-card seven-day-next-card">
            <div className="seven-day-note-title">下一步</div>
            <p>{task.nextStep}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
