<template>
    <div class="ai-demo">
        <h1>AI Demo</h1>
        <div class="ai-demo-content">
            <div class="ai-demo-left">sdfsdf</div>
            <div class="ai-demo-right">sdfsdf</div> 
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TFJS } from '../assets/ts/AIdemo/index';
import { onMounted } from 'vue';

onMounted(() => {
    TFJS()
})

</script>

<style lang="css">
</style>