import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: [
    'motion-v/nuxt',
  ],
  css: [
    resolve(__dirname, 'app/assets/css/inspira.scss'),
  ],
  future: {
    compatibilityVersion: 4,
  },
});
