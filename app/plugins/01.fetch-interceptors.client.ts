import type { FetchContext } from 'ofetch';

/**
 * $fetch 拦截器
 */
export default defineNuxtPlugin((nuxtApp) => {
  // @ts-expect-error 请求拦截器钩子
  nuxtApp.hook('fetch:onRequest', (context: FetchContext) => {

  });

  // @ts-expect-error 响应拦截器钩子
  nuxtApp.hook('fetch:onResponse', (context: FetchContext) => {

  });
});
