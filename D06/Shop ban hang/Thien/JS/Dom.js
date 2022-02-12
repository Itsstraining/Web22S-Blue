let Goods=[
    {loai:"Abeldo",gia:"100.000đ",photoUrl:"./assets/abeldo.jfif"},
    {loai:"Ace",gia:"120.000đ",photoUrl:"./assets/ace.jfif"},
    {loai:"Fate/staynight GingaMeth",gia:"150.000đ",photoUrl:"./assets/ginga.jfif"},
    {loai:"Kaido",gia:"80.000đ",photoUrl:"./assets/kaido.jfif"},
    {loai:"Luffy",gia:"80.000đ",photoUrl:"./assets/luf.jfif"},
    {loai:"Robin",gia:"80.000đ",photoUrl:"./assets/robin.jfif"},
    {loai:"Sanemi",gia:"80.000đ",photoUrl:"./assets/sanemi.jfif"},
    {loai:"Shoto",gia:"80.000đ",photoUrl:"./assets/shoto.jfif"},
    {loai:"Zoro",gia:"80.000đ",photoUrl:"./assets/zoro.jfif"},
    {loai:"Robin Kimono",gia:"80.000đ",photoUrl:"./assets/robin2.jfif"},

];
let types=[
    {type:"Scale figure"},
    {type:"Action figure"},
    {type:"Chibi figure"},
];

let typeBox = document.getElementsByClassName("board");
for(let i = 0;i<types.length;i++){
    let temp = document.createElement("div");
    let item = document.createElement("button")
    item.innerHTML=types[i].type;
    item.className="btn";
    temp.appendChild(item);

    typeBox[0].appendChild(temp);
}
let group = document.getElementsByClassName("container");
for(let i = 0;i<Goods.length;i++){
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src= Goods[i].photoUrl;
    image.className="photo";
    let loai = document.createElement("h3");
    loai.innerHTML= Goods[i].loai;
    let gia=document.createElement("h4");
    gia.innerHTML=Goods[i].gia;
    box.className="box";
    loai.className="items";
    gia.className="items";


    box.appendChild(image);
    box.appendChild(loai);
    box.appendChild(gia);
    console.log(box);

    
    group[0].appendChild(box);
}