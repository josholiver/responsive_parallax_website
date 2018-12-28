jQuery(document).ready(function () {
  $('#videolink').magnificPopup({
    type: 'inline',
    midClick: true
  });
});

$(function () {
  $('#team-members').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      }
    }
  });
});

$(function () {
  $('#progress-elements').waypoint(
    function () {
      $('.progress-bar').each(function () {
        $(this).animate({
            width: $(this).attr('aria-valuenow') + '%'
          },
          2000
        );
      });

      this.destroy();
    }, {
      offset: 'bottom-in-view'
    }
  );
});

$(function () {
  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });

  $('.gallery').magnificPopup({
    delegate: '.popimg',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.gallery').isotope({
    // options
    itemSelector: '.items'
  });

  var $gallery = $('.gallery').isotope({
    // options
  });

  // filter items on button click
  $('.filtering').on('click', 'span', function () {

    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({
      filter: filterValue
    });

  });

  $('.filtering').on('click', 'span', function () {

    $(this).addClass('active').siblings().removeClass('active');

  });



});