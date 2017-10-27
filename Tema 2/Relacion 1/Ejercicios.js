//Ejercicio 1
var fecha = new Date();
document.write('El día de hoy es: ' + fecha.getDate() + '<br/>');
document.write('El mes es: ' + fecha.getMonth() + '<br/>');
document.write('Estamos en el año: ' + fecha.getFullYear() + '<br/>');
document.write('La hora es: ' + fecha.getHours() + '<br/>');
document.write('Los minutos son: ' + fecha.getMinutes() + '<br/>');
document.write('Los segundos son: '+ fecha.getSeconds() + '<br/>');

//Ejercicio 2
document.write('<br/>Ejercicio 2<br/>');
var fechahoy = new Date();
document.write("Hoy es: " + fechahoy.getDate() + " del mes " + fechahoy.getMonth() + " del año " + fechahoy.getFullYear());

var fecha85 = new Date(fechahoy);
fecha85.setDate(85);
document.write(fecha85 + '<br/>');

var fecha187 = new Date(fechahoy);
fecha187.setDate(-187);
document.write(fecha187 + '<br/>');

fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write(fecha85 + '<br/>');

fecha187.setHours(fecha187.getHours()-24);
document.write(fecha187 + '<br/>');

var fechaResto = new Date (fecha85 - fecha187);
document.write(fechaResto + '<br/>');

//Ejercicio 3
document.write('<br/>Ejercicio 3<br/>');

var contador = 61;
function cuenta()
{
    document.write(contador +'<br/>');
    contador--;
    if (contador >=0){
        setTimeout(cuenta,1000)
    };
};

//cuenta();

//Ejercicio 5
document.write('<br/>Ejercicio 5<br/>');

function reloj(){
    
    horaact = new Date();
    hora = horaact.getHours();
    minuto = horaact.getMinutes();
    segundo = horaact.getSeconds();
    actu = hora + ":" + minuto + ":" + segundo + '</br>';
    document.write(actu);
    setTimeout(reloj,1000);
}

//reloj();


