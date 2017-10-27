function adivina()
{
	var num_adivinar=parseInt(prompt("Introduce número a adivinar"));
	do{
		var num=parseInt(prompt("Introduce número a ver si hay suerte"));
		if (num>num_adivinar)
		{
			alert('El número es mayor');
		}
		else if (num<num_adivinar)
		{
			alert('El número es menor');
		}
	}
	while (num!=num_adivinar)
}
	

adivina()