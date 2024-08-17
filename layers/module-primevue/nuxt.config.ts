import CustomPreset from './preset/custom';

export default defineNuxtConfig({
  modules: [
    // '@primevue/nuxt-module',
  ],
  // https://primevue.org/nuxt/
  primevue: {
    // 哪个人才写的代码, 折腾我一个钟
    // https://github.com/primefaces/primevue/issues/6187
    autoImport: false,
    components: {
      prefix: 'prime',
    },
    directives: {
      prefix: 'prime',
    },
    options: {
      theme: {
        preset: CustomPreset,
        options: {
          darkModeSelector: '.dark',
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
