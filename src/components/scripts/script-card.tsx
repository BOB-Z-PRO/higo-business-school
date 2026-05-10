'use client'

import { useState } from 'react'
import type { ScriptItem } from '@/lib/scripts-data'

type ScriptCardProps = {
  item: ScriptItem
  accentColor: string
}

export default function ScriptCard({ item, accentColor }: ScriptCardProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    const text = `适用场景：${item.scenario}\n\n推荐说法：${item.recommendedScript}\n\n不建议说法：${item.avoidScript}\n\n合规提醒：${item.complianceNote}`
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <article
      style={{
        background: 'white',
        borderRadius: '18px',
        padding: '24px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        borderTop: `4px solid ${accentColor}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>{item.title}</h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.scenario}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            background: copied ? accentColor : 'var(--bg-gray)',
            color: copied ? 'white' : 'var(--text-dark)',
            border: 'none',
            borderRadius: '999px',
            padding: '10px 16px',
            fontWeight: 600,
            fontSize: '0.82rem',
            cursor: 'pointer',
            height: 'fit-content',
          }}
        >
          {copied ? '已复制' : '复制话术'}
        </button>
      </div>

      <div style={{ display: 'grid', gap: '14px' }}>
        <div style={{ background: '#F0FFF4', borderRadius: '14px', padding: '16px', border: '1px solid #9AE6B4' }}>
          <div style={{ fontSize: '0.82rem', color: '#2F855A', fontWeight: 700, marginBottom: '8px' }}>推荐说法</div>
          <p style={{ color: '#276749', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.recommendedScript}</p>
        </div>

        <div style={{ background: '#FFF5F5', borderRadius: '14px', padding: '16px', border: '1px solid #FEB2B2' }}>
          <div style={{ fontSize: '0.82rem', color: '#C53030', fontWeight: 700, marginBottom: '8px' }}>不建议说法</div>
          <p style={{ color: '#9B2C2C', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.avoidScript}</p>
        </div>

        <div style={{ background: 'var(--bg-gray)', borderRadius: '14px', padding: '16px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '8px' }}>合规提醒</div>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.88rem', lineHeight: 1.8 }}>{item.complianceNote}</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: `${accentColor}15`,
              color: accentColor,
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
