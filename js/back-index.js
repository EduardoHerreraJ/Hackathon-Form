const emailInput = document.getElementById("email")
const nextButton = document.getElementById("next-button")

let mailValidation = () => {validateMail(emailInput)}


window.onload = () => {
  fillForm()
  addListeners()
}


/** Función para agregar eventos a los elementos del formulario */
let addListeners = () => {
  emailInput.addEventListener("input", mailValidation)
  nextButton.addEventListener("click", submit)
}


/** Función para rellenar las preguntas que ya fueron constestadas */
let fillForm = () => {
  loadInputText(emailInput, mailValidation)
}


/** Función para enviar las respuestas del formulario */
let submit = () => {
  let validAnswers = validate()
  
  if (validAnswers) {
    saveInputText(emailInput).then(result => {
      console.log(result)
      goTo("form-1.html")
    }).catch(() => {
      alert("Algo salió mal :(")
    })
  }
}