# Codex Handoff

> Last updated: 2026-05-15

## Project Location

- Current Next.js project: `D:\我的文档\Playground\HIGO-Business-School`
- Main local knowledge base: `D:\我的文档\Obsidian Vault`
- Previous static version: `D:\我的文档\Playground\HIGO商学院`
- Previous HTML backup: `D:\我的文档\Playground\HIGO商学院-html`
- PRD v1.0: `D:\我的文档\Playground\HIGO商学院系统_PRD_v1.md`
- PRD v1.1: `D:\我的文档\Playground\HIGO商学院_v1.1_PRD.md`

## Current Product Direction

HIGO Business School is not just a course list, document site, or PPT archive.

The target is a team replication system for:
- newcomer onboarding (7-day camp)
- compliant scripts training
- meeting SOP replication
- product and company learning
- compliance expression replacement
- staged business operator growth

The v1.1 direction prioritizes practical modules that help a team copy actions and language safely.

## v1.1 Core Modules (Verified Present)

| Module | Route | Status |
|--------|-------|--------|
| 新人7天启动营 | `/business/survival/7-day` | ✅ Present |
| 话术训练库 | `/scripts` | ✅ Present |
| 话术分类 | `/scripts/[category]` | ✅ Present (7 categories) |
| 会议SOP库 | `/meetings/playbooks` | ✅ Present |
| 会议SOP详情 | `/meetings/playbooks/[type]` | ✅ Present (3 types) |
| 合规表达替换库 | `/compliance/phrasebook` | ✅ Present |

## Knowledge Base Sources

Useful Obsidian paths:
- `D:\我的文档\Obsidian Vault\HIGO商学院`
- `D:\我的文档\Obsidian Vault\2️⃣-海购业务`
- `D:\我的文档\Obsidian Vault\8️⃣-海购素材库`
- `D:\我的文档\Obsidian Vault\HIGO商学院\核心知识点速查`

Important note: the knowledge base contains raw business material. Some old notes include high-risk claims around disease treatment, product effects, income, cases, and certifications. Do not copy raw content directly into the website. Always rewrite through a compliance layer.

## Compliance Rules

Avoid positive promotional use of:
- disease treatment or cure claims
- guaranteed product effects
- guaranteed income or speed claims
- zero-risk business claims
- individual cases presented as universal outcomes
- medical advice or drug replacement claims
- exaggerated certification or authority claims

Preferred language style:
- "支持健康管理"
- "体验因人而异"
- "建议持续观察记录"
- "不替代医疗建议"
- "先学习、先体验、再判断"
- "结果取决于个人投入、学习和市场行为"

If a risky phrase must appear, it should only appear inside "不要说", "禁止表达", or risk warning contexts.

## Technical Stack

- Next.js 14 App Router
- TypeScript
- Prisma
- NextAuth
- Tailwind CSS plus global CSS
- Vercel deployment
- Neon PostgreSQL database

## Local Commands

PowerShell may block `npm` because of script execution policy. Prefer:

```powershell
npm.cmd run build
npm.cmd run dev
```

Known current behavior:
- `npm.cmd run build` passes locally.
- During build, Prisma may log Neon connection errors if the database cannot be reached from the environment.
- The build script still exits successfully in the current setup.

## Deployment

GitHub repository:
- `BOB-Z-PRO/higo-business-school`
- default branch: `main`

Vercel:
- local `.vercel/project.json` is already linked to the Vercel project `higo-business-school`
- production URL: `https://higo-business-school.vercel.app/`

GitHub Actions:
- workflow file: `.github/workflows/deploy.yml`
- push to `main` should trigger build and Vercel deployment

Secrets and environment variables already exist in local/project configuration. Do not print secrets in logs or responses.

## Git Notes

The local PowerShell environment may not currently have `git` on PATH. If local git is unavailable, use the GitHub connector for repository inspection and PR work, or ask to fix/install Git.

Do not commit `.env`, local secrets, generated cache files, or unrelated local artifacts.

## UI Direction (Updated 2026-05-15)

Current visual system: `academy-*` CSS classes
- Primary hero: deep navy gradient with subtle accent gradients
- No DNA/cell/particle animations (removed)
- Mobile-first, clean card-based layout
- Warm white background (#F8F6F0)

Key CSS files:
- `src/app/globals.css` - contains all styles (academy-*, premium-*, hero-*, ui-*)

Important navigation changes (2026-05-15):
- Header: v1.1 modules now appear first in primaryNavLinks
- MobileNav: now shows v1.1 core modules as main 4 items
- Footer: v1.1 core modules grouped separately

## Known Issues

1. `globals.css` contains multiple style systems (hero-*, premium-*, academy-*, ui-*) - consolidation ongoing
2. Some pages still use inline styles
3. Old knowledge base content needs compliance rewriting before use
4. Build logs show database connection failures when Neon is unreachable

## Recent Changes (2026-05-15)

1. Updated `primaryNavLinks` in `site-data.ts` - v1.1 modules now appear first
2. Updated `mobileNavItems` - v1.1 core modules are now the main 4 items
3. Updated `footerGroups` - v1.1 core modules grouped under "v1.1 核心模块"
4. Updated `ROUTE_MAP.md` - reflects actual v1.1 routing structure

## Working Principle

When using the Obsidian knowledge base:
1. read the relevant note
2. extract the intent
3. remove or downgrade risky claims
4. convert it into structured learning/action/compliance content
5. then implement it in the Next.js app

The goal is not to preserve every original claim. The goal is to turn raw material into a safer, clearer, more useful business school system.