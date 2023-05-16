// edgeDetection.js
import { loadImage } from './loadImage.js';
import { preprocessImage } from './preprocessImage.js';
import { detectEdges } from './detectEdges.js';
import { processResults } from './processResults.js';

function detectFieldEdges(imageData) {
    // Load the image data into an OpenCV Mat object
    var mat = loadImage(imageData);
    // Preprocess the image to enhance the edges
    var preprocessed = preprocessImage(mat);
    // Detect the edges in the preprocessed image
    var edges = detectEdges(preprocessed);
    // Process the detected edges to extract useful information
    var results = processResults(edges);
    // Return the processed edge information
    return results;
}

export { detectFieldEdges };