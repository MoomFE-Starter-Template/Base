<h1 align="center">项目快速启动模板</h1>
<h3 align="center">最基础的 Nuxt 项目模板 ( SSG 优先 )</h3>

<br>

## 特性

- 💚 [Nuxt](https://nuxt.com) - SSR、SSG、[布局](https://nuxt.com/docs/guide/directory-structure/layouts)、[基于文件的路由](https://nuxt.com/docs/getting-started/routing)、[组件、API 自动导入](https://nuxt.com/docs/guide/concepts/auto-imports)
- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io) 优先 - 就是快！
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的原子化 CSS 引擎
- 😃 [各种图标集为你所用](https://github.com/iconify/icon-sets) - 150+ 图标集, 200000+ 图标为你所用, 从不妥协
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 🦾 TypeScript 支持

<br>

## 预配置

### UI 框架
  - [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的原子化 CSS 引擎

### Icons
  - [Iconify](https://iconify.design) - 使用任意的图标集, 使用 [Icônes](https://icones.netlify.app) 或 [iconify](https://icon-sets.iconify.design) 查看或搜索图标
    - [用组件的方式使用图标](https://github.com/unplugin/unplugin-icons)
    - [用 CSS 的方式使用图标](https://unocss.dev/presets/icons)

### 组件库
  - 待添加

### 插件
  - 待添加

### 编码风格
  - 使用 Composition API 的 [\<script setup\> SFC 语法](https://github.com/vuejs/rfcs/pull/227)
  - [ESLint](https://eslint.org) 配置为 [@moomfe/eslint-config](https://github.com/MoomFE/eslint-config), 单引号, 有分号

### 开发工具
  - [TypeScript](https://www.typescriptlang.org)
  - [pnpm](https://pnpm.js.org) - 快, 节省磁盘空间的包管理器
  - [VS Code](https://code.visualstudio.com)- IDE
    - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE 支持
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码风格检查及修正
    - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS 样式提示及自动补全
    - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示及自动补全

<br>

## 开始

使用项目根目录的 `***.code-workspace` 文件进入 VsCode 工作区

安装相应的 VsCode 扩展 ( 首次进入工作区时, 右下角会提示安装 ), 可以在扩展界面, 输入 `@recommended` 检查安装状态

执行以下命令就可以启动项目 ( 默认启动 `h5` 项目, 其他指令查看 `package.json` )

```bash
  pnpm dev # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```
