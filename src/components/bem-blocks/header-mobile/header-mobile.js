;(function () {
  const burger = document.querySelector('.header-mobile__button')
  burger.addEventListener('click', () => {
    if (!burger.classList[1]) {
      document.body.classList.add('body-lock')
    } else {
      document.body.classList.remove('body-lock')
    }
    burger.classList.toggle('header-mobile__button--active')
  })
  removeActiveClass(burger, 'header-mobile__button--active')
})()
