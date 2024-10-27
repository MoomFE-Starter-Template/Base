// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // 状态管理
    '@pinia/nuxt',
    // VueUse 集成
    '@vueuse/nuxt',
    // @mixte/use 集成
    '@mixte/use/nuxt',
  ],

  css: [
    '@/assets/css/index.scss',
  ],

  devtools: {
    enabled: true,
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
