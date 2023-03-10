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

document.getElementById("login-btn").onclick = leftClick;

document.getElementById("register-btn").onclick = rightClick;

function leftClick() {
  document.getElementById("whiteBox").className = "leftbox";
}

function rightClick() {
  document.getElementById("whiteBox").className = "rightbox";
}
