import type { FetchContext } from 'ofetch';
import { isPlainObject } from 'mixte';
import type { ResponseData } from '@/apis/types';

/**
 * $fetch 拦截器
 */
export default defineNuxtPlugin((nuxtApp) => {
  const config = useAppConfig();

  // @ts-expect-error 请求拦截器钩子
  nuxtApp.hook('fetch:onRequest', ({ options }: FetchContext) => {
    options.responseType ??= 'json';
  });

  // @ts-expect-error 响应拦截器钩子
  nuxtApp.hook('fetch:onResponse', ({ response }: FetchContext) => {
    let data: ResponseData;

    if (isPlainObject(data = response?._data)) {
      // 后端提示错误 ( 根据后端返回的实际情况修改 )
      if (data.code !== '20000') {
        // 处理用户鉴权相关问题 ( 根据后端返回的实际情况修改 )
        //  - 40001: 未登录
        //  - 40005: Token 失效
        if (['40001', '40005'].includes(data.code)) {
          // 不在登录页面时, 提示登录已过期
          if (nuxtApp.vueApp.$nuxt.$router.currentRoute.value.path !== config.loginPath) {
            ElMessageBox.confirm('登录已过期, 请重新登录', {
              title: '提示',
              confirmButtonText: '重新登录',
              closeOnClickModal: false,
              closeOnPressEscape: false,
              closeOnHashChange: false,
              showCancelButton: false,
              showClose: false,
            })
              .then(() => {
                navigateTo(config.loginPath);
              });
          }

          return Promise.reject(data.message);
        }

        ElMessage.error(data.message);

        return Promise.reject(data.message);
      }
    }
  });
});
