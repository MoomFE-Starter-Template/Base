import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // 原子化 CSS 引擎
    '@unocss/nuxt',
    // 将图标作为组件导入
    ['unplugin-icons/nuxt', { scale: 1 }],
  ],

  vite: {
    plugins: [
      // 自动导入使用到的组件
      Components({
        dts: resolve(__dirname, './app/components.d.ts'),
        dirs: [],
        resolvers: [
          IconsResolver(), // 图标
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
