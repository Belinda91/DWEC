/* modo fijo como viene
function cabecera(){
		for(i=1; i<7; i++){
			document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
		}
		document.write("<h7>Terminado</h7>");
	}

	cabecera();*/

//Modo eligiendo el número que quieres que haya

function cabecera(num){
		for(i=1; i<num; i++){
			document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
		}
		document.write("<h" + num + ">Terminado </h" + num + ">");
	}

	cabecera(5);

/*Otro modo
function bucleCabezas()
{
for (var n=1;n<6;n++)
{document.write("<h"+n+"> Cabecera h"+n+"</h"+n+">")
}
}
*/