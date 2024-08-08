import { type UsernameLoginData, getUserInfo, usernameLogin } from '@/apis/auth';
import { accessToken } from '@/shared/env';

export const useAuthStore = defineStore('auth', () => {
  /** 是否登录 */
  const isLogin = computed(() => !!accessToken.value);

  /** 用户名登录 */
  const loginByUsername = useRequest((data: UsernameLoginData) => {
    return usernameLogin(data).then((res) => {
      accessToken.value = res.data.access_token;
    });
  });

  /** 用户信息 */
  const info = useRequest(getUserInfo);

  // 登录后获取用户信息
  wheneverImmediate(isLogin, () => {
    info.execute();
  });

  return {
    isLogin,

    loginByUsername,
    info,
  };
});
