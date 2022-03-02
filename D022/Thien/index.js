const express = require('express');
const bodyParser =require('body-parser');
const { response } = require('express');
const app =express();

app.use(bodyParser.json())
let arr=[{name:"Thien"},{name:"Linh"}];
app.listen('3000',(request,response)=>{
    console.log('Server đã chạy');
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
    let newName = resquest.body;
    for(let i =0;i,arr.length;i++){
        if(arr[i].name==newName.name){
            arr[i].name=newName.name;
        }else{
            response.send("Không tìm thấy tên")
        }
        response.send("Cập nhật thành công"+arr);
    }
})