import { minify } from 'html-minifier-terser';

function minifier(code: string) {
  return minify(code, {
    collapseWhitespace: true,
    minifyCSS: true,
  });
}

/**
 * 白屏加载动画
 */
export default defineNitroPlugin((nitroApp) => {
  const appConfig = useAppConfig();

  nitroApp.hooks.hook('render:html', async (html) => {
    if (!appConfig.whiteScreenLoadingAnimation) return;

    html.body.push(
      await minifier(`
        <div id="admin-page-loading">
          <img
            src="${
              appConfig.whiteScreenLoadingAnimationImage ?? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='7.33' height='7.33' x='1' y='1' fill='%235989fa'%3E%3Canimate id='svgSpinnersBlocksWave0' attributeName='x' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='y' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='width' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='8.33' y='1' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='1' y='8.33' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='15.66' y='1' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='8.33' y='8.33' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='1' y='15.66' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='15.66' y='8.33' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='8.33' y='15.66' fill='%235989fa'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='15.66' y='15.66' fill='%235989fa'%3E%3Canimate id='svgSpinnersBlocksWave1' attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3C/svg%3E`
            }"
            width="50" height="50" alt="Loading"
          >
          ${
            appConfig.whiteScreenLoadingAnimationText !== false
              ? `<div>${appConfig.whiteScreenLoadingAnimationText ?? 'Loading ...'}</div>`
              : ''
          }
        </div>
      `),
      await minifier(`
        <style>
          #admin-page-loading {
            display: none;
            width: 100vw; height: 100vh;
            position: fixed; top: 0; left: 0;
            flex-direction: column; justify-content: center; align-items: center; gap: 15px;
            font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif !important;
            font-size: 18px; color: #5989FA;
            pointer-events: none;
          }
          #admin-page-loading > img {
            margin-top: 40px;
          }
          body:not(.el-loading-parent--relative) > #__nuxt:empty ~ #admin-page-loading {
            display: flex;
          }
        </style>
      `),
    );
  });
});
