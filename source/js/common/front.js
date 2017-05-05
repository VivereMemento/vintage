const myLogo = (function () {
    const logoLine = document.querySelector('.logo__line');
    const logoLetter = document.querySelector('.logo__letter');
    const logoWord = document.querySelector('.logo__word');
    const heading = document.querySelectorAll('.heading__text');
    const play = document.querySelector('.play__link');
    const playText = document.querySelector('.play__text');
    const lines = document.querySelector('.trigger__lines');
    const langNav = document.querySelector('#language-nav');
    const trigText = document.querySelector('.trigger__text');
    const mouse = document.querySelector('.mouse');
    const tl = new TimelineMax();

	const init = function () {
		_setUpListners();
	};
	const _setUpListners = function () {
        window.addEventListener('load', upAndDown)
	}

    function upAndDown() {
        tl.fromTo(
            logoLine,
            1,
            {y: 45},
            {y: 0}
        )
        .fromTo(
            lines,
            1,
            {y: 75},
            {y: 0},
            '-=1'
        )
        .fromTo(
            logoLetter,
            1,
            {opacity: 0, x: 10},
            {opacity: 1,x: 0}
        )
        .fromTo(
            logoWord,
            1,
            {y: 25},
            {y: 0},
            '-=1'
        )
        .fromTo(
            langNav,
            1,
            {opacity: 0, y: 35},
            {opacity: 1, y: 0},
            '-=1'
        )
        .fromTo(
            trigText,
            1,
            {opacity: 0, y: 35},
            {opacity: 1, y: 0},
            '-=1'
        )
        .staggerTo(
            heading,
            0.5,
            {delay: 1, opacity: 1, y: 0},
            1,
            'logoWord'
        )
        .to(
            play,
            1,
            {rotation: 720, scale: 1}
        )
        .fromTo(
            playText,
            1,
            {opacity: 0, y: -10},
            {opacity: 1, y: 0},
            'play'
        )
        .fromTo(
            mouse,
            1,
            {opacity: 0},
            {opacity: 1, y: 0},
            'playText'
        );
    }

	return {
	init: init
	}

})();

myLogo.init();
