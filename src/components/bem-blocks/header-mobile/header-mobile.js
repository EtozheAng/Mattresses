;(function () {
  const burger = document.querySelector('.header-mobile__button')
  const bodyTag = document.body

  burger.addEventListener('click', () => {
    if (bodyTag.style.overflow === 'hidden') {
      bodyTag.style.overflow = ''
    } else {
      bodyTag.style.overflow = 'hidden'
    }
    burger.classList.toggle('header-mobile__button--active')
  })
})()
