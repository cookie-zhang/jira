<!--
 * @Author: zhangjianfei
 * @Email:
 * @Date: 2021-04-24 21:16:47
 * @LastEditors: zhangjianfei
 * @LastEditTime: 2021-04-24 23:19:33
 * @Description:
-->

# 所有不是修改业务而去修改代码的行为都是不好的

## 路径配置 tsconfig.json 中 绝对路径配置

"baseUrl": "./src"

## 格式化代码

安装插件： prettier
创建文件：.prettierrc.json package-lock.json
自动化格式代码：Pre-commit Hook 命令 npx mrm lint-staged
eslint: yarn add eslint-config-prettier -D
提交规范：可用 conventional-changelog/commitlint

## 模拟数据

安装：json-server https://github.com/typicode/json-server
启动：json-server --watcher json 文件

## hooks 1.hooks 只能在其他 hooks 中使用 2. hooks 只能在组件中使用
