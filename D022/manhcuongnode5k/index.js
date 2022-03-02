const { response, request } = require('express');
const bodyParser=require('body-parser');
const express=require('express');
const res = require('express/lib/response');
const app=express();
app.use(bodyParser.json());
let arr=[{name:"Lockon"},{name:"Huân"},{name:"Hiền"}];
app.listen('3000',(request,response)=>{
    console.log("sever dã chạy");
})
 app.get("/getItem",(request,response)=>{
     response.status(200).send(arr);
 })
app.post('/addItem',(request,response)=>{
    let temp=request.body;
    arr.push(temp);
    response.send(arr);
   console.log(temp);
})
 app.put('/updateItem',(request,response)=>{
     let temp=request.body;
     for(let i=0;i<arr.length;i++){
         if(arr[i].name==temp.name){
             arr[i].name==temp.newName;
             response.send("Cập Nhật thành công")
         }
         else{
             res.send("không tìm thấy tên")
         }
     }
    })