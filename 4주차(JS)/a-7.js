
/*
삼항 연산자
님 그거 앎 ? yes : no

a > 0 ? true : false
*/

const a = prompt("Number: ");
const number = Number(a);

const result = (number >= 0) ? "0이상" : "0미만";
alert(result);