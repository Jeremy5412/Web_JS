const date = new Date();
const hour = date.getHours();

/*
if(hours < 10) {
    console.log("아침 먹을 시간!")
} 
else {
    if (hours < 13) {
        console.log("밥")
    }
    else {
        alert("이겼닭! 오늘은 치킨이닭!!")
    }
}
*/

if (hours < 10) alert("으 입맛 없어.")
else if (hours < 13) alert("아 바빠!")
else alert ("오늘은 치킨이닭!")