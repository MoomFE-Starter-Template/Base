import type { ViteSSGContext } from 'vite-ssg';

/**
 * 用户模块定义方法
 */
export type UserModule = (ctx: ViteSSGContext) => void;

/**
 * 项目配置
 */
export interface Settings {
  /** 项目名称 */
  name: string
  /**
   * 标题名称模板
   * @default `:title | ${settings.name}`
   */
  titleTemplate?: string
}
