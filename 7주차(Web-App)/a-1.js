// 버튼 객체 만들기
const random_btn = document.querySelector('.random_btn');
// 랜덤 숫자 div 객체 만들기
const random_n = document.querySelector('.random_n');

// 버튼을 클릭했을 때의 이벤트 만들기
random_btn.addEventListener('click', () => {
    let n = Math.floor(Math.random()*(100-1+1))+1;

    random_n.innerHTML = n;
})