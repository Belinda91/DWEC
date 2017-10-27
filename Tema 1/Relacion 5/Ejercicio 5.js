function adivina()
{
	var num_adivinar=parseInt(prompt("Introduce número a adivinar"));
	var num=parseInt(prompt("Introduce número a ver si hay suerte"));
	while (num!=num_adivinar)
	{
		if (num>num_adivinar)
		{
			alert('El número es mayor');
			var num=parseInt(prompt("Introduce número a ver si hay suerte"));
		}
		else if (num<num_adivinar)
		{
			alert('El número es menor');
			var num=parseInt(prompt("Introduce número a ver si hay suerte"));
		}
	}
}

adivina()