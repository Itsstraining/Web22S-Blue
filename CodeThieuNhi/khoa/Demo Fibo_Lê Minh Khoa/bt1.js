
function main () {
	let arr =[2, 3, 5, 1, 4, 7, 6, 5, 9, 7, 6, 8];
	for (let i=0; i < arr.length; i++) 
	{
		if(arr[arr[i]]==0) {
			arr[arr[i]]++;
			console.log(arr[i]);
		} 
	}
}
main ();	