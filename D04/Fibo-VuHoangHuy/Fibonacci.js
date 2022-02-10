function Fibonacci(a)
{
    var n1=0;
    var n2=1;
    var sum;

    for(let i=0;i<=a;i++)
    {
        sum=n1+n2;
        n1=n2;
        n2=sum
        console.log(n1);
        
    }
}
Fibonacci(7);