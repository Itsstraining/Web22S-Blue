function fibo(n){
    if(n == 0){
        return 0;
    }
    if(n == 1 || n == 2){
        return 1;
    }
    else{
        return fibo(n-1) + fibo(n-2);
    }
}

for(let i = 1; i <= 10; i++){
    console.log(fibo(i));
}