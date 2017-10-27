function pinta(ncol, ancol, ancol)
{
	document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
	document.write("<tr bgcolor=\"white\" height=\"" + alcol + "\">");
	for (i = 1; i < (ncol + 1); i++){
		document.write("<td width=\"" + ancol + "\">&nbsp;</td>");
	}
	document.write("</tr>");
	document.write("</table>");
}

var ncol=parseInt(prompt("Introduce número de columnas"));
var ancol=parseInt(prompt("Introduce anchura de columnas"));
var alcol=parseInt(prompt("Introduce altura de columnas"));
pinta(ncol,ancol,alcol);