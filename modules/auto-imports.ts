/**
 * 添加组件自动导入目录
 */

import { defineNuxtModule } from 'nuxt/kit';

export default defineNuxtModule({
  hooks: {
    'components:dirs': (dirs) => {
      dirs.push({
        path: '~/components-private',
        global: true,
      });
    },
  },
});
