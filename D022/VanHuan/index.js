
const express =require("express")
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.json())
let arr=[{name:"huan"},{name:"khoa"},{name:"hien"}]
app.listen('3000',(require,response)=>{
    console.log("serve da cahy");
})
app.get("/getItems",(request,response)=>{
    response.status(200).send(arr)
})
app.post("/addItem",(request,response)=>{
    let temp=request.body;
    arr.push(temp);
    response.send(arr);
})
app.put("/updateItem",(request,response)=>{
    let temp=request.body;
    // arr.forEach
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==temp.name){
            arr[i].name=temp.newName;
        }else{
        }
    }
    response.send(arr);
})
app.delete("/deleteItem",(request,response)=>{
    let temp=request.body;
    // arr.forEach
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==temp.name){
            arr.splice(i,1);
        }else{
        }
    }
    response.send(arr);
})