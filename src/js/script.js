//----------работа меню на тачскринах-----------
let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let touch = document.querySelectorAll('.header__link');
	for (i = 0; i < touch.length; i++) {
		let thisLink = touch[i].previousElementSibling;
		let subMenu = touch[i].nextElementSibling;
		let thisTouch = touch[i];

		thisLink.classList.add('parent');

		touch[i].addEventListener('click',
			function () {
				subMenu.classList.toggle('open');
				thisTouch.classList.toggle('active');
			}
		);
	}
} else {
	body.classList.add('mouse');
}


//-----------------burger-------------------
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});