export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    const config = useAppConfig();
    const { t, locale, locales } = useI18n();

    useHead({
      // 设置 html 标签的 lang 属性
      htmlAttrs: {
        lang: () => locales.value.find(item => item.code === locale.value)!.language,
      },
      // 对 title 进行国际化处理
      titleTemplate: (title) => {
        const iTitle = title ? t(title, 1, { missingWarn: false }) : undefined;
        return t(config.titleTemplate(iTitle), 1, { missingWarn: false });
      },
    });
  });
});
