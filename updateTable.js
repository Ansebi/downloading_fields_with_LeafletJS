// updateTable.js
function updateTable() {
    var table = document.getElementById("dataTable");
    table.innerHTML = "";

    var headerRow = createHeaderRow();
    table.appendChild(headerRow);

    for (var i = 0; i < fields.length; i++) {
        var row = createDataRow(fields[i]);
        table.appendChild(row);
    }
}