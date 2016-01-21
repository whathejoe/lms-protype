$(function() {
	$('a.white-text').on('click', function() {
		$(this).addClass('animated bounceOutUp');
		var href = $(this).attr('href');
		setTimeout(function() {window.location = href}, 750);
		return false;
	});

	var animationName = 'animated bounce';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$('.mc-answer').mouseenter( function() {
		$(this).addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});
	});
});