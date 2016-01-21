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

$(function() {
	$('#back').on('click', function() {
		var href = $(this).attr('href');
		$('.s12 .card').addClass('animated bounceOutRight');
		setTimeout(function() {window.location = href}, 375);
		return false;
	});
});