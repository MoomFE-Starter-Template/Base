<template>
  <div w-66 max-w-full el="6 op-50" rounded mxa px-3 py-2>
    <UserInfo />
  </div>
</template>

<script lang="ts" setup>
  const { t } = useI18n({ useScope: 'local' });

  useHead({
    title: () => t('title'),
  });

  defineRouteRules({ ssr: false });
  definePageMeta({
    layout: 'home',
    requiresAuth: true,
  });
</script>

<i18n lang="yaml">
cn:
  title: 登录鉴权示例页
en:
  title: Requires Auth Demo Page
</i18n>
