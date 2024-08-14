import { defineNuxtModule } from 'nuxt/kit';

export default defineNuxtModule({
  hooks: {
    // 添加组件自动导入目录
    'components:dirs': function (dirs) {
      dirs.push({
        path: '~/components-private',
        global: true,
      });
    },
  },
});
