/** 默认网站标题 */
const defaultTitle = 'index.title';

export default defineAppConfig({
  /**
   * 默认网站标题
   */
  defaultTitle,
  /**
   * 网站标题模板
   *  - 用于自定义拼接网站标题生成最终的网站标题 ( 比如全局添加前缀后缀等 )
   */
  titleTemplate: (title?: string) => `${title ?? defaultTitle} - MoomFE`,
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
  /**
   * 路由鉴权的白名单页面列表
   */
  requiresAuthWhiteList: ['/login'],
});
