<template>
  <Logo class="mx-auto" />

  <SparklesText :text="t('index.title')" class="text-base fw-unset mt-2" />

  <div class="mt-6">
    <input
      v-model="name"
      id="name-input"
      class="w-62.5 max-w-full border border-gray-400 rounded-md outline-none text-center bg-transparent px-3 py-1.5"
      :placeholder="t('index.whats-your-name')"
      @keydown.enter="go"
    >
  </div>

  <div class="mt-3">
    <Button id="go" :disabled="!name" @click="go">{{ t('index.go') }}</Button>
  </div>
</template>

<script lang="ts" setup>
  const { t } = useI18n();

  const name = ref('');

  function go() {
    navigateTo(`/hello/${encodeURIComponent(name.value)}`);
  }

  definePageMeta({
    layout: 'home',
  });
</script>
