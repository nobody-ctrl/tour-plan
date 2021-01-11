$('.header__mobile-menu').click(function(){
    $('.header__nathan-another').toggleClass('header__nathan-mobile');
    $('.header__text').toggleClass('header__text-mobile');
    $('.header__search-another').toggleClass('header__search-mobile');
    $('.header__nav').toggleClass('header__nav-mobile');
    $('.header__bottom').toggleClass('header__bottom-mobile');
    $('.header__container-second').toggleClass('header__container-mobile');
    $('body').toggleClass('body-hidden');
})

$('.show-me-window').click(function(){
    $('.hidden-window').addClass('visible-window');
    $('body').toggleClass('body-hidden-two');
})

var mySwiperOne = new Swiper('.swiper-container-reviews', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

