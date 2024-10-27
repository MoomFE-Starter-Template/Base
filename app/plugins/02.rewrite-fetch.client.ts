import { isString } from 'mixte';
import { $fetch } from 'ofetch';

/**
 * 重写 $fetch, 方便二次封装
 */
export default defineNuxtPlugin((nuxtApp) => {
  const buildAssetsDir = nuxtApp.$config.app.buildAssetsDir;

  const config = useAppConfig();

  globalThis.$fetch = $fetch.create({
    baseURL: config.API_BASE_URL,

    // 请求拦截器
    async onRequest(context) {
      const { request, options } = context;

      // 还没遇到非字符串的场景, 先不处理
      if (!isString(request)) return;
      // 请求的是 Nuxt 生成的文件, 则使用原始 baseURL
      if (request.startsWith(buildAssetsDir)) {
        options.baseURL = nuxtApp.$config.app.baseURL;
        return;
      }

      // @ts-expect-error 请求拦截器钩子
      await nuxtApp.callHook('fetch:onRequest', context);
    },

    // 响应拦截器
    async onResponse(context) {
      const { request } = context;

      // 还没遇到非字符串的场景, 先不处理
      if (!isString(request)) return;
      // 请求的是 Nuxt 生成的文件
      if (request.startsWith(buildAssetsDir)) return;

      // @ts-expect-error 响应拦截器钩子
      await nuxtApp.callHook('fetch:onResponse', context);
    },
  });
});
