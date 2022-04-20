$(function () {

	let intro = $("#intro");
	let header = $("#header");
	let introH = intro.innerHeight();
	let headerH = header.innerHeight();
	let scrollTop = $(window).scrollTop();      /*position on page load*/

	/* Header class on scroll
	=======================*/

	headerScroll();

	$(window).on("scroll resize", function() {
		headerScroll();
	});

	function headerScroll() {
		introH = intro.innerHeight();
		headerH = header.innerHeight();

		let scrollTop = $(this).scrollTop();

		if (scrollTop >= (introH - headerH)) {
			header.addClass("header--dark");
		} else {
			header.removeClass("header--dark");
		}
	}

	/* Smooth scroll to sections
	==========================*/

	$("[data-scroll").on("click", function(event) {
		event.preventDefault();

		let scrollEl = $(this).data("scroll");
		let scrollElPos = $(scrollEl).offset().top;

		$("html, body").animate({
			scrollTop: scrollElPos - headerH
		}, 500)
	});

	/* ScrollSpy
	==========================*/
	let windowH = $(window).height();
	scrollSpy(scrollTop);

	$(window).on("scroll", function () {
		scrollTop = $(this).scrollTop();
		scrollSpy(scrollTop);
	});

	function scrollSpy(scrollTop) {
		$("[data-scrollspy]").each(function () {
			let $this = $(this);
			let sectionId = $this.data('scrollspy');
			let sectionOffset = $this.offset().top;
			sectionOffset = sectionOffset - (windowH * 0.33333);

			if (scrollTop >= sectionOffset) {
				$('#nav [data-scroll]').removeClass('active');

				$('#nav [data-scroll="' + sectionId + '"]').addClass('active');
			}

			if (scrollTop == 0) {
				$('#nav [data-scroll]').removeClass('active');
			}
		});
	}

	/* Modal
	==========================*/
	$('[data-modal]').on('click', function(event) {
		event.preventDefault();
		let modal = $(this).data('modal');

		$('body').addClass('no-scroll');
		$(modal).addClass('show');

		setTimeout(function() {
			$(modal).find('.modal__content').css({
				transform: 'scale(1)',
				opacity: '1'
			});
		});
	});

	$('[data-modal-close]').on('click', function(event) {
		event.preventDefault();
		let modal = $(this).parents('.modal');
		modalClose(modal);
	});

	$('.modal').on('click', function () {
		let modal = $(this);
		modalClose(modal);
	});

	$('.modal__content').on('click', function(event) {                       /*does not close the modal content window*/
		event.stopPropagation();
	});

	function modalClose(modal) {

		modal.find('.modal__content').css({
			transform: 'scale(0.5)',
			opacity: '0'
		});

		setTimeout(function() {
			$('body').removeClass('no-scroll');
			modal.removeClass('show');
		}, 200);
	}

	/* Slick slider https://kenwheeler.github.io/slick/
	==========================*/

	/* Intro Slider */
	let introSlider = $("#introSlider");

	introSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplayspeed: 4000,
		speed: 500
	  });

	$('#introSliderPrev').on('click', function () {
		introSlider.slick('slickPrev')
	});

	$('#introSliderNext').on('click', function () {
		introSlider.slick('slickNext')
	});

	/* ReviewsSLider */

	let reviewsSlider = $("#reviewsSlider");

	reviewsSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 500
	  });



});

