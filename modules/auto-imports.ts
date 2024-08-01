import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizePath } from 'vite';
import { addVitePlugin, defineNuxtModule } from '@nuxt/kit';
import { parseModule } from 'magicast';

const __dirname = dirname(fileURLToPath(import.meta.url));

const storesPath = normalizePath(resolve(__dirname, '../app/stores'));

export default defineNuxtModule({
  hooks: {
    // 添加组件自动导入目录
    'components:dirs': function (dirs) {
      dirs.push({
        path: '~/components-private',
        global: true,
      });
    },
    // 添加状态管理目录的自动导入
    'imports:dirs': function (dirs) {
      dirs.push(storesPath);
    },
  },
  setup() {
    // 自动为状态管理目录下的文件添加热更新代码
    // https://pinia.vuejs.org/zh/cookbook/hot-module-replacement.html
    addVitePlugin(() => {
      return {
        name: 'stores-auto-hmr',
        transform(code, id) {
          if (!id.startsWith(storesPath) || !/\.tsx?$/.test(id)) return;

          const mod = parseModule(code);
          const exports = Object.keys(mod.exports);

          if (!exports.length) return;

          code = `${code}\n
if (import.meta.hot){
${
  exports.map(name => `  import.meta.hot.accept(acceptHMRUpdate(${name}, import.meta.hot));`)
}
}`;

          return code;
        },
      };
    });
  },
});
