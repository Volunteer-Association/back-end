<!--
 * @Author: chenguihui
 * @Date: 2023-05-21 12:27:32
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-06 10:38:04
 * @Description: 登录功能
 * @filePath: Do not edit
-->
<script setup>
import { ref, reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue"
import image from "@/assets/image/bg.png";
import { ElMessage } from "element-plus";

import { login, getSystem } from "@/api/login";

const images = ref("");
images.value = image

const form = reactive({
  username: "",
  password: "",
  remember: false
})

const onClickic = async () => {
  if (!form.username || !form.password) {
    ElMessage.warning("请填写用户名和密码")
  } else {
    const data = await login({
      username: form.username,
      password: form.password,
      remomber: form.remember
    })
    console.log(data)
  }
  const usedd = await getSystem(
    {
    id: "2412",
    memory: "KB"
  }
  )
  console.log(usedd.data);
}


</script>

<template>
  <div class="login">
    <div class="content_left">
      <el-image class="auto-img" fit="cover" :src="image" />
    </div>
    <div class="content_centre">
      <div class="upper">欢迎来到我们学习平台</div>
      <div class="centre">在这里你可以学习如何使用Java、vue、如何搭建网站</div>
      <div class="lower"></div>
    </div>
    <div class="content_right">
      <div class="right_main">
        <div class="right_title">
          <div class="title_upper">登录</div>
          <div class="title_lower">在进入系统之前请输入用户名和密码进行登录</div>
        </div>
        <div class="right_form">
          <el-input type="text" placeholder="用户名/邮箱" v-model="form.username" :prefix-icon="User" />
          <el-input class="form_pass" type="password" v-model="form.password" placeholder="密码" :prefix-icon="Lock" />
        </div>
        <el-row class="right_trigger">
          <el-col class="trigger_l" :span="12">
            <el-checkbox v-model="form.remember" label="记住我" />
          </el-col>
          <el-col class="trigger_r" :span="12">
            <el-link>忘记密码?</el-link>
          </el-col>
        </el-row>
        <div style="margin-top: 40px;">
          <el-button style="width: 270px;" type="success" plain :onclick="onClickic">立即登录</el-button>
        </div>
        <el-divider>
          <span style="color: gray;">没有账号</span>
        </el-divider>
        <div>
          <el-button style="width: 270px;" type="warning" plain>注册账号</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./login.less");
</style>