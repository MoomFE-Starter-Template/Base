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

可根据需求自行修改, 若不需要登录鉴权, 可以删除该文件夹;
