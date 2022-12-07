var button = document.querySelector('.burger-button')
var topString = document.querySelector('.burger-list-1')
var middleString = document.querySelector('.burger-list-2')
var downString = document.querySelector('.burger-list-3')
var btnClose = document.querySelector('.burger-button-close')
var menu = document.querySelector('.menu-about-mobile-wrap')

button.addEventListener("click", function (_event) {
    button.classList.toggle('burger-button-close')
    topString.classList.toggle('burger-list-1-close')
    middleString.classList.toggle('burger-list-2-close')
    downString.classList.toggle('burger-list-3-close')
    menu.classList.toggle('menu-open')
  });

