import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { addVitePlugin, defineNuxtModule } from 'nuxt/kit';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

const __dirname = dirname(fileURLToPath(import.meta.url));

const componentsTypePath = resolve(__dirname, '../.nuxt/components.custom.d.ts');

export default defineNuxtModule({
  setup(options, nuxt) {
    // 自动导入使用到的组件
    addVitePlugin(
      () => Components({
        dts: componentsTypePath,
        dirs: [],
        resolvers: [
          IconsResolver(), // 图标
        ],
      }),
    );

    // 添加组件类型声明文件
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: componentsTypePath,
      });
    });
  },
});
