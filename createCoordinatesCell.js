// createCoordinatesCell.js
function createCoordinatesCell(field) {
    var coordinatesCell = document.createElement("td");
    coordinatesCell.innerHTML = JSON.stringify(field.coordinates);
    return coordinatesCell;
}