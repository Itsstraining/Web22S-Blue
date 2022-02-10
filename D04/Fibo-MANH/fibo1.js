let arr = [];
function fibo(n){
    
    let result = 0;
    if(n == 0){
        console.log(0);
    }
    for(let i = 1; i <= n; i++){
        if(i == 1 || i == 2){
            result = 1;
            arr.push(result);
        }
        else{
            result = arr[i-2] + arr[i-3];
            arr.push(result);
        }
    }
}
fibo(10);
console.log(arr);