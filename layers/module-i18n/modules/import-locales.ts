import type { LocaleObject } from '@nuxtjs/i18n';
import { fileURLToPath } from 'node:url';
import fg from 'fast-glob';
import { defineNuxtModule } from 'nuxt/kit';
import { dirname, resolve } from 'pathe';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** 语言文件目录 */
const langDir = resolve(__dirname, '../../../app/locales');

/**
 * 语言列表
 *  - code: 语言代码
 *  - name: 语言名称
 *  - language: 语言标识 ( 用于设置到 html 标签的 lang 属性上使用, 默认继承 code )
 */
const langs: LocaleObject[] = [
  { code: 'cn', name: '简体中文', language: 'zh-CN' },
  { code: 'en', name: 'English' },
];

export default defineNuxtModule({
  async setup(options, nuxt) {
    const locales: LocaleObject[] = [];

    for (const lang of langs) {
      const file = await fg(`${lang.code}.*`, { cwd: langDir });
      const files = await fg(`${lang.code}/*`, { cwd: langDir });

      locales.push({
        ...lang,
        language: lang.language ?? lang.code,
        files: [...file, ...files],
      });
    }

    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir,
        locales,
      });
    });
  },
});
