const name_td1 = document.querySelector('td.value1');
const name_td2 = document.querySelector('td.value2');
const name_td3 = document.querySelector('td.value3');
const name_td4 = document.querySelector('td.value4');
const name_td5 = document.querySelector('td.value5');

const name_btn1 = document.querySelector('button.btn1');
const name_btn2 = document.querySelector('button.btn2');
const name_btn3 = document.querySelector('button.btn3');
const name_btn4 = document.querySelector('button.btn4');
const name_btn5 = document.querySelector('button.btn5');

name_btn1.addEventListener('click' , () => {
    name_td1.innerText = '대한민국';
})
name_btn2.addEventListener('click' , () => {
    name_td2.innerText = '서울특별시';
})
name_btn3.addEventListener('click' , () => {
    name_td3.innerText = '5178만';
})
name_btn4.addEventListener('click' , () => {
    name_td4.innerText = '+82';
})

name_btn5.addEventListener('click' , () => {
    name_td1.innerText = '';
    name_td2.innerText = '';
    name_td3.innerText = '';
    name_td4.innerText = '';
})