window.onload = function() {
  var info = document.getElementById("escribe");
 
  // Apartado A: numero de enlaces de la pagina
  var enlaces = document.getElementsByTagName("a");
  info.innerHTML = "Numero de enlaces = " +enlaces.length;
 
  // APARTADO B:Direccion del penultimo enlace
  var mensaje = "El penultimo enlace apunta a: " + enlaces[enlaces.length-2].href;
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;
 
  // Apartado C Numero de enlaces que enlazan a google
  var contador = 0;
  for(var i=0; i<enlaces.length; i++) {
    if(enlaces[i].href == "http://www.google.es/") {
      contador++;
    }
  }
  info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://www.google.es"
 
  // Apartado D: Número de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a");
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces.length;
}