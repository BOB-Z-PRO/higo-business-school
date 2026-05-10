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
  return (
    <div className={`action-task-card${completed ? ' is-complete' : ''}`}>
      <div className="action-task-head">
        <div className="action-task-check" aria-hidden="true">
          {completed ? '✓' : String(title.split(' ').pop())}
        </div>
        <div className="action-task-copy">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <span className="action-task-status">
          {completed ? '已完成' : '待完成'}
        </span>
      </div>
      {example ? (
        <div className="action-task-example">
          <span>示例</span>
          <p>{example}</p>
        </div>
      ) : null}
    </div>
  )
}
