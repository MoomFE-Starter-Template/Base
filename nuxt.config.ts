// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      /** 接口请求基础路径 */
      API_BASE_URL: 'https://apifoxmock.com/m1/4781098-4434938-default',
    },
  },

  modules: [
    // 原子化 CSS 引擎
    '@unocss/nuxt',
    // 将图标作为组件导入
    ['unplugin-icons/nuxt', { scale: 1 }],
    // 状态管理
    '@pinia/nuxt',
    // VueUse 集成
    '@vueuse/nuxt',
    // @mixte/use 集成
    '@mixte/use/nuxt',
    // 深色模式
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'light', // 修改此处的值, 需要同步修改 app/app.config.ts 的 colorMode
    classSuffix: '',
    disableTransition: true,
  },

  css: [
    '@unocss/reset/tailwind-compat.css',
    '@/assets/css/index.scss',
  ],

  devtools: {
    enabled: true,
  },

  features: {
    // 针对 UnoCSS
    inlineStyles: false,
  },

  experimental: {
    typedPages: true,
    viewTransition: true,
    inlineRouteRules: true,
  },

  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
});
