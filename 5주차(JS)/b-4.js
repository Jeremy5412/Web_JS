let result = ""

for (let i=0; i<5; i++){
    for (let j=5; j>i; j--){
        result += " "
    }
    for (let k=0; k<2*i-1; k++){
        result += "*"
    }
    result += '\n'
}

console.log(result)

/*
for (let i=0; i<100; i++){
    for (let j=0; j<i; j++) {
        result += "*"
    }
    result += "\n"
}
console.log(result)
*/