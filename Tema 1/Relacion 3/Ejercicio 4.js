function celsiusToFahrenheit(cel)
{
	var far=((9/5*cel)+32);
	return cel + " centigrados son " + far + " fah";
};

console.log(celsiusToFahrenheit(24.5));

function  fahrenheitToCelsius(fah)
{
	var cel=((fah-32)*(5/9));
	return fah + " Fahrenheit son " + cel + " celsius";
};

console.log(fahrenheitToCelsius(76.1));