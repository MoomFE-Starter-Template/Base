import type { ArrayValues } from 'type-fest';

/**
 * 颜色模式列表
 */
export const colorSchema = ['system', 'light', 'dark'] as const;

export type ColorSchema = ArrayValues<typeof colorSchema>;
