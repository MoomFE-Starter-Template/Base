import { defineConfig } from 'astro/config';
import Vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    Vue({
      jsx: true,
      devtools: true,
    }),
  ],
});
