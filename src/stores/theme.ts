import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  /** 主题模式状态 */
  const { store, state } = useColorMode({
    storageKey: 'st-color-scheme',
    initialValue: 'light',
  });

  /** 是否是深色模式 */
  const dark = computed({
    get: () => state.value === 'dark',
    set: v => (store.value = v ? 'dark' : 'light'),
  });

  /** 切换主题 */
  function toggle() {
    if (store.value === 'auto') store.value = 'light';
    else if (store.value === 'light') store.value = 'dark';
    else if (store.value === 'dark') store.value = 'auto';
  }

  return {
    value: store,
    dark,
    toggle,
  };
});
