const emailInput = document.getElementById("email")

window.onload = () => {
  fillForm()
  addValidationListeners()
}


/** Función para agregar verificadores a la entrada del usuario */
let addValidationListeners = () => {
  emailInput.addEventListener("input", function () {validateMail(this)})
}


/** Función para rellenar las preguntas que ya fueron constestadas */
let fillForm = () => {
  loadInputText(emailInput)
}