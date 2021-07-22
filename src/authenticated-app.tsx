import React from "react";
import { useAuth } from "sceens/context/auth-context";

export const AuthenticatedApp = () => {
  const { loginout } = useAuth();
  return (
    <div>
      <button onClick={loginout}>登出</button>
    </div>
  );
};
