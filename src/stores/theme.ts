import type { BasicColorSchema } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  /** 主题模式状态 */
  const mode = useColorMode<BasicColorSchema>({
    storageKey: 'st-color-scheme',
    initialValue: 'light',
  });

  /** 主题切换 */
  const { state, next } = useCycleList<BasicColorSchema>(['light', 'dark', 'auto'], {
    initialValue: mode.store,
  });

  /** 是否是深色模式 */
  const dark = computed({
    get: () => mode.value === 'dark',
    set: v => (mode.value = v ? 'dark' : 'light'),
  });

  syncRef(mode.store, state);

  return {
    value: mode.store,
    dark,
    toggle: next,
  };
});
