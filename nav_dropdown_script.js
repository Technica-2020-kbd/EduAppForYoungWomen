// Used to show dropdown menu to view questions
$(document).ready(function() {
    $('button.nav-link').click(function() {
      $('.dropdown-options').toggleClass('visible');
    });
  });