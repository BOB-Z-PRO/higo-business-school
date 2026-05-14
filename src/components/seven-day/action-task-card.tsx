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
    <div
      style={{
        background: completed ? '#F0FFF4' : 'white',
        border: completed ? '1px solid #68D391' : '1px solid var(--border)',
        borderRadius: '12px',
        padding: '16px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)' }}>{title}</h4>
        <span
          style={{
            background: completed ? '#38A169' : 'var(--bg-gray)',
            color: completed ? 'white' : 'var(--text-gray)',
            padding: '2px 10px',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          {completed ? '已完成' : '待完成'}
        </span>
      </div>
      <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>{description}</p>
      {example ? (
        <div
          style={{
            marginTop: '12px',
            padding: '12px',
            background: 'var(--bg-gray)',
            borderRadius: '10px',
            color: 'var(--text-gray)',
            fontSize: '0.8125rem',
            lineHeight: 1.6,
          }}
        >
          示例：{example}
        </div>
      ) : null}
    </div>
  )
}
