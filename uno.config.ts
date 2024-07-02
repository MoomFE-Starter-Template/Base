import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetExtra } from 'unocss-preset-extra';
import { presetScrollbar } from 'unocss-preset-scrollbar';
import { outputFileSync } from 'fs-extra';
import { dataToEsm } from '@rollup/pluginutils';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    // 默认预设, 和 Tailwind 类似
    presetUno(),
    // 属性模式
    presetAttributify({
      prefix: 'un:',
    }),
    // 图标预设
    presetIcons(),
    // 类名简写及额外一些样式预设
    presetExtra(),
    // 滚动条
    presetScrollbar(),
  ],
  transformers: [
    // 在 CSS 中使用 @apply 指令
    transformerDirectives(),
    // 变体组功能
    transformerVariantGroup(),
  ],
  extendTheme: (theme) => {
    // 始终生成一个 UnoCSS 主题样式配置文件, 方便在 JS 中引用
    outputFileSync(
      resolve(__dirname, './src/shared/unocss.theme.ts'),
      `/* eslint-disable */\n\n${dataToEsm(theme, {
        preferConst: true,
        indent: '  ',
        objectShorthand: true,
      })}`,
    );
  },
});
