function adivina()
{
	var num_adivinar=parseInt(prompt("Introduce n�mero a adivinar"));
	do{
		var num=parseInt(prompt("Introduce n�mero a ver si hay suerte"));
		if (num>num_adivinar)
		{
			alert('El n�mero es mayor');
		}
		else if (num<num_adivinar)
		{
			alert('El n�mero es menor');
		}
	}
	while (num!=num_adivinar)
}
	

adivina()