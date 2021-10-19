const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 155
        }
    }
});