let n1 = 100;
let n2 = 200;

const date = new Date();
year = date.getFullYear();
month = date.getMonth();
day = date.getDate();

hour = date.getHours();
if(hour > 12) {
    alert("AM" + hour)
}
else{
    alert("PM" + hour)
}

console.log(year, month, day)