let Sung = [
{name: "AK", price: 10000, photoUrl:"./image/ak47.jpg"},
{name: "DE", price: 20000, photoUrl:"./image/DE.jpg"},
{name: "Shotgun", price: 30000, photoUrl:"./image/Shotgun.jpg"},
{name: "AWM", price: 40000, photoUrl:"./image/awm.jpg"},
{name: "M4A", price: 50000, photoUrl:"./image/M4A.jpg"},
{name: "SungNuoc", price: 60000, photoUrl:"./image/sungnuoc.jpg"},
{name: "SungDien", price: 70000, photoUrl:"./image/sungdien.jpg"},
{name: "SungLua", price: 70000, photoUrl:"./image/sunglua.jpg"}

];

let group = document.getElementsByClassName('items');


for(let i = 0; i < Sung.length; i++) {

    let temp = document.createElement('div');
    temp.className="item"
    let temp2 = document.createElement('img');
    temp2.className="img";
    let temp3 = document.createElement('h3');
    let temp4 = document.createElement('h4');
    temp2.src=Sung[i].photoUrl;
    temp3.innerHTML=Sung[i].name;
    temp4.innerHTML=Sung[i].price;
    temp.appendChild(temp2); 
    temp.appendChild(temp3);
    temp.appendChild(temp4);


    group[0].appendChild(temp);
}
