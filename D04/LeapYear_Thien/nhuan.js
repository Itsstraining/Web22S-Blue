
function nhuan(a){
    if((a%100==0 && a% 400 ==0)){
        console.log("La nam nhuan");

    }else if((a%100!=0)&&((a%4==0))){
        console.log("La nam nhuan");
    }
    else{
        console.log(" La nam binh thuong")
    }
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Nhap vao nam: ', a => {
    nhuan(a);
    readline.close();
  });

// nhuan(2100);
// nhuan(2016);