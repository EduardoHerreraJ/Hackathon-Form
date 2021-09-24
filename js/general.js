/**
 * Función para mostrar el mensaje de error
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 */
 let showErrorMessage = (errorId) => {
  document.getElementById(errorId).classList.remove("d-none")
}


/**
 * Función para ocultar el mensaje de error
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 */
 let hideErrorMessage = (errorId) => {
  document.getElementById(errorId).classList.add("d-none")
}


/**
 * Función para establecer y mostrar el texto del mensaje de error
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 * @param {String} message - Mensaje que se desea mostrar. Por defecto está vacío
 */
let newErrorMessage = (errorId, message = "") => {
  setErrorMessage(errorId, message)
  showErrorMessage(errorId)
}


/**
 * Función para remover un mensaje de error
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 */
 let removeErrorMessage = (errorId) => {
  setErrorMessage(errorId)
  hideErrorMessage(errorId)
}


/**
 * Función para establecer el texto del mensaje de error
 * @param {String} errorId - Id del elemento que contiene el mensaje de error
 * @param {String} message - Mensaje que se desea mostrar. Por defecto está vacío
 */
let setErrorMessage = (errorId, message = "") => {
  document.getElementById(errorId).innerHTML = message
}


/**
 * Función para verificar si un elemento es obligatorio
 * @param {HTMLElement} element - Elemento que se está verificando
 * @returns {Boolean} Boolean
 */
let isRequired = (element) => {
  let required = element.getAttribute("data-required")

  return (required != null ? (required.toLowerCase() === "true") : false)
}