import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineNuxtModule } from '@nuxt/kit';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtModule({
  hooks: {
    // 添加组件自动导入目录
    'components:dirs': function (dirs) {
      dirs.push({
        path: '~/components-private',
        global: true,
      });
    },
    // 添加 API 自动导入目录
    'imports:dirs': function (dirs) {
      dirs.push(
        resolve(__dirname, '../app/stores'),
      );
    },
  },
});
