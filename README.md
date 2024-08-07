# back-end
> 前后端项目分离后台管理项目系统

## 赞助
> 多点点 🌟 Star 🌟 关注更新，支持下作者
<table>
  <tr>
    <td style="text-align: center">支付宝</td>
    <td style="text-align: center">微信</td>
  </tr>
  <tr>
    <td>
      <img alt="支付宝收款码" src="https://www.chenguihui.com/images/payment/zfb.jpg" title="支付宝" width="300"/>
    </td>
    <td>
      <img alt="微信收款码" src="https://www.chenguihui.com/images/payment/wx.jpg" title="微信" width="300"/>
    </td>
  </tr>
</table>

## npm镜像设置
* 国内相关npm镜像源
  1. 淘宝镜像：npm config set registry https://registry.npmmirror.com/
* 官方镜像源
  1. npm config set registry https://registry.npmjs.org/
## 前端
> Vue.js 3
### 项目启动
1. 确保本地安装了nodejs
2. 打开终端进入back-end-frontend
   ```
   # 安装依赖
   npm run install

   # 启动项目
   npm run dev
   ```
3. 

## 后端
> nodejs nestjs
### 项目启动
1. 修改config目录下的config.ts配置文件, 修改数据库配置
2. 打开终端进入back-end-backend
   ```
   #安装依赖执行
   yarn install

   # 启动项目执行
   yarn start 或者 yarn start:dev
   ```
3. 

## 参与贡献
1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request，合并到develop分支上
5.  等待作者合并
6. <span style="color: red">注意事项：</span> 如果是github用户，请不要建立Pull Request，请联系作者并等待作者拉取合并

## 目录结构说明
```
├─.github
├─.idea
├─back-end-backend              // nestjs后端
    ├─bin
    ├─config                    // 服务端配置目录             
    ├─mysql                     // 数据库链接目录
    ├─public                    // 静态资源目录
    ├─src                       // 主工程目录
      ├─app.controller.ts
      ├─app.module.ts
      ├─app.service.ts
      └─main.ts                 // 主入口文件
    ├─test                      // 工程测试目录
    ├─.eslintrc.js
    ├─.gitigonre
    ├─.prettierrc
    ├─.jsconfig.json
    ├─nest-cli.json            // nest CLI配置文件
    ├─package.json
    ├─README.md
    ├─tsconfig.json            // typescript配置文件
    └─yarn.lock
├─back-end-frontend            // Vue前端
    ├─public                        
    ├─src                           // 主工程目录
    ├─.gitigonre
    ├─back-end-frontend.iml         // IDEA声明文件
    ├─index.html
    ├─package.json                  // 前端依赖相关的包管理器
    ├─package-lock.json
    ├─README.md
    └─vite.config.js
├─.gitigonre
├─LICENSE
└─README.md
```

## 作者信息
1. 作者：陈桂辉(chenguihui)
2. 邮箱：shaft.feather@foxmail.com
3. 微信：ed2404296720

## License
Nest is [MIT licensed](LICENSE).