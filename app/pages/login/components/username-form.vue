<template>
  <ElForm ref="formRef" :model :rules :disabled="auth.loginByUsername.isLoading">
    <ElFormItem prop="username">
      <ElInput v-model="model.username" placeholder="请输入账号 ( admin )" clearable @keydown.enter="emit('submit')" />
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput v-model="model.password" type="password" placeholder="请输入密码 ( 123456 )" clearable @keydown.enter="emit('submit')" />
    </ElFormItem>
  </ElForm>
</template>

<script lang="ts" setup>
  import type { FormInstance, FormRules } from 'element-plus';
  import type { UsernameLoginData } from '@/apis/auth.js';

  const emit = defineEmits(['submit']);

  const auth = useAuthStore();

  const formRef = ref<FormInstance>();

  const model = reactive<UsernameLoginData>({
    username: '',
    password: '',
  });

  const rules = reactive<FormRules<UsernameLoginData>>({
    username: [
      { required: true, message: '请输入账号', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  });

  function login() {
    return auth.loginByUsername.execute(model);
  }

  defineExpose({
    validate: () => formRef.value?.validate(),
    login,
  });
</script>
