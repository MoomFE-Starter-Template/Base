export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  // https://nuxt.com/modules/i18n
  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'cn',
  },
  future: {
    compatibilityVersion: 4,
  },
});
