let temp;
function leapYear(year) {
    //Xét những năm có hai số cuối là số 0
    if ((year % 100 == 0) && (year % 400 == 0)) {
        console.log("Day la nam nhuan");
    }
    //Xét những năm có hai số cuối không phải là số 0
    else if ((year % 100 != 0) && (year % 4 == 0)) {
        console.log("Day la nam nhuan");
    }
    else {
        console.log("Day khong phai la nam nhuan");
    }
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//   
readline.question('Nhap vao nam can tim: ', year => {
    leapYear(year);
});
// leapYear(2000);
// leapYear(2022);
// leapYear(1500);
// leapYear(2100);2020
// leapYear(100);
// leapYear(120);
// leapYear(2000);
// leapYear(1600);
