$(document).ready(function() {
  $('#my_form').on('submit', function(event) {
    event.preventDefault();

    ['/demo', '/demo2', '/demo3'].forEach(function (url) {
      $.ajax({
        url: url, // action
        type: 'GET', // method
        success: function(response) {
          console.log(response);
        },
        error: function(response) {
          console.log("failed on url", url, "resp", response);
        }
      });
    })

    console.log("HEY! I'm 'after' the ajax request.")
  })

  $('table').on('click', function(event) {
    event.stopPropagation();
  })
});
