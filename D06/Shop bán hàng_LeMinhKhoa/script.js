let group = [
	{name:"Ak-47", type:"rifle", imageLink: './assets/images/AK-47.jpg' }
	,{name:"AUG", type:"rifle",imageLink:'./assets/images/AUG.jpg'}
	,{name:"p252",type:"pistol", imageLink:'./assets/images/p252.jpg'}
	,{name:"AWP",type:"sniper",imageLink:'./assets/images/AWM.jpg'}
];

let header = document.getElementsByClassName("subnav");
let itemBox = document.createElement("div");
let Box = document.getElementsByClassName("container");
let list = document.createElement("ol");
for(let i = 0; i < group.length; i++) {
	let guns = document.createElement("img");
	let name = document.createElement("h3");
	let type = document.createElement("p");
	type.innerHTML =group[i].type;
	name.innerHTML =group[i].name;
	guns.src = group[i].imageLink;
	itemBox.appendChild(guns);
	itemBox.appendChild(name);
	itemBox.appendChild(type);
Box[0].appendChild(itemBox);	
}

