function LeapYear(year){
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}
console.log('2020년은 윤년인가요?', LeapYear(2020))