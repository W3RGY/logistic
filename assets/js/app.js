$(function () {

	let intro = $("#intro");
	let header = $("#header");
	let introH = intro.innerHeight();
	let headerH = header.innerHeight();

	headerScroll();

	$(window).on("scroll resize", function () {
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
});

