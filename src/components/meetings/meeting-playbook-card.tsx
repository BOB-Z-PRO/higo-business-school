import Link from 'next/link'
import type { MeetingPlaybook } from '@/lib/meeting-playbooks-data'

type MeetingPlaybookCardProps = {
  playbook: MeetingPlaybook
  color: string
}

export default function MeetingPlaybookCard({ playbook, color }: MeetingPlaybookCardProps) {
  return (
    <Link href={`/meetings/playbooks/${playbook.type}`} className="academy-category-card academy-playbook-card">
      <div className="academy-category-head">
        <h3>{playbook.title}</h3>
        <span className="academy-pill" style={{ color }}>
          {playbook.duration}
        </span>
      </div>
      <p>{playbook.meetingGoal}</p>
      <div className="academy-playbook-list">
        {playbook.agenda.slice(0, 4).map((item, index) => (
          <div key={item} className="academy-playbook-row">
            <strong>{index + 1}</strong>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Link>
  )
}
