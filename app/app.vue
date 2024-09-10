<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  const config = useAppConfig();

  useHead({
    title: config.defaultTitle,
    // titleTemplate: config.titleTemplate, // 在 i18n 中有做处理
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  });
</script>
