const institutionInput = document.getElementById("institution")
const careerInput = document.getElementById("career")
const phoneInput = document.getElementById("phone-number")
const motivationInput = document.getElementById("motivation")
const submitButton = document.getElementById("submit-button")
const prevButton = document.getElementById("prev-button")

let institutionValidation = () => {validateLength(institutionInput, 100)}
let careerValidation = () => {validateLength(careerInput, 100)}
let phoneValidation = () => {validatePhone(phoneInput)}
let motivationValidation = () => {validateLength(motivationInput, 100)}


window.onload = () => {
  fillForm()
  addListeners()
}


/** Función para agregar eventos a los elementos del formulario */
let addListeners = () => {
  institutionInput.addEventListener("input", institutionValidation)
  careerInput.addEventListener("input", careerValidation)
  phoneInput.addEventListener("input", phoneValidation)
  motivationInput.addEventListener("input", motivationValidation)
  submitButton.addEventListener("click", submit)
  prevButton.addEventListener("click", previous)
}


/** Función para rellenar las preguntas que ya fueron constestadas */
let fillForm = () => {
  loadInputText(institutionInput, institutionValidation)
  loadInputText(careerInput, careerValidation)
  loadInputText(phoneInput, phoneValidation)
  loadInputText(motivationInput, motivationValidation)
}


/** Función para guardar las respuestas temporalmente si se regresa */
let previous = () => {
  let save = [
    tempInputText(institutionInput),
    tempInputText(careerInput),
    tempInputText(phoneInput),
    tempInputText(motivationInput)
  ]

  Promise.all(save).then(results => {
    console.log(results)
    goTo("form-1.html")
  })
}


/** Función para enviar las respuestas del formulario */
let submit = () => {
  let validAnswers = validate()
  
  if (validAnswers) {
    let save = [
      saveInputText(institutionInput),
      saveInputText(careerInput),
      saveInputText(phoneInput),
      saveInputText(motivationInput)
    ]

    Promise.all(save).then(results => {
      console.log(results)
      goTo("form-3.html")
    }).catch(() => {
      alert("Algo salió mal :(")
    })
  }
}