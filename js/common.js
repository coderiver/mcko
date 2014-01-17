$(document).ready(function() {

	// scrollable
	if( $('.js-scrollable').length ){
		$('.js-scrollable .js-scrollable__container').scrollable();
	}

	// show account block
	var $toggleAccount = $('.js-toggleaccount');
	var $account = $('.account-widget');

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

	// tabs
	$('.js-tabs-item').removeClass('is-visible');
	$('.js-tabs-nav li:first').addClass('is-active');
	$('.js-tabs-item:first').addClass('is-visible');

	$('.js-tabs-nav li').click(function() {
		$('.js-tabs-nav li').removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-tabs-item').removeClass('is-visible');
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).addClass('is-visible');
		return false;
	});

	// popup
	var $popupOverlay = $('.overlay');
	var $popup = $('.popup');

	$('.js-login-btn').click(function() {
		$($popup).addClass('is-active');
		$($popupOverlay).addClass('is-active');
		$('body').addClass('js-popup-open');
		return false;
	});
	$($popupOverlay).click(function() {
		$($popup).removeClass('is-active');
		$('body').removeClass('js-popup-open');
		$($popupOverlay).removeClass('is-active');
		return false;
	});

	var slideshows = $('webinar__in li .cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
		// advance the other slideshow
		slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('#cycle-2 .cycle-slide').click(function(){
			var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
			slideshows.cycle('goto', index);
	});

	// js-webinar
	$(".webinar__item .js-wibibar-hide").click(function(){
		$(this).parents(".webinar__item").toggleClass('is-hide');
		$(this).toggleClass('is-rotate')
	});

});