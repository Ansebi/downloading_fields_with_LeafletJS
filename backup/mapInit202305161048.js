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

map.on('click', function(e) {
    var x = Math.floor((e.latlng.lng + 180) / 360 * Math.pow(2, map.getZoom()));
    var y = Math.floor((1 - Math.log(Math.tan(e.latlng.lat * Math.PI / 180) + 1 / Math.cos(e.latlng.lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, map.getZoom()));
    var z = map.getZoom();

    // Choose a subdomain based on the tile coordinates
    var subdomains = ['mt0', 'mt1', 'mt2', 'mt3'];
    var subdomain = subdomains[(x + y) % subdomains.length];

    var tileUrl = 'https://'  + subdomain +  '.google.com/vt/lyrs=s&x=' + x + '&y=' + y + '&z=' + z;
    alert('Tile URL: ' + tileUrl);

    // Download the map tile
    var link = document.createElement('a');
    link.href = tileUrl;
    link.download = 'tile.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});