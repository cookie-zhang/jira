/*
 * @Author: zhangjianfei
 * @Email:
 * @Date: 2021-04-24 21:16:47
 * @LastEditors: zhangjianfei
 * @LastEditTime: 2021-04-24 21:46:47
 * @Description:
 */
import React from "react";
import "./App.css";
// import { ProjectList } from "./sceens/project-list";
import { LoginScreen } from './sceens/login/index'
// import Calculator from './sceens/statusUp/Calculator'
// import Parent from './sceens/context'
// import Refs from './sceens/refs'
import { useAuth } from './sceens/context/auth-context'
import { UnauthenticatedApp } from "unauthenticted-app";
import { AuthenticatedApp } from 'authenticated-app'
function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {
        user ? <AuthenticatedApp /> : <UnauthenticatedApp /> 
      
      }
    </div>
  );
}

export default App;
