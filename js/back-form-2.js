const institutionInput = document.getElementById("institution")
const careerInput = document.getElementById("career")
const phoneInput = document.getElementById("phone-number")
const motivationInput = document.getElementById("motivation")

window.onload = () => {
  fillForm()
  addValidationListeners()
}


/** Función para agregar verificadores a la entrada del usuario */
let addValidationListeners = () => {
  institutionInput.addEventListener("input", function () {validateLength(this, 100)})
  careerInput.addEventListener("input", function () {validateLength(this, 100)})
  phoneInput.addEventListener("input", function () {validatePhone(this)})
  motivationInput.addEventListener("input", function () {validateLength(this, 100)})
  
}


/** Función para rellenar las preguntas que ya fueron constestadas */
let fillForm = () => {
  loadInputText(institutionInput)
  loadInputText(careerInput)
  loadInputText(phoneInput)
  loadInputText(motivationInput)
}