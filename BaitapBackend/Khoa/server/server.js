const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
var key = require("./keys/key.json");
const path = require('path');
const {request, response } = require("express");


admin.initializeApp({
  credential: admin.credential.cert(key),
});

var firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('',(request,response)=>{
  response.sendFile(path.join(__dirname,'index.html'))
})

  app.get("/item/:name", async function (request, response) {
    let params = request.params.name;
    console.log(params);
    let querySnapshot = (await (await firestore.collection("List-item").get()).docs.map((value)=> {
	return value.data()
    })
  )
  console.log(querySnapshot);
  response.send(querySnapshot);
});

  app.get("/", (request, response) =>{
	response.send({
		message:"Hello World",
	});
});

  app.get("/item", async function (request, response) {
    let temp = request.query;
    console.log("API 2 " + JSON.stringify(temp));
    try {
      let querySnapshot = await (
        await firestore.collection(temp.data).get()
      ).docs.map((value) => {
        let temp = value.data();
        return temp;
      });
      response.send(querySnapshot);
    } catch (error) {
      console.log("Lỗi không lấy được data");
    }
  });
  
  app.post("/item", async (req, res) => {
    let body = req.body;
    console.log(body);
  
    let docName =body.data.name + "-" + Math.round(Math.random() * 10).toString();
  
    let result = await firestore
      .collection(body.collectionName)
      .doc(docName)
      .set(body.data);
  
    res.send({
      message: "Successful!!!",
    });
  });
  

//sửa ,update thông tin
app.put("/item/update", async (request, response) => {
  let docId=request.body.docId
  let result = await firestore
  .collection(request.body.collectionName)
  .doc(docId)
  .update(request.body.data);
  
  response.send({
    message: "Update thành công",
    updateTime : result.writeTime
  })
});


//delete 1 thong tin
app.delete("/deleteField/:docId", async (request, response) => {
	let collectionName = request.body.collection;
	let docId = request.params.docId;
	let fields = request.body.fields;
	console.log(fields);
	for (let i=0 ; i<fields.length; i++) {
		firestore
		.collection(collectionName)
		.doc(docId)
		.update({
			[fields[i]]: admin.firestore.FieldValue.delete(),
		});
	}response.send("Xóa field")
});


// app.delete("/delete", async ( request, response) => {
// 	let collectionName = request.body.collection;
// 	let docs = [...request.body.docs];
// 	for ( let docId of docs) {
// 		await firestore
// 		.collection(collectionName)
// 		.doc(docId)
// 		.delete();
// 	}
// });

//xóa collection
app.delete("/deleteCollection/:name", async function (request, response)  {
	let params = request.params.name;
  let querySnapshot = firestore.collection("List-item").get()
  .then(res => {
    res. forEach(Element => {
      Element.ref.delete();
    });
  });
  response.send(querySnapshot);
});


app.listen(3000, ()=> {
	console.log("Server is running");
})

// const PORT = 3000;
// app.listen(PORT, () =>{
// 	console.log('Server is running on http://127.0.0.1:${PORT}');
// });
