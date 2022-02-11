let group = [
	{name:"Ak-47", type:"rifle", imageLink: './assets/images/AK-47.jpg' }
	,{name:"AUG", type:"rifle",imageLink:'./assets/images/AUG.jpg'}
	,{}
];

let guns = createElement("img");

let header = document.getElementsByClassName("subnav");
let itemBox = document.createElement("div");

let list = document.createElement("ol");
for(let i = 0; i < group.length; i++) {
	 let guns = createElement("img");
	let name = document.createElement("h3");
	name.innerHTML =group[i].type;
	name.style="font-size"
	list.appendChild(name);
}
container[0].appendChild(list);
console.log(container[0]);
