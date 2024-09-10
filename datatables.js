$('#employee1').DataTable({
    ajax: 'assets/ajax/arrays.txt',
    dom: '<"top"p>rt<"bottom"il><"clear">',
    pageLength: 10, // Example page length
    initComplete: function () {
        // Your initComplete code for custom searching and column visibility
    }
});
