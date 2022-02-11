function GT(n){

let GT = 1;
for(let i = n;i>=1;i--){
   GT = GT*i;   
}
let temp=(`${n}! = ${GT}`);
return temp;


}
console.log(GT(10))


