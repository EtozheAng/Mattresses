function buttonBurger(params) {
  const burgerButton = document.querySelector('.menu-burger')
  const catalogNav = document.querySelector('.catalog-nav')
  burgerButton.addEventListener('click', (e) => {
    buttonAnimation(e)
    const tabs = new GraphTabs('tab')
    catalogNav.classList.toggle('catalog-nav--active')
    document.body.classList.toggle('body-lock')
  })
  removeActiveClass(catalogNav, 'catalog-nav--active', true)
}
buttonBurger()
