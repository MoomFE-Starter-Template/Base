import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { defineNuxtModule } from 'nuxt/kit';
import fg from 'fast-glob';
import type { LocaleObject } from '@nuxtjs/i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));

const langDir = resolve(__dirname, '../../../app/locales');

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
