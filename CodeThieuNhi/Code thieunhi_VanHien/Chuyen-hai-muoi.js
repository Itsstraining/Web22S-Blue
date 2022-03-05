function coSohai(n){
    let arr =[];
    arr=n.split("");
    let x = arr.reverse();
    let result=0;
    for(let i=0;i<x.length;i++){
        let temp = x[i] * Math.pow(2,i);
        result += temp;
    }
    console.log(result);
}
coSohai("1111");
function coSomuoi(num){
    let number = num;
    let result = [];
    while(number >= 1 ){
        result.unshift(Math.floor(number%2))
        number = number/2;
    }
    console.log(result.join());
}
coSomuoi(15);

function coSomuoisau(x,b){
    if (b == 16)
	{
		let bien_phu = 0;
		let phantu = 0;
		let mang=[];
	    let a = x;
		while (a != 0)
		{
			let chuso = a % 16;
			if (chuso <= 9)
				mang[phantu++] = chuso;
			else if (chuso == 10)
				mang[phantu++] = 'A';
			else if (chuso == 11)
				mang[phantu++] = 'B';
			else if (chuso == 12)
				mang[phantu++] = 'C';
			else if (chuso == 13)
				mang[phantu++] = 'D';
			else if (chuso == 14)
				mang[phantu++] = 'E';
			else if (chuso == 15)
				mang[phantu++] = 'F';
			bien_phu++;
			a /= 16;
		}
		console.log(mang[phantu]);
	}
}
coSomuoisau(1110,16);
function DectoOct(number){
    let num = number
    let p =0;
    let octNumber = 0;
    while(num.length > 0){
        octNumber += (number%8) * Math.pow(10,p);
        p++;
        number /= 8;
    }
    console.log(octNumber);
}
DectoOct(100);