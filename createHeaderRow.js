// createHeaderRow.js
function createHeaderRow() {
    var headerRow = document.createElement("tr");

    var fieldNameHeader = document.createElement("th");
    fieldNameHeader.innerHTML = "Field Name";

    var coordinatesHeader = document.createElement("th");
    coordinatesHeader.innerHTML = "Coordinates";

    var areaHeader = document.createElement("th");
    areaHeader.innerHTML = "Area (m²)";

    headerRow.appendChild(fieldNameHeader);
    headerRow.appendChild(coordinatesHeader);
    headerRow.appendChild(areaHeader);

    return headerRow;
}