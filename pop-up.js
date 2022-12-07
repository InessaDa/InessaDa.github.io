var button = document.querySelector('.examination-button')
var popUp = document.querySelector('.pop-up')
var closeBtn = document.querySelector('.pop-up-close')

button.addEventListener("click", function (_event) {
    event.preventDefault();
    popUp.classList.remove('pop-up-hidden')
    document.body.style.position = 'fixed';
  });

  closeBtn.addEventListener("click", function (_event) {
    popUp.classList.add('pop-up-hidden')
      document.body.style.position = '';
  });
