document.addEventListener('DOMContentLoaded', function() {
    // Sidenav Initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Datepicker Initialization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd-mmm-yyyy",
      i18n: {done: "Select"}
    });

    // Select Initialization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });
