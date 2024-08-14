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
    titleTemplate: config.titleTemplate,
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  });
</script>
