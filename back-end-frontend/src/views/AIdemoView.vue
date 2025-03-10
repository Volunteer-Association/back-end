<template>
    <div class="ai-demo">
        <h1>AI Demo</h1>
        <div class="ai-demo-content">
            <div class="ai-demo-left">sdfsdf</div>
            <div class="ai-demo-right">sdfsdf</div>
        </div>
        <div>
            <img width="500px" :src="teseai" alt="trainImages">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import teseai from '../assets/images/aitext.jpg';
import * as TF from '@tensorflow/tfjs'
import { NumberController } from 'three/examples/jsm/libs/lil-gui.module.min.js';

function careTalk() {
    const model = TF.sequential();

    model.add(
        TF.layers.conv2d({
            inputShape: [28, 28, 1],
            filters: 16,
            kernelSize: 3,
            activation: 'relu',
        })
    );

    model.add(
        TF.layers.maxPooling2d({
            poolSize: [2, 2],
        })
    );

    model.add(
        TF.layers.conv2d({
            filters: 32,
            kernelSize: 3,
            activation: 'relu',
        })
    );

    model.add(
        TF.layers.maxPooling2d({
            poolSize: [2, 2],
        })
    );

    model.add(
        TF.layers.flatten()
    );

    model.add(
        TF.layers.dense({
            units: 128,
            activation: 'relu',
        })
    );

    model.add(
        TF.layers.dense({
            units: 10,
            activation: 'softmax',
        })
    );

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy'],
    });




}

class LinearModel {
    model: TF.Sequential;
    constructor() {
        this.model = TF.sequential();
    }

    async loadModel(xy: number[], ys: number[]) {
        this.model.add(
            TF.layers.dense({
                inputShape: [1],
                units: 1
            })
        );

        this.model.compile({
            optimizer: 'sgd',
            loss: 'meanSquaredError',
        });

        this.model.fit(TF.tensor2d(xy), TF.tensor2d(ys), {
            epochs: 1000,
            batchSize: 32,
        })


    }

    predict(input: number[]) {
        console.log(input);
        const prediction = this.model.predict(TF.tensor2d([input], [1, input.length])); // 确保输入是一个2D数组
        if (Array.isArray(prediction)) {
            // 如果prediction是一个数组，遍历并同步提取每个Tensor的数据
            return prediction.map(tensor => Array.from(tensor.dataSync()));
        } else {
            // 如果prediction是一个单个的Tensor
            return prediction ? Array.from(prediction.dataSync()) : [];
        }
    }

    async save() {
        await this.model.save('localstorage://my-model');
        console.log('Model saved');
    }

}



onMounted(() => {
    const linearModel = new LinearModel();
    linearModel.loadModel([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
    console.log(linearModel.predict([10]));
    linearModel.save();
    // linearModel.save();
    // TFJS();
    // careTalk();
})

</script>

<style lang="css"></style>