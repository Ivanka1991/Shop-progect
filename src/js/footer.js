const formBtn = document.querySelector('.footer__btn')
const input = document.querySelector('.footer__form-mail')
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu


 input.oninput=function(){
   if(this.value==="") return formBtn.style.display="none"
   formBtn.style.display="block"
}

function onInput() {
  if (isEmailValid(input.value)) {
    formBtn.style.color = 'green'
  } else {
    formBtn.style.color = 'red'
  }
}

input.addEventListener('input', onInput)

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value)
}