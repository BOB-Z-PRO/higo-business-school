'use client'

import { useState } from 'react'
import type { CompliancePhrase } from '@/lib/compliance-phrasebook-data'

type PhrasebookCardProps = {
  phrase: CompliancePhrase
  color: string
}

const riskLevelLabels = {
  low: '低风险',
  medium: '中风险',
  high: '高风险',
} as const

export default function PhrasebookCard({ phrase, color }: PhrasebookCardProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(`不要说：${phrase.riskPhrase}\n可以说：${phrase.recommendedPhrase}`)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <article
      style={{
        background: 'white',
        borderRadius: '18px',
        padding: '22px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        borderLeft: `5px solid ${color}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <span
          style={{
            background: `${color}15`,
            color,
            padding: '5px 10px',
            borderRadius: '999px',
            fontSize: '0.76rem',
            fontWeight: 700,
          }}
        >
          {riskLevelLabels[phrase.riskLevel]}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            background: copied ? color : 'var(--bg-gray)',
            color: copied ? 'white' : 'var(--text-dark)',
            border: 'none',
            borderRadius: '999px',
            padding: '8px 14px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {copied ? '已复制' : '复制替换'}
        </button>
      </div>

      <div style={{ display: 'grid', gap: '14px' }}>
        <div style={{ background: '#FFF5F5', borderRadius: '12px', padding: '14px', border: '1px solid #FEB2B2' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C53030', marginBottom: '6px' }}>不要说</div>
          <p style={{ color: '#9B2C2C', lineHeight: 1.7, fontSize: '0.92rem' }}>{phrase.riskPhrase}</p>
        </div>

        <div style={{ background: '#F0FFF4', borderRadius: '12px', padding: '14px', border: '1px solid #9AE6B4' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2F855A', marginBottom: '6px' }}>可以说</div>
          <p style={{ color: '#276749', lineHeight: 1.7, fontSize: '0.92rem' }}>{phrase.recommendedPhrase}</p>
        </div>

        <div style={{ background: 'var(--bg-gray)', borderRadius: '12px', padding: '14px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '6px' }}>风险原因</div>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.86rem' }}>{phrase.reason}</p>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', marginTop: '12px', marginBottom: '6px' }}>使用场景</div>
          <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.86rem' }}>{phrase.exampleScenario}</p>
        </div>
      </div>
    </article>
  )
}
