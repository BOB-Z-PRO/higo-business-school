export type NavLink = {
  href: string
  label: string
}

export type FooterGroup = {
  title: string
  links: NavLink[]
}

// v1.1 主导航 - 核心路径优先
export const primaryNavLinks: NavLink[] = [
  { href: '/business/survival/7-day', label: '新人启动' },
  { href: '/scripts', label: '话术训练' },
  { href: '/meetings/playbooks', label: '会议SOP' },
  { href: '/compliance/phrasebook', label: '合规表达' },
  { href: '/products', label: '产品学院' },
  { href: '/business', label: '经营篇' },
  { href: '/company', label: '公司篇' },
]

export const footerGroups: FooterGroup[] = [
  {
    title: 'v1.1 核心模块',
    links: [
      { href: '/business/survival/7-day', label: '新人7天启动营' },
      { href: '/scripts', label: '话术训练库' },
      { href: '/meetings/playbooks', label: '会议SOP库' },
      { href: '/compliance/phrasebook', label: '合规表达替换库' },
    ],
  },
  {
    title: '学习入口',
    links: [
      { href: '/products', label: '产品学院' },
      { href: '/business', label: '经营篇' },
      { href: '/company', label: '公司篇' },
      { href: '/meetings', label: '会议中心' },
    ],
  },
  {
    title: '支持中心',
    links: [
      { href: '/resources', label: '素材中心' },
      { href: '/compliance', label: '合规中心' },
      { href: '/about', label: '关于 HIGO' },
      { href: '/login', label: '会员登录' },
    ],
  },
]

// v1.1 四大核心模块 - 移动端主入口
export const v11CoreModules = [
  { href: '/business/survival/7-day', label: '7天启动', iconClassName: 'fas fa-calendar-check' },
  { href: '/scripts', label: '话术库', iconClassName: 'fas fa-comments' },
  { href: '/meetings/playbooks', label: '会议SOP', iconClassName: 'fas fa-clipboard-list' },
  { href: '/compliance/phrasebook', label: '合规库', iconClassName: 'fas fa-shield-alt' },
]

export const mobileNavItems = [
  { href: '/', label: '首页', iconClassName: 'fas fa-home' },
  { href: '/business/survival/7-day', label: '7天启动', iconClassName: 'fas fa-calendar-check' },
  { href: '/scripts', label: '话术库', iconClassName: 'fas fa-comments' },
  { href: '/business', label: '经营', iconClassName: 'fas fa-chart-line' },
]

export const profileMobileNavItems = [
  ...mobileNavItems.slice(0, 3),
  { href: '/profile', label: '我的', iconClassName: 'fas fa-user' },
]
