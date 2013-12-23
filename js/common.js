$(document).ready(function() {

	// scrollable
	if( $('.js-scrollable').length ){
		$('.js-scrollable .js-scrollable__container').scrollable();
	}

	// show account block
	var $toggleAccount = $('.js-toggleaccount');
	var $account = $('.account');
	$($toggleAccount).click(function(event) {
		$($account).slideToggle();
	});

	// show more pictures in .photo
	var $photoMore = $('.photo__more');
	var $photoPic = $('.photo__pic');
	$($photoMore).click(function() {
		$(this).parent().find($photoPic).removeClass('is-hidden');
		$(this).addClass('is-hidden');
		return false;
	});

});