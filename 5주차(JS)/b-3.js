/*
let i = 0
while (confirm('continue?')){
    alert(i+ "번째 반복")
    i += 1
}
*/

for(let i=0; true; i++){
    alert(i+ "번째 반복")

    const isContinue = confirm('Continue?')
    if(!isContinue){
        break
    }
}

alert("program quit")