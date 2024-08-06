<template>
  <div text-center px-4 py-10>
    <slot />
    <Footer />

    <ExamplePages v-if="$route.path === '/'" />
  </div>
</template>

<script lang="ts" setup>

</script>
