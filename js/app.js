$(document).ready(function() {
  attachHowToEvents();
  var timeout1 = window.setTimeout(function() {
    adjustLeafBox();
  }, 300);
  $(window).on('resize', function() {
    adjustLeafBox();
  });
  nextStep();

  // email submission

  $('#test-it-button').click(function() {
    var email = $('#email-field').val();
    console.log(email);

    if (email === '') {
      return false;
    }

    $.ajax({
      url: 'https://beta.publet.com/email',
      method: 'post',
      data: {
        email: email
      },
      success: function() {
        window.location = '/thankyou.html';
      }
    });

    return false;
  });
});

var hows = $('.how');
var i = 0;
function nextStep() {
  changeStep(hows[i]);
  i = (i + 1) % hows.length;
}
var intervalFunc = window.setInterval(nextStep, 2000);

function changeStep(element) {
  hows.removeClass("chosen");
  $(element).addClass("chosen");
  var num = $(element).attr("data-num");
  var image = $('img.how-' + num);
  $('#how-it-works img').hide();
  image.show();
}

function attachHowToEvents() {
  $.each(hows, function() {
    $(this).on('click', function() {
      clearInterval(intervalFunc);
      changeStep(this);
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
