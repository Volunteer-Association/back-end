<template>
  <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="http://192.168.1.100:3001/upload"
    multiple
    :auto-upload="false"
    :on-change="handleChange"
  >
    <el-button type="primary">Click to upload</el-button>
    <el-button type="success" slot="tip" class="upload__tip" @click="handleClick">
      上传文件大小不能超过500KB
    </el-button>
    <!-- <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template> -->
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElUpload } from 'element-plus'
// import { fi } from 'element-plus/es/locales.mjs'
// import worker from '../assets/ts/worker.js?worker'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  // {
  //   name: 'element-plus-logo2.svg',
  //   url: 'https://element-plus.org/images/element-plus-logo.svg',
  // },
])

const handleChange: UploadProps['onChange'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleClick = () => {
  console.log('click')
  fileList.value.forEach((file) => {
    console.log(file)
  })
}

const worker = new Worker(new URL('./worker.js', import.meta.url));


worker.onmessage = (event) => {
  console.log('Worker message:', event.data)
  // Handle the message from the worker
}
worker.postMessage({
  message: 'Hello, worker!',
  fileList: fileList?.value[0],
})

worker.onerror = (error) => {
  console.error('Worker error:', error)
  // Handle the error from the worker
}

</script>
