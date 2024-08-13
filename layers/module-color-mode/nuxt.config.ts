export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'light', // 修改此处的值, 需要同步修改 app/app.config.ts 的 colorMode
    classSuffix: '',
    disableTransition: true,
  },
  future: {
    compatibilityVersion: 4,
  },
});
