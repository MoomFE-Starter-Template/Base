// 手动安装一下, 解决在 jsx 中使用 v-loading 不显示的问题
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (app) => {
    app.use(ElLoading);
  });
});
