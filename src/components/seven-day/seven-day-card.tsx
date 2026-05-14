import Link from 'next/link'
import ActionTaskCard from '@/components/seven-day/action-task-card'
import type { SevenDayTask } from '@/lib/seven-day-data'

type SevenDayCardProps = {
  task: SevenDayTask
}

export default function SevenDayCard({ task }: SevenDayCardProps) {
  return (
    <article
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(56, 161, 105, 0.12)',
      }}
    >
      <div
        style={{
          background: task.day % 2 === 0 ? 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)' : 'linear-gradient(135deg, #38A169 0%, #68D391 100%)',
          color: 'white',
          padding: '20px 24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.9, marginBottom: '8px' }}>DAY {task.day}</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '6px' }}>{task.title}</h3>
            <p style={{ opacity: 0.9, fontSize: '0.92rem', lineHeight: 1.6 }}>{task.subtitle}</p>
          </div>
          <button
            type="button"
            disabled
            style={{
              background: 'rgba(255,255,255,0.18)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.24)',
              padding: '8px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'not-allowed',
            }}
          >
            完成按钮待接入
          </button>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '8px' }}>学习目标</div>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{task.learningGoal}</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            background: 'var(--bg-gray)',
            borderRadius: '14px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '6px' }}>今日推荐学习</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>{task.lesson.title}</div>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginTop: '4px' }}>{task.lesson.duration}</div>
          </div>
          <Link href={task.lesson.href} className="btn btn-primary">
            去学习
          </Link>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '10px' }}>今日动作</div>
          <div style={{ display: 'grid', gap: '12px' }}>
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

        <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
          <div style={{ background: '#F0FFF4', borderRadius: '14px', padding: '16px', border: '1px solid #9AE6B4' }}>
            <div style={{ fontSize: '0.85rem', color: '#2F855A', fontWeight: 700, marginBottom: '10px' }}>标准话术</div>
            {task.standardScripts.map((script) => (
              <p key={script} style={{ color: '#276749', lineHeight: 1.7, fontSize: '0.9rem' }}>
                {script}
              </p>
            ))}
          </div>

          <div style={{ background: '#FFF5F5', borderRadius: '14px', padding: '16px', border: '1px solid #FEB2B2' }}>
            <div style={{ fontSize: '0.85rem', color: '#C53030', fontWeight: 700, marginBottom: '10px' }}>禁止表达</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {task.forbiddenPhrases.map((phrase) => (
                <span
                  key={phrase}
                  style={{
                    background: 'white',
                    color: '#C53030',
                    border: '1px solid #FEB2B2',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ background: 'var(--bg-gray)', borderRadius: '14px', padding: '16px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '10px' }}>作业与复盘</div>
            <ul style={{ display: 'grid', gap: '8px' }}>
              {task.homework.map((item) => (
                <li key={item} style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.88rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: '#FFFBEA', borderRadius: '14px', padding: '16px', border: '1px solid #F6E05E' }}>
            <div style={{ fontSize: '0.85rem', color: '#B7791F', fontWeight: 700, marginBottom: '10px' }}>合规提醒</div>
            <p style={{ color: '#975A16', lineHeight: 1.7, fontSize: '0.88rem' }}>{task.complianceNote}</p>
          </div>

          <div style={{ background: 'var(--bg-light)', borderRadius: '14px', padding: '16px', border: '1px dashed var(--border)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '10px' }}>下一步</div>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.88rem' }}>{task.nextStep}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
