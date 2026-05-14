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
    <article className={`camp-task-card${completed ? ' is-completed' : ''}`}>
      <div className="camp-task-head">
        <h4>{title}</h4>
        <span className="camp-task-status">{completed ? '已完成' : '待完成'}</span>
      </div>
      <p>{description}</p>
      {example ? <div className="camp-task-example">示例：{example}</div> : null}
    </article>
  )
}
