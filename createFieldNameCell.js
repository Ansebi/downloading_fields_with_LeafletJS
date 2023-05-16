// createFieldNameCell.js
function createFieldNameCell(field) {
    var fieldNameCell = document.createElement("td");
    var fieldNameInput = document.createElement("input");
    fieldNameInput.type = "text";
    fieldNameInput.value = field.name;
    fieldNameInput.style.display = "none";
    fieldNameInput.onchange = function() {
        field.name = this.value;
    };
    fieldNameCell.appendChild(fieldNameInput);

    var fieldNameSpan = document.createElement("span");
    fieldNameSpan.innerHTML = field.name;
    fieldNameCell.appendChild(fieldNameSpan);

    var editButton = document.createElement("button");
    editButton.innerHTML = "✏️";
    editButton.onclick = function() {
        fieldNameInput.style.display = "inline";
        fieldNameSpan.style.display = "none";
        editButton.style.display = "none";
        saveButton.style.display = "inline";
    };
    fieldNameCell.appendChild(editButton);

    var saveButton = document.createElement("button");
    saveButton.innerHTML = "✔️";
    saveButton.style.display = "none";
    saveButton.onclick = function() {
        field.name = fieldNameInput.value;
        fieldNameSpan.innerHTML = field.name;
        fieldNameInput.style.display = "none";
        fieldNameSpan.style.display = "inline";
        editButton.style.display = "inline";
        saveButton.style.display = "none";
    };
    fieldNameCell.appendChild(saveButton);

    return fieldNameCell;
}