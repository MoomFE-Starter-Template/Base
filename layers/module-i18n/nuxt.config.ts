export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  // https://nuxt.com/modules/i18n
  i18n: {
    locales: [
      {
        code: 'zh-CN',
        language: 'zh-CN',
        name: '简体中文',
        files: ['zh-CN/index.yaml', 'zh-CN/login.yaml'],
      },
      {
        code: 'en-US',
        language: 'en-US',
        name: 'English',
        files: ['en-US/index.yaml', 'en-US/login.yaml'],
      },
    ],
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'zh-CN',
  },
  future: {
    compatibilityVersion: 4,
  },
});
