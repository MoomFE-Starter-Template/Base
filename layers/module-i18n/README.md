## i18n

提供了对 [i18n][i18n] 国际化的支持

内置 [i18n 语言文件自动导入][import-locales] 的功能, 会自动导入 [app/locales][locales-dir] 文件夹下的语言文件, 需要添加新的语言, 需要在 [语言列表][import-locales] 中添加定义, 然后在 [app/locales][locales-dir] 添加对应语言 `code` 的语言文件即可

会根据当前语言设置 `html` 标签的 `lang` 属性, 及对 `title` 进行国际化处理, 相关代码在[这里](./app/plugins/set-i18n-head.ts), 默认网站标题的配置在[这个](../../app/app.config.ts)文件

项目使用 VsCode 的 [i18n-ally](https://github.com/lokalise/i18n-ally) 插件改善国际化体验, 默认显示语言为 `cn`, 相关配置在 [.vscode/settings.json](../../.vscode/settings.json) 文件和 [Base.code-workspace](../../Base.code-workspace) 文件中

所有功能可根据需求自行修改

若不需要 i18n, 可按以下步骤进行删除:

1. 删除 `@nuxtjs/i18n` 依赖库
2. 项目全局搜索 `<i18n` 关键字, 将使用了 [i18n 自定义块](https://vue-i18n.intlify.dev/guide/advanced/sfc.html) 的组件或页面的国际化相关代码还原, 然后删除 `<i18n />` 自定义块和 `useI18n` 相关代码
3. 项目全局搜索 `useI18n(` 关键字, 将相关组件或页面的国际化相关代码还原, 然后删除 `useI18n` 相关代码
4. 项目全局搜索 `$t(` 关键字, 将相关组件或页面的国际化相关代码还原
5. 还原 [项目配置](../../app/app.config.ts) 中的 `defaultTitle` 国际化 key
6. 将 [app/app.vue](../../app/app.vue) 中的 `titleTemplate` 注释去除掉
7. 删除 [app/locales][locales-dir] 文件夹
8. 删除当前文件夹

[i18n]: https://nuxt.com/modules/i18n
[import-locales]: ./modules/import-locales.ts
[locales-dir]: ../../app/locales/
