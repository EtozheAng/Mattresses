function ButtonClickAnimation(params) {
  document.querySelectorAll('.tabs__nav-btn').forEach((button) => {
    button.addEventListener('click', buttonAnimation)
  })
}
buttonClose('tabs__content-close', 'catalog-nav', 'catalog-nav--active')
ButtonClickAnimation()
