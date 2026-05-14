import Link from 'next/link'
import type { CSSProperties } from 'react'
import type { MeetingPlaybook } from '@/lib/meeting-playbooks-data'

type MeetingPlaybookCardProps = {
  playbook: MeetingPlaybook
  color: string
}

export default function MeetingPlaybookCard({ playbook, color }: MeetingPlaybookCardProps) {
  const accentStyle = { ['--accent-color' as string]: color } as CSSProperties

  return (
    <Link href={`/meetings/playbooks/${playbook.type}`} className="playbook-card ui-card-compact" style={accentStyle}>
      <div className="playbook-card-head">
        <div className="playbook-card-heading">
          <h3>{playbook.title}</h3>
          <p>{playbook.meetingGoal}</p>
        </div>
        <span className="playbook-card-duration">{playbook.duration}</span>
      </div>

      <div className="playbook-card-audience">
        <div className="playbook-card-label">适合对象</div>
        <p>{playbook.targetAudience}</p>
      </div>

      <div className="playbook-card-timeline">
        {playbook.agenda.slice(0, 4).map((item, index) => (
          <div key={item} className="playbook-card-step">
            <span className="playbook-card-step-num">{index + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Link>
  )
}
