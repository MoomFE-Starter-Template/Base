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
            {{ $t('login.login') }}
          </ElButton>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import SpinnersRing from '~icons/svg-spinners/ring-resize';
  import UsernameForm from './components/username-form.vue';

  const { t } = useI18n();

  useHead({
    title: () => t('login.login'),
  });

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
      message: t('login.login-success'),
      duration: 1500,
      onClose: redirect,
    });
  }

  async function checkAgree() {
    if (agree.value) return;

    await ElMessageBox({
      title: t('login.terms-title'),
      message: RenderAgree({ start: t('login.read-and-agree') }),
      confirmButtonText: t('login.agree'),
      cancelButtonText: t('login.disagree'),
      showCancelButton: true,
      closeOnClickModal: false,
      closeOnPressEscape: false,
    })
      .then(() => {
        agree.value = true;
      });
  }

  /** 渲染服务协议与隐私保护, 方便复用 */
  function RenderAgree({ start }: { start?: string }) {
    return (
      <div class="text-sm lh-[--el-checkbox-height] break-all">
        <span>
          {start ?? t('login.read-and-agreed')}
        </span>
        <span class="c-([--el-color-primary] hover:[--el-color-primary-light-3]) cursor-pointer" onClick={no}>{t('login.user-agreement')}</span>
        <span>{t('login.and')}</span>
        <span class="c-([--el-color-primary] hover:[--el-color-primary-light-3]) cursor-pointer" onClick={no}>{t('login.privacy-agreement')}</span>
      </div>
    );
  }

  function no() {
    ElMessage.error(t('login.none'));
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

    const message = ElMessage.info({ message: t('login.get-login-status'), icon: SpinnersRing, plain: true, duration: 0 });

    try {
      await auth.info.execute();
      message.close();
      ElMessage.success({
        message: t('login.user-logged-in'),
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
