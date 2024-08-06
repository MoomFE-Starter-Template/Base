<template>
  <div min-h-full flex="~ col items-center" relative>
    <!-- 背景 -->
    <div class="login-bg w-full bg-gradient-(to-bl from-blue-5 to-cyan-5) dark:bg-gradient-(from-blue-6 to-cyan-6)" />

    <!-- 登录 -->
    <div class="login-form-wrap" w-83 max-w-full absolute pb-10 px-4 z-1>
      <h1 text="4xl white">Hi</h1>

      <div el="6 op-48" bg="white dark:neutral-8" rounded mt-5 pt-7 pb-6 px-3>
        <ElForm>
          <ElFormItem>
            <ElInput placeholder="请输入账号" />
          </ElFormItem>
          <ElFormItem>
            <ElInput type="password" placeholder="请输入密码" />
          </ElFormItem>

          <ElButton w-full type="primary">登录</ElButton>
        </ElForm>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  $bg-h: max(50vmin, 300px);
  $bg-right-end: 0.7;

  .login-bg{
    height: $bg-h;
    clip-path: polygon(0 0, 100% 0, 100% ($bg-right-end * 100%), 0 100%);
  }

  .login-form-wrap{
    top: calc($bg-h - calc($bg-h * (1 - $bg-right-end)) - 40px);
  }
</style>
