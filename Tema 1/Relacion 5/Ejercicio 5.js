function adivina()
{
	var num_adivinar=parseInt(prompt("Introduce n�mero a adivinar"));
	var num=parseInt(prompt("Introduce n�mero a ver si hay suerte"));
	while (num!=num_adivinar)
	{
		if (num>num_adivinar)
		{
			alert('El n�mero es mayor');
			var num=parseInt(prompt("Introduce n�mero a ver si hay suerte"));
		}
		else if (num<num_adivinar)
		{
			alert('El n�mero es menor');
			var num=parseInt(prompt("Introduce n�mero a ver si hay suerte"));
		}
	}
}

adivina()