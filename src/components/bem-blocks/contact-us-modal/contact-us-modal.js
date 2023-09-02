function checkboxToggle(params) {
  const check = document.querySelector('.custom-checkbox__box ')
  check.addEventListener('click', () => {
    check.classList.toggle('--svg__checkbox')
    check.classList.toggle('--svg__checkbox-true')
  })
}
function openModal(buttonClass) {
  document.querySelector(`.${buttonClass}`).addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal--active')
    document.body.classList.add('body-lock')
  })
}
function validateForm() {
  const { phone, name, email, checkbox } =
    document.forms.subscriptionFormId.elements
  const customCheckbox = document.querySelector('.custom-checkbox__box')

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
  if (!emailRegex.test(email.value.trim())) {
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
function submitForm(params) {
  const form = document.querySelector('.modal__form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateForm()) {
      document.querySelector('.modal').classList.remove('modal--active')
      document.querySelector('.thanks').classList.add('thanks--active')
    }
  })
}
submitForm()
openModal('mattress-promo__button-group')
openModal('main__tools-call')
closeModalWindow('modal', 'modal--active')
buttonClose('modal__close', 'modal', 'modal--active')
checkboxToggle()
