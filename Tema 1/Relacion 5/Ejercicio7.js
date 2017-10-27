function multiplica()
{
	for (i=1;i<11;i++)
	{
		document.write("Tabla de multiplicar de " +i+ "<br/>");
		for (j=0;j<11;j++)
		{
			document.write(i + " x " + j + " = " + (i*j)+"<br/>");
		}
	}
}

multiplica()