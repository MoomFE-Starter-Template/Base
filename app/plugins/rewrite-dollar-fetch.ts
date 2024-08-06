import { isString } from 'mixte';
import { $fetch } from 'ofetch';

/**
 * 重写 $fetch, 方便二次封装
 */
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  globalThis.$fetch = $fetch.create({
    baseURL: config.public.API_BASE_URL,
    onRequest({ request, options }) {
      // 还没遇到非字符串的场景, 先不处理
      if (!isString(request)) return;
      // 请求的是 Nuxt 生成的文件, 则使用原始 baseURL
      if (request.startsWith('/_nuxt/')) {
        options.baseURL = nuxtApp.$config.app.baseURL;
      }
    },
  });
});
