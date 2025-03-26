<template>
  <NuxtLoadingIndicator />
  <el-config-provider :locale="locale === 'cn' ? cn : en" :message="{ showClose: true, grouping: true }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </el-config-provider>
</template>

<script lang="ts" setup>
  import en from 'element-plus/es/locale/lang/en';
  import cn from 'element-plus/es/locale/lang/zh-cn';
  import 'element-plus/theme-chalk/src/index.scss';

  const config = useAppConfig();

  const { t, locale } = useI18n();

  const route = useRoute();

  useHead({
    title: () => t(route.meta.title ?? config.defaultTitle, 1, { missingWarn: false }),
    // titleTemplate: config.titleTemplate, // 在 i18n 中有做处理, 详见此处的说明: ../layers/module-i18n/README.md
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  });
</script>
