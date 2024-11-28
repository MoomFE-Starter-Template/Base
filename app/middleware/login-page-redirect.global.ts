import { accessToken } from '~/shared/env';

/**
 * 登录页已登录重定向
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const appConfig = useAppConfig();

  if (to.path === appConfig.loginPath) {
    const auth = useAuthStore();

    if (auth.isLogin) {
      // 已获取到用户信息, token 有效, 不需要再次登录, 阻止跳转
      if (auth.info.isSuccess)
        return abortNavigation();

      // 未获取用户信息, 发起获取用户信息请求
      if (!auth.info.isLoading)
        auth.info.execute();

      // 等待获取用户信息完成
      // 获取成功则跳转到默认页面, 否则清空 token
      try {
        await until(() => auth.info.isFinished).toBeTruthy();

        if (!auth.info.isSuccess) {
          throw new Error('登录失败');
        }

        return navigateTo({
          path: (to.query.redirect as string) || appConfig.defaultRedirectPath,
          replace: true,
        });
      }
      catch {
        accessToken.value = '';
      }
    }
  }
});
