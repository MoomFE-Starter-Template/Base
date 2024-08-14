## 图标

支持将图标作为组件导入

```vue
<template>
  <IconAccessibility />
  <IconAccountBox style="font-size: 2em; color: red" />
</template>

<script lang="ts" setup>
  import IconAccessibility from '~icons/carbon/accessibility';
  import IconAccountBox from '~icons/mdi/account-box';
</script>
```

支持自动引入图标

```vue
<template>
  <i-carbon-accessibility style="font-size: 2em; color: red" />
  <i-mdi-account-box />
</template>
```

使用 [Icônes](https://icones.netlify.app) 或 [iconify](https://icon-sets.iconify.design) 查看或搜索图标

不使用组件图标不会增加体积, 但若完全不需要该功能, 可以删除当前文件夹, 并删除 `unplugin-icons` 依赖库
