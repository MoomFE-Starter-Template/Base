import type { BasicColorMode } from '@vueuse/core';

export const useThemeStore = defineStore('theme', () => {
  const color = useColorMode();

  /** 主题切换 */
  const { state, next } = useCycleList<BasicColorMode | 'system'>(['system', 'light', 'dark'], {
    initialValue: color.preference as any,
  });

  /** 是否是深色模式 */
  const dark = computed({
    get: () => color.preference === 'light',
    set: v => color.preference = v ? 'light' : 'dark',
  });

  syncRef(
    toRef(color, 'preference'),
    state,
    {
      transform: { ltr: v => v },
    },
  );

  useHead({
    meta: [
      { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
      { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
    ],
  });

  return {
    value: state,
    dark,
    toggle: next,
  };
});
