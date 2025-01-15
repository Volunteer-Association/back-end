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
import { load } from 'https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0';



async function TestAIdeq() {
    const model = await TF.mobli();
}


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

    const trainDataset = {
        xs: TF.tensor4d(trainImages, [trainImages.length, 28, 28, 1]), // 输入图像
        ys: TF.tensor2d(trainLabels, [trainLabels.length, 10]) // 图像对应的标签
    };

    const testDataset = {
        xs: TF.tensor4d(testImages, [testImages.length, 28, 28, 1]), // 测试图像
        ys: TF.tensor2d(testLabels, [testLabels.length, 10]) // 测试图像对应的标签
    };

    model.fit(trainDataset.xs, trainDataset.ys, {
        epochs: 10, // 训练轮数
        validationData: [testDataset.xs, testDataset.ys], // 验证数据集
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                console.log(`Epoch ${epoch + 1}: loss = ${logs.loss}, accuracy = ${logs.acc}`);
            }
        }
    });

    model.evaluate(testDataset.xs, testDataset.ys).then((result) => {
    console.log(`Test loss: ${result[0].dataSync()[0]}`);
    console.log(`Test accuracy: ${result[1].dataSync()[0]}`);
});

const predicted = model.predict(TF.tensor4d([newImage], [1, 28, 28, 1]));
predicted.print();


}

onMounted(() => {
    // TFJS();
    // careTalk();
})

</script>

<style lang="css"></style>