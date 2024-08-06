<template>
  <div min-h-full flex="~ col items-center" relative py-10>
    <!-- 背景 -->
    <div
      class="
        w-full h-50% min-h-100 absolute top-0 left-0
        bg-gradient-(to-bl from-blue-5 to-cyan-5) dark:bg-gradient-(from-blue-6 to-cyan-6)
      "
      style="clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%)"
    />

    <!-- 登录 -->
    <div w-83 max-w-full mt-60 px-4 z-1>
      <h1 text="4xl white">Hi</h1>

      <div el="6 op-48" bg="white dark:neutral-8" rounded mt-5 py-6 px-3>
        <ElForm>
          <ElFormItem>
            <ElInput placeholder="请输入用户名" />
          </ElFormItem>
          <ElFormItem>
            <ElInput type="password" placeholder="请输入密码" />
          </ElFormItem>

          <ElButton w-full type="primary">登录</ElButton>
        </ElForm>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>
