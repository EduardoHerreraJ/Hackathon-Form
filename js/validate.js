/**
 * Función para verificar correo electrónico
 * @param {HTMLElement} element - Elemento que se está verificando
 */
let validateMail = (element) => {
  let errorId = "error-" + element.id, isMail = /\S+@\S+\.\S+/.test(element.value), inputLength = element.value.length

  if (!isMail && inputLength > 0) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "Ingresa un correo electrónico válido")
  }else if (inputLength > 320) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "No exceder 320 carácteres")
  }else if (inputLength == 0 && isRequired(element)) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "Completa este campo")
  }else {
    setInputValidation(element, true)
    removeErrorMessage(errorId)
  }
}


/**
 * Función para verificar la longitud de entrada de texto
 * @param {HTMLElement} element - Elemento que se está verificando
 * @param {Number} length - Longitud máxima de carácteres que puede tener la entrada
 */
let validateLength = (element, length) => {
  let errorId = "error-" + element.id, inputLength = element.value.length

  if (inputLength > length) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "No exceder " + length + " carácteres")
  }else if (inputLength == 0 && isRequired(element)) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "Completa este campo")
  }else {
    setInputValidation(element, true)
    removeErrorMessage(errorId)
  }
}


/**
 * Función para verificar la edad
 * @param {HTMLElement} element - Elemento que se está verificando
 */
let validateAge = (element) => {
  let errorId = "error-" + element.id, age = parseInt(element.value), inputLength = element.value.length

  if (age < 18) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "Debes ser mayor de edad para participar")
  }else if (inputLength == 0 && isRequired(element)) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "Completa este campo")
  }else {
    setInputValidation(element, true)
    removeErrorMessage(errorId)
  }
}


/**
 * Función para verificar las entradas tipo 'radio'
 * @param {HTMLElement} element - Elemento que se está verificando
 */
let validateOptions = (element) => {
  let errorId = "error-" + element.name

  setInputValidation(document.getElementById(element.name), true)
  removeErrorMessage(errorId)
}


/**
 * Función para verificar la longitud del número telefónico
 * @param {HTMLElement} element - Elemento que se está verificando
 */
let validatePhone = (element) => {
  let errorId = "error-" + element.name, input = element.value.replace(/\s/g, '');

  if(input.length > 10){
    setInputValidation(element, false)
    newErrorMessage(errorId, "No exceder 10 dígitos")
  }else if (input.length == 0 && isRequired(element)) {
    setInputValidation(element, false)
    newErrorMessage(errorId, "Completa este campo")
  }else {
    setInputValidation(element, true)
    removeErrorMessage(errorId)
  }
}


/**
 * Función para definir la validación de una entrada
 * @param {HTMLElement} element - Elemento que se está validando
 * @param {Boolean} value - El valor de la validación
 */
 let setInputValidation = (element, value) => {
  element.setAttribute("data-validated", value)
}


/**
 * Función para revisar si la entrada ha sido validada
 * @param {HTMLElement} element - Elemento que se está verificando
 * @returns {Boolean} Boolean
 */
let getInputValidation = (element) => {
  let validated = element.getAttribute("data-validated")
  
  return (validated != null ? (validated.toLowerCase() === "true") : false)
}


/**
 * Función para detectar errores antes de enviar el formulario
 * @returns {Boolean} 'true' si no hay errores en el formulario. 'false' si existen errores
 */
let validate = () => {
  let errors = document.querySelectorAll("[data-validated='false']")

  if (errors.length > 0) {
    for (let i=0; i<errors.length; i++) {
      showErrorMessage("error-" + errors.item(i).id)
    }

    return false
  }else {
    return true
  }
}