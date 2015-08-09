$(document).ready(function() {
  attachHowToEvents();
});

var hows = $('.how');

function attachHowToEvents() {
  $.each(hows, function() {
    $(this).on('click', function() {
      hows.removeClass('chosen');
      $(this).addClass('chosen');
      var num = $(this).attr("data-num");
      var image = $('img.how-' + num);
      $('#how-it-works img').hide();
      image.show();
    })
  });
}