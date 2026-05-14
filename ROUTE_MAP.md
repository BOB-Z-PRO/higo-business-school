# ROUTE MAP

> v1.1 PRD based routing. Last updated: 2026-05-14.

## Public

- `/`
  首页 - v1.1 四大模块主入口
- `/login`
  登录页
- `/register`
  注册页
- `/profile`
  个人中心

## v1.1 Core Modules

### 新人7天启动营

- `/business/survival/7-day`
  新人7天启动营首页

### 话术训练库

- `/scripts`
  话术训练库总入口
- `/scripts/invite`
  邀约话术
- `/scripts/product`
  产品话术
- `/scripts/opportunity`
  机会话术
- `/scripts/follow-up`
  跟进话术
- `/scripts/objection`
  异议处理
- `/scripts/meeting-invite`
  会议邀请话术
- `/scripts/newcomer-coaching`
  新人带教话术

### 会议 SOP 库

- `/meetings/playbooks`
  会议SOP库总入口
- `/meetings/playbooks/newcomer`
  新人启动会SOP
- `/meetings/playbooks/product`
  产品分享会SOP
- `/meetings/playbooks/opportunity`
  机会说明会SOP

### 合规表达替换库

- `/compliance/phrasebook`
  合规表达替换库

## Business / 经营篇

- `/business`
  经营篇首页
- `/business/survival`
  生存空间
- `/business/survival/objections`
  新人疑义解答
- `/business/survival/30-day`
  30天经营训练营
- `/business/living`
  生活空间
- `/business/life`
  生命空间
- `/business/course/[id]`
  课程详情

## Company / 公司篇

- `/company`
  公司篇首页
- `/company/intro`
  公司介绍
- `/company/strategy`
  海购国际战略
- `/company/five-sentences`
  海购五句话
- `/company/global`
  全球布局
- `/company/strength`
  企业实力
- `/company/certifications`
  资质认证
- `/company/foundation`
  核心基石
- `/company/culture`
  企业文化
- `/company/future`
  未来发展

## Products / 产品篇

- `/products`
  产品篇首页
- `/products/gnakg`
  GnAKG产品页
- `/products/gncell`
  GnCELL产品页
- `/products/gn-hormone`
  GN荷尔蒙产品页
- `/products/gn-brain`
  GN大脑产品页
- `/products/science`
  科研背景

## Meetings / 会议中心

- `/meetings`
  会议中心首页
- `/meetings/opportunity`
  招商说明会
- `/meetings/product`
  产品分享会
- `/meetings/newcomer`
  新人启动会
- `/meetings/morning`
  早会精选
- `/meetings/leader`
  领导人会议
- `/meetings/ppt`
  讲课PPT中心

## Resources / 素材中心

- `/resources`
  素材中心
- `/resources/ppt`
  PPT素材

## Compliance / 合规中心

- `/compliance`
  合规中心首页
- `/compliance/phrasebook`
  合规表达替换库

## Learning / 学习系统

- `/course`
  全部课程
- `/course/[id]`
  课程详情
- `/chapters`
  章节列表
- `/chapters/[slug]`
  章节详情
- `/path`
  成长路径
- `/school/[slug]`
  学院详情

## Admin / 管理后台

- `/admin`
  管理后台首页
- `/admin/users`
  用户管理
- `/admin/schools`
  学院管理
- `/admin/chapters`
  章节管理
- `/admin/modules`
  模块管理
- `/admin/courses`
  课程管理
- `/admin/settings`
  系统设置

## API

### Auth

- `/api/auth/[...nextauth]`
- `/api/auth/register`

### Public

- `/api/public/home`
- `/api/public/settings`
- `/api/public/schools`
- `/api/public/chapters`
- `/api/public/courses`
- `/api/public/courses/[id]`

### Admin

- `/api/admin/stats`
- `/api/admin/users`
- `/api/admin/users/[id]`
- `/api/admin/schools`
- `/api/admin/schools/[id]`
- `/api/admin/chapters`
- `/api/admin/chapters/[id]`
- `/api/admin/modules`
- `/api/admin/modules/[id]`
- `/api/admin/courses`
- `/api/admin/courses/[id]`
- `/api/admin/settings`

### Course

- `/api/courses/[id]/quiz`
- `/api/courses/[id]/quiz/submit`