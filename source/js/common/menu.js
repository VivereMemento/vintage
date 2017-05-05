const myMenu = (function () {
    const trig = document.querySelector('.trigger');
    const trigText = document.querySelector('.trigger__text');
    const menu = document.querySelector('.menu');
    const menuList = document.querySelector('.menu__list');
    const items = document.querySelectorAll('.menu__item');
    const langNav = document.querySelector('#language-nav');
    const langMenu = document.querySelector('.nav__language_mods');
    const social = document.querySelector('.social');
    const socialList = document.querySelector('.social__list');
    const tl = new TimelineMax({paused:true, reversed:true});

	const init = function () {
		_setUpListners();
	};
	const _setUpListners = function () {
        trig.addEventListener('click', handdleMenu);
	}

    tl.to(
        menu,
        0.5,
        {width: `100%`}
    )
    .fromTo(
        langMenu,
        0.5,
        {opacity: 0, x: -10},
        {opacity: 1, x: 0},
        '-=0.5'
    )
    .to(
        langNav,
        0.5,
        {opacity: 0, x: -10},
        '-=0.5'
    )
    .to(
        menuList,
        0.5,
        {display: 'block'},
         '-=0.5'
     )
    .staggerFromTo(
        items,
        0.5,
        {opacity: 0, y: 10},
        {opacity: 1, y: 0},
        0.3
    )
    .fromTo(
        social,
        0.5,
        {opacity: 0, x: 10},
        {opacity: 1, x: 0}
    );

    function handdleMenu() {
        let content = trigText.textContent === 'Меню';

        if(trig.classList.contains('trigger_on')) {
            trig.classList.remove('trigger_on');
        } else {
            trig.classList.add('trigger_on')
        }

        let change = content
        ? trigText.innerHTML = 'Закрыть'
        : trigText.innerHTML = 'Меню'

        tl.reversed() ? tl.play() : tl.reverse();
    }

	return {
	init: init
	}

})();

myMenu.init();
