// downloadJSON.js
function downloadJSON() {
    var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(fields));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "fields.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}