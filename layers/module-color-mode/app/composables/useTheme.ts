import { toggleThemeViewTransition } from '@mixte/snippets/toggleThemeViewTransition';
import { isBrowser, isNumber } from 'mixte';
import { type ColorSchema, colorSchema } from '../../types';

export const useTheme = createSharedComposable(() => {
  const runtimeConfig = useRuntimeConfig();

  /** 主题 */
  const color = useColorMode();
  /** 主题切换 */
  const { state, next } = useCycleList<ColorSchema>(colorSchema as any, {
    initialValue: color.preference as any,
  });

  /** 是否是深色模式 */
  const dark = computed({
    get: () => color.preference === 'dark',
    set: v => color.preference = v ? 'light' : 'dark',
  });

  /**
   * 切换主题
   *  - 当方法提供了鼠标事件对象时，会使用动画过渡效果
   */
  async function toggle(event?: MouseEvent) {
    if (!event || !isNumber(event.clientX) || color.preference === 'system') {
      next();
      return;
    }

    await toggleThemeViewTransition(next, {
      x: event.clientX,
      y: event.clientY,
      reverse: dark,
    });
  }

  // 解决客户端的水合不匹配问题
  if (isBrowser && color.preference !== runtimeConfig.app.defaultColorMode) {
    const old = color.preference;

    color.preference = runtimeConfig.app.defaultColorMode;
    nextTick(() => color.preference = old);
  }

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

  return reactive({
    value: state,
    dark,
    toggle,
  });
});
