function minNum(array){
    let result = array[0]
    for(const item of array) {
        if (result > item){
            result = item
        }
    }
    return result
}

const arr = [1, 3, 5, 2, 4, 6]
console.log('배열에서 가장 작은 값: ' + minNum(arr))