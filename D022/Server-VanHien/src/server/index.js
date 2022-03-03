const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const path = require("path");

app.use(bodyParser.json());
let arr =[{name:"Hiền"},{name:"Huân"},{name:"Thiên"}];
app.listen('3000',(request,response)=>{
    console.log("Server đã chạy");
})

app.get("/",(request,response)=>{
    console.log(path.join(__dirname, 'index.html'));
    response.sendFile(path.join(__dirname, 'index.html'));
})

app.get("/getItems",(request,response)=>{
    response.status(200).send(arr);
})
app.post('/addItem',(request,response)=>{
    let temp = request.body;
    arr.push(temp);
    response.send(arr);
    // console.log(temp);
})
app.put('/updateItem',(request,response)=>{
    let temp = request.body;
    for(let i=0;i<arr.length;i++){
        if(arr[i].name == temp.name){
            arr[i].name = temp.newName;
        }
        else{
        }
    }
    response.send(arr);
})
app.delete("/deleteItem",(resquest,response)=>{
    let temp = resquest.body;
    console.log(arr);

    for(let i = 0; i<arr.length;i++){
        if(arr[i].name == temp.name){
            console.log(arr[i].name);
           arr.splice(i,i+1);
        }
    }
    response.send(arr);
})