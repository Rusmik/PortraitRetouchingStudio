let prevScrollpos = window.scrollY;
const header = document.getElementById("header");

window.onscroll = function () {
	let currentScrollPos = window.scrollY;
	if (prevScrollpos > currentScrollPos) {
		// Если страница прокручена вверх или находится в самом верху
		header.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Черный фон
		header.style.top = "0"; // Показываем хедер и делаем его стикером
	} else {
		// Если страница прокручена вниз
		header.style.backgroundColor = "transparent"; // Прозрачный фон
		header.style.top = "-110px"; // Скрываем хедер
	}
	if (window.innerWidth < 767) {
		header.style.top = "0"; // Показываем хедер и делаем его стикером
		header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
	}
	if (currentScrollPos === 0) {
		header.style.backgroundColor = "transparent";
	}
	prevScrollpos = currentScrollPos;
}