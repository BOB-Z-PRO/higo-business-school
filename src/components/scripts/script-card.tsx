'use client'

import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { ScriptItem } from '@/lib/scripts-data'

type ScriptCardProps = {
  item: ScriptItem
  accentColor: string
}

export default function ScriptCard({ item, accentColor }: ScriptCardProps) {
  const [copied, setCopied] = useState(false)
  const accentStyle = { ['--accent-color' as string]: accentColor } as CSSProperties

  async function handleCopy() {
    const text = `适用场景：${item.scenario}\n\n推荐说法：${item.recommendedScript}\n\n不建议说法：${item.avoidScript}\n\n合规提醒：${item.complianceNote}`
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <article className="script-card premium-card" style={accentStyle}>
      <div className="script-card-head">
        <div className="script-card-heading">
          <h3>{item.title}</h3>
          <p>{item.scenario}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={`script-card-copy${copied ? ' is-copied' : ''}`}
        >
          {copied ? '已复制' : '复制话术'}
        </button>
      </div>

      <div className="script-card-panels">
        <div className="script-card-panel script-card-panel-good">
          <div className="script-card-panel-title">推荐说法</div>
          <p>{item.recommendedScript}</p>
        </div>

        <div className="script-card-panel script-card-panel-risk">
          <div className="script-card-panel-title">不建议说法</div>
          <p>{item.avoidScript}</p>
        </div>

        <div className="script-card-panel script-card-panel-note">
          <div className="script-card-panel-title">合规提醒</div>
          <p>{item.complianceNote}</p>
        </div>
      </div>

      <div className="script-card-tags">
        {item.tags.map((tag) => (
          <span key={tag} className="script-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
