export default defineNuxtConfig({
  experimental: {
    // 检测间隔, 默认 5 分钟
    checkOutdatedBuildInterval: 1000 * 60 * 5,
  },
  future: {
    compatibilityVersion: 4,
  },
});
