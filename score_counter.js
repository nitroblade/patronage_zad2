var a = 9;
c=2;
b=0;
cos=10;
for(i=0;i<c-2;i++){
	cos=cos*10;
}
function mini(){
	alert("Liczba nie może być ujemna!!");
}
function maxi(){
	alert("Liczba nie może być większa niż "+((cos*10)-1) + "!!!");
}
function set(){
	a = prompt("Jaką wartość chcesz podać?");
	if (a<0){
		a=0;
		mini();
	}
	else if (a>(cos*10)-1) {
		a=(cos*10)-1;
		maxi();
	}
	print();

}
function reset()
{
	a=0;
	print();


}
function zera(){
	xa=a;
	if(a==0){
		licznik=a+1;
	}
	else{
		licznik=a;
	}
	if (c>1)
	{
		for (i=0;i<=c;i++){
			if (licznik <cos) 
			{
				xa='0'+xa;
			}
			licznik=licznik*10;
		}
	}
}
function get()
{
	zera();
	alert("Obecna ilość punktów to: "+xa);
}
function print()
{	
zera();

	document.getElementById('value1').innerHTML = xa;
}
function up()
{
	if (a>=(cos*10)-1) {
		maxi();
	}
	else{
		a++;
	}
	print();
}

function down(){
	if (a<1)
		{
			mini();
		}
		else {
			a--;
		}
	print();
}
