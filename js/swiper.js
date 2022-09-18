document.addEventListener('DOMContentLoaded', function () {
  const HEROswiperIMG = new Swiper('.hero__swiper-img', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2400,
    effect: 'fade',
    autoplay: { delay: 4000, },
    watchOverflow: true,
  });

  const HEROswiperTEXT = new Swiper('.hero__swiper-text', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2400,
    effect: 'fade',
    autoplay: { delay: 4000, },
    watchOverflow: true,

    // If we need pagination
    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.hero__swiper-button-next',
      prevEl: '.hero__swiper-button-prev',
    },

  });



  HEROswiperIMG.controller.control = HEROswiperTEXT
  HEROswiperTEXT.controller.control = HEROswiperIMG


  // HOW SLIDER
  const how__swiper = new Swiper('.how__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',

    autoplay: { delay: 4000, },

    // If we need pagination
    pagination: {
      el: '.how__swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.how__swiper-button-next',
      prevEl: '.how__swiper-button-prev',
    },

  });

})





