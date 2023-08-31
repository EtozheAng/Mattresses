;(function () {
  const burger = document.querySelector('.header-mobile__button')
  burger.addEventListener('click', () => {
    document.body.classList.toggle('body-lock')
    burger.classList.toggle('header-mobile__button--active')
  })
  removeActiveClass(burger, 'header-mobile__button--active')
})()
