//console.log('hi');
//Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that number.

/*var a = prompt('enter the number');
var b= 1;
var i;
for(i=1;i<=a;i++)
{
b=b*i;
console.log(b);
}*/




//Take n from the user and print first n prime numbers.

/*var n = prompt('enter the number');
var a,b;
for(a=2;a<=n;a++)
{
var c = true;
for(b=2;b<a;b++)
{
if(a%b==0)
{
c=false;
break;
}
}
if(c)
{
console.log(a);
}
}*/


//3.square root
var num=prompt("Enter number");

	var count=0;	

	for( var i=1; i<num; i++)
	{
		if(num%i==0)
		count=count+1;		

	}
		if(count%2==0)
		{
			console.log("Perfect Square");
		}
		else
		{
			console.log("Not a  perfect Square");
		
		}

