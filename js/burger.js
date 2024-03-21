$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Добавляем обработчик события для ссылок в меню
	$('.header__menu a').click(function (event) {
		// Убираем класс 'active' у элементов бургера и меню
		$('.header__burger, .header__menu').removeClass('active');
		// Убираем класс 'lock' у body
		$('body').removeClass('lock');
	});
});