<template>
  <div class="footer flex justify-center text-(2xl center) mt-6">
    <!-- 回到首页 -->
    <button title="首页" @click="navigateTo('/')">
      <i-vaadin-home-o />
    </button>

    <!-- 跳转到 Github -->
    <button>
      <a class="c-inherit!" href="https://github.com/MoomFE-Starter-Template/Base" target="_blank" rel="noopener noreferrer">
        <i-mdi-github />
      </a>
    </button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .footer > * {
    --uno: opacity-60 hover:text-blue-5 hover:opacity-100 bg-transparent transition-(all duration-300) mx-2;
  }
</style>
