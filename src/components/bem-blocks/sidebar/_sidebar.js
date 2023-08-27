;(function () {
  const burger = document.querySelector('.header-mobile__button')
  const nav = document.querySelector('.sidebar__navlinks')
  const menu = document.querySelector('.menu__list').cloneNode(1)
  const sidebar = document.querySelector('.sidebar')

  burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--show')
    nav.append(menu)
  })
})()
