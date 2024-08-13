export default defineAppConfig({
  /**
   * 默认网站标题
   */
  defaultTitle: '基础项目模板',
  /**
   * 网站标题模板
   *  - 用于自定义拼接网站标题生成最终的网站标题 ( 比如全局添加前缀后缀等 )
   */
  titleTemplate: (title?: string) => `${title ?? '基础项目模板'} - MoomFE`,
  /**
   * 默认主题色
   *  - 修改此处的值, 需要同步修改 layers/module-color-mode/nuxt.config.ts 的 colorMode.preference 选项
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
