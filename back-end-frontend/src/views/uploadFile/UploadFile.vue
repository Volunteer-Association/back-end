<script setup>
import { ref } from "vue"
const uploadRef = ref();

const fileUrl = ref("https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15");

const submitUpload = () => {
  uploadRef.value.submit()
}
// 日期转换
function Times(time) {
  const data = time ? new Date(time) : new Date(),
  n = data.getFullYear(),
  y = data.getMonth() + 1,
  r = data.getDate(),
  s = data.getHours(),
  f = data.getMinutes(),
  m = data.getSeconds()
  return `${n}-${y}-${r} ${s}:${f}:${m}`;
}

function Soclkic(){
  let wss = new WebSocket("ws://192.168.1.10:3000");
  wss.addEventListener("open", handleOpen, false);
  wss.addEventListener("close", handleClose, false);
  wss.addEventListener("error", handleError, false);
  wss.addEventListener("message", handleMessage, false);

  function handleOpen(e) {
    console.log("WebSocket open", e);
  }

  function handleClose(e) {
    console.log("WebSocket close", e);
  }

  function handleError(e) {
    console.log("WebSocket error", e);
  }

  function handleMessage(e) {
    console.log("WebSocket message", e);
    const str = JSON.parse(e.data);

    // InformationList(str.message, 1)

  }
}

Soclkic();

// 文件切片
function createThunk(file, size = 1024 * 1024 * 0.5) {
  const result = [];
  let cur = 0;
  while (cur < file.size) {
    result.push({
      tmpFile: file.slice(cur, cur + size)
    });
    cur += size;
  };
  return result;
}

const handleChange = (event, file) => {
  // 文件预处理9999
  let objStr = {
    id: event.raw.uid,
    name: event.raw.name,
    size: event.raw.size,
    type: event.raw.type,
    lastDate: Times(event.raw.lastModified)
  }

  let filelist = createThunk(event.raw)

  console.log(filelist)

  console.log(objStr)
  console.log(file)
}


</script>

<template>
  <div class="upload">
    <el-upload class="upload-demo" 
      ref="uploadRef"
      :on-change="handleChange"
      :action="fileUrl"
      :auto-upload="false"
    >
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>

      <el-button class="ml-3" type="success" @click="submitUpload">
        upload to server
      </el-button>

      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<style></style>