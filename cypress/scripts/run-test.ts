import { spawn } from 'node:child_process';
import process from 'node:process';

const argv = process.argv.slice(2);
const command = argv.includes('--ci') ? 'run' : 'open';

// 启动预览
spawn('npm', ['run', 'preview'], {
  shell: true,
  stdio: 'inherit',
});

// 等待预览启动
const wait = spawn('wait-on', ['http://localhost:3000'], {
  shell: true,
});

// 等待预览启动完成后
wait.on('exit', () => {
  // 启动 Cypress 测试
  const cypress = spawn('cypress', [command, '--config-file', 'cypress/cypress.config.ts'], {
    shell: true,
    stdio: 'inherit',
  });

  // 当 Cypress 进程退出时, 关闭进程
  cypress.on('exit', (code) => {
    process.exit(code);
  });
});
