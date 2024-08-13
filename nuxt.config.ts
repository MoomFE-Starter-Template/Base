// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      /** 接口请求基础路径 */
      API_BASE_URL: 'https://apifoxmock.com/m1/4781098-4434938-default',
    },
  },

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
