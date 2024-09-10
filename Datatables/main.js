//main

$(document).ready( function () {
    $('example').DataTable();
} );
$('#employee1').DataTable({
    "ajax": {
        "url": "assets/ajax/array.txt", // Verify this URL
        "dataSrc": ""
    }
});
