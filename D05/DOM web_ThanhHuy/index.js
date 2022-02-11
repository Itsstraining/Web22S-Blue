let games = [{name: "BattleField", price: 100000, photoUrl:"./images/g1.png"},
{name: "League of Legends", price: 10000, photoUrl:"./images/g2.jpg"},
{name: "Valorant", price: 50000, photoUrl:"./images/g3.jpg"},
{name: "God of War", price: 1000, photoUrl:"./images/g4.jpg"},
{name: "Nekopara", price: 53000, photoUrl:"./images/g5.jpg"},
{name: "Free Fire", price: 100, photoUrl:"./images/g6.jpg"},
{name: "Genshin Impact", price: 11100, photoUrl:"./images/g7.jpg"}];

let group = document.getElementsByClassName('items');


for(let i = 0; i < games.length; i++) {

    let temp = document.createElement('div');
    temp.className="item"
    let temp2 = document.createElement('img');
    temp2.className="img";
    let temp3 = document.createElement('h3');
    let temp4 = document.createElement('h4');
    temp2.src=games[i].photoUrl;
    temp3.innerHTML=games[i].name;
    temp4.innerHTML=games[i].price;
    temp.appendChild(temp2); 
    temp.appendChild(temp3);
    temp.appendChild(temp4);


    group[0].appendChild(temp);
}
