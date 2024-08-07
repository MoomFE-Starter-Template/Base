<template>
  <div min-h-full flex="~ col items-center" relative>
    <!-- 背景 -->
    <div class="login-bg w-full bg-gradient-(to-bl from-blue-5 to-cyan-5) dark:bg-gradient-(from-blue-6 to-cyan-6)" />

    <!-- 登录 -->
    <div class="login-form-wrap" w-90 max-w-full absolute pb-10 px-4>
      <h1 text="4xl white">Hi</h1>

      <div el="6 op-48" bg="white dark:neutral-8" rounded mt-5 pt-7 pb-6 px-3>
        <UsernameForm ref="formRef" />

        <div flex="~ items-start gap-2" style="--el-checkbox-height: 24px">
          <ElCheckbox v-model="agree" :disabled="auth.loginByUsername.isLoading" />
          <RenderAgree />
        </div>

        <div mt-6>
          <ElButton
            class="w-full" type="primary"
            :loading="auth.loginByUsername.isLoading"
            @click="login()"
          >
            登录
          </ElButton>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import UsernameForm from './components/username-form.vue';

  const auth = useAuthStore();

  const formRef = ref<InstanceType<typeof UsernameForm>>();

  const agree = ref(false);

  async function login() {
    await formRef.value!.validate();
    await checkAgree();
    await formRef.value!.login();
  }

  async function checkAgree() {
    if (agree.value) return;

    await ElMessageBox({
      title: '服务协议与隐私保护',
      message: RenderAgree({ firstWord: '请' }),
      confirmButtonText: '同意',
      cancelButtonText: '不同意',
      showCancelButton: true,
      closeOnClickModal: false,
      closeOnPressEscape: false,
    })
      .then(() => {
        agree.value = true;
      });
  }

  /** 渲染服务协议与隐私保护, 方便复用 */
  function RenderAgree({ firstWord }: { firstWord?: string }) {
    return (
      <div class="text-sm lh-[--el-checkbox-height] break-all">
        <span>
          {firstWord ?? '已'}
          阅读并同意
        </span>
        <span class="c-([--el-color-primary] hover:[--el-color-primary-light-3]) cursor-pointer" onClick={no}>《用户协议》</span>
        <span>和</span>
        <span class="c-([--el-color-primary] hover:[--el-color-primary-light-3]) cursor-pointer" onClick={no}>《隐私协议》</span>
      </div>
    );
  }

  function no() {
    ElMessage.error('暂无');
  }
</script>

<style lang="scss" scoped>
  $bg-h: max(50vmin, 300px);
  $bg-right-end: 0.7;

  .login-bg{
    height: $bg-h;
    clip-path: polygon(0 0, 100% 0, 100% ($bg-right-end * 100%), 0 100%);
  }

  .login-form-wrap{
    top: calc($bg-h - calc($bg-h * (1 - $bg-right-end)) - 40px);
  }
</style>
