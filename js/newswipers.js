const swiperport = new Swiper('.portfolio__block', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	//autoHeight: true,
	// watchOverflow: true,
	grabCursor: true,
	slidesPerView: '1',
	// spaceBetween: 50,
	// slidesPerGroup: 1,
	centeredSlides: true,
	// loopedSlides: 1,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	effect: 'slide',
});



const swiperrev = new Swiper('.review__swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		//bullets
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoHeight: true,
	watchOverflow: true,
	grabCursor: true,
	slidesPerView: '2',
	spaceBetween: 50,
	slidesPerGroup: 1,
	centeredSlides: true,
	loopedSlides: 3,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	speed: 600,

	effect: 'coverflow',
	coverflowEffect: {
		rotate: -20,
		stretch: 0,
		slideShadows: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.5,
		},
		992: {
			slidesPerView: 2,
		}
	}
});

const swiperworkflow = new Swiper('.workflow__swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	grabCursor: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});