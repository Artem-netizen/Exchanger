const swiper = new Swiper('.converter-currency__wrap', {
    
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });