function calcCircumfrence(radio)
{
	let diametro=2*radio;
	const pi=3.1415;
	return diametro*pi;
};

console.log("La circunferencia es " + calcCircumfrence(24.24));

function calcArea(radio)
{
	let radio2= radio*radio;
	const pi=3.1415;
	let area=radio2*pi;
	return area;
};

console.log("The area is " + calcArea(24.24));
