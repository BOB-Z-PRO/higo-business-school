import Link from 'next/link'
import ActionTaskCard from '@/components/seven-day/action-task-card'
import type { SevenDayTask } from '@/lib/seven-day-data'

type SevenDayCardProps = {
  task: SevenDayTask
}

export default function SevenDayCard({ task }: SevenDayCardProps) {
  return (
    <article className="camp-day-card">
      <div className="camp-day-header">
        <div>
          <span className="camp-day-num">DAY {task.day}</span>
          <h3>{task.title}</h3>
          <p>{task.subtitle}</p>
        </div>
      </div>

      <div className="camp-day-body">
        <div className="camp-day-section">
          <h4>学习目标</h4>
          <p>{task.learningGoal}</p>
        </div>

        <div className="camp-lesson">
          <div>
            <span>今日推荐学习</span>
            <strong>{task.lesson.title}</strong>
            <p>{task.lesson.duration}</p>
          </div>
          <Link href={task.lesson.href} className="academy-btn academy-btn-primary">
            去学习
          </Link>
        </div>

        <div className="camp-day-section">
          <h4>行动清单</h4>
          <div className="camp-task-list">
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

        <div className="camp-speech-grid">
          <div className="camp-speech-card is-ok">
            <h4>标准话术</h4>
            {task.standardScripts.map((script) => (
              <p key={script}>{script}</p>
            ))}
          </div>
          <div className="camp-speech-card is-bad">
            <h4>禁止表达</h4>
            <div className="camp-chips">
              {task.forbiddenPhrases.map((phrase) => (
                <span key={phrase}>{phrase}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="camp-day-section">
          <h4>作业与复盘</h4>
          <ul className="academy-simple-list">
            {task.homework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="camp-foot-grid">
          <div className="camp-foot-card warning">
            <h4>合规提醒</h4>
            <p>{task.complianceNote}</p>
          </div>
          <div className="camp-foot-card">
            <h4>下一步</h4>
            <p>{task.nextStep}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
