function numToBit(num) {
	let number = num
	let result = []
	while(number >=1) {
		result.unshift(Math.floor(number%2))
		number = number /2
	}
	console.log(result.join())
}

function bitToDemacial(a) {
	let Array= []
	arr=a.split("");
	console.log(arr)
	let x = arr.reverse();
	console.log(arr);
	let result = 0;
	for(let i = 0 ;i<x.length;i++){
		let temp = x[i]*Math.pow(2,i)
		result+=temp;
	}
	console.log(result)

}





numToBit(6);
bitToDemacial("10");