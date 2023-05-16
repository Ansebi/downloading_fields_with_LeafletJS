// createDataRow.js
function createDataRow(field) {
    var row = document.createElement("tr");

    var fieldNameCell = createFieldNameCell(field);
    row.appendChild(fieldNameCell);

    var coordinatesCell = createCoordinatesCell(field);
    row.appendChild(coordinatesCell);

    var areaCell = createAreaCell(field);
    row.appendChild(areaCell);

    return row;
}