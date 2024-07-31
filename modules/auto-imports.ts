import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineNuxtModule } from 'nuxt/kit';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtModule({
  hooks: {
    'components:dirs': function (dirs) {
      dirs.push({
        path: '~/components-private',
        global: true,
      });
    },
    'imports:dirs': function (dirs) {
      dirs.push(
        resolve(__dirname, '../app/stores'),
      );
    },
  },
});
