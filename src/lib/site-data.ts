export type NavLink = {
  href: string
  label: string
}

export type FooterGroup = {
  title: string
  links: NavLink[]
}

export const primaryNavLinks: NavLink[] = [
  { href: '/company', label: '公司篇' },
  { href: '/products', label: '产品篇' },
  { href: '/business', label: '经营篇' },
  { href: '/meetings', label: '会议中心' },
  { href: '/resources', label: '素材中心' },
  { href: '/compliance', label: '合规中心' },
  { href: '/about', label: '关于 HIGO' },
]

export const footerGroups: FooterGroup[] = [
  {
    title: '学习入口',
    links: [
      { href: '/company', label: '公司篇' },
      { href: '/products', label: '产品篇' },
      { href: '/business', label: '经营篇' },
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
  {
    title: '联系渠道',
    links: [
      { href: 'mailto:support@higo.com', label: 'support@higo.com' },
      { href: 'tel:400-888-8888', label: '400-888-8888' },
      { href: 'https://www.higo.com', label: 'www.higo.com' },
    ],
  },
]

export const mobileNavItems = [
  { href: '/', label: '首页', iconClassName: 'fas fa-home' },
  { href: '/company', label: '公司', iconClassName: 'fas fa-building' },
  { href: '/products', label: '产品', iconClassName: 'fas fa-capsules' },
  { href: '/business', label: '经营', iconClassName: 'fas fa-chart-line' },
]

export const profileMobileNavItems = [
  ...mobileNavItems.slice(0, 3),
  { href: '/profile', label: '我的', iconClassName: 'fas fa-user' },
]
