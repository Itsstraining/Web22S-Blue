// async function hello(){
//     return "Hello";
// }
// let temp;
// (async()=>{
//     temp = await hello();
//     console.log(temp);
//     setTimeout(()=>{
//         console.log("HI");
//     },3000);
    
// })();
let nguoi= 5;
let chao = new Promise((resolve,reject)=>{
    setTimeout(function(){
        if(nguoi > 4){
            resolve("Heloo")
        }else{
            reject("Khong du nguoi")
        }
    },3000)
})
chao.then(console.log).catch(console.log);