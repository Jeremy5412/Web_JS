const str = "Hello World!";
const array = [123, "hello", true, [234, 567]];
const fruit = ["apple", "banana", "berry"];

print(str);
print(str[1]); //변수 str의 1번째(2번)의 글자가 나오는 식

print(array); //배열에 속한 배열은 array (숫자)로 나옴
array.push(999); //배열 마지막에 추가

fruit[10] = "mellon";
print(fruit); //배열의 7칸이 비게 하므로 램 사용 효율성은 떨어진다
fruit.splice[2, 2]; //없앤 것을 반환
print(fruit); //berry와 empty가 없어짐
fruit.indexOf(1, -1); //배열 1번째의 숫자에 -1을 한다. (문자열은 0으로 취급)
fruit.indexOf("banana"); //바나나의 배열 자리를 반환
fruit.splice(2, 0, "mango") //아무것도 제거가 되지 않은 체 mango가 추가