import { getUserInfo, logout as toLogout, usernameLogin, type UsernameLoginData } from '@/apis/auth';
import { accessToken } from '@/shared/env';

export const useAuthStore = defineStore('auth', () => {
  /** 是否登录 */
  const isLogin = computed(() => !!accessToken.value);

  /** 用户名登录 */
  const loginByUsername = useRequestReactive((data: UsernameLoginData) => {
    return usernameLogin(data).then((res) => {
      accessToken.value = res.data.access_token;
    });
  });

  /** 用户信息 */
  const info = useRequestReactive(getUserInfo);

  // 登录后获取用户信息
  wheneverImmediate(isLogin, () => {
    info.execute();
  });
  // 退出登录后重置用户信息
  wheneverImmediate(logicNot(isLogin), () => {
    loginByUsername.reset();
    info.reset();
  });

  /** 退出登录 */
  const logout = useRequestReactive((showToast?: boolean) => {
    return toLogout().finally(() => {
      accessToken.value = '';
      if (showToast) {
        ElMessage.success('退出登录成功');
      }
    });
  });

  return {
    isLogin,

    loginByUsername: computed(() => loginByUsername),
    info: computed(() => info),
    logout: computed(() => logout),
  };
});
