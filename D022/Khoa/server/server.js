const express=require('express');
const bodyParser=require('body-parser');
const app=express();


app.use(bodyParser.json());
let arr=[{name:"Khoa"},{name:"Thiên"},{name:"Huân"}]
app.listen('3000',(req,res)=> {
	console.log("Server đã chạy");
})

app.get("/getItem",(req,res)=>{
	req.status(200).send(arr);
})

app.post("/addItem",(req,res)=>{
	let temp=req.body;
	arr.push(temp);
	res.send(arr);
})

app.put('/updateItem',(req,res)=>{
	let temp=req.body;
	for(let i=0;i<arr.length;i++) {
		if(arr[i].name==temp.name) {
			arr[i].name=temp.newName;
		}
		else{
			res.send("Không tìm thấy tên này")
		}
	}
	res.send("Cập nhật thành công"+arr)
})