// import cv from 'opencv.js';

function loadImage(imageData) {
    // Create an OpenCV Mat object from the image data
    let mat = cv.matFromImageData(imageData);

    // Convert the image from RGBA to BGR color space
    cv.cvtColor(mat, mat, cv.COLOR_RGBA2BGR);

    return mat;
}

export { loadImage };