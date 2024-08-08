<template>
  <ClientOnly>
    <template #fallback>
      <i-svg-spinners-3-dots-scale-middle class="text-lg mt-12 mxa" />
    </template>

    <div text-base c="green-7 dark:green-6" mt-12>
      ↓ ------ 示例页 ------ ↓
    </div>

    <div mt-5>
      <!-- 登录跳转和用户信息展示 -->
      <ElPopover title="当前登录用户信息展示" :width="250" :disabled="!auth.isLogin">
        <!-- 用户信息展示 -->
        <ElSkeleton flex="~ items-center gap-2" :loading="auth.info.isLoading" animated>
          <div flex items-center justify-between>
            <!-- 用户信息请求成功 -->
            <div v-if="auth.info.isSuccess" flex="~ items-center gap-2">
              <ElAvatar :size="50" :src="auth.info.data?.avatar" />
              <div h-full flex="~ col grow">
                <div>{{ auth.info.data!.name }}</div>
                <div text-sm op-70>{{ auth.info.data!.username }}</div>
              </div>
            </div>
            <!-- 用户信息请求失败 -->
            <div v-else class="op-70">用户信息获取失败</div>
            <!-- 退出登录按钮 -->
            <ElButton
              v-if="auth.info.isFinished"
              size="small" type="danger" text bg :loading="auth.logout.isLoading"
              @click="auth.logout.execute(true)"
            >
              退出登录
            </ElButton>
          </div>

          <template #template>
            <ElSkeletonItem variant="circle" flex-none style="--el-skeleton-circle-size: 50px" />
            <div h-full flex="~ col gap-2 grow">
              <ElSkeletonItem variant="h1" />
              <ElSkeletonItem variant="text" />
            </div>
          </template>
        </ElSkeleton>

        <!-- 登录跳转 -->
        <template #reference>
          <NuxtLink to="/login">
            <ElButton text bg><i-ant-design-user-outlined class="text-base mr-1.5" />登录 ( 当前{{ auth.isLogin ? '已' : '未' }}登录 )</ElButton>
          </NuxtLink>
        </template>
      </ElPopover>
    </div>
  </ClientOnly>
</template>

<script lang="tsx" setup>
  const auth = useAuthStore();
</script>
