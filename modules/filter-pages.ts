/**
 * 排除 components 和 composables 目录下的文件页面
 * 排除 .jsx 和 .tsx 文件页面
 */

import { defineNuxtModule } from 'nuxt/kit';
import picomatch from 'picomatch';

const dirExclude = picomatch('**/(components|composables)/**');
const fileExclude = picomatch('*.[jt]sx', { matchBase: true });

export default defineNuxtModule({
  hooks: {
    'pages:extend': (pages) => {
      for (let i = 0; i < pages.length;) {
        const path = pages[i]!.file;

        if (path) {
          if (dirExclude(path) || fileExclude(path)) {
            pages.splice(i, 1);
            continue;
          }
        }

        i++;
      }
    },
  },
});
