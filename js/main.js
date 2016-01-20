$(function() {
	$('a.white-text').on('click', function() {
		$(this).addClass('animated bounceOutUp');
		var href = $(this).attr('href');
		setTimeout(function() {window.location = href}, 750);
		return false;
	});
});