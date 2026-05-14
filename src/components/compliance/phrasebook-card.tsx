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
    <article className="phrasebook-card">
      <div className="phrasebook-head">
        <span className="phrasebook-risk" style={{ color }}>
          {riskLevelLabels[phrase.riskLevel]}
        </span>
        <button type="button" onClick={handleCopy} className={`phrasebook-copy${copied ? ' is-copied' : ''}`}>
          {copied ? '已复制' : '复制'}
        </button>
      </div>

      <div className="phrasebook-block is-risk">
        <h4>不要说</h4>
        <p>{phrase.riskPhrase}</p>
      </div>
      <div className="phrasebook-block is-safe">
        <h4>可以说</h4>
        <p>{phrase.recommendedPhrase}</p>
      </div>
      <div className="phrasebook-block is-note">
        <h4>风险原因</h4>
        <p>{phrase.reason}</p>
        <h4>使用场景</h4>
        <p>{phrase.exampleScenario}</p>
      </div>
    </article>
  )
}
