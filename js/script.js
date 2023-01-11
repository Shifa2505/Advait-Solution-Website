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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // var swiper = new Swiper(".mySwiper", {