import * as auth from "../auth-provider";
import qs from "qs";
import { useAuth } from "sceens/context/auth-context";
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  // toUpperCase 字符串转化为大写
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2XX的时候抛出异常。但是fetch的catch只有在网络状态不加的时候才会抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      /**
       * 根据code码处理相关业务逻辑
       * 401 token 失效  退出登录
       *
       * */
      if (response.status === 401) {
        auth.loginout();
        // window.location.reload()
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  // 优化前：return ([endpoint, config]: [string, Config]) => http(endpoint, {...config, token: user?.token})
  // 优化后： Parameters 操作符号
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
