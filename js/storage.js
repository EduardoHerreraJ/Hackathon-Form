/** sessionStorage */
const sS = sessionStorage


/**
 * Función para guardar el valor de una entrada de tipo texto en Storage
 * @param {HTMLElement} element - Elemento que se desea guardar
 * @returns {Promise} Regresa una Promise con el valor de la entrada si se guarda correctamente en Storage
 */
let saveInputText = (element) => {
  sS.setItem(element.id, element.value)

  return new Promise((resolve, reject) => {
    let value = sS.getItem(element.id)

    if (value != null)
      resolve((element.id+" guardado\n"))
    else
      reject()
  })
}


/**
 * Función para guardar el valor temporal de una entrada de tipo texto en Storage
 * @param {HTMLElement} element - Elemento que se desea guardar
 * @returns {Promise} Regresa una Promise con el valor de la entrada si se guarda correctamente en Storage
 */
let tempInputText = (element) => {
  let tempKey = "temp-"+element.id

  sS.setItem(tempKey, element.value)

  return new Promise((resolve, reject) => {
    let value = sS.getItem(tempKey)

    if (value != null)
      resolve((tempKey+"\n"))
    else
      reject()
  })
}


/**
 * Función para rellenar el valor de una entrada de tipo texto si se encuentra en Storage
 * @param {HTMLElement} element - Elemento del que se desea obtener su valor
 * @param {Function} validation - Función de validación para el elemento dado
 */
let loadInputText = (element, validation) => {
  let tempKey = "temp-"+element.id, tempValue = sS.getItem(tempKey), value = sS.getItem(element.id), errorId = "error-" + element.id

  if (value != null && tempValue == null) {
    element.value = value
    setInputValidation(element, true)
  }else if (tempValue != null) {
    if (value == null || value != tempValue) {element.value = tempValue} else {element.value = value}
    
    if (tempValue.length > 0) {
      validation()
    }else {
      setInputValidation(element, false)
      setErrorMessage(errorId, "Completa este campo")
    }

    sS.removeItem(tempKey)
  }else {
    if (isRequired(element)) {
      setInputValidation(element, false)
      setErrorMessage(errorId, "Completa este campo")
    }else {
      setInputValidation(element, true)
    }
  }
}


/**
 * Función para guardar el valor de una entrada de tipo radio en Storage
 * @param {String} name - Valor del atributo 'name' de las entradas
 * @returns {Promise} Regresa una Promise con el valor de la entrada si se guarda correctamente en Storage
 */
let saveInputRadio = (name) => {
  if (getInputValidation(document.getElementById(name)))
    sS.setItem(name, document.querySelector("input[name="+name+"]:checked").value)

  return new Promise((resolve, reject) => {
    let value = sS.getItem(name)

    if (value != null)
      resolve(value)
    else
      reject()
  })
}


/**
 * Función para rellenar el valor de una entrada de tipo radio si se encuentra en Storage
 * @param {NodeListOf<HTMLElement>} elements - Elementos de los que se desea obtener su valor
 */
let loadInputRadio = (elements) => {
  let name = elements.item(0).name, value = sS.getItem(name), errorId = "error-" + name

  if (value != null) {
    for (let i=0; i<elements.length; i++) {
      let element = elements.item(i)
      if (element.value == value) {
        element.checked = true
        break
      }
    }
    setInputValidation(document.getElementById(name), true)
  }else {
    setInputValidation(document.getElementById(name), false)
    setErrorMessage(errorId, "Selecciona una opción")
  }
}


/**
 * Función para obtener la respuesta de una pregunta
 * @param {HTMLElement} element - Elemento donde se mostrará la respuesta. El id debe se igual a la llave del Storage
 */
let loadAnswer = (element) => {
  element.innerHTML = sS.getItem(element.id)
}