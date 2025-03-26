import { defineConfig, presetAttributify, presetIcons, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetExtra } from 'unocss-preset-extra';

export default defineConfig({
  theme: {
    // 断点
    breakpoints: {
      'xs': '480px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // 过渡持续时间
    duration: {
      colors: '300ms',
    },
  },
  presets: [
    // 和 Tailwind 3 类似的预设
    presetWind3(),
    // 属性模式
    presetAttributify({
      prefix: 'un:',
    }),
    // 图标预设
    presetIcons(),
    // 类名简写及额外一些样式预设
    presetExtra(),
  ],
  transformers: [
    // 在 CSS 中使用 @apply 指令
    transformerDirectives(),
    // 变体组功能
    transformerVariantGroup(),
  ],
  blocklist: [
    'container',
  ],
});
