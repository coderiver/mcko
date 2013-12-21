$(document).ready(function() {
	$(".js-scrollable .js-scrollable__container").scrollable();

	$('.js-toggleaccount').click(function(event) {
		$('.account').slideToggle();
	});
});