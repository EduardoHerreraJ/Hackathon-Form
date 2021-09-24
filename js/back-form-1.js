const fullnameInput = document.getElementById("fullname")
const ageInput = document.getElementById("age")
const curpInput = document.getElementById("curp")
const residenceInput = document.getElementById("residence")
const occupationInput = document.getElementsByName("occupation")

window.onload = () => {
  fillForm()
  addValidationListeners()
}


/** Función para agregar verificadores a la entrada del usuario */
let addValidationListeners = () => {
  fullnameInput.addEventListener("input", function () {validateLength(this, 152)})
  ageInput.addEventListener("input", function () {validateAge(this)})
  curpInput.addEventListener("input", function () {validateLength(this, 18)})
  residenceInput.addEventListener("input", function () {validateLength(this, 255)})
  Array.from(occupationInput).forEach(e => e.addEventListener("input", function () {validateOptions(this)}))
}


/** Función para rellenar las preguntas que ya fueron constestadas */
let fillForm = () => {
  loadInputText(fullnameInput)
  loadInputText(ageInput)
  loadInputText(curpInput)
  loadInputText(residenceInput)
  loadInputRadio(occupationInput)
}