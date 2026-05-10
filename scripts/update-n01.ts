import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Updating N-01 course content...')

  // N-01: HIGO是什么 - Updated version
  await prisma.course.update({
    where: { id: 'n01' },
    data: {
      title: 'HIGO是什么 — 一页纸说清楚',
      description: '如何用一句话让陌生人记住HIGO？本课程详细介绍HIGO公司定位、七大国际认证、权威专家团队。',
      content: `# HIGO是什么 — 一页纸说清楚

## 一、公司定位

> HIGO = HIGO Global Biotech Group（海购全球生物科技集团）
> 一句话定位：**专注基因抗衰科技的跨国企业**

## 二、公司优势

| 优势 | 说明 |
|------|------|
| 权威认证 | FDA、cGMP等七大国际认证 |
| 专家团队 | 哈佛、杜克、斯坦福等世界顶级学者 |
| 科研实力 | 基因抗衰领域多年研发经验 |
| 全球化布局 | 美国、马来西亚、韩国、越南等 |

## 三、七大国际认证

1. **FDA认证** — 美国食品药品监督管理局
2. **cGMP认证** — 动态药品生产管理规范
3. **非转基因认证**
4. **LAB TESTED** — 实验室认证
5. **HALAL清真食品认证**
6. **美国制造认证**
7. **NSF国际认证**

## 四、权威专家团队

- **Reginald** — 前微软营销官，斯坦福背景
- **Winfred** — 杜克大学教授，美国国家医学院院士
- **Valentine** — 莫纳什大学免疫学先锋，40年研究
- **Armstrong** — 哈佛/斯坦福干细胞专家
- **Douglas** — 新加坡神经科学专家，AKG研究者

## 五、一分钟话术（直接用）

> "HIGO是一家专注于基因抗衰科技的跨国企业，有FDA、cGMP等七大国际权威认证，研发团队全是世界顶级专家，有杜克大学教授、哈佛斯坦福的学者，专注研究抗衰老40多年。产品涵盖AKG、CELL、荷尔蒙三大系列，从基因层面帮助人们实现健康衰老。专注基因抗衰科技，你说这样的公司靠不靠谱？"

## 学习检验
- [ ] 能说出HIGO三个关键词
- [ ] 能说出七大国际认证
- [ ] 能说出至少3个权威专家`,
    }
  })

  console.log('N-01 updated successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })