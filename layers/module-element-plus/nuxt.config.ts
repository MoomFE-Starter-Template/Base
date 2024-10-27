import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
  ],
  // https://nuxt.com/modules/element-plus
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
    defaultLocale: 'zh-cn',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "${resolve(__dirname, 'app/assets/css/element-plus/index.scss')}" as element;`,
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
