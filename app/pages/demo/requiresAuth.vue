<template>
  <div w-66 max-w-full el="6 op-50" rounded mxa px-3 py-2>
    <UserInfo />
  </div>
</template>

<script lang="ts" setup>
  useHead({
    title: '登录鉴权示例页',
  });

  defineRouteRules({ ssr: false });
  definePageMeta({
    layout: 'home',
    requiresAuth: true,
  });
</script>
