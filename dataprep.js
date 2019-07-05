const tf = require('@tensorflow/tfjs');
const path = require('path');
const { Image, createCanvas} = require('canvas');
const fs = require('fs');


function loadingOneImage(file, directoryPath){
 
    var fname = directoryPath.slice(0, -10) + "YOLO/" + file.slice(0, -4) + ".txt";
    let data =  fs.readFileSync(fname, "utf-8");

    const splitString = data.split(" ");           
    var i = splitString[4].indexOf('\n');
    s = splitString[4].substring(0, i);

    const targetTensor = tf.tensor1d([Number(splitString[0]), Number(splitString[1]), Number(splitString[2]), Number(splitString[3]), Number(s)]);

    img = new Image();
    img.src = directoryPath + "/" + file;
    canvas = createCanvas(224, 224)
    ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    const imageTensor = tf.browser.fromPixels(this.canvas);

    img = undefined;
    canvas = undefined;
    ctxs = undefined;
    global.gc();
    
    let promise = new Promise((resolve, reject) => {
        resolve("done!")
    })

    return tf.tidy(() => {
       return {image: imageTensor, target: targetTensor};
    });  
}

function generateDataset(){
    console.log("Function is Running");
    const imageTensors = [];
    const targetTensors = [];
    const directoryPath = path.join(__dirname, 'DataSet/JPEGImages');
    
    fs.readdirSync(directoryPath).forEach(function(file){
        const imageData = loadingOneImage(file,directoryPath);
        imageTensors.push(imageData.image);
        targetTensors.push(imageData.target);        
    });
    const images = tf.stack(imageTensors);
    const targets = tf.stack(targetTensors);
    tf.dispose([imageTensors, targetTensors]);
    return {images, targets};
}
module.exports = { generateDataset, loadingOneImage }
//generateDataset();
