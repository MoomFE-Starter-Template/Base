<template>
  <div class="text-5xl">
    <i-iconoir-people-rounded class="inline-block" />
  </div>

  <p class="mt-2">
    {{ t('hi', { name: route.params.name }) }}
  </p>

  <p class="text-sm op-50">
    <em>{{ t('dynamic-route-demo') }}</em>
  </p>

  <div class="mt-6">
    <Button id="back" @click="$router.back()">{{ $t('button.back') }}</Button>
  </div>
</template>

<script lang="ts" setup>
  const { t } = useI18n({ useScope: 'local' });

  const route = useRoute();

  useSeoMeta({
    title: () => t('hi', { name: route.params.name }),
  });

  definePageMeta({
    layout: 'home',
  });
</script>

<i18n lang="yaml">
cn:
  hi: 你好, {name}
  dynamic-route-demo: 动态路由演示
en:
  hi: Hi, {name}
  dynamic-route-demo: Demo of dynamic route
</i18n>
