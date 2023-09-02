new WOW().init()
function buttonAnimation(event, animateClass = 'animate__bounceIn') {
  const button = event.target
  button.classList.add(animateClass)
  setTimeout(() => {
    button.classList.remove(animateClass)
  }, 1000)
}
function removeActiveClass(elem, className, changeSign) {
  window.addEventListener('resize', () => {
    const condition = changeSign
      ? window.innerWidth < 1400
      : window.innerWidth > 1400

    if (condition) {
      elem.classList.remove(className)
      document.body.classList.remove('body-lock')
    }
  })
}
function buttonClose(classButton, className, removeName) {
  document.querySelector(`.${classButton}`).addEventListener('click', () => {
    document.querySelector(`.${className}`).classList.remove(removeName)
    document.body.classList.remove('body-lock')
  })
}
function closeModalWindow(modalName, modalAktiveClass) {
  const modal = document.querySelector(`.${modalName}`)
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove(modalAktiveClass)
      document.body.classList.remove('body-lock')
    }
  })
}
