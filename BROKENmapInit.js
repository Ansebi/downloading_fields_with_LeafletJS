// mapInit.js
// Create a map object and set the center and zoom level
var map = L.map('map').setView([45.26136, 39.61754], 13);

// Add a tile layer to the map using Google Satellite
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

// Create a feature group to store the drawn layers
var drawnItems = L.featureGroup().addTo(map);

import { loadImage } from './loadImage.js';

map.on('click', function(e) {
    var x = Math.floor((e.latlng.lng + 180) / 360 * Math.pow(2, map.getZoom()));
    var y = Math.floor((1 - Math.log(Math.tan(e.latlng.lat * Math.PI / 180) + 1 / Math.cos(e.latlng.lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, map.getZoom()));
    var z = map.getZoom();

    // Choose a subdomain based on the tile coordinates
    var subdomains = ['mt0', 'mt1', 'mt2', 'mt3'];
    var subdomain = subdomains[(x + y) % subdomains.length];

    var tileUrl = 'https://'  + subdomain +  '.google.com/vt/lyrs=s&x=' + x + '&y=' + y + '&z=' + z;

    // Load the map tile as an image
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
        // Create a canvas element and draw the image onto it
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Get the image data from the canvas
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Load the image data into an OpenCV Mat object
        var mat = loadImage(imageData);

        // TODO: Use the mat object for further processing
    };
    img.src = tileUrl;
});