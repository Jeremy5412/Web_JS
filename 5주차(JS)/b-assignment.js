let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
.filter((value) => value % 2 === 0)
.map((value) => value * value)
.forEach((value) => (
    console.log(value)
))

/* method chaining: 어떤 메소드가 리턴하는 값을 기반으로 함수를 중중이 사용하는 것 */
