function fibo(n){
    let result = 0;
    let temp1 = 0; temp2 = 0;
    if(n <= 0){
        console.log(0);
    }
    for(let i = 1; i <= n; i ++){
        if(i == 1){
            result = 1;
            console.log(result);
        }
        else if(i == 2){
            temp1 = 1;
            console.log(temp1);
        }
        else{
            temp2 = result;
            result = temp1 + result;
            console.log(result);
            temp1 = temp2;
        }
    }
}

fibo(10);
