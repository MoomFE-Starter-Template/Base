## 登录鉴权

使用 `definePageMeta` 定义 `requiresAuth: true` 设置该页面需要登录才能访问, 同时需要将该页面禁用服务器端渲染

```vue
<script lang="ts" setup>
  definePageMeta({
    requiresAuth: true // 设置页面需要登录才能访问
  });
  defineRouteRules({
    ssr: false // 禁用服务器端渲染
  });
</script>
```

若项目在 `nuxt.config.ts` 中配置了 [ssr: false](https://nuxt.com/docs/api/nuxt-config#ssr), 则无需在页面中设置 `ssr: false`, 只需要设置 `requiresAuth: true` 即可:

```vue
<script lang="ts" setup>
  definePageMeta({
    requiresAuth: true // 设置页面需要登录才能访问
  });
</script>
```

支持在 [app/app.config.ts][app.config.ts] 的 `requiresAuthWhiteList` 配置项中配置路由鉴权的白名单页面列表, 在白名单中的页面无需登录即可访问

可根据需求自行修改

若不需要登录鉴权, 可按以下步骤进行删除:

1. 删除 [app/app.config.ts][app.config.ts] 的 `requiresAuthWhiteList` 配置项
2. 删除当前文件夹

[app.config.ts]: ../../app/app.config.ts
