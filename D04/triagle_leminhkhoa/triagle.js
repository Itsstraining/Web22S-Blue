function TamGiac(a, b, c)
{
	if(a+b>c || a+c>b || b+c>a )
	{
		if(a==b && b==c)
		{
			console.log("tam giac deu");
		}

		else if(a==b || a==c ||b==c)
		{
			console.log("tam giac can");
		}

		else if(a*a+b*b==c*c || a*a + c*c == b*b || b*b+c*c==a*a)
		{
			console.log("tam giac vuong");
		}

		else if (a==0 || b==0 || c==0)
		{
			console.log("khong phai la tam giac ");
		}
		else {
			console.log("tam giac thuong");
		}

		
	}
	else {
		console.log("khong phai tam giac");
	}
}
TamGiac(5, 3, 4);