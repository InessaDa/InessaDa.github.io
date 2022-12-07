var btn = document.querySelector('.examination-button')
var popUp = document.querySelector('.pop-up')
var closeBtn = document.querySelector('.pop-up-close')

btn.addEventListener("click", function (_event) {
    event.preventDefault();
    popUp.classList.remove('pop-up-hidden')
    document.body.style.position = 'fixed';
    document.body.style.paddingRight = '17px';
  });

  closeBtn.addEventListener("click", function (_event) {
    popUp.classList.add('pop-up-hidden')
      document.body.style.position = '';
  });
