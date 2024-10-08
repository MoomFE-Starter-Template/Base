export default defineNuxtRouteMiddleware(async (to) => {
  const config = useAppConfig();

  // 白名单页面不需要鉴权
  if (config.requiresAuthWhiteList?.includes(to.path)) return;

  // 是否需要鉴权, 默认不需要
  const requiresAuth = to.meta.requiresAuth ?? false;

  if (!requiresAuth) return;

  const auth = useAuthStore();

  // 未登录则跳转到登录页
  if (!auth.isLogin) {
    return navigateTo({
      path: config.loginPath,
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
