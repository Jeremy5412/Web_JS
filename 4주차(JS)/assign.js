
const n = Number(prompt("숫자를 입력하세요"));

if (n%2===0){
    if (n === 0) {
        alert("it is zero")
    }
    else if (n < 0) {
        alert("even number/negative")
    }
    else {
        alert("even number/positive")
    }
}

else {
    if (n === 0) {
        alert("it is zero")
    }
    else {
        alert("odd number/positive")
    }
}