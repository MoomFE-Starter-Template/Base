<!-- 用户信息展示 -->

<template>
  <ElSkeleton flex="~ items-center gap-2" :loading="auth.info.isLoading" animated>
    <div flex="~ wrap gap-2" items-center justify-between>
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
</template>

<script lang="ts" setup>
  const auth = useAuthStore();
</script>
