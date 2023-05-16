// createAreaCell.js
function createAreaCell(field) {
    var areaCell = document.createElement("td");
    areaCell.innerHTML = field.area.toFixed(2);
    return areaCell;
}