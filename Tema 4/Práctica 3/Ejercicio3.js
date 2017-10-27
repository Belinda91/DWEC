function cambiaMas(){
    document.getElementById("texto").style.fontSize = "xx-large";
    cambia();
}

function cambiaMenos(){
    document.getElementById("texto").style.fontSize = "xx-small";
    cambia();
}
function cambia() {
    var x = document.getElementById("texto");
    if (x.style.fontSize === 'xx-large') {
        x.style.visibility = 'xx-small';}
    else {
        x.style.visibility = 'xx-small';
    }
}

function defecto(){
    document.getElementById("texto").style.fontSize="medium";
}