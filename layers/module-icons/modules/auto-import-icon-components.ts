import { fileURLToPath } from 'node:url';
import { addVitePlugin, defineNuxtModule } from 'nuxt/kit';
import { dirname, resolve } from 'pathe';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const componentsTypePath = resolve(__dirname, '../.nuxt/components.icons.d.ts');

export default defineNuxtModule({
  setup(options, nuxt) {
    // 自动导入使用到的图标组件
    addVitePlugin(
      () => Components({
        dts: componentsTypePath,
        dirs: [],
        resolvers: [
          IconsResolver(),
        ],
      }),
    );

    // 添加图标组件类型声明文件
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: componentsTypePath,
      });
    });
  },
});
