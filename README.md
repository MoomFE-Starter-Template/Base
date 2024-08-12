<h1 align="center">项目快速启动模板</h1>
<h3 align="center">最基础的 Nuxt 项目模板 ( SSG 优先 )</h3>

<br>

## 特性

- 💚 [Nuxt](https://nuxt.com) - SSR、SSG、[布局](https://nuxt.com/docs/guide/directory-structure/layouts)、[基于文件的路由](https://nuxt.com/docs/getting-started/routing)、[组件、API 自动导入](https://nuxt.com/docs/guide/concepts/auto-imports)
- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io) 优先 - 就是快！
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的原子化 CSS 引擎
- 😃 [各种图标集为你所用](https://github.com/iconify/icon-sets) - 150+ 图标集, 200000+ 图标为你所用, 从不妥协
- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 🌙 深色模式
- 🦾 TypeScript 支持
- ☁️ 零配置部署 Netlify 和 Vercel

<br>

## 预配置

### UI 框架 & 组件库
  - [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的原子化 CSS 引擎
  - [Element Plus](https://element-plus.org/zh-CN)

### Icons
  - [Iconify](https://iconify.design) - 使用任意的图标集, 使用 [Icônes](https://icones.netlify.app) 或 [iconify](https://icon-sets.iconify.design) 查看或搜索图标
    - [用组件的方式使用图标](https://github.com/unplugin/unplugin-icons)
    - [用 CSS 的方式使用图标](https://unocss.dev/presets/icons)

### 插件
  - [VueUse](https://vueuse.org) - 实用的 Composition API 工具合集
  - [@mixte/use](https://mixte.moomfe.com) - 一些 Vue 组合式函数

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

## 项目目录结构
- **\*\*\*.code-workspace**: VsCode 工作区文件, 使用这个打开项目
- **public**: 打包后需要放到根目录的文件
- **dist**: 打包后的代码
- **src**: 源码
  - [**assets**](https://nuxt.com/docs/guide/directory-structure/assets): 存放静态资源
  - **shared**: 公用变量 or 函数
  - **apis**: 接口请求定义
  - **lib**: 外部依赖库 ( 不满足需求需要重构时或者外部依赖库有 BUG 时, 从 node_modules 移至这里 )
  - [**utils**](https://nuxt.com/docs/guide/directory-structure/utils): 工具函数
  - **workers**: 存放独立的 Web Worker 应用
  - **stores**: 状态存储
  - [**composables**](https://nuxt.com/docs/guide/directory-structure/composables): 组合式函数
  - [**components**](https://nuxt.com/docs/guide/directory-structure/components): 公共组件 ( 相对独立的组件, 离开当前项目也能使用的组件 )
  - **components-private**: 私有组件 ( 只能在当前项目中使用的组件, 比如说包含了业务代码的组件 )
  - [**plugins**](https://nuxt.com/docs/guide/directory-structure/plugins): Nuxt 插件
  - [**middleware**](https://nuxt.com/docs/guide/directory-structure/middleware): 路由中间件
  - [**layouts**](https://nuxt.com/docs/guide/directory-structure/layouts): 布局组件
  - [**pages**](https://nuxt.com/docs/guide/directory-structure/pages): 页面

<br>

## 开始

使用项目根目录的 `***.code-workspace` 文件进入 VsCode 工作区

安装相应的 VsCode 扩展 ( 首次进入工作区时, 右下角会提示安装 ), 可以在扩展界面, 输入 `@recommended` 检查安装状态

执行以下命令就可以启动项目 ( 默认启动 `h5` 项目, 其他指令查看 `package.json` )

```bash
  pnpm dev # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

<br>

## 指南

### 登录鉴权

使用 `definePageMeta` 时定义 `requiresAuth: true` 设置该页面需要登录才能访问, 同时需要将该页面禁用服务器端渲染

这部分逻辑是在 [layers/requiresAuth](./layers/requiresAuth/) 中实现的, 可根据使用情况自行修改, 若不需要登录鉴权, 可以删除该文件夹

```ts
defineRouteRules({
  ssr: false // 禁用服务器端渲染
});
definePageMeta({
  requiresAuth: true // 设置页面需要登录才能访问
});
```
