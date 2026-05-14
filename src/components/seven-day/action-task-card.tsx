type ActionTaskCardProps = {
  title: string
  description: string
  example?: string
  completed?: boolean
}

export default function ActionTaskCard({
  title,
  description,
  example,
  completed = false,
}: ActionTaskCardProps) {
  const index = title.match(/\d+/)?.[0] ?? title

  return (
    <div className={`action-task-card${completed ? ' is-complete' : ''}`}>
      <div className="action-task-index" aria-hidden="true">
        {completed ? '✓' : index}
      </div>

      <div className="action-task-copy">
        <h4 className="action-task-title">{title}</h4>
        <p className="action-task-desc">{description}</p>
        <span className="ui-pill">{completed ? '已完成' : '待完成'}</span>
      </div>

      {example ? (
        <div className="action-task-example">
          <span className="seven-day-label">示例表达</span>
          <p>{example}</p>
        </div>
      ) : null}
    </div>
  )
}
