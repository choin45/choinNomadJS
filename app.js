/* 랜덤 배경 이미지 설정 */
const setBackground = () => {
    const randomImg = Math.floor(Math.random() * 3);
    document.documentElement.style.cssText = `
        background: url(./img/${randomImg}.jpg) center center/cover no-repeat fixed;
    `;
};

setBackground();

/* DOM 요소 선택 */
const wrap = document.querySelector('#wrap');
const loginBox = document.querySelector('#loginBox');
const loginBoxForm = loginBox.querySelector('form');
const loginId = document.querySelector('#loginId');
const loginPassword = document.querySelector('#loginPassword');
const greeting = document.querySelector('#greeting');


/* 로그인 처리 */
const handleLogin = (e) => {
    e.preventDefault();
    const username = loginId.value.trim();
    const userPassword = loginPassword.value.trim();

    if (validateLogin(username, userPassword)) {
        saveUsername(username);
        hideLoginBox();
    } else {
        // 유효하지 않은 입력 처리
        alert('유효한 사용자 이름과 비밀번호를 입력해주세요.');
    }
};

/* 유효성 검사 */
const validateLogin = (username, password) => {
    return username !== '' && password !== '';
};

/* 사용자 이름 저장 */
const saveUsername = (username) => {
    localStorage.setItem("username", username);
};

/* 로그인 박스 숨기기 */
const hideLoginBox = () => {
    greeting.innerText = localStorage.getItem('username');
    wrap.classList.add('show');
    loginBox.classList.add('hide');
    setTimeout(() => {
        loginBox.remove();
    }, 1000);

};

/* 이벤트 리스너 추가 */
loginBoxForm.addEventListener('submit', handleLogin);