<template>
  <Logo class="mx-auto" />

  <p class="mt-2">基础项目模板</p>

  <div class="mt-6">
    <input
      v-model="name"
      id="name-input"
      class="w-62.5 max-w-full border border-gray-400 rounded-md outline-none text-center bg-transparent px-3 py-1.5"
      placeholder="你的名字是？"
      @keydown.enter="go"
    >
  </div>

  <div class="mt-3">
    <Button id="go" :disabled="!name" @click="go">确定</Button>
  </div>
</template>

<script lang="ts" setup>
  const name = ref('');

  function go() {
    navigateTo(`/hello/${encodeURIComponent(name.value)}`);
  }

  definePageMeta({
    layout: 'home',
  });
</script>
