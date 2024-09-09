<template>
  <ClientOnly>
    <template #fallback>
      <i-svg-spinners-3-dots-scale-middle class="text-lg mt-12 mxa" />
    </template>

    <div text-base c="green-7 dark:green-6" mt-12>
      ↓ ------ {{ t('example-pages') }} ------ ↓
    </div>

    <div flex="~ justify-center wrap gap-2" mt-5>
      <!-- 登录跳转和用户信息展示 -->
      <ElPopover :title="t('current-login-user-info')" :width="250" :disabled="!auth.isLogin" :hide-after="0">
        <!-- 用户信息展示 -->
        <UserInfo />

        <!-- 登录跳转 -->
        <template #reference>
          <NuxtLink to="/login">
            <ElButton text bg><i-ant-design-user-outlined class="text-base mr-1.5" />{{ auth.isLogin ? t('is-login') : t('is-not-login') }}</ElButton>
          </NuxtLink>
        </template>
      </ElPopover>
      <!-- 登录鉴权 -->
      <ElPopover>
        {{ t('requires-auth-tip') }}
        <template #reference>
          <RouterLink to="/demo/requiresAuth">
            <ElButton text bg>{{ t('requires-auth') }}</ElButton>
          </RouterLink>
        </template>
      </ElPopover>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
  const { t } = useI18n({ useScope: 'local' });

  const auth = useAuthStore();
</script>

<i18n lang="yaml">
cn:
  example-pages: 示例页
  current-login-user-info: 当前登录用户信息展示
  is-login: 登录 ( 当前已登录 )
  is-not-login: 登录 ( 当前未登录 )
  requires-auth-tip: 未登录时无法访问, 并跳转到登录页
  requires-auth: 登录鉴权
en:
  example-pages: Example Pages
  current-login-user-info: Current login user information display
  is-login: Login ( currently logged in )
  is-not-login: Login ( currently not logged in )
  requires-auth-tip: Unable to access when not logged in, and jump to the login page
  requires-auth: Login authentication
</i18n>
