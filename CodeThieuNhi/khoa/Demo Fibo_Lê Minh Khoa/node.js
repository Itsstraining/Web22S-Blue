// let arr = [2,3,5,1,4,7,6,5,9,7,6,8];
// function main (arr,n) {
// 	for (let i=0;i<n-1;i++) {
// 		for (let j=i+1;j<n;j++) {
// 			if ( arr[i] = arr [j]) {
// 				console.log(arr[i])
// 			}
// 		}
// 	}
// }
// main (arr,arr.length);

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

