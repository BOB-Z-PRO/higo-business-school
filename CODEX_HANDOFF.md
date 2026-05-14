# Codex Handoff

This file is the working handoff for developing HIGO Business School in Codex.

## Project Location

- Current Next.js project: `D:\我的文档\Playground\HIGO-Business-School`
- Main local knowledge base: `D:\我的文档\Obsidian Vault`
- Previous static version: `D:\我的文档\Playground\HIGO商学院`
- Previous HTML backup: `D:\我的文档\Playground\HIGO商学院-html`
- PRD v1.0: `D:\我的文档\Playground\HIGO商学院系统_PRD_v1.md`
- PRD v1.1: `D:\我的文档\Playground\HIGO商学院_v1.1_PRD.md`

## Current Product Direction

HIGO Business School is not just a course list, document site, or PPT archive.

The current target is a team replication system for:

- newcomer onboarding
- compliant scripts training
- meeting SOP replication
- product and company learning
- compliance expression replacement
- staged business operator growth

The v1.1 direction is especially important: prioritize practical modules that help a team copy actions and language safely.

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

## Existing Product Modules

Core v1.1 modules already present:

- `/business/survival/7-day`
- `/scripts`
- `/scripts/[category]`
- `/meetings/playbooks`
- `/meetings/playbooks/[type]`
- `/compliance/phrasebook`

Supporting data/components:

- `src/lib/seven-day-data.ts`
- `src/lib/scripts-data.ts`
- `src/lib/meeting-playbooks-data.ts`
- `src/lib/compliance-phrasebook-data.ts`
- `src/components/seven-day/*`
- `src/components/scripts/script-card.tsx`
- `src/components/meetings/meeting-playbook-card.tsx`
- `src/components/compliance/phrasebook-card.tsx`

## Current Known Issues

- Multiple visual systems coexist in `src/app/globals.css`: old technology/hero styles, `premium-*`, `academy-*`, and newer `ui-*`.
- Some pages still use many inline styles.
- Some older content uses high-risk language and needs compliance rewriting.
- Build logs show database connection failures when Neon is unreachable, even though the build exits successfully.
- The current system feels partly migrated: route coverage is broad, but UI consistency and content governance need more work.

## Recommended Next Work

1. Establish `ui-*` as the current visual standard.
2. Refactor the highest-impact pages first:
   - `/`
   - `/business/survival/7-day`
   - `/scripts`
   - `/scripts/[category]`
   - `/meetings/playbooks`
   - `/compliance/phrasebook`
3. Reduce old hero/premium/academy style conflicts.
4. Continue compliance rewriting of course and product content.
5. Improve database fallback behavior and deployment logs.
6. After each meaningful change, run `npm.cmd run build`.

## Working Principle

When using the Obsidian knowledge base:

1. read the relevant note
2. extract the intent
3. remove or downgrade risky claims
4. convert it into structured learning/action/compliance content
5. then implement it in the Next.js app

The goal is not to preserve every original claim. The goal is to turn raw material into a safer, clearer, more useful business school system.
