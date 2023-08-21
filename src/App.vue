<template>
  <router-view />
</template>

<script lang="ts" setup>
  import { settings } from '@/settings';

  const route = useRoute();
  const { t } = useI18n();

  // 设置页面标题
  {
    const meta = route.meta || {};
    const titleTemplate = (meta.titleTemplate ?? settings.titleTemplate ?? `:title | ${settings.name}`) as string;

    useHead({
      title: titleTemplate.replaceAll(':title', t(`${meta.title ?? ''}`)),
    });
  }
</script>
