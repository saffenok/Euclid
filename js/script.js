const container = document.querySelector(".hero__container")
const swiper = new Swiper('.hero__swiper', {
  speed: 500,
  // пагинация
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
});


document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
    duration: 700,

    elementClass: 'accordion__item',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active',
  });
});


document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".burger-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
});


document.querySelector(".btn_img").addEventListener("click", function() {
  document.querySelector(".header-form").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function() {
  let form = document.querySelector(".header-form");
  form.classList.remove("form__active");
  form.querySelector("input").value = "";
  document.querySelector(".btn_img").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header-form");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".btn_img").classList.remove("active")
  }
});
