import type { FetchContext } from 'ofetch';
import { isPlainObject } from 'mixte';
import type { ResponseData } from '@/apis/types';

/**
 * $fetch 拦截器
 */
export default defineNuxtPlugin((nuxtApp) => {
  // @ts-expect-error 请求拦截器钩子
  nuxtApp.hook('fetch:onRequest', ({ options }: FetchContext) => {
    options.responseType ??= 'json';
  });

  // @ts-expect-error 响应拦截器钩子
  nuxtApp.hook('fetch:onResponse', ({ response }: FetchContext) => {
    let data: ResponseData;

    if (isPlainObject(data = response?._data)) {
      // 后端提示错误
      //  - 根据后端返回的实际情况修改
      if (data.code !== '20000') {
        // Token 失效
        if (['40001', '40005'].includes(data.code)) {
          // todo: 处理 Token 失效
          return Promise.reject(data.message);
        }

        ElMessage.error(data.message);

        return Promise.reject(data.message);
      }
    }
  });
});
