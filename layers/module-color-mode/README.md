## 颜色模式

使用 [`useTheme`][useTheme] 组合式方法获取主题色、切换主题色

```vue
<script lang="ts" setup>
  const theme = useTheme();

  // 当前主题色
  //  - 'system': 跟随系统, 'light': 浅色模式, 'dark': 深色模式
  console.log(theme.value);
  // 当前是否为深色模式
  console.log(theme.dark);

  // 切换主题色
  theme.toggle();
</script>
```

考虑到很多场景都不考虑深色模式, 所以该模板默认为浅色模式, 这样只要不使用 [`useTheme`][useTheme] 就无任何影响, 若要修改默认主题色, 可修改 [nuxt.config.ts](./nuxt.config.ts) 的 `defaultColorMode` 变量、清除 `localStorage` 然后重启项目即可

若完全不需要深色模式, 可以删除当前文件夹, 并删除 `@nuxtjs/color-mode` 依赖库

[useTheme]: ./app/composables/useTheme.ts
