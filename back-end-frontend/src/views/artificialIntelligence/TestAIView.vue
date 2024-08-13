<template>
  <div class="Test">

  </div>
</template>

<script setup>
import * as tf from '@tensorflow/tfjs'
import { onMounted } from 'vue';
import 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@1.0.2/dist/tfjs-vis.umd.min.js'

async function getData() {
  const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
  const carsData = await carsDataResponse.json();
  const cleaned = carsData.map(car => ({
    mpg: car.Miles_per_Gallon,
    horsepower: car.Horsepower,
  }))
  .filter(car => (car.mpg != null && car.horsepower != null));

  return cleaned;
}

// 创建模型
const createModel = () => {
  const model = tf.sequential()
  model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }))
  model.add(tf.layers.dense({ units: 1, useBias: true }))
  return model;
}


async function run() {

  const data = await getData();
  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    {name: 'Horsepower v MPG'},
    {values},
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300
    }
  );

  const model = createModel();

  tfvis.show.modelSummary({name: 'Model Summary'}, model);

  // Convert the data to a form we can use for training.
  const tensorData = convertToTensor(data);
  const { inputs, labels } = tensorData;

  // Train the model
  await trainModel(model, inputs, labels);
  console.log('Done Training');
}

async function trainModel(model, inputs, labels) {
  // Prepare the model for training.
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ['mse'],
  });

  const batchSize = 32;
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: 'Training Performance' },
      ['loss', 'mse'],
      { height: 200, callbacks: ['onEpochEnd'] }
    )
  });
}

onMounted(() => {
  // 创建模型并且保存模型
  const _mode = createModel();
  const user = async() => {
    const saveReuidn = await _mode.save('localstorage://my-model-1');
    // await _mode.save('downloads://my-model');
    await _mode.save('indexeddb://my-model');
    const mode = await tf.loadLayersModel('localstorage://my-model-1');
    console.log("执行")
    console.log(saveReuidn)
  }
  console.log("保持模型")
  user();
})

</script>