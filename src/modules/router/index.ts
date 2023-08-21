import type { UserModule } from '@/types';
import { settings } from '@/settings';

export const install: UserModule = ({ router, app }) => {
  // 设置页面标题
  router.afterEach((to) => {
    const meta = to.meta || {};
    const titleTemplate = (meta.titleTemplate ?? settings.titleTemplate ?? `:title | ${settings.name}`) as string;
    const title = `${meta.title ?? ''}`;

    document.title = titleTemplate.replaceAll(
      ':title',
      app.config.globalProperties.$t(title, 1, {
        fallbackWarn: false,
        missingWarn: false,
      }),
    );
  });
};
