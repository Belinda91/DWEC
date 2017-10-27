function pinta(ncol, nfil, ancol, ancol)
{
	document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
	for (j=1;j<(ncol+1);j++)
	{
		document.write("<tr bgcolor=\"white\" height=\"" + alcol + "\">");
		for (i=1;i<(nfil+1);i++)
		{
			document.write("<td width=\"" + ancol + "\">&nbsp;</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");		
}

var ncol=parseInt(prompt("Introduce número de columnas"));
var nfil=parseInt(prompt("Introduce número de filas"));
var ancol=parseInt(prompt("Introduce anchura de columnas"));
var alcol=parseInt(prompt("Introduce altura de columnas"));
pinta(ncol,nfil,ancol,alcol);


