let emailLabel = document.getElementById("email")
let fullnameLabel = document.getElementById("fullname")
let ageLabel = document.getElementById("age")
let curpLabel = document.getElementById("curp")
let residenceLabel = document.getElementById("residence")
let occupationLabel = document.getElementById("occupation")
let institutionLabel = document.getElementById("institution")
let careerLabel = document.getElementById("career")
let phoneLabel = document.getElementById("phone-number")
let motivationLabel = document.getElementById("motivation")
const nextButton = document.getElementById("next-button")


window.onload = () => {
  fillAnswers()
  nextButton.addEventListener("click", function () {goTo("index.html"); sS.clear()})
}


/** Función para mostrar las respuestas */
let fillAnswers = () => {
  loadAnswer(emailLabel)
  loadAnswer(fullnameLabel)
  loadAnswer(ageLabel)
  loadAnswer(curpLabel)
  loadAnswer(residenceLabel)
  loadAnswer(occupationLabel)
  loadAnswer(institutionLabel)
  loadAnswer(careerLabel)
  loadAnswer(phoneLabel)
  loadAnswer(motivationLabel)
}