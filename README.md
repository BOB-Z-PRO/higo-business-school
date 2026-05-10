# HIGO Business School

HIGO 商学院当前版本已从“静态页面拼装”推进到更适合持续维护的 PRD 架构版。

本轮重构重点：

- 补齐 `/login` 与 `/profile` 页面，修复 NextAuth 登录入口缺失与登录后落点问题
- 首页切换为 Server Component，登录状态单独拆到 Client Component
- 抽离共享组件：`Header`、`Footer`、`MobileNav`、`ComplianceNotice`、`CourseCard`、`ProductCard`
- 抽离页面静态数据到 `src/lib/*.ts`
- 增加 `src/lib/prisma.ts`，统一复用 Prisma 单例
- 清理高风险文案，统一替换为支持性、合规表达
- 为首页、产品页、经营篇、课程详情补充 metadata
- 让 `npm run build` 在当前 Windows 本地环境中可通过

v1.1 第一批新增：

- 新人 7 天启动营页面：`/business/survival/7-day`
- 启动营数据文件：`src/lib/seven-day-data.ts`
- 启动营组件：`SevenDayCard`、`ActionTaskCard`
- 生存空间页新增启动营快捷入口

v1.1 第二至第四批新增：

- 话术训练库：`/scripts`
- 话术数据文件：`src/lib/scripts-data.ts`
- 话术组件：`src/components/scripts/script-card.tsx`
- 会议 SOP 库：`/meetings/playbooks`
- 会议 SOP 数据文件：`src/lib/meeting-playbooks-data.ts`
- 会议 SOP 组件：`src/components/meetings/meeting-playbook-card.tsx`
- 合规表达替换库：`/compliance/phrasebook`
- 替换库数据文件：`src/lib/compliance-phrasebook-data.ts`
- 替换库组件：`src/components/compliance/phrasebook-card.tsx`

## 技术栈

- Next.js 14 App Router
- TypeScript
- NextAuth
- Prisma
- Tailwind CSS / 全局样式

## 本地启动

```bash
npm install
npm run dev
```

默认访问：

- 首页: `http://localhost:3000/`
- 登录页: `http://localhost:3000/login`
- 个人中心: `http://localhost:3000/profile`

## 环境变量

参考 [`.env.example`](./.env.example)：

- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `HIGO_API_URL`
- `HIGO_API_KEY`

## 目录建议

```text
src/
  app/                 路由与页面
  components/          复用组件
  lib/                 数据、工具、Prisma 单例
  store/               前端状态
  types/               类型声明
prisma/                数据模型
scripts/               本地脚本
```

## 页面骨架

- `src/app/page.tsx`
  首页 Server Component，只负责结构与数据拼装
- `src/components/home/client-auth-status.tsx`
  首页顶部登录态 Client Component
- `src/app/products/page.tsx`
  产品页，复用 `ProductCard`
- `src/app/business/page.tsx`
  经营篇，复用数据源与合规提醒
- `src/app/(main)/course/[id]/page.tsx`
  服务端 metadata 包装页
- `src/components/course/course-detail-page-client.tsx`
  课程详情交互页面

## 构建说明

`npm run build` 通过 `scripts/build.mjs` 执行：

1. 先尝试 `prisma generate`
2. 如果本地 Windows 出现 Prisma 引擎锁文件问题，但已有可用 client，则继续执行 `next build`
3. 最终保持构建流程稳定

## 路由清单

详细页面分组见 [ROUTE_MAP.md](./ROUTE_MAP.md)。
