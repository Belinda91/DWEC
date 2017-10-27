function Justifica(){
    document.getElementById("texto").style.textAlign = "right";
    cambia();
}

function cambia(){
    var x = document.getElementById("texto");
    if (x.style.textAlign === 'justify') {
        x.style.visibility = 'right';}
    else {
        x.style.visibility = 'right';
    }
}

function Izquierda(){
    document.getElementById("texto").style.textAlign = "justify";
    cambia();
}