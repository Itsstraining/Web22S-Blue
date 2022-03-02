const express = require('express');
const app =express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
let arr =[{name:"Hiền"},{name:"Huân"},{name:"Thiên"}];
app.listen('3000',(request,response)=>{
    console.log("Server đã chạy");
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
app.put('updateItem',(request,response)=>{
    let temp = request.body;
    for(let i=0;i<arr.length;i++){
        if(arr[i].name == temp.name){
            arr[i].name == temp.newName;
        }
        else{
        }
    }
    response.send("Cập nhật thành công");
})