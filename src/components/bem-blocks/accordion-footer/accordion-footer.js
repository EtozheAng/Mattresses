const list = document.querySelectorAll('.footer__menu-list')
new Accordion('.accordion-container', {
  duration: 400,
  ariaEnabled: true,
  beforeOpen: function (elem) {
    const index = parseInt(elem.id.replace(/\D/g, ''))
    if (!elem.querySelector('.ac-panel').children.length) {
      elem.querySelector('.ac-panel').append(list[index].cloneNode(true))
    }
  },
})
