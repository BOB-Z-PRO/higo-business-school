import Link from 'next/link'
import type { MeetingPlaybook } from '@/lib/meeting-playbooks-data'

type MeetingPlaybookCardProps = {
  playbook: MeetingPlaybook
  color: string
}

export default function MeetingPlaybookCard({ playbook, color }: MeetingPlaybookCardProps) {
  return (
    <Link
      href={`/meetings/playbooks/${playbook.type}`}
      style={{
        background: 'white',
        borderRadius: '18px',
        padding: '24px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        borderTop: `4px solid ${color}`,
        display: 'block',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>{playbook.title}</h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.88rem', lineHeight: 1.7 }}>{playbook.meetingGoal}</p>
        </div>
        <span
          style={{
            background: `${color}15`,
            color,
            padding: '6px 12px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}
        >
          {playbook.duration}
        </span>
      </div>

      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '8px' }}>适合对象</div>
        <p style={{ color: 'var(--text-gray)', fontSize: '0.88rem', lineHeight: 1.7 }}>{playbook.targetAudience}</p>
      </div>

      <div style={{ display: 'grid', gap: '8px' }}>
        {playbook.agenda.slice(0, 4).map((item, index) => (
          <div key={item} style={{ display: 'flex', gap: '10px', color: 'var(--text-gray)', fontSize: '0.86rem' }}>
            <span style={{ color, fontWeight: 700 }}>{index + 1}.</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Link>
  )
}
