var x = document.getElementsByTagName("body");


function creaNormal(){
    document.getElementById("enlaces").style.backgroundColor = "#bde8e3";//Control + E una vez se escribe el color para sacar la paleta
    document.getElementById("enlaces").style.borderStyle = "solid"; 
    document.getElementById("enlaces").style.borderColor = "4747bf";
    document.getElementById("enlaces").style.fontWeight = "bold";
    document.getElementById("body").style.backgroundColor = "#edd78f";
    document.getElementById("vacio").style.height = "750px";
    document.getElementById("vacio").style.width = "50px";
    document.getElementById("vacio").style.backgroundColor = "#4545e6";
    document.getElementById("negrita").style.fontWeight = "bold";
    document.getElementById("marco").style.backgroundColor = "#eded6d";
    document.getElementById("marco").style.borderStyle = "dashed";
    document.getElementById("marco").style.borderColor = "#2a2a2a";
    document.getElementById("vacio").style.cssFloat = "left";
    cambia();
}


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