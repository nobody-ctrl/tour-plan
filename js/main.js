$('.header__mobile-menu').click(function(){
    $('.header__nathan-another').toggleClass('header__nathan-mobile');
    $('.header__text').toggleClass('header__text-mobile');
    $('.header__search-another').toggleClass('header__search-mobile');
    $('.header__nav').toggleClass('header__nav-mobile');
    $('.header__bottom').toggleClass('header__bottom-mobile');
    $('.header__container-second').toggleClass('header__container-mobile');
    $('body').toggleClass('body-hidden');
})