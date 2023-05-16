// drawControl.js
import { detectFieldEdges } from './edgeDetection.js';
import { getClickedPointColor } from './colorDetection.js';

// Create a draw control object and add it to the map
var drawControl = new L.Control.Draw({
    // Specify which drawing tools are available
    draw: {
        polyline: false, // Disable polyline drawing
        polygon: true, // Enable polygon drawing
        circle: false, // Disable circle drawing
        marker: false, // Disable marker drawing
        circlemarker: false, // Disable circlemarker drawing
        rectangle: true // Enable rectangle drawing
    },
    // Specify which editing tools are available
    edit: {
        featureGroup: drawnItems, // Set the feature group to edit
        remove: true // Enable layer deletion
    }
}).addTo(map);


// Create a custom control
var MagicWandControl = L.Control.extend({
    options: {
        position: 'topleft' // Set the position of the control
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

        container.style.backgroundColor = 'white';
        container.style.backgroundImage = "url('magic-wand.png')";
        container.style.backgroundSize = "30px 30px";
        container.style.width = '30px';
        container.style.height = '30px';

        container.onclick = function(){
            // Set the map to be in "magic wand mode"
            map.magicWandMode = true;
        }

        return container;
    }
});

// Add the custom control to the map
map.addControl(new MagicWandControl());

// Listen for clicks on the map
map.on('click', async function(e) {
    // Check if the map is in "magic wand mode"
    if (map.magicWandMode) {
        // Get the RGB color of the clicked point
        var rgbColor = await getClickedPointColor(e.latlng);

        // Create a popup at the clicked location
        L.popup()
            .setLatLng(e.latlng)
            .setContent("RGB Color: " + rgbColor)
            .openOn(map);

        // Reset the magic wand mode
        map.magicWandMode = false;
    }
});