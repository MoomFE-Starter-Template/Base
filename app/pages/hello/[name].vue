<template>
  <div class="text-5xl">
    <NuxtIcon name="iconoir:people-rounded" class="inline-block" />
  </div>

  <p class="mt-2">
    你好，{{ route.params.name }}
  </p>

  <p class="text-sm op-50">
    <em>动态路由演示</em>
  </p>

  <div class="mt-6">
    <Button @click="$router.back()">返回</Button>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();

  useSeoMeta({
    title: `你好，${route.params.name}`,
  });

  definePageMeta({
    layout: 'home',
  });
</script>
