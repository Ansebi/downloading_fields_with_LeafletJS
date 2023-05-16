// eventListeners.js
var fields = [];

// Add an event listener for when a new layer is created
map.on('draw:created', function (e) {
    // Get the layer that was created
    var layer = e.layer;
    // Add the layer to the feature group
    drawnItems.addLayer(layer);

    var field = {
        name: layer.options.type,
        coordinates: layer.getLatLngs(),
        area: L.GeometryUtil.geodesicArea(layer.getLatLngs()[0])
    };

    fields.push(field);

    updateTable();

});

map.on('draw:deleted', function(e) {
  var layers = e.layers;
  layers.eachLayer(function(layer) {
      fields = fields.filter(function(field) {
          return JSON.stringify(field.coordinates) !== JSON.stringify(layer.getLatLngs());
      });
  });
  
  updateTable();
});