import type { ResponseData } from '@/apis/types';
import type { FetchContext } from 'ofetch';
import { accessToken } from '@/shared/env';
import { isPlainObject } from 'mixte';

/**
 * $fetch 拦截器
 */
export default defineNuxtPlugin((nuxtApp) => {
  const config = useAppConfig();

  // @ts-expect-error 请求拦截器钩子
  nuxtApp.hook('fetch:onRequest', ({ options }: FetchContext) => {
    const headers = options.headers ??= {};

    // 请求头携带 Token
    if (accessToken.value)
      addFetchHeader(headers, 'Authorization', `Bearer ${accessToken.value}`);

    // 设置默认响应数据类型
    options.responseType ??= 'json';
  });

  // @ts-expect-error 响应拦截器钩子
  nuxtApp.hook('fetch:onResponse', ({ response }: FetchContext) => {
    let data: ResponseData;

    // 接口报错
    if (response?.ok === false) {
      if (isPlainObject(data = response?._data)) {
        ElMessage.error(JSON.stringify(data));
      }
      else {
        ElMessage.error('接口请求失败');
      }

      return Promise.reject(response);
    }

    // 后端提示错误 ( 根据后端返回的实际情况修改 )
    if (isPlainObject(data = response?._data)) {
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
              beforeClose: (action, instance) => {
                instance.confirmButtonLoading = true;
                accessToken.value = '';
                location.reload();
              },
            });
          }

          return Promise.reject(response);
        }

        ElMessage.error(data.message);

        return Promise.reject(response);
      }
    }
  });
});

/**
 * 为 fetch 添加请求头
 * @param headers 请求头
 * @param name 请求头名称
 * @param value 请求头值
 * @param forceOverride 是否强制覆盖 ( 默认为 false )
 */
function addFetchHeader(headers: HeadersInit, name: string, value: string, forceOverride = false) {
  if (Array.isArray(headers)) {
    if (forceOverride || !headers.some(([key]) => name.toLowerCase() === key.toLowerCase()))
      headers.push([name, value]);
  }
  else if (headers instanceof Headers) {
    if (forceOverride || headers.has(name))
      headers.set(name, value);
  }
  else {
    if (forceOverride || !Object.keys(headers).some(key => name.toLowerCase() === key.toLowerCase()))
      headers[name] = value;
  }
}
