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
  import SpinnersRing from '~icons/svg-spinners/ring-resize';

  const config = useAppConfig();

  const route = useRoute();
  const auth = useAuthStore();

  const formRef = ref<InstanceType<typeof UsernameForm>>();

  const agree = ref(false);

  async function login() {
    await formRef.value!.validate();
    await checkAgree();
    await formRef.value!.login();

    ElMessage.success({
      message: '登录成功',
      duration: 1500,
      onClose: redirect,
    });
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

  function redirect() {
    const path = (route.query.redirect as string) || config.defaultRedirectPath;

    navigateTo(path, {
      replace: true,
    });
  }

  // 进入登录页时, 如果已登录, 更新一下用户信息, 如果没报错说明 Token 没过期, 的确在登录状态, 则跳转到默认页
  onMounted(async () => {
    if (!auth.isLogin) return;

    const message = ElMessage.info({ message: '正在获取登录状态 ...', icon: SpinnersRing, plain: true, duration: 0 });

    try {
      await auth.info.execute();
      message.close();
      ElMessage.success({
        message: '您已登录',
        duration: 1500,
        onClose: redirect,
      });
    }
    catch {
      message.close();
    }
  });
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
