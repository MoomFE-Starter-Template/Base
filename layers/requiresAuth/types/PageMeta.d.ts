interface ExtraMeta {
  /**
   * 登录鉴权, 该页面是否需要登录才能访问
   * @default false
   */
  requiresAuth?: boolean;
}

declare module '#app' {
  interface PageMeta extends ExtraMeta {}
}
declare module 'vue-router' {
  interface RouteMeta extends ExtraMeta {}
}

export {};
