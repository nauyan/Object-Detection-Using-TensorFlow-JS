# Object-Detection-Using-TensorFlow-JS
This example illustrates how to train a model to perform simple object
detection in TensorFlow.js. It includes the full workflow:

- Usage of Pascal VOC detection dataset
- Creation of a model for the object-detection task based on a pretrained
  computer-vision model (MobileNet)
- Training of the model in Node.js using [tfjs-node](https://github.com/tensorflow/tfjs-node)
- Transfering the model from the Node.js environment into the browser
  through saving and loading
  
## How to use this example
First clone the tfjs-examples repository using:
```sh
https://github.com/tensorflow/tfjs-examples.git
```
After that navigate to simple-object-detection directory using:
```sh
cd tfjs-examples/mple-object-detection/
```
Once you are inside simple-object-detection directory download the [train.js](https://github.com/nauyan/Object-Detection-Using-TensorFlow-JS/blob/master/train.js), [package.json](https://github.com/nauyan/Object-Detection-Using-TensorFlow-JS/blob/master/package.json), [dataprep.js](https://github.com/nauyan/Object-Detection-Using-TensorFlow-JS/blob/master/dataprep.js) files and copy them.
Next to install all the dependencies use:
```sh
yarn
```
Once all the dependenices are installed start training by using the command:
```sh
yarn train
```
To make certain modificaions in the training process you can start training by using:
```sh
yarn train \
    --numExamples 20000 \
    --initialTransferEpochs 100 \
    --fineTuningEpochs 200
```
