// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    preference: 'light',
    classSuffix: '',
  },

  css: [
    '@unocss/reset/tailwind-compat.css',
  ],

  features: {
    // 针对 UnoCSS
    inlineStyles: false,
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
});
