//div 개체 만들기
const name_div = document.querySelector('div');
//button 개체 만들기
const name_button = document.querySelector('button');

name_button.addEventListener('click' , () => {
    name_div.innerText = 'Joonseo';
})