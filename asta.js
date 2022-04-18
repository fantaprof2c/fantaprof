var json = $.getJSON("asta.json");
var data = "(" +json.responseText + ")";
document.write(data["a"]);