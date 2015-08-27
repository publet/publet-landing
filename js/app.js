$(document).ready(function() {
  attachHowToEvents();
  var timeout1 = window.setTimeout(function() {
    adjustLeafBox();
  }, 300);
  $(window).on('resize', function() {
    adjustLeafBox();
  });
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

function adjustLeafBox() {
  var box = $("#leaf-box-wrapper");
  if (window.innerWidth > 991) {
    var padding = $("#tree").height() - $("#leaf").height();
    box.css("padding-top", padding);
  } else if (window.innerWidth < 991) {
    box.css("padding-top", 25);
  }
}