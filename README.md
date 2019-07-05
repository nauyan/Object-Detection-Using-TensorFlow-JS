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

## How to prepare dataset
- Download the Pascal VOC data set from their [offical webiste](http://host.robots.ox.ac.uk/pascal/VOC/voc2012/VOCtrainval_11-May-2012.tar)
- Once dataset is downloaded navigate to JPEGImages folder and resize all images with size of 224 x 224 and adjust all their annotations accordingly.
- [Convert2Yolo](https://github.com/ssaru/convert2Yolo) and [resize_dataset_pascalvoc
](https://github.com/italojs/resize_dataset_pascalvoc#Folder-structure-example) might help in accomplishing above mentioned task.

Before starting training make a directory named DataSet and inside this directory make two more directoreis namely JPEGImage and YOLO. In the directory JPEGImages resized jpeg images should be copied from pascal voc dataset and in YOLO directory all the  annotations files should be copied.

