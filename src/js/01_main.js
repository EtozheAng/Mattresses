new WOW().init()
function checkboxToggle(modal = 'modal') {
  const check = document.querySelector(`.${modal} .custom-checkbox__box`)
  check.addEventListener('click', () => {
    check.classList.toggle('--svg__checkbox')
    check.classList.toggle('--svg__checkbox-true')
  })
}
function openModal(buttonClass, modal) {
  document.querySelectorAll(`.${buttonClass}`).forEach((event) => {
    event.addEventListener('click', () => {
      document.querySelector(`.${modal}`).classList.add('modal--active')
      document.body.classList.add('body-lock')
    })
  })
}
function validateForm(formId, modal = 'modal') {
  const form = document.forms[formId]
  const { phone, name, email, checkbox } = form.elements
  const customCheckbox = document.querySelector(
    `.${modal} .custom-checkbox__box`
  )
  console.log(document.forms.orderForm)

  if (name.value.trim() === '') {
    setError(name)
    return false
  }
  const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
  if (!phoneRegex.test(phone.value.trim())) {
    setError(phone)
    return false
  }
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (email && !emailRegex.test(email.value.trim())) {
    setError(email)
    return false
  }
  if (!checkbox.checked) {
    setError(customCheckbox)
    return false
  }
  return true
}
const setError = (element) => {
  element.classList.add('animate__shakeX')
  setTimeout(() => {
    element.classList.remove('animate__shakeX')
  }, 1000)
}
function submitForm(formID, modal = 'modal') {
  const form = document.querySelector(`.${modal} .modal__form`)
  form.addEventListener('submit', (e) => {
    e.preventDefault('subscriptionFormId')
    if (validateForm(formID, `${modal}`)) {
      document.querySelector(`.${modal}`).classList.remove('modal--active')
      if (modal === 'modal-order') {
        document
          .querySelector('.thanks')
          .classList.add('thanks--active', 'thanks-order')
        document.querySelector('.thanks-order .thanks__text').textContent =
          'Наши менеджеры свяжутся с Вами для оформления заказа'
      }
      document.querySelector('.thanks').classList.add('thanks--active')
    }
  })
}
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
  document
    .querySelector(`.${className} .${classButton}`)
    .addEventListener('click', () => {
      document.querySelector(`.${className}`).classList.remove(removeName)
      document.body.classList.remove('body-lock')
    })
}
function closeModalWindow(modalName, modalActiveClass) {
  const modal = document.querySelector(`.${modalName}`)
  const closeModal = () => {
    modal.classList.remove(modalActiveClass)
    document.body.classList.remove('body-lock')
  }
  const handleClick = (event) => {
    if (event.target === modal) {
      closeModal()
    }
  }
  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }
  window.addEventListener('click', handleClick)
  window.addEventListener('keydown', handleKeydown)
}
