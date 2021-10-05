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
        "<a class='navbar-brand' href='index.html'>" +
          "<img src='images/logo.png' height='60' alt='Choral Artists of Michigan'>" +
        "</a>" +
        "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>" +
          "<span class='navbar-toggler-icon'></span>" +
        "</button>" +
        "<div class='collapse navbar-collapse' id='navbarNav'>" +
          "<ul class='navbar-nav mr-auto'>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-index' href='index.html'>Home</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-events' href='events.html'>Events</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-history' href='history.html'>History</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-bios' href='bios.html'>Bios</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-audition' href='audition.html'>Audition</a>" +
            "</li>" +
            "<li class='nav-item'>" +
              "<a class='nav-link' id='nav-link-sponsors' href='sponsors.html'>Sponsors</a>" +
            "</li>" +
          "</ul>" +
          "<ul class='navbar-nav'>" +
            "<li class='nav-item'>" +
              "<a class='btn btn-outline-primary rounded-pill' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KPSWKTUUKLXWE' target='_blank'>Donate</a>" +
            "</li>" +
          "</ul>" +
        "</div>" +
      "</div>" +
    "</nav>"
  } else if(type == 'footer') {
    var content = "<div class='py-5' style='background-color: #f8f9fa;'>" +
        "<div class='container text-secondary small text-center'>" +
          "<ul class='list-inline'>" +
            "<li class='list-inline-item'>Choral Artists of Michigan</li>" +
            "<li class='list-inline-item'>3260 Regency Dr.</li>" +
            "<li class='list-inline-item'>Lake Orion, MI 48359</li>" +
          "</ul>" +
          "&copy; 2019 Choral Artists of Michigan All Rights Reserved." +
        "</div>" +
      "</div>"
  };

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
