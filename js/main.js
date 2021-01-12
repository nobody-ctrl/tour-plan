$('.header__mobile-menu').click(function(){
    $('.header__nathan-another').toggleClass('header__nathan-mobile');
    $('.header__text').toggleClass('header__text-mobile');
    $('.header__search-another').toggleClass('header__search-mobile');
    $('.header__nav').toggleClass('header__nav-mobile');
    $('.header__bottom').toggleClass('header__bottom-mobile');
    $('.header__container-second').toggleClass('header__container-mobile');
    $('body').toggleClass('body-hidden');
})

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
function openModal(){
  var modalOverlay=$('.modal__overlay');
  var modalDialog=$('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible')
  modalDialog.addClass('modal__dialog--visible')
}
$(document).keyup(function(e) {
  if (e.key === "Escape") {
    var modalOverlay=$('.modal__overlay');
    var modalDialog=$('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }
});
function closeModal(event){
  event.preventDefault()
  var modalOverlay=$('.modal__overlay');
  var modalDialog=$('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible')
  modalDialog.removeClass('modal__dialog--visible')
}

var mySwiperOne = new Swiper('.swiper-container-reviews', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

$(document).ready(function(){
  $('.form-validation').each( function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please, specify your name",
          minlength: "At least 2 letters please!"
        },
        email: {
          required: "Your email is required",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please, specify your phone",
          minlength: "At least 10 numbers please!"
        },
      },
    });
  });

  $('.form-validation-another').each( function() {
    $(this).validate({
      errorClass: "invalid-messages",
      messages: {
        name: {
          required: "Please, specify your name",
          minlength: "At least 2 letters please!"
        },
        email: {
          required: "Your email is required",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please, specify your phone",
          minlength: "At least 10 numbers please!"
        },
      },
      errorPlacement: function(label, element) {
        label.addClass('arrow');
        label.insertAfter(element);
      },
      wrapper: 'span'
    });
  });
  $('.form-phone').mask('+7(000) 000-00-00');
  AOS.init();
})
