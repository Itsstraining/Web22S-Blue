function Fibonanci (a) {
	var num1 = 0;
	var num2 = 1;
	var sum;
	var i = 0;
	for( let i = 0; i < a; i++)
	{
		sum=num1+num2;
		num1=num2;
		num2=sum;
		console.log(num1);
	}
}
Fibonanci(4);









