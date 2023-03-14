// When user click left button
// set box left position to left

// When user click center button
// set box center position to center

// When user click right button
// set box right position to right

const loginBtn = document.querySelector('#login__btn')
const regBtn = document.querySelector('#register-btn')
const registerTexts = document.querySelector('#register')
const signinTexts = document.querySelector('#signinTexts')

let signUpButton = document.getElementById("signup");
let loginButton = document.getElementById("login");
let forms = document.getElementById("forms");
let signUpForm = document.getElementById("signUpForm");
let loginForm = document.getElementById("loginForm");

function removeButton(id) {
  if (id == "signup") {
    signUpButton.style.opacity = "0";
    loginButton.style.opacaity = "1";
    forms.classList.remove('toRight')
    forms.classList.add('toLeft')
    loginForm.style.display = 'none'
    signUpForm.style.display = 'block'
  } else {
    loginButton.style.opacity = "0";
    signUpButton.style.opacity = "1";
    forms.classList.remove('toLeft')
    forms.classList.add('toRight')
    signUpForm.style.display = 'none'
    loginForm.style.display = 'block'
  }
}
