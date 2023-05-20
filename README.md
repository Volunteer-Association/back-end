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

## 前端
> Vue.js 3
### 项目启动
1. 确保本地安装了nodejs
2. 打开终端进入back-end-frontend
    > 执行 npm run dev

## 后端
> Spring-Boot
### 项目启动
1. 确保本地安装idea 开发工具
2. 使用idea自带的Maven3 ，通过idea打开back-end
3. 通过idea执行back-end-backend目录下的back-end-api目录下 src/java/com/example/api/BackEndApiApplication文件

## 参与贡献
1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

## 目录结构说明
```
├─.idea
├─back-end-backend             // Java后端
    ├─back-end-api             // 主工程项目
        ├─src
        ├─.gitigonre
        └─pom.xml              // 子工程配置(依赖)
    ├─back-end-service
        ├─src
        ├─.gitigonre
        └─pom.xml
    ├─.gitigonre
    ├─pom.xml                   // 父工程配置
    └─README.md
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