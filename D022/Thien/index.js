const express = require('express');
const bodyParser =require('body-parser');
const { response, request } = require('express');
const { required } = require('nodemon/lib/config');
const app =express();
const path = require('path')
app.use(bodyParser.json())
let arr=[{name:"Thien"},{name:"Linh"}];
app.listen('3000',(request,response)=>{
    console.log('Server đã chạy');
})
app.get('',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'))
})
app.get("/getItems",(request,response)=>{
    response.status(200).send(arr);
})
app.post("/addItem",(resquest,response)=>{
    let temp=resquest.body;
    arr.push(temp);
    response.send(arr);
})

app.put('/updateItem',(resquest,response)=>{
    let temp = resquest.body;
    for(let i =0;i<arr.length;i++){
        if(arr[i].name==temp.name){
            arr[i].name=temp.newName;
        }else{
        }
       
    }
    response.send(arr);
})
app.delete("/deleteItem",(resquest,response)=>{
    let temp = resquest.body;
    console.log(arr);

    for(let i = 0; i<arr.length;i++){
        if(arr[i].name=temp.name){
            console.log(arr[i].name);
            arr.splice(i,i+1);

        }
    }
    response.send(arr);
})