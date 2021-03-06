# SPA版银行前端

## 运行项目

1. 安装依赖：`npm ci`
2. 先启动后端Java API，然后运行开发服务器：`npm run serve`，访问 http://localhost:3000 即可
3. 开发服务器仅用于开发。完成开发后，可以运行`npm run build`，将项目打包编译到`dist`目录中，用于前后端分离部署

注意：按照`vue.config.js`中的配置，访问`http://localhost:3000`时，会自动将对`/api`URL下的请求通过反向代理转发到`http://localhost:8080`

## 源码架构

```
src
├─assets/           # 存放静态资源，如图片等
├─components/       # 可被重复使用的组件
├─views/            # “页面”，每个页面可能用到components当中的组件
├─App.vue           # Vue根实例
├─main.js           # 程序入口
└─router.js         # 路由文件，将不同网址对应到不同的“页面”
```

## 新特性
1. 实现退出登录功能
2. 用Element库重写前端界面
3. 引入axios库，将所有的HTTP请求改为基于axios进行