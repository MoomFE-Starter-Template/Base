import CustomPreset from './preset/custom';

export default defineNuxtConfig({
  modules: [
    // '@primevue/nuxt-module',
  ],
  // https://primevue.org/nuxt/
  primevue: {
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
