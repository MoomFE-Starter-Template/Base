import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    ['unplugin-icons/nuxt', { scale: 1 }],
  ],

  vite: {
    plugins: [
      Components({
        dts: resolve(__dirname, './app/components.d.ts'),
        dirs: [],
        resolvers: [
          IconsResolver(),
        ],
      }),
    ],
  },

  css: [
    '@unocss/reset/tailwind-compat.css',
  ],

  features: {
    // 针对 UnoCSS
    inlineStyles: false,
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
});
