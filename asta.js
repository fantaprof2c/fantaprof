const json_file = './asta.json';

$.getJSON(json_file, function(json) {
    console.log(json); // this will show the info it in firebug console
});