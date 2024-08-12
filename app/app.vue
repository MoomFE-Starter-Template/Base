<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  const config = useAppConfig();

  useHead({
    title: config.defaultTitle,
    titleTemplate: config.titleTemplate,
  });
</script>
