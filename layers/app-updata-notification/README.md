## 系统更新通知

使用 `nuxt` 自带的 [版本检测功能](https://nuxt.com/docs/api/nuxt-config#checkoutdatedbuildinterval), 每 5 分钟检测一次是否有新版本, 若有新版本则会左下角弹出通知, 可点击按钮刷新页面, 点关闭后, 则本次不再提示

可在 [nuxt.config.ts](./nuxt.config.ts) 修改检测间隔

可在 [app-updata-notification.client.ts](./app\plugins\app-updata-notification.client.ts) 修改通知内容或样式

若完全不需要此功能, 可以删除当前文件夹
