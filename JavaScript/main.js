const loginBtn = document.querySelector('#login__btn')
const regBtn = document.querySelector('#register-btn')
const registerTexts = document.querySelector('#register')
const signinTexts = document.querySelector('#signinTexts')


function loginClick(){
    document.querySelector('#whiteBox').style.left = "400px";
    document.querySelector('#register').classList.remove('disable')
    document.querySelector('#signinTexts').classList.add('disabled')
    document.querySelector('#white__reg').classList.add('disable')
    document.querySelector('#whiteLogin').classList.remove('disable')
    document.querySelector('#signinTexts').style.marginLeft = '0px';

}

function signupClick(){
    document.querySelector('#whiteBox').style.left = "";
    document.querySelector('#register').classList.add('disable')
    document.querySelector('#signinTexts').classList.remove('disabled')
    document.querySelector('#white__reg').classList.remove('disable')
    document.querySelector('#whiteLogin').classList.add('disable')
    document.querySelector('#signinTexts').style.marginLeft = '';

}
