import type { ReactNode } from 'react'
import Link from 'next/link'
import { primaryNavLinks } from '@/lib/site-data'

type HeaderProps = {
  activePath?: string
  rightSlot?: ReactNode
}

function isActiveLink(activePath: string | undefined, href: string) {
  if (!activePath) {
    return false
  }

  return activePath === href || (href !== '/' && activePath.startsWith(href))
}

export default function Header({ activePath, rightSlot }: HeaderProps) {
  return (
    <header className="header header-shell">
      <div className="header-inner">
        <Link href="/" className="logo header-brand">
          <div className="logo-icon logo-mark">H</div>
          <div className="logo-copy">
            <div className="logo-text">HIGO 全球商学院</div>
            <div className="logo-sub">HIGO Global Business School</div>
          </div>
        </Link>
        <nav className="nav">
          {primaryNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActiveLink(activePath, item.href) ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="header-actions">{rightSlot}</div>
        </nav>
      </div>
    </header>
  )
}
