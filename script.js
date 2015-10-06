$(document).ready(function() {
  
  $(window).scroll(function (e) {
        if ($(this).scrollTop() > 220 && $('nav').css('position') != 'fixed') {
            $('nav').addClass( "navbar-fixed" )
        }
        if ($(this).scrollTop() < 220 && $('nav').css('position') == 'fixed') {
           $('nav').removeClass( "navbar-fixed" );
            // $('nav').css({ 'position': 'absolute', 'top': '63px', 'left':'', 'right':'' });
        }
    });
});