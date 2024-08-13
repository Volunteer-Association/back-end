<script setup>
import { onMounted, ref } from "vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue"
import { Expand, Fold } from "@element-plus/icons-vue"
import * as THREE from 'three';
import IntelligenceView from "./artificialIntelligence/IntelligenceView.vue";

const collapsed = ref(true);

const carteWidth = 1200;
const cartHeight = 520;
const childRef = ref();

const _canvas = ref();

function setCollapsed(event) {
  collapsed.value = collapsed.value == false ? true : false;
  console.log("触发", event)
}

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, carteWidth / cartHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(carteWidth, cartHeight);
  _canvas.value?.appendChild(renderer.domElement);
  _canvas.value?.focus()
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
})

</script>

<template>
  <el-container class="layout-container">
    <el-aside class="navTab">
      <NavigationBar :isCollapse="collapsed" ref="childRef" />
    </el-aside>

    <el-container>
      <el-header>
        <el-button :icon="collapsed ? Fold : Expand" @click="setCollapsed(event)" circle />
      </el-header>

      <el-main>
        <el-scrollbar>
          <IntelligenceView />
          <!-- <div ref="_canvas"></div> -->
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
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