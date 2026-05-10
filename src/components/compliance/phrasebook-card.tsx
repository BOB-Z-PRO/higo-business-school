'use client'

import type { CSSProperties } from 'react'
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
  const accentStyle = { ['--accent-color' as string]: color } as CSSProperties

  async function handleCopy() {
    await navigator.clipboard.writeText(`不要说：${phrase.riskPhrase}\n可以说：${phrase.recommendedPhrase}`)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <article className="phrasebook-card premium-card" style={accentStyle}>
      <div className="phrasebook-card-head">
        <span className="phrasebook-risk-tag">{riskLevelLabels[phrase.riskLevel]}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={`phrasebook-copy${copied ? ' is-copied' : ''}`}
        >
          {copied ? '已复制' : '复制替换'}
        </button>
      </div>

      <div className="phrasebook-card-body">
        <div className="phrasebook-card-panel phrasebook-card-panel-risk">
          <div className="phrasebook-panel-title">不要说</div>
          <p>{phrase.riskPhrase}</p>
        </div>

        <div className="phrasebook-card-panel phrasebook-card-panel-good">
          <div className="phrasebook-panel-title">可以说</div>
          <p>{phrase.recommendedPhrase}</p>
        </div>

        <div className="phrasebook-card-panel phrasebook-card-panel-note">
          <div className="phrasebook-panel-title">风险原因</div>
          <p>{phrase.reason}</p>
          <div className="phrasebook-panel-subtitle">使用场景</div>
          <p>{phrase.exampleScenario}</p>
        </div>
      </div>
    </article>
  )
}
