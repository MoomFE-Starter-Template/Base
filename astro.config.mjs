import { defineConfig } from 'astro/config';
import Vue from '@astrojs/vue';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    Vue({
      jsx: true,
      devtools: true,
    }),
    UnoCSS({
      injectReset: '@unocss/reset/tailwind-compat.css',
    }),
  ],
});
