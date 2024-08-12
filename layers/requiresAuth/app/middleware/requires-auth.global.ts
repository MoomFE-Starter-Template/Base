export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.meta.requiresAuth) return;

  const auth = useAuthStore();

  // 未登录则跳转到登录页
  if (!auth.isLogin) {
    return navigateTo({
      path: useAppConfig().loginPath,
      query: {
        redirect: to.fullPath,
      },
    });
  }

  // 确保用户信息获取到了
  if (!auth.info.isSuccess) {
    if (!auth.info.isLoading) auth.info.execute();

    const nuxt = useNuxtApp();

    try {
      await until(() => auth.info.isSuccess).toBeTruthy();
    }
    catch (error: any) {
      console.error(error);
      nuxt.runWithContext(() => abortNavigation());
    }
  }
});
