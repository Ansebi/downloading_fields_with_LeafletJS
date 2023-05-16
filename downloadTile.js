// downloadTile.js
map.on('click', function(e) {
    // Get the latitude and longitude of the clicked location
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    // Construct the URL for the corresponding map tile
    var tileUrl = 'https://mt0.google.com/vt/lyrs=m&x=' + lng + '&y=' + lat + '&z=' + map.getZoom();

    // Download the map tile
    var link = document.createElement('a');
    link.href = tileUrl;
    link.download = 'tile.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});