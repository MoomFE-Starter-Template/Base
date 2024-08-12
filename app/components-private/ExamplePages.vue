<template>
  <ClientOnly>
    <template #fallback>
      <i-svg-spinners-3-dots-scale-middle class="text-lg mt-12 mxa" />
    </template>

    <div text-base c="green-7 dark:green-6" mt-12>
      ↓ ------ 示例页 ------ ↓
    </div>

    <div flex="~ justify-center wrap gap-2" mt-5>
      <!-- 登录跳转和用户信息展示 -->
      <ElPopover title="当前登录用户信息展示" :width="250" :disabled="!auth.isLogin" :hide-after="0">
        <!-- 用户信息展示 -->
        <UserInfo />

        <!-- 登录跳转 -->
        <template #reference>
          <NuxtLink to="/login">
            <ElButton text bg><i-ant-design-user-outlined class="text-base mr-1.5" />登录 ( 当前{{ auth.isLogin ? '已' : '未' }}登录 )</ElButton>
          </NuxtLink>
        </template>
      </ElPopover>
      <!-- 登录鉴权 -->
      <ElPopover>
        未登录时无法访问, 并跳转到登录页
        <template #reference>
          <RouterLink to="/demo/requiresAuth">
            <ElButton text bg>登录鉴权</ElButton>
          </RouterLink>
        </template>
      </ElPopover>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
  const auth = useAuthStore();
</script>
