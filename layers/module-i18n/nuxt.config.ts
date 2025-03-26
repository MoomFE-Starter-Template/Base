export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  // https://nuxt.com/modules/i18n
  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'cn',
    bundle: {
      // https://github.com/nuxt-modules/i18n/issues/3208
      optimizeTranslationDirective: false,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
