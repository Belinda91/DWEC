function greaterNum(x,y)
{
	if (x>y)
	{
		console.log(x + " que es x es mayor que y con valor " + y);
	}
	else if (y>=x)
	{
		console.log(y + " que es y es mayor que x con valor " + x);
	}
};

greaterNum(2,10);
greaterNum(10,2);

function helloWorld(leng) {
    if (leng == 'fr') {
        return 'Bonjour';
    } else if (leng == 'es') {
        return 'Hola, Mundo';
    } else if (leng =='jp')
    {
		return 'Ohayou';
    }
	else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));
console.log(helloWorld('jp'));
