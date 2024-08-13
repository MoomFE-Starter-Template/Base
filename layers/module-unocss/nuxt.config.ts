import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  unocss: {
    configFile: resolve(__dirname, 'unocss.config.ts'),
  },
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  features: {
    inlineStyles: false,
  },
  future: {
    compatibilityVersion: 4,
  },
});
