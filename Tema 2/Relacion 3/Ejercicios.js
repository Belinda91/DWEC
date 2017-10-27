//Ejercicio 1
//Apartado A
document.write('<br/>Ejercicio 1<br/>');
document.write('<br/>Apartado A<br/>');

function invierteCadena(pal){
    var x = pal.length;
    var inversa = "";
    while (x>=0) {
    inversa = inversa + pal.charAt(x);
    x--;
    }
    return inversa;
}

document.write(invierteCadena("hola"));

document.write('<br/>Apartado B<br/>');

function inviertePalabra(cad){
		var lista = cad.split(' ');
		var lista2 = '';
		for (var palabra in lista){
			lista2 += invierteCadena(lista[palabra]);
			lista2 += ' ';
		}
		return lista2;
	}
document.write(inviertePalabra("hola don pepito"));
document.write('<br/>Apartado C<br/>');

function palabramaslarga(oracion){
    var frase = oracion.split(' ');
    var frase2 = '';
    for (var pal in frase){
        if (frase2.length < (frase[pal]).length){
            frase2 = frase[pal];
        }
    }
    return frase2;
}

document.write(palabramaslarga("hola don pepito"));

document.write('<br/>Apartado D<br/>');

function filpal(oracion,numero){
    var frase = oracion.split(' ');
    var frase2 = '';
    for (var pal in frase){
        if ((frase[pal]).length > numero){
            frase2 = frase[pal]+', ' + frase2;
        }
    }
    return frase2;
}   

document.write(filpal("habia un sapo en la orilla del rio con su traje verde",4));

document.write('<br/>Apartado E<br/>');


function CadenaBienFormada(cad_arg){
  return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1);
}

var texto = 'Esto ES uNA PruEbA'.toLowerCase();
document.write(CadenaBienFormada(texto));


document.write('<br/>Ejercicio 2<br/>');

function comprueba(cadenatex){
    var fin = "";
    if (cadenatex == cadenatex.toUpperCase()){
        fin += "Solo tiene mayúsculas";
    }
    else if (cadenatex == cadenatex.toLowerCase()){
        fin += "Solo tiene minúsculas";
    }
    else{
        fin += "Está formada por mayúsculas y minúsculas";
    }
    return fin;
}

var prueba = "A VER SI ESTO FUNCIONA BIEN";
document.write(comprueba(prueba));

document.write('<br/>Ejercicio 7<br/>');

function esPalindromo(intenta){
    lon = intenta.length;
    for (i=0;i<lon;i++){
        if(intenta[i]!=intenta[lon-1-i]){
            return false + '<br/>';
        }
    }
    return true + '<br/>';
}

document.write(esPalindromo("anitalavalatina"));
document.write(esPalindromo("holaquetal"));

document.write('<br/>Ejercicio 9<br/>');
function gira(cadeno){
    len = cadeno.length;
    for (i=0;i<len;i++){
        document.write(i+' ');
    }
    
}
