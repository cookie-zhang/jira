import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };
  return (
    <Form onFinish={handleSubmit}>
      登录成功，用户名字：{user?.name}-token:{user?.token}
      <div>
        <label htmlFor="username">用户名</label>
        <Input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <Input type="password" id={"password"} />
      </div>
      <button type={"submit"}>注册</button>
    </Form>
  );
};
