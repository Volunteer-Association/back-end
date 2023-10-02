<script setup>
import { ref } from "vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue"
import { Expand, Fold } from "@element-plus/icons-vue"

const collapsed = ref(true);

const childRef = ref();

function setCollapsed(event) {
  collapsed.value = collapsed.value == false ? true : false;
  console.log("触发", event)
} 

</script>

<template>
  <el-container class="layout-container">
    <el-aside class="navTab">
      <NavigationBar :isCollapse="collapsed" ref="childRef" />
    </el-aside>

    <el-container>
      <el-header>
        <el-button
          :icon="collapsed ? Fold : Expand"
          @click="setCollapsed(event)"
          circle
        />
      </el-header>

      <el-main>
        <el-scrollbar>
          
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container{
  height: 100vh;
}
.layout-container .navTab {
  width: 200px;
}
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  display: flex;
  align-items: center;
}
.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container .el-main {
  padding: 0;
}
</style>