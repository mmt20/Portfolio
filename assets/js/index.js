/*================= SERVICES MODAL  =================*/
const modal = document.querySelectorAll('.services__modal');
const modalButton = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');

let activeModal = (modalClick) => {
  modal[modalClick].classList.add('active-modal');
};

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => {
    activeModal(i);
  });
});
modalClose.forEach((modalClose, i) => {
  modalClose.addEventListener('click', () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove('active-modal');
    });
  });
});
/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 32,
  grabCurser: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 350 viweport hight , add the show-scroll class to the a tag with the scroll up class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
