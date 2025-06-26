<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { ElMessage  } from 'element-plus'


// // 获取当前路由
// const route = useRoute();
// // 权限渲染
const isShow = ref(false);
// console.info(route.query)
// if (route.fullPath === '/web3d') {

//   isShow.value = true;
// } else {
//   isShow.value = false;
// }


// 全局消息提示
const showMessage = (message: string) => {
   ElMessage ({
    message,
    type: 'success',
    duration: 2000,
  })
}

// 监听路由变化
onMounted(() => {
  const router = useRouter();
  router.beforeEach((to, from, next) => {
    console.info(to.fullPath)
    if (to.fullPath === '/web3d') {
      isShow.value = true;
    } else {
      isShow.value = false;
    }
    next();
  });
  router.afterEach(() => {
    showMessage(`当前路由: ${router.currentRoute.value.fullPath}`);
  });
})
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
// console.info(tableData)
</script>

<template>
  <!-- {{ isShow }} -->
  <div class="header" v-if="!isShow">
    <nav class="nav">
      <a href="/upload">文件上传接口</a>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped lang="css">
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
