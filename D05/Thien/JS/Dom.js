let Goods=[
    {loai:"Trầm Hương",gia:"100.000đ",photoUrl:"./assets/tramhuong.jpg"},
    {loai:"Trầm Nụ",gia:"120.000đ",photoUrl:"./assets/tramnu.jpg"},
    {loai:"Trầm Vòng",gia:"150.000đ",photoUrl:"./assets/tramvong.jpg"},
    {loai:"Trầm Không Tăm",gia:"80.000đ",photoUrl:"./assets/tramkhongtam.png"},
];

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

    box.appendChild(image);
    box.appendChild(loai);
    box.appendChild(gia);
    console.log(box);

    
    group[0].appendChild(box);
}