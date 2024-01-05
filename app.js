
/* random background */
const randomImg = Math.floor(Math.random() * 3);
document.documentElement.style.cssText = `
  background: url(./img/${randomImg}.jpg) center center/cover no-repeat fixed;
`;



const wrap = document.querySelector('#wrap');
const loginBox = document.querySelector('#loginBox');
const loginBoxForm = document.querySelector('#loginBox form');
const loginId = document.querySelector('#loginId');
const loginPassword = document.querySelector('#loginPassword');


function onLogin(e){
    e.preventDefault();
    const username = loginId.value;
    const userPassword = loginPassword.value;
    if(username !== '' && userPassword !== ''){
        localStorage.setItem("username", username);
        //localStorage.clear();
        wrap.classList.add('show');
        loginBox.classList.add('hide')
        setTimeout(function(){
            loginBox.remove();
        },1000)
    }    
}




loginBoxForm.addEventListener('submit', onLogin)