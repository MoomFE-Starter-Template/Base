import type { UsernameLoginData } from '@/apis/auth';
import type { FetchError, FetchResponse } from 'ofetch';
import type { ResponseData } from '~/apis/types';
import { getUserInfo, logout as toLogout, usernameLogin } from '@/apis/auth';
import { accessToken } from '@/shared/env';
import { delay, isPlainObject } from 'mixte';
import LoadingIcon from '~icons/svg-spinners/ring-resize';

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

  // 用户信息请求中, 显示 Loading
  wheneverImmediate(() => info.isLoading, (_, __, onCleanup) => {
    const loading = ElMessage.info({
      message: '加载中...',
      duration: 0,
      icon: LoadingIcon,
    });

    onCleanup(() => {
      loading.close();
    });
  });

  // 用户信息请求失败, 并且不是用户鉴权的原因, 提示用户刷新页面
  info.onError((error: FetchError | FetchResponse<any>) => {
    let data: ResponseData;

    if (error instanceof Error || !(isPlainObject(data = error?._data) && ['40001', '40005'].includes(data.code))) {
      ElMessageBox.confirm('用户信息加载失败，请刷新页面重试', {
        title: '提示',
        confirmButtonText: '刷新页面',
        closeOnClickModal: false,
        closeOnPressEscape: false,
        closeOnHashChange: false,
        showCancelButton: false,
        showClose: false,
        beforeClose: (action, instance) => {
          instance.confirmButtonLoading = true;
          location.reload();
        },
      });
    }
  });

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
      delay(666).then(() => {
        location.reload();
      });
    });
  });

  return {
    isLogin,

    loginByUsername: computed(() => loginByUsername),
    info: computed(() => info),
    logout: computed(() => logout),
  };
});
