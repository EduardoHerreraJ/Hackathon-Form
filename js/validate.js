let toggleErrorMessage = (errorID, show) => {
  let element = document.getElementById(errorID)

  if (show) {
    element.classList.add("validate")
    element.classList.remove("aaaaaaaaaaaa") /// OJO XD
  }else {
    element.classList.remove("validate")
    element.classList.add("aaaaaaaaaaaa") /// OJO XD
  }
}

let validateMail = (element, required) => {

}

let validateLength = (element, length, required) => {
  if(element.length>=length){

  }else{

  }
}

let validateAge = (element, required) => {
  let age = parseInt(element)
  if( age >=18 && age<100 ){

  }else{

  }
}

let validateOptions = (element, required) => {

}

let validatePhone = (element, required) => {
  str = element.replace(/\s/g, '');
  if(str.length == 10){

  }else{
    
  }
}