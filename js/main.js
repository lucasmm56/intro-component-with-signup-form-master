const form = document.getElementById('form');
const username = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()
}) 

function checkInputs(){
  const usernameValue = username.value.trim()
  const lastNameValue = lastname.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if(usernamaValue === ''){

    errorValidation(username, 'Preencha esse campo')
  }else{

  }

  function errorValidation(input, message){
    const formControl = input.parentElement;

    formControl.className = 'form-control error'
  }
}