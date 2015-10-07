$( document ).ready(function() {
    console.log( "ready!" );

$('#slideshow').cycle({
	fx: 'fade',
	pager: '#smallnav',
	pause:   1,
	speed: 1800,
	timeout:  3500
	});
});


$("#navigation a").click(function() {
  var section = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(section).offset().top
  }, 1000);
});