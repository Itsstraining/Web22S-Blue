function fibo(a){
    let arr =[];
    let result = 0;

    if(a==0){
        result = 0;
        console.log(result);
    }
    for(let i = 1;i <=a;i++){
        if(i<=2){
            result =1;
            arr.push(result);
        }else{
            result=arr[i -2 ]+arr[i -3];
            arr.push(result);
        }
    }console.log(arr);
    
}
fibo(7);
