import Link from 'next/link'
import { footerGroups } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">H</div>
              <div>
                <div className="footer-logo-text">HIGO 全球商学院</div>
                <div className="footer-logo-sub">HIGO Global Business School</div>
              </div>
            </div>
            <p className="footer-desc">
              围绕统一认知、标准学习与系统复制，沉淀更清晰、更稳健的生命科技经营成长路径。
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title} className="footer-links-group">
              <h5 className="footer-title">{group.title}</h5>
              <div className="footer-links">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div>© 2026 HIGO 全球商学院. All rights reserved.</div>
          <div>HIGO 全球生命科技集团 · 培训中心</div>
        </div>
      </div>
    </footer>
  )
}
