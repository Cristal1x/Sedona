let close = document.querySelector('.header__close-button');
let open = document.querySelector('.header__logo--burger');
let menu = document.querySelector('.header__list');

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("header__list--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("header__list--show");
});