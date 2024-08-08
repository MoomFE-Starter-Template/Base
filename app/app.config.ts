export default defineAppConfig({
  /**
   * 默认主题色
   *  - 修改此处的值, 需要同步修改 nuxt.config.ts 的 colorMode.preference
   */
  colorMode: 'light',
  /**
   * 默认跳转页
   *  - 用于登录后的默认跳转
   */
  defaultRedirectPath: '/',
  /**
   * 登录页
   *  - 用户用户鉴权失效时的跳转
   */
  loginPath: '/login',
});
