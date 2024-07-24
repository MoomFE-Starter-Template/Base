// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/icon',
  ],

  icon: {
    componentName: 'NuxtIcon',
    mode: 'svg',
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
