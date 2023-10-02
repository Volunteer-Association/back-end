<script setup>
import { ref } from 'vue'
import imgUrl from "@/assets/images/bg.png"
import Gitee from "@/components/Inon/Gitee.svg"
// import { gitee, login } from "@/api/login/index";

const imageUrl = ref(imgUrl);
// eslint-disable-next-line no-unused-vars
const GiteeUrl = ref(Gitee);

const onSubmit = () => {
  console.log('submit!')
}

// const onBubntt = async () => {
//   // console.log("gitee");
//   const data = await login({
//     client_id: "6ed4ae5d52c8d4b23c9d4019ee8f706d8b5c41ed2594fdd811c2206f74996297",
//     redirect_uri: "https://chenguihui.com",
//     response_type: "code"
//   })
//   console.log(data)
//   // window.open("https://gitee.com/oauth/authorize?client_id=6ed4ae5d52c8d4b23c9d4019ee8f706d8b5c41ed2594fdd811c2206f74996297&redirect_uri=https://chenguihui.com&response_type=code")
//   const rules = await gitee({
//     client_id: "6ed4ae5d52c8d4b23c9d4019ee8f706d8b5c41ed2594fdd811c2206f74996297",
//     redirect_uri: "https://chenguihui.com",
//     response_type: "code"
//   })

//   console.log(rules)
// }

</script>

<template>
  <div class="Login">
    <div class="leftLayout">
      <el-image class="image-container" fit="cover" :src="imageUrl" />
    </div>
    <div class="rightLayout">
      <div class="content">
        <div class="content-title">
          <div class="title-tile">登录</div>
          <div class="title-text">在进入系统之前去先输入用户名</div>
        </div>
        <div class="content-form">
          <el-input type="text" placeholder="用户名/邮箱"> </el-input>
          <el-input type="password" style="margin-top: 10px" placeholder="密码"> </el-input>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
        <div class="content-footer">
          <a href="https://gitee.com/oauth/authorize?client_id=6ed4ae5d52c8d4b23c9d4019ee8f706d8b5c41ed2594fdd811c2206f74996297&redirect_uri=http://192.168.1.6:3000/auth/gitee&response_type=code" target="_blank">
            <div class="content-image"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}
.Login .leftLayout {
  flex: 1;
}

.Login .leftLayout .image-container {
  width: 100%;
  height: 100%;
}

.Login .rightLayout {
  width: 350px;
  background-color: white;
}

.Login .rightLayout .content {
  text-align: center;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
}
.Login .rightLayout .content .content-title {
  margin-top: 100px;
}
.Login .rightLayout .content-title .title-tile {
  font-size: 25px;
}
.Login .rightLayout .content-title .title-text {
  font-size: 14px;
  color: gray;
}
.Login .rightLayout .content .content-form {
  margin-top: 30px;
}
.Login .rightLayout .content-footer .content-image{
  width: 89.71px;
  height: 89.71px;
  margin-top: 10px;
  /* flex: 1; */
  /* justify-content: center;
  align-items: center;*/
  background-image: url("../../components/Inon/Gitee.svg");
  background-position: 0 0;
  cursor: pointer; 
}
</style>
