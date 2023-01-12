var swiper = new Swiper(".testimonial-content", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },

    // breakpoints:{
    //   0: {
    //     slidesPerView: 1
    //    },
    // }
  });

  // var swiper = new Swiper(".mySwiper", {