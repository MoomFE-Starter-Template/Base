import type { ColorSchema } from './types';

/** 默认颜色模式 */
const defaultColorMode: ColorSchema = 'light';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
  ],
  runtimeConfig: {
    app: {
      defaultColorMode,
    },
  },
  colorMode: {
    preference: defaultColorMode,
    classSuffix: '',
    disableTransition: true,
  },
  future: {
    compatibilityVersion: 4,
  },
});
