//Comprueba que la tecla que se ha pulsado es el enter
function compruebaTecla(e){
    if(e.keyCode === 13){
        e.preventDefault();
        compruebaCookie();
    }
}

//Funciones para iniciar sesión, comprobar la existencia de una sesión y salir de la sesión.//
function creaCookie(usuario){
    var date = new Date();
    date.setTime(date.getTime()+(5*60*1000));
    var expires = "expires="+date.toGMTString();
    document.cookie = "username=" + usuario + ";" + expires;
    alert("Bienvenido de nuevo " + usuario);
}

//buscaCookie es una función que sirve para cualquier cookie
function buscaCookie(nombreCookie){
    var usuario = nombreCookie + "=";
    var listaCookies = document.cookie.split(';');
    for(var i = 0; i <listaCookies.length; i++) {
        var c = listaCookies[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(usuario) == 0) {
            return c.substring(usuario.length,c.length);
        }
    }
    return "";
}

function compruebaCookie() {
    var usuario = buscaCookie("username");
    if (usuario != "") {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logoff').style.display = 'block';
        alert("Bienvenido de nuevo " + usuario);
    } else {
        usuario = document.getElementsByName('userid')[0].value;
        if (usuario != "" && usuario != null) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('logoff').style.display = 'block';
            creaCookie(usuario);
        }
    }
}

function borraCookie(){
    document.getElementById('login').style.display = 'block';
    document.getElementById('logoff').style.display = 'none';
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

document.onload = function(){
    compruebaCookie();
}