function pinta2(ncol, ancol, ancol)
{
	document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
	document.write("<tr bgcolor=\"white\" height=\"" + alcol + "\">");
	i=1
	while (i<(ncol+1))
	{
		if (i%2 ==0)
		{
			document.write("<td width=\"" + ancol + "\" bgcolor=\"white \">&nbsp;</td>");
		}
		else
		{document.write("<td width=\"" + ancol + "\" bgcolor=\"black\">&nbsp;</td>");}
		i++;
	}
	document.write("</tr>");
	document.write("</table>");
}

var ncol=parseInt(prompt("Introduce número de columnas"));
var ancol=parseInt(prompt("Introduce anchura de columnas"));
var alcol=parseInt(prompt("Introduce altura de columnas"));
pinta2(ncol,ancol,alcol);