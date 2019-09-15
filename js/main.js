function loadRemoteContent() {
  $.each($('div[data-remote-content]'), function(i, elem) {
    var type = $(elem).data('remote-content');
    $(elem).html(remoteContent(type));
  });
};

function remoteContent(type) {
  if(type == 'nav') {
    var content = "<nav class='navbar navbar-expand-lg navbar-light bg-light'>" +
      "<div class='container'>" +
        "<a class='navbar-brand' href='#'>" +
          "<img src='images/logo.png' height='60' alt='Choral Artists of Michigan'>" +
        "</a>" +
        "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>" +
          "<span class='navbar-toggler-icon'></span>" +
        "</button>" +
        "<div class='collapse navbar-collapse' id='navbarNav'>" +
          "<ul class='navbar-nav'>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-index' href='#'>Home</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' href='#'>History</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' href='#'>Bios</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' href='#'>Contact</a>" +
            "</li>" +
          "</ul>" +
        "</div>" +
      "</div>" +
    "</nav>"
  }

  return(content);
};

function setActivePage() {
  var currentPath = $(window.location.pathname.split('/')).last()[0].split('.')[0];
  $('#nav-link-' + currentPath).addClass('active');
};

$(document).ready(function() {

  loadRemoteContent();
  setActivePage();

});
