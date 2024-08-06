/** 账号密码登录数据 */
export interface UsernameLoginData {
  username: string;
  password: string;
}

/** 账号密码登录 */
export function usernameLogin(data: UsernameLoginData) {
  return $fetch('/auth/login', {
    method: 'POST',
    body: data,
  });
}
