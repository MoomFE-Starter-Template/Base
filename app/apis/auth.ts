import type { ResponseData } from './types';

/** 登录响应数据 */
export interface LoginResponse {
  access_token: string;
  expires_in: number;
}

/** 账号密码登录数据 */
export interface UsernameLoginData {
  username: string;
  password: string;
}

/** 用户信息 */
export interface UserInfo {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

/** 账号密码登录 */
export function usernameLogin(data: UsernameLoginData) {
  return $fetch<ResponseData<LoginResponse>>('/auth/login', {
    method: 'POST',
    body: data,
  });
}

/** 获取登录用户信息 */
export function getUserInfo() {
  return $fetch<ResponseData<UserInfo>>('/auth/info');
}

/** 退出登录 */
export function logout() {
  return $fetch<ResponseData<UserInfo>>('/auth/logout', {
    method: 'POST',
  });
}
