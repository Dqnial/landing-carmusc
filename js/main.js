const MySlider = new Splide('#MySlider', {
    perPage: 3,
    perMove: 1,
    pagination: boolean = false,
    gap: 24,
    breakpoints: {
        1850: {
            perPage: 3,

        },
        1600: {
            perPage: 2,

        },
        1000: {
            perPage: 1,

        },
    },
});

const AdvantagesSlider = new Splide('#AdvantagesSlider', {
    perPage: 1,
    perMove: 1,
    gap: 20,
    pagination: boolean = false,
});

const Advantages2Slider = new Splide('#Advantages2Slider', {
    perPage: 1,
    perMove: 1,
    gap: 20,
    pagination: boolean = false,
});

Advantages2Slider.mount();
AdvantagesSlider.mount();
MySlider.mount();

const burger_menu_btn = document.querySelector('.burger-menu-btn');
const nav__list = document.querySelector('.nav__list');


burger_menu_btn.addEventListener('click', () => {
    nav__list.classList.toggle('nav__list-transform');
});