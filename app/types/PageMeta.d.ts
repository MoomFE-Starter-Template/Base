interface ExtraMeta {
  /**
   * 页面标题, 也可传入 i18n 的 key
   */
  title?: string;
}

declare module '#app' {
  interface PageMeta extends ExtraMeta {}
}
declare module 'vue-router' {
  interface RouteMeta extends ExtraMeta {}
}

export {};
