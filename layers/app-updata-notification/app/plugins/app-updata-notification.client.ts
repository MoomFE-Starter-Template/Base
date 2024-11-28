// @unocss-include

import type { NotificationHandle } from 'element-plus';
import dayjs from 'dayjs';

let notification: NotificationHandle | undefined;
let no = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:manifest:update', (meta) => {
    if (no) return;
    if (!meta) return;

    notification?.close();
    notification = ElNotification.warning({
      title: '系统更新提示',
      message: `
        <div>系统已于 ${dayjs(meta.timestamp).format('YYYY-MM-DD HH:mm:ss')} 更新版本, 请刷新页面以获取最新版本.<div>
        <div flex justify-end mt-3 mr--5>
          <button class="el-button el-button--primary" type="button" onclick="location.reload()">刷新页面</button>
        </div>
      `,
      dangerouslyUseHTMLString: true,
      position: 'bottom-left',
      duration: 0,
      onClose: () => {
        no = true;
      },
    });
  });
});
