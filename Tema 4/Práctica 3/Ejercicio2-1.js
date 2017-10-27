function creaMinimo(){
    cambia();
    document.getElementById("enlaces").style.backgroundColor = "white";
    document.getElementById("enlaces").style.borderStyle = "hidden";
    document.getElementById("enlaces").style.fontWeight = "normal";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("vacio").style.backgroundColor = "white";
    document.getElementById("marco").style.backgroundColor = "white";
    document.getElementById("marco").style.borderStyle = "hidden";
}

function cambia() {
    var x = document.getElementById('adios');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}