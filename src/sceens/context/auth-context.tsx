import React, { useState, ReactNode } from "react";
import { useMount } from "util/hooks";
import { http } from "util/http";
import * as auth from "../../auth-provider";
import { User } from "../project-list/search-panel";
interface AuthForm {
  username: string;
  password: string;
}
const bootstraUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
    return user;
  }
};
export const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      loginout: () => Promise<void>;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const loginout = () => auth.loginout().then(() => setUser(null));
  useMount(() => {
    bootstraUser().then(setUser);
  });
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, loginout }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
