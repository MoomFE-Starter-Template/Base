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

  /**
   * 接口请求基础路径
   */
  API_BASE_URL: 'https://apifoxmock.com/m1/4781098-4434938-default',

  /**
   * 启用白屏加载动画
   */
  whiteScreenLoadingAnimation: false,
  /**
   * 白屏加载动画图片地址
   *  - 默认为这个图标的 Data URL: https://icones.netlify.app/collection/all?s=spin&icon=svg-spinners:blocks-wave
   * @type {string}
   */
  whiteScreenLoadingAnimationImage: undefined,
  /**
   * 白屏加载动画文本
   *  - 默认为 'Loading ...'
   *  - 设置为 false 则不显示文本
   * @type {string | false}
   */
  whiteScreenLoadingAnimationText: undefined,
});
