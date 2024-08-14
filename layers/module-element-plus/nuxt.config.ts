import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
  ],
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${resolve(__dirname, 'app/assets/css/element-plus/index.scss')}" as element;`,
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});