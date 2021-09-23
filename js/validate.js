/**
 * Función para mostrar u ocultar el mensaje de error
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 * @param {Boolean} show - (Opcional) Establecer 'true' para mostrar el mensaje de error
 */
let toggleErrorMessage = (errorId, show = false) => {
  let element = document.getElementById(errorId)

  if (show) {
    element.classList.add("validate")
    element.classList.remove("d-none")
  }else {
    element.classList.remove("validate")
    element.classList.add("d-none")
  }
}


/**
 * 
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 * @param {String} message - Mensaje que se desea mostrar. Por defecto se muestra "Completa este campo"
 */
let newErrorMessage = (errorId, message = "Completa este campo") => {
  document.getElementById(errorId).innerHTML = message
}


/**
 * Función para verificar correo electrónico
 * @param {HTMLElement} element - Elemento que se está verificando
 * @param {Boolean} required - (Opcional) Establecer 'true' para marcar como obligatorio el inciso
 */
let validateMail = (element, required = false) => {
  let errorId = "error-" + element.id
  let isMail = /\S+@\S+\.\S+/.test(element.value)
  let inputLength = element.value.length

  if (!isMail && inputLength > 0) {
    newErrorMessage(errorId, "Ingresa un correo electrónico válido")
    toggleErrorMessage(errorId, true)
  }else if (inputLength > 320) {
    newErrorMessage(errorId, "No exceder 320 carácteres")
    toggleErrorMessage(errorId, true)
  }else if (inputLength == 0 && required) {
    newErrorMessage(errorId)
    toggleErrorMessage(errorId, true)
  }else {
    newErrorMessage(errorId, "")
    toggleErrorMessage(errorId)
  }
}


/**
 * Función para verificar la longitud de entrada de texto
 * @param {HTMLElement} element - Elemento que se está verificando
 * @param {Number} length - Longitud máxima de carácteres que puede tener la entrada
 * @param {Boolean} required - (Opcional) Establecer 'true' para marcar como obligatorio el inciso
 */
let validateLength = (element, length, required = false) => {
  let errorId = "error-" + element.id
  let inputLength = element.value.length

  if (inputLength > length) {
    newErrorMessage(errorId, "No exceder " + length + " carácteres")
    toggleErrorMessage(errorId, true)
  }else if (inputLength == 0 && required) {
    newErrorMessage(errorId)
    toggleErrorMessage(errorId, true)
  }else {
    newErrorMessage(errorId, "")
    toggleErrorMessage(errorId)
  }
}


/**
 * Función para verificar la edad
 * @param {HTMLElement} element - Elemento que se está verificando
 * @param {Boolean} required - (Opcional) Establecer 'true' para marcar como obligatorio el inciso
 */
let validateAge = (element, required = false) => {
  let errorId = "error-" + element.id
  let age = parseInt(element.value)
  let inputLength = element.value.length

  if (age < 18) {
    newErrorMessage(errorId, "Debes ser mayor de edad para participar")
    toggleErrorMessage(errorId, true)
  }else if (inputLength == 0 && required) {
    newErrorMessage(errorId)
    toggleErrorMessage(errorId, true)
  }else {
    newErrorMessage(errorId, "")
    toggleErrorMessage(errorId)
  }
}


/**
 * Función para verificar las entradas tipo 'radio'
 * @param {HTMLElement} element - Elemento que se está verificando
 * @param {Boolean} required - (Opcional) Establecer 'true' para marcar como obligatorio el inciso
 */
let validateOptions = (element, required = false) => {
  let errorId = "error-" + element.name

  if (required) {
    newErrorMessage(errorId, "Selecciona al menos una opción")
    toggleErrorMessage(errorId, true)
  }else {
    newErrorMessage(errorId, "")
    toggleErrorMessage(errorId)
  }
}


/**
 * Función para verificar la longitud del número telefónico
 * @param {HTMLElement} element - Elemento que se está verificando
 * @param {Boolean} required - (Opcional) Establecer 'true' para marcar como obligatorio el inciso
 */
let validatePhone = (element, required = false) => {
  let errorId = "error-" + element.name
  let input = element.value.replace(/\s/g, '');

  if(input.length > 10){
    newErrorMessage(errorId, "No exceder 10 dígitos")
    toggleErrorMessage(errorId, true)
  }else if (input.length == 0 && required) {
    newErrorMessage(errorId)
    toggleErrorMessage(errorId, true)
  }else {
    newErrorMessage(errorId, "")
    toggleErrorMessage(errorId)
  }
}