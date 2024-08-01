import { isBrowser, isNumber } from 'mixte';

export const useTheme = createSharedComposable(() => {
  const config = useAppConfig();

  /** 主题 */
  const color = useColorMode();
  /** 主题切换 */
  const { state, next } = useCycleList<'system' | 'light' | 'dark'>(['system', 'light', 'dark'], {
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
    if (!event || !isNumber(event.clientX) || !enableTransitions() || color.preference === 'system') {
      next();
      return;
    }

    const { clientX: x, clientY: y } = event;

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
    ];

    await document.startViewTransition!(async () => {
      next();
      await nextTick();
    }).ready;

    document.documentElement.animate(
      { clipPath: dark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${dark.value ? 'old' : 'new'}(root)`,
      },
    );
  }

  // 解决客户端的水合不匹配问题
  if (isBrowser && color.preference !== config.colorMode) {
    const old = color.preference;

    color.preference = config.colorMode;
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
    style: [`
      ::view-transition-old(root), ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }
      ::view-transition-old(root), .dark::view-transition-new(root) {
        z-index: 1;
      }
      ::view-transition-new(root), .dark::view-transition-old(root) {
        z-index: 9999;
      }
    `.replaceAll(/\s+/g, '')],
  });

  return reactive({
    value: state,
    dark,
    toggle,
  });
});

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
}
