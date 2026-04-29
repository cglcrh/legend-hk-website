# 酄景科技 LegendHK 官网

> 酄景（香港）科技有限公司官方企业网站 —— 专注为海内外传统制造业提供AI智能化改造与落地应用服务

## 公司信息

| 项目 | 内容 |
|------|------|
| 公司全称 | 酄景（香港）科技有限公司 / LEGEND (HONGKONG) TECHNOLOGY CO. LIMITED |
| 成立时间 | 2021年 |
| 注册地址 | 香港新蒲岗大有街3号万廸广场19H |
| 登记证号 | 72627993-000-02-25-6 |
| 核心业务 | AI智能化改造、工业视觉检测、智能数据分析、技术咨询与实施 |

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: GitHub Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── components/
│   ├── Navbar.tsx          # 顶部导航栏
│   ├── HeroSection.tsx     # 首屏英雄区
│   ├── ServicesSection.tsx # 核心服务介绍
│   ├── SolutionsSection.tsx# 行业解决方案
│   ├── AboutSection.tsx    # 关于我们
│   ├── ContactSection.tsx  # 联系我们
│   └── Footer.tsx          # 页脚
├── App.tsx                 # 主应用组件
├── main.tsx                # 应用入口
└── index.css               # 全局样式
```

## 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages。

每次推送代码到 `main` 分支时，Actions 工作流会自动构建并将网站部署到 `https://<username>.github.io/legend-hk-website/`。

---

© 2025 酄景（香港）科技有限公司 LEGEND (HONGKONG) TECHNOLOGY CO. LIMITED
