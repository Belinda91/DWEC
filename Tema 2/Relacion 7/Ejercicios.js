//Ejercicio 1
function localiza() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(dondeestoy);
    } else {
        console.log("Geolocalizacion no soportada");
    }
}

function dondeestoy(posicion) {
    console.log("Latitud: " + posicion.coords.latitude +
    " " + "Longitud: " + posicion.coords.longitude);
}

setInterval(localiza,1000);

//Calcula la distancia entre ambos puntos
/*var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat() - p1.lat());
  var dLong = rad(p2.lng() - p1.lng());
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; 
};
/*Hay que meter en el head lo siguiente: <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&v=3&libraries=geometry"></script>*/
*/

