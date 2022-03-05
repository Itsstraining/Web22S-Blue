console.log("Đi chợ mua đồ");
let tien = 99;
function wait(s) {
	return new Promise((resolve) =>{
		setTimeout(() => {}, s* 1000);
	});
}

let diCho = new Promise(async (resolve, reject) => {
	if (tien >= 100) {
		await wait(3);
		resolve("Di cho");
	}
	else{
		await wait(3
		reject("alo");
	}
	


})
diCho.then