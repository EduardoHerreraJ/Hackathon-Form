const fullnameInput = document.getElementById("fullname")
const ageInput = document.getElementById("age")
const curpInput = document.getElementById("curp")
const residenceInput = document.getElementById("residence")
const occupationInput = document.getElementsByName("occupation")
const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

let fullnameValidation = () => {validateLength(fullnameInput, 152)}
let ageValidation = () => {validateAge(ageInput)}
let curpValidation = () => {validateLength(curpInput, 18)}
let residenceValidation = () => {validateLength(residenceInput, 255)}


window.onload = () => {
  fillForm()
  addListeners()
}


/** Función para agregar eventos a los elementos del formulario */
let addListeners = () => {
  fullnameInput.addEventListener("input", fullnameValidation)
  ageInput.addEventListener("input", ageValidation)
  curpInput.addEventListener("input", curpValidation)
  residenceInput.addEventListener("input", residenceValidation)
  Array.from(occupationInput).forEach(e => e.addEventListener("input", function () {validateOptions(this)}))
  nextButton.addEventListener("click", submit)
  prevButton.addEventListener("click", previous)
}


/** Función para rellenar las preguntas que ya fueron constestadas */
let fillForm = () => {
  loadInputText(fullnameInput, fullnameValidation)
  loadInputText(ageInput, ageValidation)
  loadInputText(curpInput, curpValidation)
  loadInputText(residenceInput, residenceValidation)
  loadInputRadio(occupationInput)
}


/** Función para guardar las respuestas temporalmente si se regresa */
let previous = () => {
  let save = [
    tempInputText(fullnameInput),
    tempInputText(ageInput),
    tempInputText(curpInput),
    tempInputText(residenceInput)
  ]

  Promise.all(save).then(results => {
    console.log(results)
    goTo("index.html")
  })
}


/** Función para enviar las respuestas del formulario */
let submit = () => {
  let validAnswers = validate()
  
  if (validAnswers) {
    let save = [
      saveInputText(fullnameInput),
      saveInputText(ageInput),
      saveInputText(curpInput),
      saveInputText(residenceInput),
      saveInputRadio("occupation")
    ]

    Promise.all(save).then(results => {
      console.log(results)
      goTo("form-2.html")
    }).catch(() => {
      alert("Algo salió mal :(")
    })
  }
}