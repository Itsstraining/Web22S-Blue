let number = [ 'không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
let temp = ""
function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let num=input;
  let arr=num.split("");
  let n = input.length;
  if(n == 3){
    numberist(arr[0],arr[1],arr[2])
  }else if(n == 2){
    arr[2] = arr[1]
    arr[1] = arr[0]
    arr[0] = 0;
    numberist(arr[0],arr[1],arr[2])
  }else{
    arr[2] = arr[0]
    arr[1] = 0
    arr[0] = 0
    numberist(arr[0],arr[1],arr[2])
  }
    
    // console.log(arr)

    function numberist(){
    let donvi = parseInt(arr[2]);
    let chuc = parseInt(arr[1]);
    let tram = parseInt(arr[0]);
    // console.log(tram,chuc,donvi)
    if(tram != 0){
       temp += number[tram] + ' trăm '; 
    }

            switch(chuc){
            case 0:
              if(chuc == 0) {
                temp += number[donvi]
              }else{
                temp += ' linh ' + number[donvi];
              }

            break;
            case 1: 
            if (donvi == 0){
              temp += ' mười ';
            }else if(donvi == 5){
              temp += ' mười ' + ' lăm ';
            }else{
              temp += ' mười ' + Number[donvi]
            }

            break;
            default: temp += number[chuc] + ' mươi ';
            temp += number[donvi];
            break;

          }
    }
    
          console.log(temp)
}