$(document).ready(function() {
  // Mobile nav
  $('[data-js="mobile-nav"]').click(function() {
    if($('.share-menu').hasClass('active')) {
      $('.share-menu').removeClass('active');
    }
    $('header nav').toggleClass('active');
    return false;
  });
  $('header nav a').add('article').click(function() {
    $('header nav').removeClass('active');
  });
  $('.share-menu a').add('article').click(function() {
    $('.share-menu').removeClass('active');
  });

  // Mobile share menu
  $('[data-js="share-toggle"]').click(function() {
    if($('header nav').hasClass('active')) {
      $('header nav').removeClass('active');
    }
    $('.share-menu').toggleClass('active');
    return false;
  });

  // Fancybox modals
  $('.modal').fancybox({
    'type': 'image',
    onStart: function() {
        $('body').addClass('modal-lock');
    },
    onClosed: function() {
        $('body').removeClass('modal-lock');
    },
    'speedIn': '600',
    'speedOut': '600'
  });

  var fadeThings = $('.fade');

  $(window).scroll(function() {

    fadeThings.each(function(index, item) {
      var fade = $(item);
      var winHeight = window.innerHeight;
      var fromTop = fade.offset().top;
      var scroll = $('body').scrollTop();
      if ((winHeight + scroll) > fromTop) {
        if (fade.css('visibility') === 'hidden') {
          fade.css({display: 'none'});
          fade.css({visibility: 'visible'});
          fade.fadeIn(2000);
        }
      }
    }); 
  });
});