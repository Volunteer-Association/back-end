import { sequential, layers, mod } from '@tensorflow/tfjs'

/**
 * 创建AI模型
 * @returns Sequential
 */
const CreateModel = () => {
  const _model = sequential();
  _model.add(layers.dense({ inputShape: [1], units: 1, useBias: true }))
  _model.add(layers.dense({ units: 1, useBias: true }))
  return _model;
}

export default CreateModel;
