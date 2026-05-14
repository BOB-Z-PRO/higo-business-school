import Link from 'next/link'

type MobileNavItem = {
  href: string
  label: string
  iconClassName: string
}

type MobileNavProps = {
  activePath?: string
  items: MobileNavItem[]
}

export default function MobileNav({ activePath, items }: MobileNavProps) {
  return (
    <div className="mobile-nav" aria-label="移动端主导航">
      {items.map((item) => {
        const active = activePath === item.href || (item.href !== '/' && activePath?.startsWith(item.href))
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav-item${active ? ' active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="mobile-nav-icon-shell">
              <i className={item.iconClassName}></i>
            </span>
            <span>{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
