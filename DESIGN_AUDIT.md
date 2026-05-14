# HIGO UI Design Audit

## 审计范围

- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/layout/header.tsx`
- `src/components/layout/mobile-nav.tsx`
- `src/components/layout/footer.tsx`
- `src/components/common/compliance-notice.tsx`
- `src/components/cards/course-card.tsx`
- `src/components/cards/product-card.tsx`
- `src/components/seven-day/seven-day-card.tsx`
- `src/components/scripts/script-card.tsx`
- `src/components/meetings/meeting-playbook-card.tsx`
- `src/components/compliance/phrasebook-card.tsx`
- 关键目标页：
  - `src/app/business/survival/7-day/page.tsx`
  - `src/app/scripts/page.tsx`
  - `src/app/scripts/[category]/page.tsx`
  - `src/app/meetings/playbooks/page.tsx`
  - `src/app/compliance/phrasebook/page.tsx`

## 1. 当前 UI 为什么显得 Low

- 当前不是一套系统，而是至少三套视觉语言叠加在一起：
  - 早期“科技营销页”系统：重渐变、粒子、DNA、细胞、发光。
  - “premium”系统：大圆角、玻璃卡、彩色 badge、大留白。
  - “academy”系统：深色 Hero + 大块渐变 + SaaS 卡片。
- 页面存在明显“模板拼接感”。
  - 首页、工具页、入口页、详情页的 Hero 语言不一致。
  - Header、Footer 是一套，页面主体又是另一套。
  - 卡片结构和色彩使用方式在不同模块里变化太大。
- 现在的“高级感”更多靠效果堆砌，而不是靠版式、层级和节奏建立。
  - Hero 太复杂。
  - 卡片太多。
  - 每个区域都想强调，导致没有真正的主次。
- 移动端不够像成熟产品，更像网页模板压缩到手机里。
  - 文字块太散。
  - 卡片种类太多。
  - 视觉噪音高。

## 2. 哪些颜色太多

- `globals.css` 里同时存在多套色板：
  - `--primary-dark`
  - `--primary-blue`
  - `--gold / --gold-light`
  - `--purple / --purple-light`
  - `--blue / --blue-light`
  - `--green / --green-light`
  - `--red`
- Hero 还使用了额外的荧光青、亮蓝、亮紫、发光红。
- 当前结构里经常出现“每个模块一个颜色”：
  - 7 天启动营绿色
  - 话术库蓝/紫
  - 合规页红/绿
  - 产品页又是多色
- 问题不是单个颜色不好，而是颜色承担了过多结构功能。
  - 颜色在当前版本里同时被拿来做分类、强调、背景、状态、按钮、图标。
  - 结果是“高级感”被“丰富感”取代。

## 3. 哪些阴影太重

- 旧系统里存在明显过重的阴影：
  - `--shadow-lg`
  - `--shadow-xl`
  - Hero 内发光阴影
  - 移动端底栏的较重上投影
- `premium-card`、`academy-*` 卡片普遍使用较厚投影。
- 现在的卡片更像“悬浮模块”，不是“克制信息面板”。
- 对高端商学院 / 高端 SaaS 来说，当前投影会让界面显得更商业模板化。

## 4. 哪些卡片太杂

- 首页是问题最集中的地方：
  - Hero 面板卡
  - 三大空间卡
  - 四大学习入口卡
  - 新人入口卡
  - 课程卡
  - 会议卡
  - 合规提醒卡
  - 每种卡的层级、边距、边框、背景都不同
- 7 天启动营的卡片种类也偏多：
  - 顶部总览卡
  - 下一阶段卡
  - Day 主卡
  - 动作卡
  - 标准话术卡
  - 禁止表达卡
  - 复盘卡
  - 合规提醒卡
  - 下一步卡
- 话术库 / SOP / 合规库的问题是：
  - 都是“工具型页面”，但看起来像不同主题模板。
  - 卡片组件内部结构也不统一。

## 5. 哪些移动端布局不合理

- 首页移动端首屏信息过多：
  - Hero 标题、副标题、按钮、迷你链接、统计面板同时出现。
  - 首屏不够干净，不像成熟 App 的首页。
- 移动端双列和单列切换不够统一：
  - 有些页面强行双列。
  - 有些卡片内容太多却仍然像入口卡。
- 很多页面在移动端仍然依赖“大卡片 + 多区块堆叠”，导致：
  - 一屏可见内容太少。
  - 阅读节奏断裂。
  - 滑动成本高。
- Footer 和底部导航叠加后，底部空间偏厚。
- 某些页面存在居中长文本，移动端阅读不够自然。

## 6. 哪些旧样式和新样式冲突

- `globals.css` 目前同时存在：
  - 旧 hero 系统：`.hero`、`.hero-particles`、`.dna-container`、`.cells-container`、`.molecules-container`
  - premium 系统：`.premium-*`
  - academy 系统：`.academy-*`
- 首页现在仍然直接引用旧 hero 粒子结构：
  - `page.tsx` 里还在渲染 `dna-strand`、`cell`、`molecule`
- 组件命名层面也存在冲突：
  - 视觉上想要“统一”
  - CSS 却是多命名体系并行
- 导致问题：
  - 很难判断哪个类是“当前标准”
  - 新页面容易继续叠加
  - 后续审美会越来越漂移

## 7. 哪些 inline style 应该收敛

- 审计中仍然发现大量 `style={{ ... }}`，尤其集中在：
  - 产品详情页
  - 资源页
  - 旧会议页
  - 课程详情页
  - 新近补的若干入口页和组件
- 本次重点范围内仍有 inline style 问题：
  - `product-card.tsx`
  - `scripts/page.tsx`
  - `scripts/[category]/page.tsx`
  - `business/survival/7-day/page.tsx`
  - `compliance/phrasebook/page.tsx`
- 这些 inline style 多数属于：
  - 颜色
  - 尺寸
  - 间距
  - 临时强调
- 问题不是“不能有任何 inline style”，而是现在它们已经在影响统一性。

## 8. 哪些页面最需要重做

- 第一优先级：
  - `/`
  - `/business/survival/7-day`
  - `/scripts`
  - `/scripts/[category]`
  - `/meetings/playbooks`
  - `/compliance/phrasebook`
- 第二优先级：
  - `Header`
  - `MobileNav`
  - `Footer`
  - `ComplianceNotice`
  - `CourseCard`
  - `ProductCard`
  - `SevenDayCard`
  - `ScriptCard`
  - `MeetingPlaybookCard`
  - `PhrasebookCard`
- 第三优先级：
  - 旧详情页中仍然大量依赖 inline style 的页面
  - 目前不建议在本轮一起大改

## 9. 本轮重构策略建议

- 不再继续扩张 `premium-*` 和 `academy-*`
- 新增一套更克制的 `ui-*` 系统作为当前标准
- 首页先彻底去粒子、去 DNA、去复杂 Hero
- 统一卡片：
  - 白底
  - 细边框
  - 极轻阴影
  - 统一圆角
  - 统一信息层级
- 工具页统一为“内部系统界面”而不是“营销页”
- 移动端优先：
  - 入口类双列
  - 内容类单列
  - 每个区域只保留必要的视觉强调

## 10. 结论

- 当前版本显得 Low，不是因为“还不够高级”，而是因为“高级效果太多、体系太多、主次太少”。
- 本轮正确方向应当是：
  - 少颜色
  - 少渐变
  - 少阴影
  - 少动画
  - 少大色块
  - 少中心化营销视觉
  - 多留白
  - 多统一
  - 多阅读节奏
  - 多 App / SaaS 感
