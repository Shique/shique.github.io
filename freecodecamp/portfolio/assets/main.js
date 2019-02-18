$(document).ready(function() {
  $('#sidebar-toggle').click(function(event) {
    event.preventDefault();
    $('#sidebar').toggle('swing');
  });
})
