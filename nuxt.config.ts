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

  // https://github.com/nuxt/nuxt/issues/31352#issuecomment-2757768120
  vite: {
    $server: {
      build: {
        rollupOptions: {
          output: { preserveModules: false },
        },
      },
    },
  },

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
