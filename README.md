# Object-Detection-Using-TensorFlow-JS
This example illustrates how to train a model to perform simple object
detection in TensorFlow.js. It includes the full workflow:

- Generation of synthetic images and labels for training and testing
- Creation of a model for the object-detection task based on a pretrained
  computer-vision model (MobileNet)
- Training of the model in Node.js using [tfjs-node](https://github.com/tensorflow/tfjs-node)
- Transfering the model from the Node.js environment into the browser
  through saving and loading
