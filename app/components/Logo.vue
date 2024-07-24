<template>
  <div class="relative" :class="props.size">
    <NuxtIcon name="logos:vue" class="size-full" />
    <NuxtIcon name="carbon:template" class="size-1/2 absolute right-0 bottom-0" />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'size-12',
    },
  });
</script>
