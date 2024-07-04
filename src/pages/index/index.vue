<template>
  <div w-62.5 mxa mt-6>
    <ElInput
      v-model="name"
      placeholder="你的名字是？"
    />
  </div>

  <div mt-3>
    <ElButton type="primary" :disabled="!name" @click="go">确定</ElButton>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElButton, ElInput } from 'element-plus';
  import 'element-plus/theme-chalk/index.css';

  const name = ref('');

  function go() {
    window.location.href = `/hello/${name.value}`;
  }
</script>
