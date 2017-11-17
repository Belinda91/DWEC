//function coordenadas(event){
//    x = event.clientX;
//    y = event.clientY;
//    document.getElementById("x").value=x;
//    document.getElementById("y").value=y;
//}

 document.write('<p id="coords"></p>');

      window.onmousemove = function (){
        var x = window.event.clientX;
        var y = window.event.clientY;
        document.getElementById('coords').innerHTML = 'Posición: ' + x + ' - ' + y;
      }