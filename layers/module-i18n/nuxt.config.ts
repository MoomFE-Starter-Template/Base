import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  // https://nuxt.com/modules/i18n
  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'cn',
    vueI18n: resolve(__dirname, 'vue-i18n.options.ts'),
  },
  future: {
    compatibilityVersion: 4,
  },
});
