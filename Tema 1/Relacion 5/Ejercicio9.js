function pinta(ancho){
		document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
		for (i = 1; i < 9; i++){
			document.write("<tr bgcolor=\"white\" height=\"" + ancho + "\">");
			for (j=1; j < 9 ; j++){
				if((i+j)%2 != 0){
					document.write("<td bgcolor=\"white\" width=\"" + ancho + "\">&nbsp;</td>");
				}
				else{
					document.write("<td bgcolor=\"black\" width=\"" + ancho + "\">&nbsp;</td>");
				}
			}
			document.write("</tr>");
		}
		document.write("</table>");
	}

var ancho=parseInt(prompt("Introduce ancho"));
pinta(ancho);
